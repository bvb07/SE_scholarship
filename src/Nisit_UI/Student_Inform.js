import React, { Component, useState, useContext} from "react";
import {AuthContext} from "../Login/Authenticate"
import '../Layout/Layout.css';
import StructureWebUI from './StructureWebUI';
import StudentInform from "../components/form/StudentInform";


function Student_Inform() {
  const {authState,user_ID} = useContext(AuthContext)
  //console.log(user_ID);
  return ( 
    <div><StructureWebUI topic="ข้อมูลนิสิต" iconic="fas fa-user-circle"/>
      <div className='containerNew'>
        <div className='body-l1'>
          {StudentInform(user_ID,0,0,false,0)} 
        </div>
      </div>
    </div>
  );
}
export default Student_Inform;
