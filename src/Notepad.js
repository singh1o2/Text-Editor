import React from 'react';
import ContentEditable from 'react-contenteditable';
export default class Notepad extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {value:'',selectedString :' ',align:'align-left',font:'default',size:'three'}
    this.getSelectionHtml = this.getSelectionHtml.bind(this);
  }
getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

  render()
  {
    var  contentClass = ["text-area",this.state.align,this.state.font,this.state.size].join(" ")
    return(
      <div class = "text-box">
        <i class="fas fa fa-bold" style = {{marginLeft:'36px'}}
          onClick = {()=>this.setState({value: this.state.value.replace(this.state.selectedString,"<b>"+this.state.selectedString+"</b>")})}></i>
        <i class="fas fa fa-italic"
          onClick = {()=>this.setState({value: this.state.value.replace(this.state.selectedString,"<i>"+this.state.selectedString+"</i>")})}></i>
        <i class="fas fa fa-underline"
          onClick = {()=>this.setState({value: this.state.value.replace(this.state.selectedString,"<u>"+this.state.selectedString+"</u>")})}></i>
        <i class="fas fa fa-align-left" onClick = {()=>this.setState({align:'align-left'})}></i>
        <i class="fas fa fa-align-right" onClick = {()=>this.setState({align:'align-right'})}></i>
        <i class="fas fa fa-align-center" onClick = {()=>this.setState({align:'align-center'})}></i>
        <select style = {{marginLeft:'240px'}} onChange = {(event)=>{this.setState({font:event.target.value});console.log(contentClass);}}>
          <option  value = "Default">Default</option>
          <option  value = "Indie-Flower">Indie-Flower</option>
          <option  value = "Josefin-Sans">Josefin-Sans</option>
          <option  value = "Lato">Lato</option>
          <option  value = "MonteCarlo">MonteCarlo</option>
          <option  value = "Palette-Mosaic">Palette Mosaic</option>
          <option  value = "Raleway">Raleway</option>
        </select>
        <select onChange = {(event)=>this.setState({font:event.target.value})}>
          <option value = "one">1</option>
          <option value = "two">2</option>
          <option value = "three">3</option>
          <option value = "four">4</option>
          <option value = "five">5</option>
        </select>
        <ContentEditable className =  {contentClass} placeholder = "Start Typing....." 
          onChange = {(event)=>this.setState({value:event.target.value})}
          html ={this.state.value}
          onSelect = {()=>this.setState({selectedString:this.getSelectionHtml()})}/>
      </div>
    );
  }
}