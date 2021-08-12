import React from  'react';
import ContentEditable from 'react-contenteditable';
import RandomWords from 'random-words';
export default class TypeTest extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {time:60,speed:0,charSpeed:0};
    this.decreaseTime = this.decreaseTime.bind(this);


  }
  decreaseTime(ID)
  {
    if(this.state.time>0)
    {
      this.setState({time:this.state.time-1});
    }
    else{
      clearInterval(ID);
    }
  }
  
  render()
  {
  return(
    <>
      <div className = "spd-cal time" onClick = {()=>{var ID = setInterval(this.decreaseTime,1000,ID)}}>{this.state.time}</div>
      <div className = "spd-cal">{this.state.speed}</div>
      <div className = "spd-cal">{this.state.charSpeed}</div>
      <span className = "spd-cal lab lab-time">Time</span>
      <span className = "spd-cal lab">words/min</span>
      <span className = "spd-cal lab">char/min</span>
      <ContentEditable class = "text-area text-area-type" dir = "rtl" placeholder = "this is some random text"/>
    </>
  )   
  } 

}
