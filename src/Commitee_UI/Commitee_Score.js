//import '../Admin_UI/Admin_StudentInform.css'
import React, { Component, useState, useEffect, useContext } from "react";
import UI_Commitee_StructureWebUI from './UI_Commitee_StructureWebUI';
import Card_Form from '../components/cardbadge/Card_Form';
import {Container,Row,Accordion,Stack,Badge,Button} from 'react-bootstrap';
import ButtonIconGreen from "../components/button/ButtoIconGreen";
import { Link } from 'react-router-dom';
import TabDropdown from '../components/dropdown/TabDropdown';
import { Table } from 'react-bootstrap';
import axios from "axios";
import StudentInform from '../components/form/StudentInform'
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import CheckBox from "../components/checkbox/CheckBox"
import {AuthContext} from "../Login/Authenticate"







function Commitee_Score(){

  const {authState,user_ID,role} = useContext(AuthContext)

  // if (!authState || role != "Committee") {
  //     window.location = "/Login_All"
  //   }

  
  const [scholar, setScholar] = useState([]);
  const [yearScholar,setYearScholar] = useState('')//for fliter scholar!

  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const schoGetByYear = []

  //search control
  const [searchList,setSearchList] = useState('');



   //=========================================================================
   const seeHiddenScholar = []
   const [seeClosedscholarName, setSeeClosedScholarName] = useState([]);
   const hiddenTag = [{list:"ทุนที่ปิด",parent:"ทุนที่ปิด"}]
   //checkbox
   const [usehiddenTag,setUsehiddenTag] = useState({ทุนที่ปิด:"",refresh:""})
   const checkboxSubmitHidden = (name,value) => {
     setUsehiddenTag(usehiddenTag => ({
       ...usehiddenTag,
       [name]: (value?"":"ถูกเลือก")
     }));
   };


   //==========================================================================




  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
      setGetYearScholarDB(response.data);
      //console.log("test : ",setGetYearScholarDB.acayear_id)

    
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
    }
    );
  },[]) 
 


  useEffect(function useSetSetScholar(){ //
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
                "processStatus":schoFromDB[i].processStatus
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
               "processStatus":schoFromDB[i].processStatus
             })}
          } 
        setScholar(schoGetByYear)
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
                    "processStatus":schoFromDB[i].processStatus
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
                   "processStatus":schoFromDB[i].processStatus
                 })}
                } 
            } 
            setScholar(schoGetByYear)
            setSeeClosedScholarName(seeHiddenScholar)
        }


        //setScholar(response.data);
      }
      ,(err)=>{
        alert("ไม่สามารถดึงรายชื่อทุน")
      }
      );
    },[yearScholar])

  const [page,setPage] = useState(0)

  useEffect(function name() {
    //console.log(usehiddenTag.refresh)
    if(usehiddenTag.refresh==""){
      //console.log('yes');
      checkboxSubmitHidden('refresh','')
    }
    else{
     // console.log('no');
     checkboxSubmitHidden('refresh','ถูกเลือก')
    }
    
    
  },[searchList])

  useEffect(function name2() {
    //console.log(usehiddenTag.refresh)
    if(usehiddenTag.refresh=="ถูกเลือก"){
      //console.log('yes');
      checkboxSubmitHidden('refresh','ถูกเลือก')
    }
    else{
      //console.log('no');
     checkboxSubmitHidden('refresh','')
    }
    
    
  },[yearScholar])


  if(page===0){
    return ( <>
      <div><UI_Commitee_StructureWebUI topic="การลงคะแนน" iconic="fas fa-edit"/> </div>
        <div className='containerNew'>
        <div className='layout-1'>
        <div className='header-l2' style={{marginTop:"-10px"}} >
            <div style={{width:"600px",position:"absolute",fontWeight:'bold'}}>ข้อมูลทุนการศึกษาเเละการลงคะเเนนของนิสิต</div>
            
           <div style={{marginLeft:"730px"}}> 
           <form style={{marginLeft:"-745px",marginTop:'55px',position:"absolute"}}>
              <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
              <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
              </form>
           <div style={{marginLeft:"-170px"}}> 
             <CheckBox topic="ดูทุนที่ปิดแล้ว" data={hiddenTag} value={usehiddenTag} action={(e)=>checkboxSubmitHidden(e.target.name,e.target.value)}/>
         
             {/*console.log(usehiddenTag)*/}
             </div>
             {/* <div style={{marginTop:"-65px"}}> 
           <span class="d-inline-block" data-bs-toggle="tooltip" title="เลือกปีการศึกษาสำหรับกรองทุน">
           <SelectorTwoFactor topic="ปีการศึกษา" 
                                  data={
                                    getYearScholarDB.map((getYearScholarDB) => (
                                      {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                                    ))
                                  } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                                /> 
                </span>
                </div> */}
            </div> 
          </div> 
            {/* <div className='ms-auto'>
              <div onClick={()=>setPage(1)}>
              </div>
            </div> */}
       
        <div className="body-l1">
          <div class="scroller" style={{marginTop:"30px",height:"640px",overflow:"auto"}}>


          {(()=>{
                    if(usehiddenTag.refresh=="ถูกเลือก"){
                        return (<><div>
                        
                        {(()=>{
                if(usehiddenTag.ทุนที่ปิด =="ถูกเลือก"){
                    return (<>
                    {(()=>{
                      if((seeClosedscholarName.length)== 0){
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
                                    return (<><Accordion> 
                                        {seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                            if (searchList==""){
                                              return seeClosedscholarNameMap
                                            }
                                            else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                return seeClosedscholarNameMap
                                            }
                                          }
                                        ).map((seeClosedscholarNameMap,index)=>{
                                          return(<><div>
                                          <Card_Form mode={1} 
                                            ScholarId={seeClosedscholarNameMap.managescho_id} 
                                            srcEndDate={seeClosedscholarNameMap.srcEndDate}
                                            ScholarData={seeClosedscholarNameMap.nameScholar} 
                                            processStatus={seeClosedscholarNameMap.processStatus}
                                            eventKey={index}/>
                                        
                                         </div> </>)
                                              }
                                                )
                                                }
                                            </Accordion>  </>)}
                                            })()}

                                            {/* <Accordion>
                                      {seeClosedscholarName.map((seeClosedscholarName,index) => 
                                      (<Card_Form mode={1} 
                                        ScholarId={seeClosedscholarName.managescho_id} 
                                        srcEndDate={seeClosedscholarName.srcEndDate}
                                        ScholarData={seeClosedscholarName.nameScholar} 
                                        eventKey={index}/>))}
                                      </Accordion>  */}
                                            </>)
                                            }
                                        })()} 
                                          </>)
                                      }
                                      else{
                                        return(<>
                                                {(()=>{
                                              if((scholar.length)== 0){
                                                  return (<>
                                                  <div class="alert alert-warning" role="alert">
                                                    <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                  </div>
                                                  </>)
                                              }
                                              else{
                                                return (<> <div>
                                                      {(()=>{
                                                        if((scholar.filter((scholarName)=>{
                                                          if (searchList==""){return scholarName}
                                                          else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return scholarName}
                                                        }).length)==0){
                                                            return (<>
                                                            <div class="alert alert-warning" role="alert">
                                                                  <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                                  <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                                                </div>
                                                            </>)
                                                        }
                                                        else{
                                                          return (<><Accordion> 
                                                              {scholar.filter((scholarName)=>{
                                                                  if (searchList==""){
                                                                    return scholarName
                                                                  }
                                                                  else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                                      return scholarName
                                                                  }
                                                                }
                                                              ).map((scholarName,index)=>{
                                                                return(<><div>
                                                                <Card_Form mode={1} 
                                                                    ScholarId={scholarName.managescho_id} 
                                                                    srcEndDate={scholarName.srcEndDate}
                                                                    ScholarData={scholarName.nameScholar} 
                                                                    processStatus={scholarName.processStatus}
                                                                    eventKey={index}/>
                                                               </div> </>)
                                                                    }
                                                                      )
                                                                      }
                                                                </Accordion></>)}
                                                                  })()}
                                                  
                                                {/* <Accordion>
                                              {scholar.map((scholarName,index) => (
                                              <Card_Form mode={1} 
                                              ScholarId={scholarName.managescho_id} 
                                              srcEndDate={scholarName.srcEndDate}
                                              ScholarData={scholarName.nameScholar} 
                                              eventKey={index}/>))}
                                              </Accordion>  */}
                                                
                              </div></>)
                            }
                        })()}
                      </>)
                    }
                })()} 
                        
                        
                        
                        </div> </>)
                    }
                    else{
                      return(<><div>
                      
                      {(()=>{
                if(usehiddenTag.ทุนที่ปิด =="ถูกเลือก"){
                    return (<>
                    {(()=>{
                      if((seeClosedscholarName.length)== 0){
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
                                    return (<><Accordion> 
                                        {seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                            if (searchList==""){
                                              return seeClosedscholarNameMap
                                            }
                                            else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                return seeClosedscholarNameMap
                                            }
                                          }
                                        ).map((seeClosedscholarNameMap,index)=>{
                                          return(<><div>
                                          <Card_Form mode={1} 
                                            ScholarId={seeClosedscholarNameMap.managescho_id} 
                                            srcEndDate={seeClosedscholarNameMap.srcEndDate}
                                            ScholarData={seeClosedscholarNameMap.nameScholar} 
                                            processStatus={seeClosedscholarNameMap.processStatus}
                                            eventKey={index}/>
                                        
                                         </div> </>)
                                              }
                                                )
                                                }
                                            </Accordion>  </>)}
                                            })()}

                                            {/* <Accordion>
                                      {seeClosedscholarName.map((seeClosedscholarName,index) => 
                                      (<Card_Form mode={1} 
                                        ScholarId={seeClosedscholarName.managescho_id} 
                                        srcEndDate={seeClosedscholarName.srcEndDate}
                                        ScholarData={seeClosedscholarName.nameScholar} 
                                        eventKey={index}/>))}
                                      </Accordion>  */}
                                            </>)
                                            }
                                        })()} 
                                          </>)
                                      }
                                      else{
                                        return(<>
                                                {(()=>{
                                              if((scholar.length)== 0){
                                                  return (<>
                                                  <div class="alert alert-warning" role="alert">
                                                    <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                  </div>
                                                  </>)
                                              }
                                              else{
                                                return (<> <div>
                                                      {(()=>{
                                                        if((scholar.filter((scholarName)=>{
                                                          if (searchList==""){return scholarName}
                                                          else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return scholarName}
                                                        }).length)==0){
                                                            return (<>
                                                            <div class="alert alert-warning" role="alert">
                                                                  <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                                  <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                                                </div>
                                                            </>)
                                                        }
                                                        else{
                                                          return (<><Accordion> 
                                                              {scholar.filter((scholarName)=>{
                                                                  if (searchList==""){
                                                                    return scholarName
                                                                  }
                                                                  else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                                      return scholarName
                                                                  }
                                                                }
                                                              ).map((scholarName,index)=>{
                                                                return(<>
                                                                <Card_Form mode={1} 
                                                                    ScholarId={scholarName.managescho_id} 
                                                                    srcEndDate={scholarName.srcEndDate}
                                                                    ScholarData={scholarName.nameScholar} 
                                                                    processStatus={scholarName.processStatus}
                                                                    eventKey={index}/>
                                                                </>)
                                                                    }
                                                                      )
                                                                      }
                                                                </Accordion></>)}
                                                                  })()}
                                                  
                                                {/* <Accordion>
                                              {scholar.map((scholarName,index) => (
                                              <Card_Form mode={1} 
                                              ScholarId={scholarName.managescho_id} 
                                              srcEndDate={scholarName.srcEndDate}
                                              ScholarData={scholarName.nameScholar} 
                                              eventKey={index}/>))}
                                              </Accordion>  */}
                                                
                              </div></>)
                            }
                        })()}
                      </>)
                    }
                })()} 


</div> </>)
                    }
                })()}



































             
         </div>
        </div>
        </div>
        </div>
    </>);
    
  }

}

export default Commitee_Score;
