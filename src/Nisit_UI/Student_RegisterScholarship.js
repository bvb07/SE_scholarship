import React, { Component , useContext, useState, useEffect} from 'react';
import axios from "axios";
import StructureWebUI from './StructureWebUI';
import '../Layout/Layout.css';
import StudentInform from "../components/form/StudentInform";
import ItemList from '../components/button-list/ItemList';
import ScholarBadget_2 from '../components/scholarbadget/ScholarBadget_2';
import { useParams } from "react-router-dom";
import {AuthContext} from "../Login/Authenticate"



export default function Student_RegisterScholarship(){
  const {authState,user_ID,role} = useContext(AuthContext)
  return( 
    <div><StructureWebUI topic="สมัครทุนนิสิต" iconic="fas fa-edit"/>
        <div className='containerNew'>
          <div className='body-l1' >
            <ScholarBadget_2 startPage={1} user_ID={user_ID}/>
          </div>
        </div>
      </div>
  );
}




