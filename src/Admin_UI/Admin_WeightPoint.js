import React, { Component, useState , useEffect,Fragment, useContext} from "react";
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import {DropdownButton,Dropdown,Accordion,Form} from 'react-bootstrap';
import {AuthContext} from "../Login/Authenticate";
import TabDropdown from '../components/dropdown/TabDropdown';
import '../Layout/Layout.css';
import axios from "axios";
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import FormInput from "../components/form/FormInput";
import FormTextArea from "../components/form/FormTextArea";
import GroupRadio from "../components/radiobutton/GroupRadio";
import WeightBadget from "../components/scholarbadget/WeightBadget";

import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';







/*npm install --save react-hook-use-state*/ 


          

export default function WeightPoint() {
  
  //Modal
  const {authState,user_ID,role} = useContext(AuthContext)




  
  const [getWeightScholarship,setGetWeightScholarship] = useState('')
  const [getMessScholarship,setGetMessScholarship] = useState('')
  const [setWeight,setSetWeight]  = useState('')
  const weightRadio = [{list:"1"},{list:"2"},{list:"3"},{list:"4"},{list:"5"}]

  const [scholarName, setScholarName] = useState([]);

  const [scholarNameYearSelect, setScholarNameYearSelect] = useState([]);

  const [getWeightByScholar,setGetWeightByScholar] = useState([])
  const [getscholarName, setGetScholarName] = useState('');
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const [getWeightScholarDB,setGetWeightScholarDB] = useState([])//DB
  const [yearScholar,setYearScholar] = useState('')//new!
  const [addFund, setAddFund] = useState([])

  const [getNameWeight, setGetNameWeight] = useState([])

  const [breakLoop,setBreakLoop] = useState(false)
  const schoGetByYear = []
  //const  schoGetByYear = []
  
  const  receiveNameWeight = []

  const deleteSholarshipWeight = (id,process) => {
    if(parseInt(process)>=2){
      alert("ไม่สามารถลบเกณฑ์ได้ เนื่องจากทุนอยู่ในช่วงสัมภาษณ์ หรือ พ้นช่วงสัมภาษณ์แล้ว")
    }
    else{
      var answer = window.confirm("ยืนยันการลบเกณฑ์?\nการบันทึกคะแนนทั้งหมดจะสูญหาย\nหากตกลงไม่สามารถย้อนกลับได้");
    if (answer) {
      axios.delete(`http://localhost:8000/Weightcriteriapoint/${id}/`).then((response)=>{
      setGetWeightScholarDB(
        scholarName.filter((val) => {
          return val.id != id;
        })
      )
    alert("ไม่สามารถดึงเกณฑ์")
  refreshPage()})
      
    }
    }

    
    
    
  
}
  function changePage(){
    window.location = "/Admin_Managescholarship"
  }

  function refreshPage() {
    window.location.reload(false);
  }
  const submitWeightPoint= (e) => {
    e.preventDefault()
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    //console.log("chk check 93")
    
    
        let chkExist = false
        if((getWeightScholarship.trim()).length==0){
          alert("ชื่อเกณฑ์ไม่สามารถว่างได้")
        }
       
        else{
            for (let i = 0; i < getNameWeight.length; i++) {
              if(parseInt(getNameWeight[i].processStatus)>=2){
                alert("ไม่สามารถแก้ไขเกณฑ์ได้ เนื่องจากทุนอยู่ในช่วงสัมภาษณ์ หรือ พ้นช่วงสัมภาษณ์แล้ว")
                chkExist = true
                break
              }
              else{
                if ( getWeightScholarship.trim() === (getNameWeight[i].criterianame)) {
              //console.log('same same')
              //console.log(getNameWeight[i].weight_id)
              const uploadData = new FormData();
          // uploadData.append('criterianame',getWeightScholarship)
            uploadData.append('message',getMessScholarship)
            uploadData.append('weightpoint',parseInt(setWeight))
            uploadData.append('managescho_id',getscholarName)
            axios.put(`http://localhost:8000/Weightcriteriapoint/${getNameWeight[i].weight_id}/`,uploadData,config).then((x) => 
            {
            //console.log("Send Success UPDATE!!!");
            alert("แก้ไขสำเร็จ")
            refreshPage()
            })
              chkExist =true;
            } 
              }



           
          }
          if(!chkExist){
           
            //console.log('new new')
            const uploadData = new FormData();
            uploadData.append('criterianame',getWeightScholarship)
            uploadData.append('message',getMessScholarship)
            uploadData.append('weightpoint',parseInt(setWeight))
            uploadData.append('managescho_id',getscholarName)
            axios.post("http://localhost:8000/Weightcriteriapoint/",uploadData,config).then((x) => 
            {
              //console.log("Send Success ADD!!!");
            
            alert("เพิ่มสำเร็จ") 
            
            refreshPage()
          })}
        }
   
    
  
    
}

  useEffect(function useYearSelect(){ 
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      var schoFromDB = response.data
      setGetScholarName('')
      if (yearScholar==='' || yearScholar==='เลือก'){
        setGetScholarName('')
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
            }
              )
            }
        } 
        setAddFund(schoGetByYear)
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
                }
                  )
                }
              } 
          } 
          setAddFund(schoGetByYear)
      }
    }
    );

    },[yearScholar])
  //useEffect(setAddFund(schoGetByYear))
  
  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
      setGetYearScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
    }
    );
  },[]) 
  useEffect(function useSetWeightScholar(){ //
    if(getscholarName==='' || getscholarName==='เลือก'){
        //console.log('space')
    }
    else{axios.post(`http://localhost:8000/queryWeightManagescholarship`,[parseInt(getscholarName)]).then((response)=>{
      setGetWeightByScholar(response.data);
      setGetNameWeight(response.data)
      
    }
    ,(err)=>{
      alert("ไม่สามารถดึงเกณฑ์ของทุน")
    }
    );
  }
    
  },[getscholarName]) 
  
  useEffect(function useSetSetScholarName(){ //
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      setScholarName(response.data);
      
    }
    ,(err)=>{
      alert("ไม่สามารถดึงรายชื่อทุน")
    }
    );
  },[]) 
   
  //setAddFund(schoGetByYear)
  return ( <><UI_Admin_StructureWebUI topic="เกณฑ์การให้คะแนน" iconic="fas fa-list-alt"/>
  <div className="popup_add_weight" class='was-validated'>
          <div class="modal fade" id="addWeight" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addWeightLabel" aria-hidden="true" >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title" id="addWeightLabel">หัวข้อเกณฑ์</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form  onSubmit= {(e) => submitWeightPoint(e)} class='was-validated' >
                     <div class="modal-body">
                        <div className='row'>
                        <div class="alert alert-warning" role="alert" style={{fontSize:"20px",width:"450px"}}><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Tip : การใช้ชื่อเกณฑ์ซ้ำจะเป็นการแก้ไขที่มีอยู่</div>
                                        
                          <FormInput topic="ชื่อ"  value={getWeightScholarship} onChange={(e)=>setGetWeightScholarship(e.target.value)}/>
                          {/*console.log(getWeightScholarship)*/}
                          <FormTextArea topic="ข้อความ"  value={getMessScholarship} onChange={(e)=>setGetMessScholarship(e.target.value)}/>
                          {/*console.log(getMessScholarship)*/}  
                          <GroupRadio topic="ความสำคัญ [น้ำหนัก]: " data={weightRadio} value={setWeight} onChange={(e)=>setSetWeight(e.target.value)}/>          
                          {/*console.log(setWeight)*/}
                        </div>
                        <div class="modal-footer">
                        <button type="button"  data-bs-dismiss="modal" class="btn btn-danger">ยกเลิก</button>
                        <button type="submit" class="btn btn-primary" >สร้าง</button>
                      </div>
                    </div>
                   </form>
              </div>
            </div>
          </div>
      </div>


    <div className='containerNew'>
    <div >
      <div >
      {/* <SelectorTwoFactor topic="ปีการศึกษา" 
      data={
        getYearScholarDB.map((getYearScholarDB) => (
          {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
        ))
      } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
      />  */}
      {/* <SelectorTwoFactor topic="เลือกทุน" 
                data={
                  schoGetByYear.map((getscholarNameMap) => (
                    {list:getscholarNameMap.nameScholar,id:getscholarNameMap.managescho_id}
                  ))
                } 
                value={getscholarName} 
                onChange={(e)=>setGetScholarName(e.target.value)}
      /> */}
      </div>
       <div  className='layout-2'>
       {(()=>{
              if(yearScholar==='' || yearScholar==='เลือก')
                     {
                         return (<>
                              <div className='header-l2'>
                                <div class="alert alert-danger" role="alert" style={{width:"400px"}}> โปรดเลือกปีการศึกษา</div> 
                            </div>
                         
                         <div className='body-l2'>
                          <div className="body-l2-left">
                                <SelectorTwoFactor topic="ปีการศึกษา" 
                                    data={

                                      getYearScholarDB.map((getYearScholarDB) => (
                                        {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                                      ))
                                    } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                                    /> 
                            <br/>
                            <br/>
                    <button  class="btn btn-warning" type="button" style={{width:"350px"}} onClick={changePage}>ย้อนกลับ</button>
                         
                          </div>
                          <div className="body-l2-right">
                          <div class="alert alert-info" role="alert" style={{width:"500px"}}> โปรดดำเนินการทางซ้ายให้เสร็จสิ้น</div> 
                          </div>
                        </div> 
                        </> )
                     }
              else if(getscholarName==='' || getscholarName==='เลือก'){
                //console.log(getNameWeight);
                       {/*console.log(addFund)*/}
                      //setAddFund(schoGetByYear)
                     {/*console.log('year-->scholar')*/}
                      return (<>
                     {/*console.log('fffffffffffffffff')*/} 
                     <div className='header-l2'>
                            <div class="alert alert-danger" role="alert" style={{width:"400px"}}> โปรดเลือกชื่อทุน</div> 
                        </div>
                     <div className='body-l2'>
                        <div className="body-l2-left">
                        <SelectorTwoFactor topic="ปีการศึกษา" 
                                  data={
                                    getYearScholarDB.map((getYearScholarDB) => (
                                      {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                                    ))
                                  } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                                /> 
                              <SelectorTwoFactor topic="เลือกทุน" 
                                        data={
                                          addFund.map((getscholarMap) => (
                                            {list:getscholarMap.nameScholar,id:getscholarMap.managescho_id}
                                          )
                                        )
                                        } 
                                    value={getscholarName} 
                                    onChange={(e)=>setGetScholarName(e.target.value)}
                                />
                                <br/>
                             <br/>
                     <Link to="/Admin_Managescholarship"> <button  type="button" class="btn btn-warning" style={{width:"350px"}}>ย้อนกลับ</button></Link>
                        </div>             
                              <div className="body-l2-right">
                              <div class="alert alert-info" role="alert" style={{width:"500px"}}> โปรดดำเนินการทางซ้ายให้เสร็จสิ้น</div> 
                             </div>
                        </div>
                      </> )
                     }
              else{
                    return(<>
                         {/*console.log('year&&scholar')*/}
                         <div className='header-l2'>
                            <div class="alert alert-success" role="alert" style={{width:"400px"}}> โปรดกำหนดเกณฑ์</div> 
                        </div>
                         <div className='body-l2'>
                           
                          <div className="body-l2-left">
                          <SelectorTwoFactor topic="ปีการศึกษา" 
                                    data={
                                      getYearScholarDB.map((getYearScholarDB) => (
                                        {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                                      ))
                                    } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                                    /> 
                                  <SelectorTwoFactor topic="เลือกทุน" 
                                        data={
                                          addFund.map((getscholarMap) => (
                                            {list:getscholarMap.nameScholar,id:getscholarMap.managescho_id}       
                                          ))
                                        } value={getscholarName} onChange={(e)=>setGetScholarName(e.target.value)}
                                />
                            <br/>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addWeight" style={{width:"350px"}}>เพิ่ม/แก้ไข เกณฑ์การให้คะแนน</button>
                            <br/>
                     <Link to="/Admin_Managescholarship"> <button  type="button" class="btn btn-warning" style={{width:"350px"}}>ย้อนกลับ</button></Link>
                         
                           </div>       
                            <div className="body-l2-right"> 
                    {(()=>{
                    if((getWeightByScholar.length)===0){
                        return (<>
                             <div class="alert alert-secondary" role="alert" style={{width:"500px"}}> ไม่พบเกณฑ์</div> 
                        </>)
                    }
                      else{
                        return (<>
                        <div class="alert alert-info" role="alert" style={{marginTop:"-50px",width:"500px"}}> รายชื่อเกณฑ์</div> 
                        <div className="scroller" style={{marginTop:"20px",marginLeft:"-200px",height:"600px",overflow:"auto"}}>
                        <Accordion flush>
                                {getWeightByScholar.map((weightPoint, index) => (
                                <WeightBadget topic = {index+1+". "+weightPoint.criterianame} eventKey={index}
                                weightInput ={weightPoint.weightpoint}
                                detailInput = {weightPoint.message}
                                actionDelete={()=>deleteSholarshipWeight(weightPoint.weight_id,weightPoint.processStatus)}
                                />
                                ))
                                } </Accordion >
                            </div>
                          </>)
                      }
                    })()} 
                            </div>
                        </div>
                      </> )
                     }
                })()}

               
            </div>
    
      </div>

    </div>



 </> );
}