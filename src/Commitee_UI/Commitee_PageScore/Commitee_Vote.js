import React, { Component, useState, useContext} from "react";
import '../Layout/Layout.css';
import UI_Commitee_StructureWebUI from '../Commitee_UI/UI_Commitee_StructureWebUI';
import StudentInform from "../components/form/StudentInform";
// /frontend/se_project_group_5/src/Commitee_UI/UI_Commitee_StructureWebUI.js

function Commitee_Vote() {
  
  return ( 
    <div><UI_Commitee_StructureWebUI topic="การลงคะเเนน" iconic="fas fa-user-circle"/>
      <div className='containerNew'>
        <div className='body-l1'>
          
          
        </div>
      </div>
    </div>
  );
}
export default Commitee_Vote;
