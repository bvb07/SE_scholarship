import {Card,Button,Accordion,ListGroup,Stack,ProgressBar,Container,Row,Col,Badge} from 'react-bootstrap';
import React, { Component, useState , useEffect,Fragment , useContext} from "react";
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
import {AuthContext} from "../Login/Authenticate";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import TabDropdown from '../components/dropdown/TabDropdown';
import theJSON from '../components/findbox/test_data_find1.json'

import FormTextArea from '../components/form/FormTextArea';
import GroupRadioForStatus from '../components/radiobutton/GroupRadioForStatus';
import Card_Form from '../components/cardbadge/Card_Admin_Status';
import axios from "axios";
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import '../components/status/Status.css'
export default function Admin_Statuslook(){
    function refreshPage() {
        window.location.reload(false);
      }
    const {authState,user_ID,role} = useContext(AuthContext)
    const [list_Status,setList_Status] = useState([]);
    const{register_id} = useParams()
    const [message,setMessage] = useState("")
    const [status,setStatus] = useState("")
    const [statusCheck,setStatusCheck] = useState("")
    const [statusInterview,setStatusInterview] = useState("")
    const [statusTransfer,setStatusTransfer] = useState("")
    const [statusReceipt,setStatusReceipt] = useState("")

    const [statusCheck_Show,setStatusCheck_Show] = useState("")
    const [statusInterview_Show,setStatusInterview_Show] = useState("")
    const [statusTransfer_Show,setStatusTransfer_Show] = useState("")
    const [statusReceipt_Show,setStatusReceipt_Show] = useState("")


    const [nameQuery,setNameQuery] = useState([])
    
    const radio_group = [{list:"ผ่าน",state:1},{list:"มีปัญหา",state:2},{list:"ไม่ผ่าน",state:3}]
    {/*console.log("statusCheck_Show",statusCheck_Show)*/}

    const [getManageScholar,setGetManageScholar] = useState([])
    function changePage(e){
        e.preventDefault()
        window.location = "/Admin_StudentStatus"
      }
    useEffect(function useSetSetScholarName(){ //
        axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
          var schoFromDB = response.data
        
          
          setGetManageScholar(schoFromDB)
          
       
          
          
        }
        ,(err)=>{
          alert("ไม่สามารถดึงรายชื่อทุน")
        }
        );
      },[]) 

    useEffect( function useSetGetRegDB(){
         axios.get(`http://127.0.0.1:8000/RegisterScholarship/${register_id}/`).then((response)=>{
            var reg_buffer = response.data
            setList_Status(reg_buffer)
            setStatusCheck(reg_buffer.statusCheck)
            setStatusInterview(reg_buffer.statusInterview)
            setStatusTransfer(reg_buffer.statusTransfer)
            setStatusReceipt(reg_buffer.statusReceipt)
            //console.log(reg_buffer)
        })
         axios.post("http://127.0.0.1:8000/queryAdminshowstudentstatusspecific",[parseInt(register_id)]).then((response1)=>{
            setNameQuery(response1.data[0]);  
            //console.log(nameQuery.processStatus)

        }) 
    },[])
    const submitCheck = (e,set,val) => {
        e.preventDefault()
        set(val)
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        if (val == ""){
            alert("กรุณาเลือกสถานะของนิสิต")
        }else{
            var answer = window.confirm("ยืนยันการให้สถานะนิสิต?");
            if (answer) {
                if(statusCheck_Show == 3){
                    const uploadData = new FormData();
                    uploadData.append('statusCheck',3)
                    uploadData.append('statusInterview',3)
                    uploadData.append('statusTransfer',3)
                    uploadData.append('statusReceipt',3)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                    })
                }else if(statusCheck_Show == 1 || statusCheck_Show == 2){
                    const uploadData = new FormData();
                    // uploadData.append('criterianame',getWeightScholarship)
                    uploadData.append('statusCheck',statusCheck_Show)
                    //uploadData.append('statusInterview',statusInterview)
                    //uploadData.append('statusTransfer',statusTransfer)
                    //uploadData.append('statusReceipt',statusReceipt)
                    uploadData.append('message',message)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                })
                }
            }
        }
    } 

    const submitInterview = (e,set,val) => {
        e.preventDefault()
        set(val)
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        if (val == ""){
            alert("กรุณาเลือกสถานะของนิสิต")
        }else{
            var answer = window.confirm("ยืนยันการให้สถานะนิสิต?");
            if (answer) {
                if(statusInterview_Show == 3){
                    const uploadData = new FormData();
                    uploadData.append('statusInterview',3)
                    uploadData.append('statusTransfer',3)
                    uploadData.append('statusReceipt',3)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                    })
                }else if(statusInterview_Show == 1 || statusInterview_Show == 2){
                    const uploadData = new FormData();
                    //uploadData.append('criterianame',getWeightScholarship)
                    //uploadData.append('statusCheck',statusCheck)
                    uploadData.append('statusInterview',statusInterview_Show)
                    //uploadData.append('statusTransfer',statusTransfer)
                    //uploadData.append('statusReceipt',statusReceipt)
                    uploadData.append('message',message)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                    })
                }
            }
        }
    } 

    const submitTranfer = (e,set,val) => {
        e.preventDefault()
        set(val)
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        if (val == ""){
            alert("กรุณาเลือกสถานะของนิสิต")
        }else{
            var answer = window.confirm("ยืนยันการให้สถานะนิสิต?");
            if (answer) {
                if(statusTransfer_Show == 3){
                    const uploadData = new FormData();
                    uploadData.append('statusTransfer',3)
                    uploadData.append('statusReceipt',3)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                    })
                }else if(statusTransfer_Show == 1 || statusTransfer_Show == 2){
                    const uploadData = new FormData();
                    // uploadData.append('criterianame',getWeightScholarship)
                    //uploadData.append('statusCheck',statusCheck)
                    //uploadData.append('statusInterview',statusInterview)
                    uploadData.append('statusTransfer',statusTransfer_Show)
                    //uploadData.append('statusReceipt',statusReceipt)
                    uploadData.append('message',message)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                    })
                }
            }
        }
    } 

    
    const submitReciept = (e,set,val) => {
        e.preventDefault()
        set(val)
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        if (val == ""){
            alert("กรุณาเลือกสถานะของนิสิต")
        }else{
            var answer = window.confirm("ยืนยันการให้สถานะนิสิต?");
            if (answer) {   
                    const uploadData = new FormData();
                    // uploadData.append('criterianame',getWeightScholarship)
                    //uploadData.append('statusCheck',statusCheck)
                    //uploadData.append('statusInterview',statusInterview)
                    //uploadData.append('statusTransfer',statusTransfer)
                    uploadData.append('statusReceipt',statusReceipt_Show)
                    uploadData.append('message',message)
                    axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                    {
                    //console.log("Send Success UPDATE!!!");
                    alert("บันทึกสำเร็จ")
                        refreshPage()
                    })
            }
        }
    }

    const resetStatus = (e) => {
        e.preventDefault()
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
            var answer = window.confirm("ยืนยันที่จะResetสถานะของนิสิต?");
            if (answer) {
                const uploadData = new FormData();
                uploadData.append('statusCheck',0)
                uploadData.append('statusInterview',0)
                uploadData.append('statusTransfer',0)
                uploadData.append('statusReceipt',0)
                uploadData.append('message',"")
                axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadData,config).then((x) => 
                {
                //console.log("Send Success UPDATE!!!");
                alert("เปลี่ยนแปลงสำเร็จ")
                    refreshPage()
                })
            }
    }

        //var idx = (getNameWeight.criterianame).indexOf(getWeightScholarship)
       // if(idx != -1){ console.log('same same')}
        //else{console.log('new new');}
    
    
    return(
        <><UI_Admin_StructureWebUI topic="สถานะของนิสิต" iconic="fas fa-user-circle"/>
        <div className='containerNew'>
            {/*console.log(getManageScholar)*/}
        <div className='layout-1'>

        <div className='header-l1' style={{background:"white"}}>

        <div className="topic_sc-row" >
        <label class="form-label"  style={{color:"rgb(102, 27, 19)",fontSize:"30px",width:"1000px"}}>{nameQuery.nameScholar} </label>
        </div>

        <div className="topic_sc-row" style={{marginTop:"50px",marginLeft:"-1000px"}}>
           
            <label class="form-label" style={{fontSize:"20px",width:"auto"}}>{nameQuery.id_Std_reg} &nbsp; &nbsp; </label>
            <label class="form-label" style={{fontSize:"20px",width:"auto"}}>&nbsp;&nbsp;  {nameQuery.fullName_Std_reg}&nbsp; &nbsp;  </label> 
            <button type="button" class="btn btn-warning" style={{font:"10px",width:"auto",marginLeft:"auto"}} onClick={(e)=>changePage(e)}>ย้อนกลับ</button>
        </div>
        </div> 
        <div className = "body-l1">
            
            <div className="topic_sc-row">
            {(()=>{ 
                if (statusCheck == 0){
                    return(
                        <div className="ms-3 front-status">
                        การตรวจเอกสาร
                        <div className="ms-3"><div className='circle-gray'>1</div></div></div>)
                    
                }else if(statusCheck == 1){
                    return(
                        <div className="ms-3 front-status">
                        การตรวจเอกสาร
                            <div className="ms-3"><div className='circle-green'>1</div></div></div>)
                }else if(statusCheck == 2){
                    return(
                        <div className="ms-3 front-status">
                        การตรวจเอกสาร
                            <div className="ms-3"><div className='circle-yellow3'>1</div></div>
                        </div>)
                }else if(statusCheck == 3){
                    return(
                        <div className="ms-3 front-status">
                        การตรวจเอกสาร
                            <div className="ms-3"><div className='circle-red'>1</div></div>
                        </div>)
                }
            })()} 
            {(()=>{ 
                if (statusInterview == 0){
                    return(
                        <div className="ms-3 front-status">
                        การสัมภาษณ์
                        <div className="ms-3"><div className='circle-gray'>2</div></div></div>)
                    
                }else if(statusInterview == 1){
                    return(
                        <div className="ms-3 front-status">
                        การสัมภาษณ์
                            <div className="ms-3"><div className='circle-green'>2</div></div></div>)
                }else if(statusInterview == 2){
                    return(
                        <div className="ms-3 front-status">
                        การสัมภาษณ์
                            <div className="ms-3"><div className='circle-yellow3'>2</div></div>
                        </div>)
                }else if(statusInterview == 3){
                    return(
                        <div className="ms-3 front-status">
                        การสัมภาษณ์
                            <div className="ms-3"><div className='circle-red'>2</div></div>
                        </div>)
                }
            })()} 
            {(()=>{ 
                if (statusTransfer == 0){
                    return(
                        <div className="ms-4 front-status">
                        การมอบเงิน
                        <div className="ms-4"><div className='circle-gray'>3</div></div></div>)
                    
                }else if(statusTransfer == 1){
                    return(
                        <div className="ms-4 front-status">
                        การมอบเงิน
                            <div className="ms-4"><div className='circle-green'>3</div></div></div>)
                }else if(statusTransfer == 2){
                    return(
                        <div className="ms-4 front-status">
                        การมอบเงิน
                            <div className="ms-4"><div className='circle-yellow3'>3</div></div>
                        </div>)
                }else if(statusTransfer == 3){
                    return(
                        <div className="ms-4 front-status">
                        การมอบเงิน
                            <div className="ms-4"><div className='circle-red'>3</div></div>
                        </div>)
                }
            })()} 

            {(()=>{ 
                if (statusReceipt == 0){
                    return(
                        <div className="ms-4 front-status">
                        ใบสำคัญรับเงิน
                        <div className="ms-4"><div className='circle-gray'>4</div></div></div>)
                    
                }else if(statusReceipt == 1){
                    return(
                        <div className="ms-4 front-status">
                        ใบสำคัญรับเงิน
                            <div className="ms-4"><div className='circle-green'>4</div></div></div>)
                }else if(statusReceipt == 2){
                    return(
                        <div className="ms-4 front-status">
                        ใบสำคัญรับเงิน
                            <div className="ms-4"><div className='circle-yellow3'>4</div></div>
                        </div>)
                }else if(statusReceipt == 3){
                    return(
                        <div className="ms-4 front-status">
                        ใบสำคัญรับเงิน
                            <div className="ms-4"><div className='circle-red'>4</div></div>
                        </div>)
                }
            })()} 
                </div>
            </div>
        </div>
        <div className=".body-l1">
            {(()=>{ 
                if(statusCheck == 0 || statusCheck == 2){
                    return(<>
                        <Card style={{ width: '24rem' }} className='mt-2'>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='stacolor'>สถานะ : กำลังตรวจเอกสาร</ListGroup.Item>
                                <ListGroup.Item className=''>  
                                        
                                        {(()=>{
                                        if(nameQuery.processStatus>=1){
                                            return (<><GroupRadioForStatus topic="เลือกสถานะการตรวจเอกสารของนิสิต:" data={radio_group} onChange={(e)=>setStatusCheck_Show(e.target.value)}/>
                                            <button type="button" class="btn btn-success" style={{font:"10px",width:"100px"}} onClick={(e)=>submitCheck(e,setStatusCheck_Show,statusCheck_Show)}>บันทึก</button>
                                            </>)
                                                }
                                        else{
                                            return (<>
                                                <div class="alert alert-danger" role="alert">
                                                    กรุณาเปลี่ยนสถานะของทุน
                                                    </div>
                                                </>)
                                        }
                                            })()}         
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    {(()=>{
                        if(statusCheck_Show == 1 || statusCheck_Show == 2){
                            return  (<><div style={{marginLeft:"500px",marginTop:"-177px"}}>
                                <FormTextArea topic="รายละเอียด:"  value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            </div></>)
                        }
                    })()}
                 </>)
                }else if (statusCheck == 1 && statusInterview == 0 || statusInterview == 2 ){
                    return(<>
                        <Card style={{ width: '24rem' }} className='mt-2'>
                            <ListGroup variant="flush">
                            <ListGroup.Item className='stacolor'>สถานะ : กำลังสัมภาษณ์</ListGroup.Item>
                            <ListGroup.Item className=''>
                            {(()=>{
                                if(nameQuery.processStatus>=2){

                                    return (<>
                                    <GroupRadioForStatus topic="เลือกสถานะการสัมภาษณ์ของนิสิต:" data={radio_group} onChange={(e)=>setStatusInterview_Show(e.target.value)}/>
                                    <button type="button" class="btn btn-success" style={{font:"10px",width:"100px"}} onClick={(e)=>submitInterview(e,setStatusInterview_Show,statusInterview_Show)}>บันทึก</button>
                                    </>)
                                        }
                                else{
                                    return (<>
                                        <div class="alert alert-danger" role="alert">
                                            กรุณาเปลี่ยนสถานะของทุน
                                            </div>
                                        </>)
                                }
                                    })()}
                        
                            </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                        
                        {(()=>{
                        if(statusInterview_Show == 1 || statusInterview_Show == 2){
                            return  (<><div style={{marginLeft:"500px",marginTop:"-177px"}}>
                                <FormTextArea topic="รายละเอียด:"  value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            </div></>)
                        }
                    })()}
                        
                        </>
                )}else if (statusCheck == 1 && statusInterview == 1 && statusTransfer == 0 || statusTransfer == 2 ){
                    return(<>
                        <Card style={{ width: '24rem' }} className='mt-2'>
                            <ListGroup variant="flush">
                            <ListGroup.Item className='stacolor'>สถานะ : กำลังรอการโอนเงิน</ListGroup.Item>
                            <ListGroup.Item className=''>
                            {(()=>{
                                if(nameQuery.processStatus>=3){

                                    return (<>
                                    <GroupRadioForStatus topic="เลือกสถานะการมอบทุนของนิสิต:" data={radio_group} onChange={(e)=>setStatusTransfer_Show(e.target.value)}/>
                                    <button type="button" class="btn btn-success"  style={{font:"10px",width:"100px"}} onClick={(e)=>submitTranfer(e,setStatusTransfer_Show,statusTransfer_Show)}>บันทึก</button>
                                    </>)
                                        }
                                else{
                                    return (<>
                                        <div class="alert alert-danger" role="alert">
                                            กรุณาเปลี่ยนสถานะของทุน
                                            </div>
                                        </>)
                                }
                                    })()}



                                
                            </ListGroup.Item>
                            </ListGroup>
                        </Card>
                       
                        
                        {(()=>{
                        if(statusTransfer_Show == 1 || statusTransfer_Show == 2){
                            return  (<><div style={{marginLeft:"500px",marginTop:"-177px"}}>
                                <FormTextArea topic="รายละเอียด:"  value={message} onChange={(e)=>setMessage(e.target.value)}/>
                          </div></>)
                        }
                    })()}
                        
                        </>
                )}else if (statusCheck == 1 && statusInterview == 1 && statusTransfer == 1 && statusReceipt == 0 || statusReceipt == 2  ){
                    return(<>
                        <Card style={{ width: '24rem' }} className='mt-2'>
                            <ListGroup variant="flush">
                            <ListGroup.Item className='stacolor'>สถานะ : กำลังรอนิสิตส่งใบสำคัญรับเงินมาให้</ListGroup.Item>
                            <ListGroup.Item className=''>
                            {(()=>{
                                if(nameQuery.processStatus>=4){
                                    return (<>
                                    <GroupRadioForStatus topic="เลือกสถานะการรับใบสำคัญรับเงินของนิสิต:" data={radio_group} onChange={(e)=>setStatusReceipt_Show(e.target.value)}/>
                                    <button type="button" class="btn btn-success" style={{font:"10px",width:"100px"}}  onClick={(e)=>submitReciept(e,setStatusReceipt_Show,statusReceipt_Show)}>บันทึก</button>
                                           </>)
                                        }
                                else{
                                    return (<>
                                        <div class="alert alert-danger" role="alert">
                                            กรุณาเปลี่ยนสถานะของทุน
                                            </div>
                                        </>)
                                }
                                    })()}
                            </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        {(()=>{
                        if(setStatusReceipt_Show == 1 || setStatusReceipt_Show == 2){
                            return  (<><div style={{marginLeft:"500px",marginTop:"-177px"}}>
                                <FormTextArea topic="รายละเอียด:"  value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            </div></>)
                        }
                        })()}
                        
                        </>
                 )}else if (statusCheck == 3 || statusInterview == 3 || statusTransfer == 3 || statusReceipt == 3   ){
                    return(<>
                        <label class="form-label" style={{marginRight:"100px",fontSize:"40px",color:"rgb(177, 0, 0)"}}>นิสิตไม่ผ่านการคัดเลือกในทุนนี้!!!</label>
        
                        </>
                )}else if (statusCheck == 1 && statusInterview == 1 && statusTransfer == 1 && statusReceipt == 1   ){
                    return(<>
                        <label class="form-label" style={{marginRight:"100px",fontSize:"40px",color:"rgb(20, 116, 87)"}}>นิสิตได้เสร็จสิ้นการรับทุนนี้แล้ว</label>
                        {/*<button type="button" class="btn btn-warning" style={{font:"10px",width:"100px"}} onClick={(e)=>resetStatus(e)}>Reset สถานะ</button>*/}
                        </>
                )}
            })()}
        </div>
                <Stack direction="horizontal" gap={0}>
                      
                      <Card className='mt-2 ms-2' style={{ width: '12rem'}}>
                      <Stack gap={3} className="mt-2">
                      <Stack direction="horizontal" gap={3}>
                      <div className='circle-green2 ms-2'></div>
                        <div className="">ผ่าน</div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                        <div className='circle-yellow2 ms-2'></div>
                        <div className="">สถานะผิดปกติ</div>
                        </Stack>
                        <Stack direction="horizontal" gap={3} >
                        <div className='circle-red2 mb-2 ms-2'></div>
                        <div className=" mb-2">ไม่ผ่าน</div>
                        </Stack>
                      {/* <div className='circle-green2'></div>
                      <div className='circle-yellow2'></div>
                      <div className='circle-red2'></div> */}
                      </Stack>
                      </Card>
                </Stack>
        </div>
        </>
    )
}   