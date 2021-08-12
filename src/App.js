import React from 'react';
import './style.css';
import Navbar from './Navbar.js';
import Text_Replacer_Head from './Text_Replacer_Head.js';
import Text_Replacer from './Text_Replacer.js';
import Tools from './Tools.js';
import TypeTest  from "./Type_Test" ;
export default function App() {
  return (
  <>
   <Navbar />
   <Text_Replacer_Head value = "Notepad"/>
   <Text_Replacer/>
   <Text_Replacer_Head value = "Explore more tools"/>
   <Tools/>
   <Text_Replacer_Head value = "Type Speed Test"/>
   <TypeTest/>
   <svg width="100%" height="36" viewBox="0 0 100% 36" class="u-block" xmlns="http://www.w3.org/2000/svg" ><rect width="100%" height="100%" fill="#F6F6F7"></rect></svg>
   
  </>
  );
}
