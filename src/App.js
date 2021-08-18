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
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#666ff0" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
   <Text_Replacer_Head value = "Notepad"/>
   <Notepad/>
   <Text_Replacer_Head value = "Explore more tools"/>
   <Tools/>
   <Text_Replacer_Head value = "Type Speed Test"/>
   <TypeTest/>
 

  </>
  );
}
