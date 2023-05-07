import React, { Component, useState , useEffect,Fragment , useContext} from "react";
import axios from "axios";
import {DropdownButton,Dropdown,Form,Badge} from 'react-bootstrap';
import {AuthContext} from "../Login/Authenticate";
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
import GroupRadio from "../components/radiobutton/GroupRadio";
import CheckBox from "../components/checkbox/CheckBox";
import CheckBoxEdit from "../components/checkbox/CheckBoxEdit";
import Selector from "../components/selector/Selector";
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import FormInput from "../components/form/FormInput";
import FormInputEdit from "../components/form/FormInputEdit";
import FormTextArea from '../components/form/FormTextArea';
import FormNumber from '../components/form/FormNumber';
import DatePicker from "../components/datepicker/DatePicker";
import UploadFile from "../components/uploadfile/UploadFile";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import Scholarbadget from '../components/scholarbadget/ScholarBadget';

import datason2 from ".././components/form/Package_StudentInform/mock-datatua3.json";
//page3
import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';

function Admin_EditSourceScholarship(params) {
    function refreshPage() {
        window.location.reload(false);
      }
    const {authState,user_ID,role} = useContext(AuthContext)




    
    const {idEditSource} = useParams()

    const [nameSrcScholar, setNameSrcScholar] = useState('');
    const [tel,setTel] = useState("")
    const [detailAddr,setDetailAddr] = useState("")
    const [selectedDate_Edit,setSelectedDate_Edit] = useState("")
    const [getNameSrcScholarDB,setGetNameSrcScholarDB] = useState([])//DB
    
   

    const onSendAdminEditSource = (idEdit) =>{
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }

        if((nameSrcScholar.trim()).length==0 || (selectedDate_Edit.trim()).length==0){
          alert("ชื่อไม่สามารถว่างได้")
        }
        if((tel.trim()).length!=9 &&(tel.trim()).length!=10 ){
          alert("โปรดตรวจสอบเบอร์โทรศัพท์")
        }
        else{
          const uploadData = new FormData();
         
         uploadData.append('nameSrcScholar',nameSrcScholar)
         uploadData.append('detailAddr',detailAddr.trim())
         uploadData.append('selectedDate',selectedDate_Edit)
         uploadData.append('tel',tel)
         
           
         axios.put(`http://127.0.0.1:8000/SourceOfScholarship/${idEdit}/`,uploadData,config).then((x) => 
         {
          //console.log("Send Success!!!");
        
        alert("แก้ไขสำเร็จ")
         refreshPage()
        } ,(err)=>{
            alert("บันทึกไม่สำเร็จ โปรดตรวจสอบ:\nชื่อ และ วันที่ไม่สามารถว่างได้\nชื่อที่มาอาจถูกลบทำให้ไม่สามารถแก้ไขได้")
          }
        )
        }
         
         
        
      }
      const handleSubmitPage = (e) => {
        e.preventDefault()
        onSendAdminEditSource(idEditSource)
       
      };
      useEffect(function useSrcScholar() { //
        getSourceDB(parseInt(idEditSource))
        
    
    },[]) 

     const getSourceDB=(sourceIdEdit)=>{
        axios.get(`http://127.0.0.1:8000/SourceOfScholarship/${sourceIdEdit}/`).then((response)=>{
            var getEditSource = response.data
            //console.log(getEditSource);
            setGetNameSrcScholarDB(getEditSource)
            setNameSrcScholar(getEditSource.nameSrcScholar)
            setTel(getEditSource.tel)
            setDetailAddr(getEditSource.detailAddr)
            setSelectedDate_Edit(getEditSource.selectedDate)
           
        }
        ,(err)=>{
          alert("ไม่พบรายชื่อ โปรดลองอีกครั้ง")
          setGetNameSrcScholarDB({"nameSrcScholar":"ไม่พบรายชื่อ"})
        }
        );
     
    }
    return (<>
    <div className="popUpSureEditSou">
                  <div class="modal fade" id="ruSureModalEditSou" tabindex="-1" aria-labelledby="ruSureModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="ruSureModalEditSou">ยืนยันแก้ไข</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="alert alert-info" role="alert" style={{fontSize:"20px",width:"450px"}}> <i class="fa fa-info-circle" aria-hidden="true"></i> สามารถดูตรวจสอบการแก้ไขได้ด้านล่าง</div>
                      
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ปิด</button>
                          <button type="button" class="btn btn-primary" onClick={handleSubmitPage}>บันทึก</button>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>







        <div>
          <UI_Admin_StructureWebUI topic="แก้ไขแหล่งที่มาทุน" iconic="fas fa-list-alt"/>
        {
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
                        <DatePicker topic="วันที่ลงทะเบียน" value={selectedDate_Edit} onChange={(e)=>setSelectedDate_Edit(e.target.value)} />
                        {/*console.log(selectedDate_Edit)*/}
                        </div>
                    </div>
                  </div>
                  <div className='body-l2'>
                    <br/>
                    </div>
                  <div className='body-l2' style={{marginTop:"-20px"}}>
                    <button type="button" className='btn btn-success' style={{width:"200px"}} data-bs-toggle="modal" data-bs-target="#ruSureModalEditSou" >แก้ไข</button>
                    <Link to="/Admin_Managescholarship/SourceScholarship"><button className='btn btn-warning' style={{width:"200px"}} >ย้อนกลับ</button></Link>    
                  </div>
                </div>
                </form>
                <div className='body-l1'><p1>รายชื่อแหล่งที่มาของทุน</p1></div>      
                <div className='body-l1'>
                      <div>
                      <div className='result-test' style={{height:"270px",overflow:"auto"}}> 
                              <Accordion >
                              <Accordion.Item >
                                <AccordionHeader >  <div className="illution">
                                  {getNameSrcScholarDB.nameSrcScholar}
                              </div> </AccordionHeader>
                                <Accordion.Body >
                                <div className='topic_col'>
                                <label class="form-label">รายละเอียดที่อยู่ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                                    {(()=>{
                                         if(getNameSrcScholarDB.detailAddr===undefined){ 
                                           return (<>
                                          <label class="form-label">&nbsp;กำลังโหลด...</label>
                                          </>)
                                        }
                                        else{
                                          if((getNameSrcScholarDB.detailAddr).length===0){
                                             return (<>
                                         <label class="form-label">&nbsp;ไม่ได้กรอกที่อยู่</label>
                                            </>)
                                          }
                                          else{
                                            return(<>
                                             <label class="form-label">&nbsp;{getNameSrcScholarDB.detailAddr}</label>
                                       
                                          </>)
                                          } 
                                        }
                                    })()}
                                    </div>
                                    <div className='topic_col'>
                                    <label class="form-label">เบอร์ติดต่อ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                                    {(()=>{
                                        if(getNameSrcScholarDB.tel===undefined){
                                         return (<>
                                          <label class="form-label">&nbsp;กำลังโหลด...</label>
                                          </>)
                                        }
                                        else{
                                          if((getNameSrcScholarDB.tel).length===0){
                                             return (<>
                                              <label class="form-label">&nbsp;ไม่ได้กรอกเบอร์โทร</label>
                                            </>)
                                          }
                                          else{
                                            return(<>
                                           <label class="form-label">&nbsp;{getNameSrcScholarDB.tel}</label>
                                          </>)
                                          } 
                                        }
                                    })()}
                                    </div>
                                    <div className='topic_col'> 
                                    <label class="form-label">วันที่ทำการลงทะเบียน : </label>
                                    {(()=>{
                                        if(getNameSrcScholarDB.selectedDate===undefined){
                                         return (<>
                                          <label class="form-label">&nbsp;กำลังโหลด...</label>
                                          </>)
                                        }
                                        else{
                                          if((getNameSrcScholarDB.selectedDate).length===0){
                                             return (<>
                                              <label class="form-label">&nbsp;ไม่พบวันที่</label>
                                            </>)
                                          }
                                          else{
                                            return(<>
                                           <label class="form-label">&nbsp;{getNameSrcScholarDB.selectedDate}</label>
                                          </>)
                                          } 
                                        }
                                    })()}
                                   </div>
                                </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                        </div>
                      </div>
                      </div> 
                      </div>
                    </div>
                }
        </div>
     </> );


}

export default Admin_EditSourceScholarship;