import React, { Component, useState, useContext,useEffect} from "react";
import StructureWebUI from './StructureWebUI';
import ItemList from '../components/button-list/ItemList';
import { useParams } from "react-router-dom";
import {AuthContext} from "../Login/Authenticate"
import '../Layout/Layout.css'
import axios from "axios";
import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';
import Card_Std_Status from '../components/cardbadge/Card_Std_Status';
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor"
import "../components/status/Status_Nisit.css"
import CheckBox from "../components/checkbox/CheckBox"


function Student_StudentStatus(){
  const {authState,user_ID,role} = useContext(AuthContext)
  //console.log("userID",user_ID);
  const [statusDB,setStatusDB] = useState("")
  const [getStatusDB,setGetStatusDB] = useState("")
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const [yearScholar,setYearScholar] = useState("")//new! 
  const schoGetByYear = []
   //=========================================================================
   const seeHiddenScholar = []
   const [seeClosedscholarName, setSeeClosedScholarName] = useState([]);
   const hiddenTag = [{list:"ทุนที่ปิด",parent:"ทุนที่ปิด"}]
   //checkbox
   const [usehiddenTag,setUsehiddenTag] = useState({ทุนที่ปิด:""})
   const checkboxSubmitHidden = (name,value) => {
     setUsehiddenTag(usehiddenTag => ({
       ...usehiddenTag,
       [name]: (value?"":"ถูกเลือก")
     }));
   };
   //==========================================================================
   //search control
   const [searchList,setSearchList] = useState('');
 

  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
      setGetYearScholarDB(response.data); 
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
    }
    );
  },[]) 


  useEffect( function setStatusDB(){
    axios.post("http://127.0.0.1:8000/queryStudentStatus",[user_ID]).then((response)=>{
      var schoFromDB = response.data
      
      if (yearScholar==='' || yearScholar==='เลือก'){
        for (let i = 0; i < schoFromDB.length; i++) {
           
          if(schoFromDB[i].statusScholar!='ปิดทุน'){
             schoGetByYear.push({
              "nameScholar":schoFromDB[i].nameScholar,
              "namescholarregister":schoFromDB[i].namescholarregister,
              "usermatch_id":schoFromDB[i].usermatch_id,
              "studentinform_profile":schoFromDB[i].studentinform_profile,
              "message":schoFromDB[i].message,
              "statusCheck":schoFromDB[i].statusCheck,
              "statusInterview":schoFromDB[i].statusInterview,
              "statusTransfer":schoFromDB[i].statusTransfer,
              "statusReceipt":schoFromDB[i].statusReceipt,
              "fullName_Std_reg":schoFromDB[i].fullName_Std_reg,
              "id_Std_reg":schoFromDB[i].id_Std_reg,
              "nameScholar":schoFromDB[i].nameScholar,
              "srcYear":schoFromDB[i].srcYear,
              "statusScholar":schoFromDB[i].statusScholar,
            "processStatus":schoFromDB[i].processStatus
          })}
          else if(schoFromDB[i].statusScholar=='ปิดทุน'){
            seeHiddenScholar.push({
              "nameScholar":schoFromDB[i].nameScholar,
              "namescholarregister":schoFromDB[i].namescholarregister,
              "usermatch_id":schoFromDB[i].usermatch_id,
              "studentinform_profile":schoFromDB[i].studentinform_profile,
              "message":schoFromDB[i].message,
              "statusCheck":schoFromDB[i].statusCheck,
              "statusInterview":schoFromDB[i].statusInterview,
              "statusTransfer":schoFromDB[i].statusTransfer,
              "statusReceipt":schoFromDB[i].statusReceipt,
              "fullName_Std_reg":schoFromDB[i].fullName_Std_reg,
              "id_Std_reg":schoFromDB[i].id_Std_reg,
              "nameScholar":schoFromDB[i].nameScholar,
              "srcYear":schoFromDB[i].srcYear,
              "statusScholar":schoFromDB[i].statusScholar,
              "processStatus":schoFromDB[i].processStatus
         })}
      } 
      setGetStatusDB(schoGetByYear)
      setSeeClosedScholarName(seeHiddenScholar)
        //setGetStatusDB(response.data);
        }else{ 
          for (let i = 0; i < schoFromDB.length; i++) {
           if ( yearScholar == (schoFromDB[i].srcYear)) {
            if(schoFromDB[i].statusScholar!='ปิดทุน'){
               schoGetByYear.push({
                "nameScholar":schoFromDB[i].nameScholar,
                "namescholarregister":schoFromDB[i].namescholarregister,
                "usermatch_id":schoFromDB[i].usermatch_id,
                "studentinform_profile":schoFromDB[i].studentinform_profile,
                "message":schoFromDB[i].message,
                "statusCheck":schoFromDB[i].statusCheck,
                "statusInterview":schoFromDB[i].statusInterview,
                "statusTransfer":schoFromDB[i].statusTransfer,
                "statusReceipt":schoFromDB[i].statusReceipt,
                "fullName_Std_reg":schoFromDB[i].fullName_Std_reg,
                "id_Std_reg":schoFromDB[i].id_Std_reg,
                "nameScholar":schoFromDB[i].nameScholar,
                "srcYear":schoFromDB[i].srcYear,
                "statusScholar":schoFromDB[i].statusScholar,
              "processStatus":schoFromDB[i].processStatus
            })}
            else if(schoFromDB[i].statusScholar=='ปิดทุน'){
              seeHiddenScholar.push({
                "nameScholar":schoFromDB[i].nameScholar,
                "namescholarregister":schoFromDB[i].namescholarregister,
                "usermatch_id":schoFromDB[i].usermatch_id,
                "studentinform_profile":schoFromDB[i].studentinform_profile,
                "message":schoFromDB[i].message,
                "statusCheck":schoFromDB[i].statusCheck,
                "statusInterview":schoFromDB[i].statusInterview,
                "statusTransfer":schoFromDB[i].statusTransfer,
                "statusReceipt":schoFromDB[i].statusReceipt,
                "fullName_Std_reg":schoFromDB[i].fullName_Std_reg,
                "id_Std_reg":schoFromDB[i].id_Std_reg,
                "nameScholar":schoFromDB[i].nameScholar,
                "srcYear":schoFromDB[i].srcYear,
                "statusScholar":schoFromDB[i].statusScholar,
                "processStatus":schoFromDB[i].processStatus
           })}
          }
        } 

        setGetStatusDB(schoGetByYear)
        setSeeClosedScholarName(seeHiddenScholar)  
      }
   })
 },[yearScholar])
  if (!authState) {window.location = "/Login_All"}
    return ( 
      <div><StructureWebUI topic="สถานะ" iconic="fas fa-clipboard-list"/>
        <div className = "containerNew" >
        <div className='layout-1'>
        <div className='header-l2' style={{marginTop:"-10px"}} >
        <div style={{width:"300px"}}>ข้อมูลสถานะของนิสิต</div>
        <div style={{marginLeft:"430px"}}> 
        <form style={{marginLeft:"-750px",marginTop:'35px',position:"absolute"}}>
        <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
        <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
        </form>
        <div style={{marginLeft:"-170px",marginTop:"30px"}}> 
             <CheckBox topic="ดูทุนที่ปิดแล้ว" data={hiddenTag} value={usehiddenTag} action={(e)=>checkboxSubmitHidden(e.target.name,e.target.value)}/>
             {/*console.log(usehiddenTag)*/}
             </div>
        <div style={{marginTop:"-65px"}}> 
        <span class="d-inline-block" data-bs-toggle="tooltip" title="เลือกปีการศึกษาสำหรับกรองทุน">
              <SelectorTwoFactor topic="เลือกปีของทุน" style={{bg:"white"}}
                          data={

                            getYearScholarDB.map((getYearScholarDB) => (
                              {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                            ))
                          } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                         
                          />
              </span>
              </div>
              </div>
            </div>
          <div className='body-l1'>
           
          <div class="scroller" style={{marginTop:"10px",height:"650px",overflow:"auto"}}>
          {(()=>{
                    if(usehiddenTag.ทุนที่ปิด=="ถูกเลือก"){//closed scho
                        return (<>
                         {(()=>{
                              if((seeClosedscholarName.length)==0){
                                return (<>
                                  <div class="alert alert-warning" role="alert">
                                    <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                    
                                  </div>
                                  </>)
                              }
                              else{
                                return (<><div>
                                  {(()=>{
                                      if((seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                        if (searchList==""){return seeClosedscholarNameMap}
                                        else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return seeClosedscholarNameMap}
                                      }).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<><Accordion defaultActiveKey="0"> 
                                            {seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                                if (searchList==""){
                                                  return seeClosedscholarNameMap
                                                }
                                                else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                    return seeClosedscholarNameMap
                                                }
                                              }
                                            ).map((seeClosedscholarNameMap,index)=>{
                                              return(<>
                                              <Card_Std_Status   
                                              ScholarId = {seeClosedscholarNameMap.namescholarregister} 
                                              ScholarData = {seeClosedscholarNameMap.nameScholar} 
                                              RegId = {seeClosedscholarNameMap.register_id}
                                              statusCheck = {seeClosedscholarNameMap.statusCheck}
                                              statusInterview = {seeClosedscholarNameMap.statusInterview}
                                              statusTransfer = {seeClosedscholarNameMap.statusTransfer}
                                              statusReceipt = {seeClosedscholarNameMap.statusReceipt}
                                              message = {seeClosedscholarNameMap.message}
                                              fullname = {seeClosedscholarNameMap.fullName_Std_reg}
                                              id={seeClosedscholarNameMap.id_Std_reg}
                                              eventKey={index}
                                              />      
                                              </>)
                                                  }
                                                    )
                                                    }
                                               </Accordion>  </>)}
                                                })()}

                                  </div></>)
                              }
                          })()}
                        
                        </>)
                    }
                    else{//open scho
                      return (<>
                                    {(()=>{
                              if((getStatusDB.length)==0){
                                return (<>
                                  <div class="alert alert-warning" role="alert">
                                    <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                    
                                  </div>
                                  </>)
                              }
                              else{
                                return (<><div>
                                   {(()=>{
                                      if((getStatusDB.filter((getStatusDBMap)=>{
                                        if (searchList==""){return getStatusDBMap}
                                        else if(getStatusDBMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return getStatusDBMap}
                                      }).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<><Accordion defaultActiveKey="0"> 
                                            {getStatusDB.filter((getStatusDBMap)=>{
                                                if (searchList==""){
                                                  return getStatusDBMap
                                                }
                                                else if(getStatusDBMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                    return getStatusDBMap
                                                }
                                              }
                                            ).map((getStatusDBMap,index)=>{
                                              return(<>
                                              <Card_Std_Status   
                                              ScholarId = {getStatusDBMap.namescholarregister} 
                                              ScholarData = {getStatusDBMap.nameScholar} 
                                              RegId = {getStatusDBMap.register_id}
                                              statusCheck = {getStatusDBMap.statusCheck}
                                              statusInterview = {getStatusDBMap.statusInterview}
                                              statusTransfer = {getStatusDBMap.statusTransfer}
                                              statusReceipt = {getStatusDBMap.statusReceipt}
                                              message = {getStatusDBMap.message}
                                              fullname = {getStatusDBMap.fullName_Std_reg}
                                              id={getStatusDBMap.id_Std_reg}
                                              eventKey={index}
                                              />
                                                      
                                              </>)
                                                  }
                                                    )
                                                    }
                                               </Accordion>  </>)}
                                                })()} 
                                  </div></>)
                              }
                          })()}
                        </>)
                    }
                })()}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Student_StudentStatus;