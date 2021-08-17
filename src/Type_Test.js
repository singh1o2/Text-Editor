import React from  'react';
import ContentEditable from 'react-contenteditable';
import RandomWords from 'random-words';
export default class TypeTest extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {isKeyDown:true,randomWords:' '+RandomWords(100).join(' '),inpVal:'',time:59,speed:0,charSpeed:0,substring:''};
    this.decreaseTime = this.decreaseTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  decreaseTime(ID)
  {
    if(this.state.time>0)
    {
      this.setState({time:this.state.time-1});
    }
    else{
      clearInterval(ID);
      alert("The speed was "+this.state.speed);
      this.setState ({randomWords:' '+RandomWords(100).join(' '),inpVal:'',time:59,speed:0,charSpeed:0,substring:''});
    }
  }
  

  handleChange(event)
  {
    this.setState({inpVal:this.state.inpVal+event.target.value.replace('&nbsp;',' ')}
    );
    if(this.state.randomWords.slice(0,1) == event.target.value.replace('&nbsp;',' ') && this.state.substring.trim()==this.state.inpVal.trim())
    {
      this.setState({substring:this.state.substring+this.state.randomWords.slice(0,1),randomWords:this.state.randomWords.slice(1)});
    }
    console.log(this.state.substring);
    this.setState({speed:Math.round(this.state.inpVal.trim().split(' ').length/(60-this.state.time)*60)})
  }
 
  handleKeyDown(event)
  {
    if(this.state.isKeyDown)
    {
      this.setState({isKeyDown:false});
      var ID = setInterval(this.decreaseTime,1000,ID)
      
    }
    
    if(event.keyCode == 8 && this.state.substring!=this.state.inpVal)
    {
      this.setState({inpVal:this.state.inpVal.slice(0,-1)});
    }
  }
  render()
  {
    return(
      <>
        <div className = "spd-cal time" >{this.state.time}</div>
        <div className = "spd-cal">{this.state.speed}</div>
        <div className = "spd-cal">{this.state.charSpeed}</div>
        <span className = "spd-cal lab lab-time">Time</span>
        <span className = "spd-cal lab">words/min</span>
        <span className = "spd-cal lab">char/min</span>
        <div class ="text-area text-area-type" onClick = {()=>document.querySelector(".input").focus()}>
          <div class = "type type-before">{this.state.inpVal}</div>
          <ContentEditable class = "input" placeholder = "this is some random text" html = {''} onChange = {this.handleChange} onKeyDown = {this.handleKeyDown}/>
          <div class = "type type-after">{this.state.randomWords}</div>
        </div>
      </>
    )   
    } 

}
