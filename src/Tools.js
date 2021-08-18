import React from "react";

export default function Tools(props)
{
  return(
    <>
    <Button value = "Find/Replace" cls ="btn-tools-left"/>
    <Button value = "Remove line break" cls ="btn-tools-right"/>
    <Button value  = "Remove space" cls ="btn-tools-left"/>
    <Button value  = "Word Counter" cls ="btn-tools-right"/>
    <Button value  = "Reverse Text" cls ="btn-tools-left"/>
    <Button value  = "Random Text Generator" cls ="btn-tools-right"/>
    <Button value  = "Random Email Generator" cls ="btn-tools-left"/>
    <Button value  = "Random Address Generator" cls ="btn-tools-right"/>

    </>
  )
}

function Button(props){
  var  cls = ["btn btn-tools",props.cls]
  cls = cls. join (" ");
  handleClick()
  {
    
  }
  return(
  <button className = {cls} onClick = {this.handleClick}>{props.value}<i class="fas fa-external-link-alt"></i></button>
  )
}