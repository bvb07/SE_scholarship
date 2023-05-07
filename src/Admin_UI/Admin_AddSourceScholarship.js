import React, { Component, useState , useEffect,Fragment, useContext} from "react";
import {AuthContext} from "../Login/Authenticate";
import axios from "axios";
import {DropdownButton,Dropdown,Form,Badge} from 'react-bootstrap';
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
import GroupRadio from "../components/radiobutton/GroupRadio";
import CheckBox from "../components/checkbox/CheckBox";
import Selector from "../components/selector/Selector"; 
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import FormInput from "../components/form/FormInput";
import FormInputEdit from "../components/form/FormInputEdit";
import FormTextArea from '../components/form/FormTextArea';
import FormNumber from "../components/form/FormNumber";
import DatePicker from "../components/datepicker/DatePicker";
import UploadFile from "../components/uploadfile/UploadFile";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import Admin_WeightPoint from './Admin_WeightPoint';
import Scholarbadget from '../components/scholarbadget/ScholarBadget';

import datason2 from ".././components/form/Package_StudentInform/mock-datatua3.json";
//page3
import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';


export default function Admin_AddSourceScholarship() {//main
    function refreshPage() {
      window.location.reload(false);
    }
    const {authState,user_ID,role} = useContext(AuthContext)




    
     //page3 Source===============================================================================
     //toDB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     const [nameSrcScholar, setNameSrcScholar] = useState('');
     const [addYearStep,setAddYearStep] = useState('')
     const [tel,setTel] = useState("");  
     const [detailAddr,setDetailAddr] = useState("")
     const [selectedDate,setSelectedDate] = useState('')
     //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     //fromDB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     const [getNameSrcScholarDB,setGetNameSrcScholarDB] = useState([])//DB
     const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
     function changePage(){
          window.location = "/Admin_Managescholarship"
       
      }
   
     const onSendSubmit = () => {
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        if((nameSrcScholar.trim()).length==0 || (selectedDate.trim()).length==0){
            alert("ชื่อไม่สามารถว่างได้ และ วันที่ไม่สามารถว่างได้")
          }
         if((tel.trim()).length!=9 && (tel.trim()).length!=10){
            alert("โปรดตรวจสอบเบอร์โทรศัพท์")
          }
          
          else{
          const uploadData_src = new FormData();
          uploadData_src.append('nameSrcScholar',nameSrcScholar)
          uploadData_src.append('tel',tel)
          uploadData_src.append('detailAddr',detailAddr)
          uploadData_src.append('selectedDate',selectedDate)
          
          axios.post("http://127.0.0.1:8000/SourceOfScholarship/",uploadData_src,config).then((x) => {
            //console.log("Send Success!!!");
          })
          
          alert("บันทึกสำเร็จ")
          refreshPage()
          }
    }
       
     //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   
     useEffect(function useSetGetNameSrcScholar(){ //
        axios.get("http://127.0.0.1:8000/SourceOfScholarship/").then((response)=>{
          setGetNameSrcScholarDB(response.data);
        }
        ,(err)=>{
          alert("ไม่สามารถดึงแหล่งที่มาได้")
        }
        );
      },[])
    
      const deleteSrcSholarship = (id) => {
        var answer = window.confirm("ยืนยันการลบ?\nข้อควรระวัง:\n-ทุนที่สร้างจากที่มานี้จะถูกลบ");
            if (answer) {
              axios.delete(`http://127.0.0.1:8000/SourceOfScholarship/${id}/`).then((response)=>{
                setGetNameSrcScholarDB(
                  getNameSrcScholarDB.filter((val) => {
                    return val.id != id;
                  })
                )
             alert("ลบสำเร็จ กำลังรีเฟรช")
        refreshPage()}
              )
    
            }
            else{
    
            }
      }
     return (<>
        <div className="popUpSureAddSou">
                        <div class="modal fade" id="ruSureModalAddSou" tabindex="-1" aria-labelledby="ruSureModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="ruSureModalAddSou">ยืนยันการเพิ่ม</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                              <div class="alert alert-info" role="alert" style={{fontSize:"20px",width:"450px"}}> <i class="fa fa-info-circle" aria-hidden="true"></i> สามารถตรวจสอบการเพิ่มได้ด้านล่าง</div>
                            
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ปิด</button>
                                <button type="button" class="btn btn-primary" onClick={onSendSubmit}>บันทึก</button>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
          <div>
            <UI_Admin_StructureWebUI topic="เพิ่มรายชื่อแหล่งที่มาของทุน" iconic="fas fa-list-alt"/>
          
            <div className='containerNew'>
              <div className="layout-l2" >
            <form class="was-validated" >
            <div >
              <div className='header-l2'>เพิ่มรายชื่อแหล่งที่มาของทุน</div>
                    <div className='body-l2'>
                      <div className='body-l2-left'>
                        <FormInput topic="แหล่งที่มาของทุน"  value={nameSrcScholar} onChange={(e)=>setNameSrcScholar(e.target.value)}/>
                        {/*console.log(nameSrcScholar)*/}
                        <FormNumber topic="เบอร์ติดต่อ" min={0} value={tel} onChange={(e)=>setTel(e.target.value)}/>
                        {/*console.log(tel)*/}
                        <FormTextArea topic="รายละเอียดที่อยู่"  value={detailAddr} onChange={(e)=>setDetailAddr(e.target.value)}/>
                        {/*console.log(detailAddr)*/}
                      </div>
                        
                      <div className='body-l2-right'>
                          <div className="calendar">
                          <DatePicker topic="วันที่ลงทะเบียน" onChange={(e)=>setSelectedDate(e.target.value)} />
                          {/*console.log(selectedDate)*/}
                          </div>
                      </div>
                    </div>
                    <div className='body-l2'>
                      <br/>
                      </div>
                    <div className='body-l2' style={{marginTop:"-20px"}}>
                      <button type="button" className='btn btn-success' style={{width:"200px"}}  data-bs-toggle="modal" data-bs-target="#ruSureModalAddSou" >เพิ่มประวัติ</button>
                      <button className='btn btn-warning' type="button" style={{width:"200px"}} onClick={()=>{changePage()}}>ย้อนกลับ</button>  
                    </div>
                  </div>
                  </form>
                  <div className='body-l1'><p1>รายชื่อแหล่งที่มาของทุน</p1></div>      
                  <div className='body-l1'>
                        <div>
                        <div className='result-test' style={{height:"270px",overflow:"auto"}}> 
                        <Accordion flush>
                        {getNameSrcScholarDB.map((getnameSrcScholar,index) => (
                                <Accordion.Item eventKey={index}>
                                  <AccordionHeader >
                                  <div className="illution">
                                    {index+1+". "+getnameSrcScholar.nameSrcScholar}
                                    </div>
                                    
                                    </AccordionHeader>
                                  <Accordion.Body >
                                    <div className='topic_col'>
                                  <label class="form-label">รายละเอียดที่อยู่ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                                    {(()=>{
                                      if(getnameSrcScholar.detailAddr===undefined){ 
                                        return (<>
                                       <label class="form-label">&nbsp;กำลังโหลด...</label>
                                       </>)
                                     }
                                     else{
                                       if((getnameSrcScholar.detailAddr).length===0){
                                            return (<>
                                            <label class="form-label">&nbsp;ไม่ได้กรอกที่อยู่</label>
                                            </>)
                                        }
                                        else{
                                          return(<>
                                          <label class="form-label">&nbsp;{getnameSrcScholar.detailAddr}</label>
                                          </>)
                                        }
                                     }




                                        
                                    })()}
                                  </div>
                                  <div className='topic_col'>
                                     <label class="form-label">เบอร์ติดต่อ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                                    {(()=>{
                                      if(getnameSrcScholar.tel===undefined){ 
                                        return (<>
                                       <label class="form-label">&nbsp;กำลังโหลด...</label>
                                       </>)
                                     }else{
                                       if((getnameSrcScholar.tel).length===0){
                                            return (<>
                                            <label class="form-label">&nbsp;ไม่ได้กรอกเบอร์โทร</label>
                                            </>)
                                        }
                                        else{
                                          return(<>
                                         <label class="form-label">&nbsp;{getnameSrcScholar.tel}</label>
                                          </>)
                                        }
                                     }  
                                    })()}
                                       </div>
                                       <div className='topic_col'>
                                    <label class="form-label">วันที่ทำการลงทะเบียน : </label>
                                    
                                    {(()=>{
                                      if(getnameSrcScholar.selectedDate===undefined){ 
                                        return (<>
                                       <label class="form-label">&nbsp;กำลังโหลด...</label>
                                       </>)
                                     }else{
                                       if((getnameSrcScholar.selectedDate).length===0){
                                            return (<>
                                            <label class="form-label">&nbsp;ไม่พบวันที่</label>
                                            </>)
                                        }
                                        else{
                                          return(<>
                                         <label class="form-label">&nbsp;{getnameSrcScholar.selectedDate}</label>
                                          </>)
                                        }
                                     }  
                                    })()}
                                    </div>
                                    <div>
                                      <Link to={`/Admin_EditSourceScholarship/${getnameSrcScholar.sourceofscho_id}`}> <button className='btn btn-warning'  >แก้ไข</button></Link>
                                      <button className='btn btn-danger' style={{marginLeft:"50px"}} onClick={()=>deleteSrcSholarship(getnameSrcScholar.sourceofscho_id)} >ลบ</button>
                                    </div>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                                </Accordion>            
                              </div>
                            </div>
                        </div> 
                        </div>
                      </div>
                  
                      </div>
                  </>);

}