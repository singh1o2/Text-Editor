import React from  'react';
import ContentEditable from 'react-contenteditable';
import RandomWords from 'random-words';
export default class TypeTest extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {randomWords:' '+RandomWords(100).join(' '),firstWord:' ',inpVal:'',time:60,speed:0,charSpeed:0};
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
    }
  }
  

  handleChange(event)
  {
    this.setState({inpVal:this.state.inpVal+event.target.value.replace('&nbsp;',' ')});
    if(this.state.randomWords.slice(0,1)==' ')
    {
      var random  = this.state.randomWords.trim();
      this.setState({firstWord:random.slice(0,random.indexOf(' '))});
    
    }
    console.log(this.state.inpVal);
    var inpVal = this.state.inpVal.trim();
    var lastWord = inpVal.split(' ').pop();
    console.log(this.state.firstWord+' '+lastWord);
    if(this.state.randomWords.slice(0,1) == event.target.value.replace('&nbsp;',' ') && this.state.firstWord.includes(lastWord))
    {
      this.setState({randomWords:this.state.randomWords.slice(1)});
    }
 
  }
  handleKeyDown(event)
  {
    if(event.keyCode == 8 )
    {
      this.setState({inpVal:this.state.inpVal.slice(0,-1)});
      
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
      
      <div class ="text-area text-area-type" onClick = {()=>document.querySelector(".input").focus()}>
        <div class = "type type-before">{this.state.inpVal}</div>
        <ContentEditable class = "input" placeholder = "this is some random text" html = {''} onChange = {this.handleChange} onKeyDown = {this.handleKeyDown}/>
        <div class = "type type-after">{this.state.randomWords}</div>
        
        
      </div>
    </>
  )   
  } 

}
