import React from 'react';
import './style.css';
import Navbar from './Navbar.js';
import Text_Replacer_Head from './Text_Replacer_Head.js';
import  Notepad from './Notepad.js'; 
import Tools from './Tools.js';
import TypeTest  from "./Type_Test" ;
export default function App() {
  return (
  <>
   <Navbar />
   <Text_Replacer_Head value = "Notepad"/>
   <Notepad/>
   <Text_Replacer_Head value = "Explore more tools"/>
   <Tools/>
   <Text_Replacer_Head value = "Type Speed Test"/>
   <TypeTest/>
 

  </>
  );
}
