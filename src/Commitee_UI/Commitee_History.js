// import React, { Component,useState } from "react";
// import UI_Admin_StructureWebUI from '../Admin_UI/UI_Admin_StructureWebUI';


import JSONONE from '../components/findbox/test_data_find1.json'
import JSONTWO from '../components/findbox/test_data_find2.json'

import FindBox from '../components/findbox/FindBox';
import Layout from'../../src/Layout/Layout.css';
import TabDropdown from '../components/dropdown/TabDropdown';



import UI_Commitee_StructureWebUI from "./UI_Commitee_StructureWebUI";

import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import Card_History from '../components/cardbadge/Card_History';

import axios from "axios";
import React, { Component, useState, useEffect, useContext } from "react";

import {AuthContext} from "../Login/Authenticate";
import Selector from "../components/selector/Selector";
import Accordion_History from '../components/cardbadge/Accordion_History';

const branchlist = [{List:"เลือกสาขา"},
              {List:"T05 วิศวกรรมโยธา"},
              {List:"T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"},
              {List:"T13 วิศวกรรมเครื่องกลและการออกแบบ"},
              {List:"T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"},
              {List:"T17 วิศวกรรมอุตสาหการและระบบ"},
              {List:"T18 วิศวกรรมเครื่องกลและระบบการผลิต"},
              {List:"T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"}]


          //     if ((data.major_Std) =="T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์") {
          //       majorT = "T12";}
          // else if ((data.major_Std) =="T05 วิศวกรรมโยธา") {
          //       majorT = "T05";}
          // else if ((data.major_Std) =="T13 วิศวกรรมเครื่องกลและการออกแบบ") {
          //       majorT = "T13";}
          // else if ((data.major_Std) =="T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์") {
          //       majorT = "T14";}
          // else if ((data.major_Std) =="T17 วิศวกรรมอุตสาหการและระบบ") {
          //       majorT = "T17";}
          // else if ((data.major_Std) =="T18 วิศวกรรมเครื่องกลและระบบการผลิต") {
          //       majorT = "T18";}
          // else if ((data.major_Std) =="T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ") {
          //       majorT = "T19";}
                

             

const yearlist = [{List:"เลือกปี"},
              {List:"2560"},
              {List:"2561"},
              {List:"2562"},
              {List:"2563"},
              {List:"2566"},
              {List:"2565"}]

const test = [
              {List:"2560"},
              {List:"2561"},
              {List:"2562"},
              {List:"2563"},
              {List:"2564"}] 
const dataList = test.map(dd => (<Card_History yy={dd.List} />))       
function Commitee_History() {
    const {authState,user_ID,role} = useContext(AuthContext)

    // if (!authState || role != "Committee") {
    //   window.location = "/Login_All"
    // }


    
    const [get_History,set_History] = useState([]);
    const [get_UserId, set_UserId] = useState([]);
    const [get_ArrayId, set_ArrayID] = useState([]);

    const [branch,setBranch] = useState("เลือกสาขา")//new!
    const [arrayCheckmajor, set_ArrayCheckmajor] = useState([])
    // const {register_id} = useParams()

    // console.log("เลือกสาขาเลือกสาขาเลือกสาขา::::",branch);
    // console.log(authState);  

    useEffect(async function getUserID(){ 
      await axios.get("http://localhost:8000/queryUser/").then((response)=>{
        set_History(response.data)
        var arrid = []
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          arrid.push(element.user_id)
        }
        axios.post("http://127.0.0.1:8000/queryStudentHistory",arrid).then((response)=>{
          set_UserId(response.data)
          checkMajor(response.data)
          
        }     
        ,(err)=>{
        alert("ไม่สามารถดึงประวัตินิสิตได้")
        });
      }     
      ,(err)=>{
      alert("ไม่สามารถดึงประวัตินิสิตได้")
      }
    );
    
    

    },[branch]) 
    // console.log("HI queryxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: ",get_UserId)
    // console.log("get_UserId.length: ",get_UserId.length);
    const checkMajor = (userData) => {
      const usermajor = [];
      if(branch === "เลือกสาขา"){
        //  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: ")
         set_ArrayCheckmajor(userData)
      }
        
      else{
        for (let index = 0; index < userData.length; index++) {
          if(get_UserId[index].major_Std === branch){
            //console.log("come else if(get_UserId[index].major_Std === เลือกสาขา")
            usermajor.push(userData[index]);
          }
        }
        // console.log("usermajor: ",usermajor)
        set_ArrayCheckmajor(usermajor)
      }
      
    }

    // console.log("branch",branch);
    return ( 
      <div><UI_Commitee_StructureWebUI topic="ประวัติผู้สมัครทุน" iconic="fa fa-history"/>
        <div className='containerNew'>
        <div className='layout-l2' >
        <div style={{fontWeight:'bold'}}>ข้อมูลประวัติการสมัครทุนของนิสิต</div>
             <Accordion_History/>
          </div>
          </div>
        </div>
          
    );
  
}

export default Commitee_History;