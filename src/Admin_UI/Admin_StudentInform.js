import React, { Component, useState, useEffect, useContext } from "react";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import Card_Form from '../components/cardbadge/Card_Form';
import {AuthContext} from "../Login/Authenticate";
import {Container,Row,Accordion,Stack,Badge,Button} from 'react-bootstrap';
import ButtonIconGreen from "../components/button/ButtoIconGreen";
import { Link } from 'react-router-dom';
import TabDropdown from '../components/dropdown/TabDropdown';
import { Table } from 'react-bootstrap';
import Admin_Results from './Admin_Results';
import axios from "axios";
import StudentInform from '../components/form/StudentInform'
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import CheckBox from '../components/checkbox/CheckBox';
//Button
function Admin_StudentInform(){
  const {authState,user_ID,role} = useContext(AuthContext)





  const [scholar, setScholar] = useState([]);
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const [yearScholar,setYearScholar] = useState('')//for fliter scholar!
  

   //=========================================================================
  
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
  //search control
  const [searchList,setSearchList] = useState('');

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
    
    
  },[yearScholar])
  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
      setGetYearScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
    }
    );
  },[]) 

  useEffect(function useSetSetScholar(){ //
    const scholarCollection = []
    const seeHiddenScholar = []
      axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
        var schoFromDB = response.data
        if (yearScholar==='' || yearScholar==='เลือก'){
          for (let i = 0; i < schoFromDB.length; i++) {
            
              if(schoFromDB[i].statusScholar!='ปิดทุน'){
              scholarCollection.push({
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
          setScholar(scholarCollection)
          setSeeClosedScholarName(seeHiddenScholar)
        }
        else{
          for (let i = 0; i < schoFromDB.length; i++) {
            if ( parseInt(yearScholar)  === (schoFromDB[i].srcYear)) {
              if(schoFromDB[i].statusScholar===null){
              scholarCollection.push({
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
            })}else if(schoFromDB[i].statusScholar=='ปิดทุน'){
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
        setScholar(scholarCollection)
        setSeeClosedScholarName(seeHiddenScholar)
        } 
      }
      ,(err)=>{
        alert("ไม่สามารถดึงรายชื่อทุน")
      }
      );
    },[yearScholar])
  const [page,setPage] = useState(0)
  if(page===0){
    return ( 
      <div><UI_Admin_StructureWebUI topic="ข้อมูลทุนนิสิต" iconic="fas fa-edit"/>
        <div className='containerNew'>
        <div className='layout-1'>
        <div className='header-l2' style={{marginTop:"-10px"}} >
        <div>ข้อมูลทุนการศึกษา</div>
            <div style={{marginLeft:"607px"}}> 

            <form style={{marginLeft:"-780px",marginTop:'55px',position:"absolute"}}>
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
       <div class="scoller" style={{marginTop:"40px",height:"650px",overflow:"auto"}}>


       {(()=>{
            if(usehiddenTag.refresh==="ถูกเลือก"){
                return (<><div>
                {(()=>{
                    if(usehiddenTag.ทุนที่ปิด==="ถูกเลือก"){
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
                            return (<><div className='hidden'>
                              {(()=>{
                                      if((seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                        if (searchList==""){
                                          return seeClosedscholarNameMap
                                        }
                                        else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return seeClosedscholarNameMap
                                        }
                                      
                                      }
                                    ).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกด</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<>
                                          <Accordion flush>
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
                                                <Card_Form mode={0} ScholarId={seeClosedscholarNameMap.managescho_id} 
                                                    srcEndDate={seeClosedscholarNameMap.srcEndDate}
                                                    ScholarData={seeClosedscholarNameMap.nameScholar} 
                                                    processStatus={seeClosedscholarNameMap.processStatus}
                                                    eventKey={index}/>

                                                  </>)
                                                  }
                                                      )
                                                    }</Accordion>
                                                    </>)}
                                                })()}

                          {/* <Accordion>
                        {seeClosedscholarName.map((seeClosedscholarNameMap,indexS) => 
                          (<Card_Form ScholarId={seeClosedscholarNameMap.managescho_id} 
                            srcEndDate={seeClosedscholarNameMap.srcEndDate}
                            ScholarData={seeClosedscholarNameMap.nameScholar} 
                            eventKey={indexS}/>))}
                          </Accordion>  */}
                            
                            </div> 
                            </>)
                          }
                      })()} 
                        </>)
                    }
                    else{
                      return(<>
                       {(()=>{
                          if((scholar.length)==0){
                              return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                              </div>
                              </>)
                          }
                          else{
                            return (<>
                            {(()=>{
                                      if((scholar.filter((scholarName)=>{
                                        if (searchList==""){
                                          return scholarName
                                        }
                                        else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return scholarName
                                        }
                                      
                                      }
                                    ).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกด</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<>
                                          <Accordion flush>
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
                                                <Card_Form mode={0} ScholarId={scholarName.managescho_id} 
                                                    srcEndDate={scholarName.srcEndDate}
                                                    ScholarData={scholarName.nameScholar} 
                                                    processStatus={scholarName.processStatus}
                                                    eventKey={index}/>

                                                  </>)
                                                  }
                                                      )
                                                    }</Accordion>
                                                    </>)}
                                                })()}











                            {/* <Accordion>
                            {scholar.map((scholarName,index) => 
                            (<Card_Form ScholarId={scholarName.managescho_id} 
                              srcEndDate={scholarName.srcEndDate}
                              ScholarData={scholarName.nameScholar} 
                              eventKey={index}/>))}
                          </Accordion> */}
                          
                          
                          </>)
                          }
                      })()}
                      </>)
                    }
                })()}
               </div> </>)
                    }
                    else{
                      return(<>
                      {(()=>{
                    if(usehiddenTag.ทุนที่ปิด==="ถูกเลือก"){
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
                            return (<><div className='hidden'>
                              {(()=>{
                                      if((seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                        if (searchList==""){
                                          return seeClosedscholarNameMap
                                        }
                                        else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return seeClosedscholarNameMap
                                        }
                                      
                                      }
                                    ).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกด</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<>
                                          <Accordion flush>
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
                                                <Card_Form mode={0} ScholarId={seeClosedscholarNameMap.managescho_id} 
                                                    srcEndDate={seeClosedscholarNameMap.srcEndDate}
                                                    ScholarData={seeClosedscholarNameMap.nameScholar} 
                                                    processStatus={seeClosedscholarNameMap.processStatus}
                                                    eventKey={index}/>

                                                  </>)
                                                  }
                                                      )
                                                    }</Accordion>
                                                    </>)}
                                                })()}

                          {/* <Accordion>
                        {seeClosedscholarName.map((seeClosedscholarNameMap,indexS) => 
                          (<Card_Form ScholarId={seeClosedscholarNameMap.managescho_id} 
                            srcEndDate={seeClosedscholarNameMap.srcEndDate}
                            ScholarData={seeClosedscholarNameMap.nameScholar} 
                            eventKey={indexS}/>))}
                          </Accordion>  */}
                            
                            </div> 
                            </>)
                          }
                      })()} 
                        </>)
                    }
                    else{
                      return(<>
                       {(()=>{
                          if((scholar.length)==0){
                              return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                              </div>
                              </>)
                          }
                          else{
                            return (<>
                            {(()=>{
                                      if((scholar.filter((scholarName)=>{
                                        if (searchList==""){
                                          return scholarName
                                        }
                                        else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return scholarName
                                        }
                                      
                                      }
                                    ).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกด</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<>
                                          <Accordion flush>
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
                                                <Card_Form mode={0} ScholarId={scholarName.managescho_id} 
                                                    srcEndDate={scholarName.srcEndDate}
                                                    ScholarData={scholarName.nameScholar} 
                                                    processStatus={scholarName.processStatus}
                                                    eventKey={index}/>

                                                  </>)
                                                  }
                                                      )
                                                    }</Accordion>
                                                    </>)}
                                                })()}

                            {/* <Accordion>
                            {scholar.map((scholarName,index) => 
                            (<Card_Form ScholarId={scholarName.managescho_id} 
                              srcEndDate={scholarName.srcEndDate}
                              ScholarData={scholarName.nameScholar} 
                              eventKey={index}/>))}
                          </Accordion> */}
                          
                          
                          </>)
                          }
                      })()}
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
    );
  }else if(page===2){
  return( <><UI_Admin_StructureWebUI/>
    {/*StudentInform(user_ID,scholar,1,true,true)*/}
    <button type="button" class="btn btn-dark" onClick={() => setPage(1)} >ดูทุนอื่น</button>
    </>
  )
  }
}

export default Admin_StudentInform;