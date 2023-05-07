import JSONONE from '../components/findbox/test_data_find1.json'
import JSONTWO from '../components/findbox/test_data_find2.json'

import FindBox from '../components/findbox/FindBox';
import Layout from'../../src/Layout/Layout.css';

import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import Card_History from '../components/cardbadge/Card_History';
import React, { Component, useState, useEffect, useContext } from "react";
import {AuthContext} from "../Login/Authenticate";
import Selector from "../components/selector/Selector";
import axios from "axios";
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';

import Accordion_History from '../components/cardbadge/Accordion_History';

const branchlist = [{List:"เลือกสาขา"},
              {List:"T05 วิศวกรรมโยธา"},
              {List:"T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"},
              {List:"T13 วิศวกรรมเครื่องกลและการออกแบบ"},
              {List:"T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"},
              {List:"T17 วิศวกรรมอุตสาหการและระบบ"},
              {List:"T18 วิศวกรรมเครื่องกลและระบบการผลิต"},
              {List:"T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"}]
     
function Admin_History() {
    const {authState,user_ID,role} = useContext(AuthContext)




    
    const [get_History,set_History] = useState([]);
    const [get_UserId, set_UserId] = useState([]);
    const [get_ArrayId, set_ArrayID] = useState([]);

    const [branch,setBranch] = useState("เลือกสาขา")//new!
    const [arrayCheckmajor, set_ArrayCheckmajor] = useState([])
    // const {register_id} = useParams()
    //console.log("เลือกสาขาเลือกสาขาเลือกสาขาเลือกสาขาเลือกสาขา::::",branch);
   // console.log(authState);
    if (!authState) {
        window.location = "/Login_All"
    }
    
    

    useEffect(async function getUserID(){ 
      axios.get("http://localhost:8000/queryUser/").then((response)=>{
        set_History(response.data)
        var arrid = []
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          arrid.push(element.user_id)
        }
        axios.post("http://127.0.0.1:8000/queryStudentHistory",arrid).then((response)=>{
          set_UserId(response.data)
          //console.log("HI query: ",response.data)
        }     
        ,(err)=>{
        alert("ไม่สามารถดึงรายละเอียด")
        });
      }     
      ,(err)=>{
      alert("ไม่สามารถดึงรายละเอียด")
      }
    );
    

    },[]) 

    useEffect(() => {
    checkMajor();

    },[branch]) 




    //console.log("get_UserId.length: ",get_UserId.length);
    const checkMajor = () => {
      const usermajor = [];
      for (let index = 0; index < get_UserId.length; index++) {
        
        // const element = array[index];
        if(branch == "เลือกสาขา"){
          //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: ")
          usermajor.push(get_UserId[index]);
          
        }
        else if(get_UserId[index].major_Std === branch){
          //console.log("come else if(get_UserId[index].major_Std === เลือกสาขา")
          usermajor.push(get_UserId[index]);
        }
      }
      //console.log("usermajor: ",usermajor)
      set_ArrayCheckmajor(usermajor)

    }

    //console.log("branch",branch);
    return ( 
      <div><UI_Admin_StructureWebUI topic="ประวัติผู้สมัครทุน" iconic="fa fa-history"/>

        <div className='containerNew'>
        <div className='layout-l2'>
          <div > 
            <div>ข้อมูลประวัติการสมัครทุนของนิสิต</div>
            <Accordion_History/>
           
          </div>
          </div>
        </div>
          
      </div>
    );
  
}
 
export default Admin_History;