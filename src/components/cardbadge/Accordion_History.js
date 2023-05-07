import Layout from'../../Layout/Layout.css';
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import Card_History from './Card_History';

import axios from "axios";
import React, { Component, useState, useEffect, useContext } from "react";

import { AuthContext } from '../../Login/Authenticate';
import Selector from '../selector/Selector';


const branchlist = [{List:"เลือกสาขา"},
              {List:"T05 วิศวกรรมโยธา"},
              {List:"T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"},
              {List:"T13 วิศวกรรมเครื่องกลและการออกแบบ"},
              {List:"T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"},
              {List:"T17 วิศวกรรมอุตสาหการและระบบ"},
              {List:"T18 วิศวกรรมเครื่องกลและระบบการผลิต"},
              {List:"T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"}]
             

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


function Accordion_History() {
    const {authState} = useContext(AuthContext)
    const [get_History,set_History] = useState([]);
    const [get_UserId, set_UserId] = useState([]);
    const [get_ArrayId, set_ArrayID] = useState([]);
    const [searchList,setSearchList] = useState('');
    const [branch,setBranch] = useState("เลือกสาขา")//new!
    const [arrayCheckmajor, set_ArrayCheckmajor] = useState([])
    // const {register_id} = useParams()
   // console.log("เลือกสาขาเลือกสาขาเลือกสาขาเลือกสาขาเลือกสาขา::::",branch);
   //console.log(authState);
    if (!authState) {
        window.location = "/Login_All"
    }
    
    

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
          //console.log("HI query: ",response.data)
        }     
        ,(err)=>{
        alert("ไม่สามารถดูประวัตินิสิตได้")
        });
      }     
      ,(err)=>{
      alert("ไม่สามารถดูประวัตินิสิตได้")
      }
    );
    },[branch]) 


    //console.log("get_UserId.length: ",get_UserId.length);
    const checkMajor = (userData) => {
      const usermajor = [];
      if(branch === "เลือกสาขา"){
         //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: ")
         set_ArrayCheckmajor(userData)
      }
        
      else{
        for (let index = 0; index < userData.length; index++) {
          //usermajor.push(userData[index]);
          // const element = array[index];
          if(get_UserId[index].major_Std === branch){
            //console.log("come else if(get_UserId[index].major_Std === เลือกสาขา")
            usermajor.push(userData[index]);
          }
        }
       // console.log("usermajor: ",usermajor)
        set_ArrayCheckmajor(usermajor)
      }
      
    }


    return ( 
      <div>
         <div className='header-l2' style={{marginTop:"-10px"}} >

             <div style={{marginLeft:"700px"}}>
          <form style={{marginLeft:"-720px",marginTop:'25px',position:"absolute"}}>
          <input type="text" id="form1" placeholder={"🔍ค้นหานิสิต"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
          <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
          </form>
        
          <div style={{marginLeft:"60px",marginTop:"-3px"}}>
   
          <Selector topic="เลือกสาขา" 
                data={
                branchlist.map((getbranch) => (
                    {list:getbranch.List}
                  ))
                } value={branch} onChange={(e)=>setBranch(e.target.value)}

                        />
         
          </div>
          </div>
          </div>
          <div class="scoller" style={{marginTop:"40px",height:"590px",overflow:"auto"}}>
          {(()=>{
                    if(arrayCheckmajor.length==0){
                        return (<>
                        <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบนิสิต</h4>
                              </div>
                        </>)
                    }
                    else{
                      return (<>
                      {(()=>{
                          if((arrayCheckmajor.filter((val)=>{
                            if (searchList==""){
                              return val
                            }
                            else if(val.fullName_Std.toLowerCase().includes(searchList.toLowerCase())){
                                return val
                            }
                            else if(val.id_Std.toLowerCase().includes(searchList.toLowerCase())){
                              return val
                            }
                            else if(val.major_Std.toLowerCase().includes(searchList.toLowerCase())){
                              return val
                            }
                          }
                        ).length)==0){
                              return (<>
                               <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบนิสิต</h4>
                              </div>
                              </>)
                          }
                          else{
                            return (<><div className="scroller" style={{height:"600px",overflow:"auto"}}>
                              <Accordion>
                                {arrayCheckmajor.filter((val)=>{
                                          if (searchList==""){
                                            return val
                                          }
                                          else if(val.fullName_Std.toLowerCase().includes(searchList.toLowerCase())){
                                              return val
                                          }
                                          else if(val.id_Std.toLowerCase().includes(searchList.toLowerCase())){
                                            return val
                                          }
                                          else if(val.major_Std.toLowerCase().includes(searchList.toLowerCase())){
                                            return val
                                          }
                                        }
                                      ).map((val,index)=>{
                                        //console.log("index"+index);
                                                return(<>
                                                        <Card_History data={val} eventkey={index}/>
                                                        </>)
                                                      }
                                            )
                                        } </Accordion></div>
                              </>)
                          }
                      })()}
                      {/* <Accordion>
                        {arrayCheckmajor.map((UserId,index) => (
                        <Card_History data={UserId} eventkey={index}/>
                        ))}
                     </Accordion> */}
                      </>)
                    }
                })()}
                 
        </div>

         
              
        </div>
          
    );
  
}

export default Accordion_History;