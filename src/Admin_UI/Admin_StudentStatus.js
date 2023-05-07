import React, { Component, useState , useEffect,Fragment, useContext} from "react";
import {AuthContext} from "../Login/Authenticate";
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import TabDropdown from '../components/dropdown/TabDropdown';
import theJSON from '../components/findbox/test_data_find1.json'
import FormTextArea from '../components/form/FormTextArea';
import GroupRadio from '../components/radiobutton/GroupRadio';
import Card_Admin_Status from '../components/cardbadge/Card_Admin_Status';
import axios from "axios";
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import CheckBox from '../components/checkbox/CheckBox';

export default function Admin_StudentStatus(page){
  const {authState,user_ID,role} = useContext(AuthContext)




  
  const [stdname,setStdName] = useState('');
  const [searchList,setSearchList] = useState('');
  
  const [getID,setGetID] = useState('');
  const [status_Std,setStatus_Std] = useState("")
  const [title_Std,settitle_Std] = useState("")
  const [scholarName, setScholarName] = useState([]);
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const [yearScholar,setYearScholar] = useState("")//new! 
  const schoGetByYear = []
  const [addFund, setAddFund] = useState([])

   //=========================================================================
   const seeHiddenScholar = []
   const [seeClosedscholarName, setSeeClosedScholarName] = useState([]);
   const hiddenTag = [{list:"ทุนที่ปิด",parent:"ทุนที่ปิด"}]
   //checkbox
   const [usehiddenTag,setUsehiddenTag] = useState({ทุนที่ปิด:"",refresh:""})
   const checkboxSubmitHidden = (name,value) => {
    //console.log(value)
      setUsehiddenTag(usehiddenTag => ({
       ...usehiddenTag,
       [name]: (value?"":"ถูกเลือก")
     }
     ));
      
   

     

   };
 //==========================================================================
 


useEffect(function useSetGetYearScholarDB(){ ////new!
  axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
    setGetYearScholarDB(response.data); 
  }
  ,(err)=>{
    alert("ไม่สามารถดึงปีการศึกษา")
  }
  );
},[]) 

useEffect(function useSetSetScholarName(){ //
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
            "Round":schoFromDB[i].Round
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
            "Round":schoFromDB[i].Round
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
                  "Round":schoFromDB[i].Round
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
               "Round":schoFromDB[i].Round
             })}
            } 
        } 
        setScholarName(schoGetByYear)
        setSeeClosedScholarName(seeHiddenScholar)
    } 
  }
  );
},[yearScholar]) 

useEffect(function name() {
  //console.log(usehiddenTag.refresh)
  if(usehiddenTag.refresh===""){
    //console.log('yes');
    checkboxSubmitHidden('refresh','')
  }
  else{
   // console.log('no');
   checkboxSubmitHidden('refresh','ถูกเลือก')
  }
  
  
},[searchList])

  //*console.log(status_Std);
    return ( 
        <div><UI_Admin_StructureWebUI topic="สถานะของนิสิต" iconic="fas fa-user-circle" />
            <div className='containerNew'>
            <div className='layout-1'>
            <div className='header-l2' style={{marginTop:"-10px"}} >
             <div>จัดการสถานะ</div>
             <div style={{marginLeft:"650px"}}> 
             <form style={{marginLeft:"-780px",marginTop:'55px',position:"absolute"}}>
              <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
              <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
              </form>

             <div style={{marginLeft:"-170px"}}> 
             <CheckBox topic="ดูทุนที่ปิดแล้ว" data={hiddenTag} value={usehiddenTag} action={(e)=>checkboxSubmitHidden(e.target.name,e.target.value)}/>
             {/*console.log(usehiddenTag)*/}
             </div>
             {/* <div style={{marginTop:"-65px"}}> 
              <SelectorTwoFactor topic="เลือกปีของทุน" 
                          data={
                            getYearScholarDB.map((getYearScholarDB) => (
                              {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                            ))
                          } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                          />
              </div> */}
              </div>
              </div>
              <div className='body-l1' >
                <div className="scroller" style={{marginTop:"40px",height:"650px",overflow:"auto"}}>
               
                {(()=>{
                    if(usehiddenTag.refresh==="ถูกเลือก"){
                        return (<><div>
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
                                            <Card_Admin_Status   
                                              ScholarData ={seeClosedscholarNameMap} 
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
                    else if(usehiddenTag.ทุนที่ปิด===""){
                      return (<>
                      {(()=>{
                          if((scholarName.length)==0){
                            return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                              </div>
                              </>)
                          }
                          else{
                              if((scholarName.filter((scholarNameMap)=>{
                                if (searchList==""){return(
                                  scholarNameMap
                                )
                                  
                                  }
                                else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                  return(
                                    scholarNameMap
                                  )
                                }
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
                                   { scholarName.filter((scholarNameMap)=>{
                                        if (searchList==""){
                                          return scholarNameMap
                                        }
                                        else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return scholarNameMap
                                        }
                                      }
                                    ).map((scholarNameMap,index)=>{
                                      return(<> 
                                    <Card_Admin_Status   
                                      ScholarData ={scholarNameMap} 
                                      eventKey={index}
                                      />
                                       </> )
                                          }
                                            )
                                            
                                           } </Accordion>
                                           </>)}
                                                
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
                    if(usehiddenTag.ทุนที่ปิด=="ถูกเลือก"){
                        return (<>
                         {(()=>{
                          if((seeClosedscholarName.length)==0){
                            return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
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
                                            <Card_Admin_Status   
                                              ScholarData ={seeClosedscholarNameMap} 
                                              eventKey={index}
                                              />
                                              </>)
                                                  }
                                                    )
                                                    }
                                               </Accordion>  </>)}
                                                })()}
                          
                                            {/* <Accordion flush >
                                              {seeClosedscholarName.map((seeClosedscholarNameMap,index) => (
                                                <Card_Admin_Status   
                                              ScholarData ={seeClosedscholarNameMap} 
                                              eventKey={index}
                                              />))}
                                            </Accordion> */}

                                             </div></>)
                                                  }
                                              })()} 

                                              </>)
                                            }
                    else if(usehiddenTag.ทุนที่ปิด===""){
                      return (<>
                      {(()=>{
                          if((scholarName.length)==0){
                            return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                              </div>
                              </>)
                          }
                          else{
                              if((scholarName.filter((scholarNameMap)=>{
                                if (searchList==""){return(
                                  scholarNameMap
                                )
                                  
                                  }
                                else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                  return(
                                    scholarNameMap
                                  )
                                }
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
                                   { scholarName.filter((scholarNameMap)=>{
                                        if (searchList==""){
                                          return scholarNameMap
                                        }
                                        else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return scholarNameMap
                                        }
                                      }
                                    ).map((scholarNameMap,index)=>{
                                      return(<> 
                                    <Card_Admin_Status   
                                      ScholarData ={scholarNameMap} 
                                      eventKey={index}
                                      />
                                       </> )
                                          }
                                            )
                                            
                                           } </Accordion>
                                           </>)}
                                                
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
        </div>
    );

}
