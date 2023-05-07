import React, { Component, useContext} from "react";
import StructureWebUI from './StructureWebUI';
import { useParams } from "react-router-dom";
import {AuthContext} from "../Login/Authenticate"

function Student_Help(){
  const {authState,user_ID} = useContext(AuthContext)
  //console.log(user_ID);
  if (!authState) {window.location = "/Login_All"}
  return ( 
    <div><StructureWebUI topic="คู่มือการสมัคร" iconic="fas fa-question-circle"/>
      <div className='containerNew'>
        <div className='body-l1'>
          <div style={{marginLeft:"200px"}}>
          <iframe src="https://drive.google.com/file/d/1Lb01sXQ1NZysowl5IyEMkAUE28kAFKDn/preview" width="640" height="750" allow="autoplay"></iframe>
          </div>
      </div>
      </div>
    </div>
  );
  
}

export default Student_Help;
