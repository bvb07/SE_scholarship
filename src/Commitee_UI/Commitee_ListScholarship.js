import axios from "axios";
import React, { Component, useState, useEffect, useContext } from "react";
//import '../Nisit_UI/Student_ListScholarship.css'
import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';

import UI_Commitee_StructureWebUI from './UI_Commitee_StructureWebUI';
import { useParams, Link  } from "react-router-dom";
import {AuthContext} from "../Login/Authenticate";
import Student_ScholarBadget from "../components/scholarbadget/Student_ScholarBadget";
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor"
import CheckBox from "../components/checkbox/CheckBox"
function Commitee_ListScholarship(){
  const {authState,user_ID,role} = useContext(AuthContext)
  // if (!authState || role != "Committee") {
  //     window.location = "/Login_All"
  //   }



  
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const [yearScholar,setYearScholar] = useState('')//new!
  const [scholarName, setScholarName] = useState([]);
  //search control
  const [searchList,setSearchList] = useState('');

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

  const schoGetByYear = []
  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
      setGetYearScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
    }
    );
  },[]) 
  
  useEffect(function useGetScholarName(){ //function gettest
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      var schoFromDB = response.data
      //setScholarName(schoFromDB);
      if (yearScholar==='' || yearScholar==='เลือก'){
        for (let i = 0; i < schoFromDB.length; i++) {
         
            if(schoFromDB[i].statusScholar!='ปิดทุน'){
               schoGetByYear.push({
                "srcUpload":schoFromDB[i].srcUpload,
                "srcYear":schoFromDB[i].yearScholar,
              "srcStartDate":schoFromDB[i].srcStartDate,
              "srcEndDate":schoFromDB[i].srcEndDate,
              "majorSelect":schoFromDB[i].majorSelect,
                "nameScholar":schoFromDB[i].nameScholar,
                "amountScholar":schoFromDB[i].amountScholar,
              "managescho_id":schoFromDB[i].managescho_id,
              "costScholar":schoFromDB[i].costScholar,
              "detailScholar":schoFromDB[i].detailScholar,
              "qualificationScholar":schoFromDB[i].qualificationScholar,
              "addOnScholar":schoFromDB[i].addOnScholar,
              "srcScholar":schoFromDB[i].srcScholar,
              "statusScholar":schoFromDB[i].statusScholar,
              "processStatus":schoFromDB[i].processStatus,
              "normalOrcontinue":schoFromDB[i].normalOrcontinue,

            })}
            else if(schoFromDB[i].statusScholar=='ปิดทุน'){
              seeHiddenScholar.push({
               "srcUpload":schoFromDB[i].srcUpload,
               "srcYear":schoFromDB[i].yearScholar,
             "srcStartDate":schoFromDB[i].srcStartDate,
             "srcEndDate":schoFromDB[i].srcEndDate,
             "majorSelect":schoFromDB[i].majorSelect,
               "nameScholar":schoFromDB[i].nameScholar,
               "amountScholar":schoFromDB[i].amountScholar,
             "managescho_id":schoFromDB[i].managescho_id,
             "costScholar":schoFromDB[i].costScholar,
             "detailScholar":schoFromDB[i].detailScholar,
             "qualificationScholar":schoFromDB[i].qualificationScholar,
             "addOnScholar":schoFromDB[i].addOnScholar,
             "srcScholar":schoFromDB[i].srcScholar,
             "statusScholar":schoFromDB[i].statusScholar,
             "processStatus":schoFromDB[i].processStatus,
             "normalOrcontinue":schoFromDB[i].normalOrcontinue,
           })} 
        } 
      setScholarName(schoGetByYear)
      setSeeClosedScholarName(seeHiddenScholar)
      }
      else{
        for (let i = 0; i < schoFromDB.length; i++) {
              if ( yearScholar == (schoFromDB[i].srcYear)) {
                if(schoFromDB[i].statusScholar!='ปิดทุน'){
                   schoGetByYear.push({
                    "srcUpload":schoFromDB[i].srcUpload,
                    "srcYear":schoFromDB[i].yearScholar,
                  "srcStartDate":schoFromDB[i].srcStartDate,
                  "srcEndDate":schoFromDB[i].srcEndDate,
                  "majorSelect":schoFromDB[i].majorSelect,
                    "nameScholar":schoFromDB[i].nameScholar,
                    "amountScholar":schoFromDB[i].amountScholar,
                  "managescho_id":schoFromDB[i].managescho_id,
                  "costScholar":schoFromDB[i].costScholar,
                  "detailScholar":schoFromDB[i].detailScholar,
                  "qualificationScholar":schoFromDB[i].qualificationScholar,
                  "addOnScholar":schoFromDB[i].addOnScholar,
                  "srcScholar":schoFromDB[i].srcScholar,
                  "statusScholar":schoFromDB[i].statusScholar,
                  "processStatus":schoFromDB[i].processStatus,
                  "normalOrcontinue":schoFromDB[i].normalOrcontinue,
                  
                })}
                else if(schoFromDB[i].statusScholar=='ปิดทุน'){
                  seeHiddenScholar.push({
                   "srcUpload":schoFromDB[i].srcUpload,
                   "srcYear":schoFromDB[i].yearScholar,
                 "srcStartDate":schoFromDB[i].srcStartDate,
                 "srcEndDate":schoFromDB[i].srcEndDate,
                 "majorSelect":schoFromDB[i].majorSelect,
                   "nameScholar":schoFromDB[i].nameScholar,
                   "amountScholar":schoFromDB[i].amountScholar,
                 "managescho_id":schoFromDB[i].managescho_id,
                 "costScholar":schoFromDB[i].costScholar,
                 "detailScholar":schoFromDB[i].detailScholar,
                 "qualificationScholar":schoFromDB[i].qualificationScholar,
                 "addOnScholar":schoFromDB[i].addOnScholar,
                 "srcScholar":schoFromDB[i].srcScholar,
                 "statusScholar":schoFromDB[i].statusScholar,
                 "processStatus":schoFromDB[i].processStatus,
                 "normalOrcontinue":schoFromDB[i].normalOrcontinue,
               })} 
              } 
          } 
          setScholarName(schoGetByYear)
          setSeeClosedScholarName(seeHiddenScholar)
      }

    }
    ,(err)=>{
      alert("ไม่สามารถดึงรายชื่อทุน")
    }
    );
  },[yearScholar]) 
  
  //console.log(email);
  //console.log(checkLogout);
  //console.log(studentID)
    return (<>
      <div><UI_Commitee_StructureWebUI topic="ดูรายชื่อทุน" iconic="fas fa-list-alt"/> </div>
          <div className="containerNew">
            <div className="layout-l1">
            <div className='header-l2' style={{marginTop:"-10px"}} >
            <div style={{fontWeight:'bold'}}>ข้อมูลทุนการศึกษา</div>
            <div style={{marginLeft:"578px"}}> 

            <form style={{marginLeft:"-745px",marginTop:'55px',position:"absolute"}}>
            <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
            <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
            </form>

            <div style={{marginLeft:"-170px"}}> 
             <CheckBox topic="ดูทุนที่ปิดแล้ว" data={hiddenTag} value={usehiddenTag} action={(e)=>checkboxSubmitHidden(e.target.name,e.target.value)}/>
             {/*console.log(usehiddenTag)*/}
             </div>
             <div style={{marginTop:"-65px"}}> 
            <span class="d-inline-block" data-bs-toggle="tooltip" title="เลือกปีการศึกษาสำหรับกรองทุน">
            <SelectorTwoFactor topic="ปีการศึกษา" 
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
              <div className="body-l1">
              <div className='studentScholar'style={{marginTop:"20px",height:"600px",overflow:"auto"}} > 
              {(()=>{
                    if(usehiddenTag.ทุนที่ปิด=="ถูกเลือก"){
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
                            return (<>
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
                                        return (<><Accordion flush> 
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
                                               <Student_ScholarBadget topic = {seeClosedscholarNameMap.nameScholar} 
                                               eventKey={index}
                                                detail1={seeClosedscholarNameMap.srcUpload}
                                                detail2={seeClosedscholarNameMap.detailScholar}
                                                detail3={seeClosedscholarNameMap.qualificationScholar}
                                                timestart={seeClosedscholarNameMap.srcStartDate}
                                                timeend={seeClosedscholarNameMap.srcEndDate}
                                                amountsch={seeClosedscholarNameMap.amountScholar}
                                                normal={seeClosedscholarNameMap.normalOrcontinue}
                                                
                                                />
                                              </>)
                                                  })
                                                }
                                               </Accordion></>)}
                                                })()}
                            {/* {seeClosedscholarName.map((seeClosedscholarName) => (
                                  <Student_ScholarBadget topic = {seeClosedscholarName.nameScholar} 
                                  detail1={seeClosedscholarName.srcUpload}
                                  detail2={seeClosedscholarName.detailScholar}
                                  detail3={seeClosedscholarName.qualificationScholar}
                                  />))
                            } */}
                          </>)
                          }
                      })()} 
                        </>)
                    }
                    else{
                      return(<>
                       {(()=>{
                            if((scholarName.length)==0){
                                return (<>
                                <div class="alert alert-warning" role="alert">
                                  <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                </div>
                                </>)
                            }
                            else{
                              return (<>
                              {(()=>{
                                      if((scholarName.filter((scholarNameMap)=>{
                                        if (searchList==""){return scholarNameMap}
                                        else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return scholarNameMap}
                                      }).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<><Accordion flush> 
                                            {scholarName.filter((scholarNameMap)=>{
                                                if (searchList==""){
                                                  return scholarNameMap
                                                }
                                                else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                    return scholarNameMap
                                                }
                                              }
                                            ).map((scholarNameMap,index)=>{
                                              return(<>
                                               <Student_ScholarBadget topic = {scholarNameMap.nameScholar} 
                                               eventKey={index}
                                                detail1={scholarNameMap.srcUpload}
                                                detail2={scholarNameMap.detailScholar}
                                                detail3={scholarNameMap.qualificationScholar}
                                                timestart={scholarNameMap.srcStartDate}
                                                timeend={scholarNameMap.srcEndDate}
                                                amountsch={scholarNameMap.amountScholar}
                                                normal={scholarNameMap.normalOrcontinue}
                                                />
                                          
                                              </>)
                                                  }
                                                    )
                                                    }
                                               </Accordion>  </>)}
                                                })()}
                                {/* {scholarName.map((scholarName) => (
                                  <Student_ScholarBadget topic = {scholarName.nameScholar} 
                                  detail1={scholarName.srcUpload}
                                  detail2={scholarName.detailScholar}
                                  detail3={scholarName.qualificationScholar}
                                  />))} */}
                            
                              </>)
                            }
                        })()}
                      
                      </>)
                    }
                })()}
                  </div>
              </div>
            </div>
        </div>
    </>);
  
}

export default Commitee_ListScholarship;
