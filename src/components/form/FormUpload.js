import React, { Component , useContext, useState, useEffect} from 'react'
import axios from "axios";
import StructureWebUI from '../../Nisit_UI/StructureWebUI';
import '../../Layout/Layout.css';
import { useParams } from "react-router-dom";
import { AuthContext } from '../../Login/Authenticate';
import CheckBox from '../checkbox/CheckBox';
import {Container,Row,Accordion,Stack,Badge,Modal,Button} from 'react-bootstrap';


const data1 = [{idx:"1",title:"รูปบ้าน",addOn_File:"",addOn_Show:""},
              {idx:"2",title:"รูปการทำความดี",addOn_File:"",addOn_Show:""}]   




export default function FormUpload(){
  const {authState,user_ID} = useContext(AuthContext)
  const {scholar} = useParams()
  //console.log(scholar);
  //console.log("user_ID",user_ID);
  /*useEffect(() => {
    console.log("PPP");
  }, [page]);*/

  const [page,setPage] = useState(0)
  const [register,setRegister] = useState()

  const [inform_Std,setInform_Std] = useState("")
  const [image_Std,setImage_Std] = useState("")

  const [essay_File,setEssay_File] = useState("")
  const [essay_Show,setEssay_Show] = useState("")

  const [IDCard_File,setIDCard_File] = useState("")
  const [IDCard_Show,setIDCard_Show] = useState("")

  const [houseReg_File,setHouseReg_File] = useState("")
  const [houseReg_Show,setHouseReg_Show] = useState("")

  const [transcript_File,setTranscript] = useState("")
  const [transcript_Show,setTranscript_Show] = useState("")

  const [stdInform_ID,setStdInform_ID] = useState("")
  const [userMatch_ID_StdFile,setUserMatch_ID_StdFile] = useState("")

  const [addOn_Show,setAddOn_Show] = useState([])
  const [addOn,setAddOn] = useState([])

  const [file_id,setFile_id] = useState("")
  const [fileAddOn_id,setFileAddOn_id] = useState("")

  const [submitted,setSubmitted] = useState(false)
  const [check_Edit,setCheck_Edit] = useState(false)
  const [check_Cont,setCheck_Cont] = useState(false)


  //const [processStatus,setProcessStatus] = useState(0)
  
  const userSubmitAllow = [{list:"ข้อมูลส่วนตัวของนิสิต",parent:"ข้อมูลส่วนตัวของนิสิต"},
                          {list:"ไฟล์ภาพและเอกสารเพิ่มเติม",parent:"ไฟล์ภาพและเอกสารเพิ่มเติม"},
                          ]
  const checkboxSubmit1 = (name,value) => {
    {/*console.log(name);
    console.log(value);*/}
    setAllowCheck(allowCheck => ({
      ...allowCheck,
      [name]: (value?"":"Checked")
    }));
  };

  const [allowCheck,setAllowCheck] = useState({ข้อมูลส่วนตัวของนิสิต:"" ,ไฟล์ภาพและเอกสารเพิ่มเติม:""})
  /*const [addOn_File,setAddOn_File] = useState([])
  const [addOn_Show,setAddOn_Show] = useState([])*/

  const handleFile = (e,set1,set2) => {
    set1(e.target.files)
    set2(e.target.files[0].name)
    //console.log(e.target.files.name);
  };

  const handleShowEssay = (e) => {
    setEssay_File(e.target.files)
    setEssay_Show(e.target.files[0].name)
    //console.log(e.target.files.name);
  };
  const [modalShow, setModalShow] = React.useState(false);
  function LoadingModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            กำลังดำเนินการ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>กำลังบันทึกข้อมูล</h4>
          <p>
            โปรดรอสักครู่...
          </p>
        </Modal.Body>
        <Modal.Footer>
        <p>
          </p>
        </Modal.Footer>
      </Modal>
    );
  }

  const getFileAddOn = () => {
    var addOn_Arr = [];
    var fileChk_Arr = ["ภาพ(JPG,PNG)","เอกสาร(PDF)","วิดีโอ(MP4)"]
    var fileType_Arr = ["image/png, image/jpeg","application/pdf","video/mp4"]
    axios.get("http://127.0.0.1:8000/Managescholarship/"+scholar+"/").then((response)=>{
      var buffer = JSON.parse(response.data.addOnScholar)
      var addFileJson = buffer["addFile"]
      for (let i = 0; i < addFileJson.length; i++) {
        let index = fileChk_Arr.indexOf(addFileJson[i].fileType)
        if (index!=-1){
          addOn_Arr.push({title:addFileJson[i].fileName,addOn_File:"", addOn_Show:"", fileChk:fileChk_Arr[index], fileType:fileType_Arr[index]});
        }
      }
      setAddOn(addOn_Arr)

    }
    ,(err)=>{
      alert("ไม่สามารถดึงข้อมูลทุน")
    });

  }


  async function checkSubmitted(){
    var processStatus = 0
    var buffer_Scholar = ""
    await axios.get("http://127.0.0.1:8000/Studentinform/"+user_ID.toString()+"/").then((response)=>{
      setInform_Std(response.data)
    })
    console.log("ccccccccccccccccccccc");
    
    await axios.get("http://127.0.0.1:8000/Managescholarship/"+scholar+"/").then((response)=>{
      processStatus = response.data.processStatus
      buffer_Scholar = response.data
    })
    await axios.get("http://127.0.0.1:8000/RegisterScholarship/").then((response)=>{
      var buffer = response.data
      var studentinform_profile = 0
      var arr = []
      var edit = false
      var submit = false
      var avaliable = false
      var continueous = false
      setRegister(buffer)
      for (let i = 0; i < buffer.length; i++) {
        console.log("buffer[i].namescholarregister",buffer[i].namescholarregister," ",scholar);
        if (buffer[i].usermatch_id == user_ID && buffer[i].namescholarregister == scholar){
          submit = true
          studentinform_profile = buffer[i].studentinform_profile
          setSubmitted(true)
          if(buffer[i].statusRound > 1 && buffer ){
            continueous = true
            setCheck_Cont(true)
            break
          }else if (buffer[i].statusCheck == 2){
            edit = true
            setCheck_Edit(true)
            break
          }else{
          //arr.push(buffer[i].namescholarregister)
            edit = false
            setCheck_Edit(false)
            break
          } 
        }else if (buffer[i].namescholarregister == scholar){
          avaliable=true
        }else{
          submit = false
          setSubmitted(false)
        }
      }
      console.log("processStatus:",processStatus);
      console.log("submit:",submit);
      console.log("edit:",edit);

      if (submit && processStatus <= 1 && continueous == true && processStatus <= 1){
        console.log("aa:",edit);
      }else if (!submit && avaliable && processStatus <= 1) {
        console.log("bb:",edit);
      }else if (edit && submit && processStatus <= 1){
        console.log("cc:",edit);
        //window.location = "/RegisterScholarship"
      }else if (!edit && !submit && processStatus <= 1){
        //window.location = "/RegisterScholarship"
        console.log("dd:",edit);
      }else{
        window.location = "/RegisterScholarship"
      }
      axios.post("http://127.0.0.1:8000/queryStudentFile/",[parseInt(studentinform_profile)]).then((response)=>{
        var old_reg = response.data[0]
        setFile_id(old_reg.studentinform_profile_stdfile)
        
        //console.log("buffer2",old_reg);

        setEssay_File(old_reg.profile_essay)
       //console.log((old_reg.profile_essay).length);
        var cutStr = old_reg.profile_essay.slice(0, parseInt(((old_reg.profile_essay).length)/2))
        setEssay_Show(cutStr+"...")
        

        setIDCard_File(old_reg.national_id_card)
       //console.log((old_reg.national_id_card).length);
        var cutStr = old_reg.national_id_card.slice(0, parseInt(((old_reg.national_id_card).length)/2))
        setIDCard_Show(cutStr+"...")

      
        setHouseReg_File(old_reg.house_registration)
        //console.log((old_reg.house_registration).length);
        var cutStr = old_reg.house_registration.slice(0, parseInt(((old_reg.house_registration).length)/2))
        setHouseReg_Show(cutStr+"...")

        
        setTranscript(old_reg.transcript)
        //console.log((old_reg.transcript).length);
        var cutStr = old_reg.transcript.slice(0, parseInt(((old_reg.transcript).length)/2))
        setTranscript_Show(cutStr+"...")
      
        
        //setFile_id()
        var addOn_Arr = [];
        var addOn_File = [];
        for (let index = 0; index < old_reg.file.length; index++) {
          const e = old_reg.file[index];
          addOn_Arr.push({title:e.fileTitle,addOn_File:e.file, addOn_Show:e.file});
          addOn_File.push(e.primary_id)
        }
        setAddOn(addOn_Arr)

        setFileAddOn_id(addOn_File)
        //setAddOn_Show(addOn_Arr)
      }     
      ,(err)=>{
      alert("ไม่สามารถดึงข้อมูลนิสิต")
      });


    }
    ,(err)=>{
      alert("ไม่สามารถดึงข้อมูลนิสิต")
    });
  };

  

  useEffect(() => {
    getFileAddOn()
    checkSubmitted()
  }, []); 

 
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  }

  const onSendAx = (e) => {
    e.preventDefault()
      if(allowCheck.ข้อมูลส่วนตัวของนิสิต!='Checked' || allowCheck.ไฟล์ภาพและเอกสารเพิ่มเติม!='Checked'){
        alert('โปรดยอมรับทั้งหมด')
      }
      else{
       var answer = window.confirm("ยืนยันการสมัคร?");
    if (answer) {
        setModalShow(true)
        const uploadFile = new FormData();
      //ไฟล์หลักที่ต้องเเนบ
        if (typeof essay_File !== "string" && essay_File !== null){
          //console.log("IS obj");
          uploadFile.append('profile_essay',essay_File[0])
        }
        if (typeof IDCard_File !== "string" && IDCard_File !== null){
         //console.log("IS obj");
          uploadFile.append('national_id_card',IDCard_File[0])
        }
        if (typeof houseReg_File !== "string" && houseReg_File !== null){
          //console.log("IS obj");
          uploadFile.append('house_registration',houseReg_File[0])
        }
        if (typeof transcript_File !== "string" && transcript_File !== null){
          //console.log("IS obj");
          uploadFile.append('transcript',transcript_File[0])
        }

          //uploadFile.append('image_Std_reg',stdInform.image_Std)
          uploadFile.append('fullName_Std_reg',inform_Std.fullName_Std)
          uploadFile.append('birthDate_Std_reg',inform_Std.birthDate_Std)
          uploadFile.append('major_Std_reg',inform_Std.major_Std)
          uploadFile.append('phone_Std_reg',inform_Std.phone_Std)
          uploadFile.append('GPA_Std_reg',inform_Std.GPA_Std)
          uploadFile.append('id_Std_reg',inform_Std.id_Std)
          uploadFile.append('year_Std_reg',inform_Std.year_Std)
          uploadFile.append('term_Std_reg',inform_Std.term_Std)
          uploadFile.append('email_Std_reg',inform_Std.email_Std)
          uploadFile.append('address_Std_reg',inform_Std.advisor_Std)
          uploadFile.append('advisor_Std_reg',inform_Std.address_Std)
          uploadFile.append('Father_Profile_reg',inform_Std.Father_Profile)
          uploadFile.append('Mother_Profile_reg',inform_Std.Mother_Profile)
          uploadFile.append('Sibling_Profile_reg',inform_Std.Sibling_Profile)
          uploadFile.append('Other_Profile_reg',inform_Std.Other_Profile)
          uploadFile.append('available_ID_reg',true)

          uploadFile.append('stdinform_id',user_ID)
          uploadFile.append('usermatch_id_stdfile',user_ID)
          uploadFile.append('checkFileFile',false)

          //console.log("check_Edit",check_Edit);
          if (check_Edit == false && check_Cont == false){
            axios.post("http://127.0.0.1:8000/StudentFileView/",uploadFile,config)
              .then(async (x) => {
                //console.log(x)
                //console.log("POST ไฟล์หลัก Success!!!");
                setFile_id(x.data.studentinform_profile_stdfile)
                //console.log(file_id)
                for (let i = 0; i < addOn.length; i++) {
                  const uploadAddOn = new FormData();
                  //console.log("addOn[i]",addOn[i]);
                  if (typeof addOn[i] !== "string" && addOn[i] !== null){
                    //console.log("IS obj");
                    uploadAddOn.append('file',addOn[i].addOn_File[0])
                    uploadAddOn.append('fileTitle',addOn[i].title)
                    uploadAddOn.append('file_id',x.data.studentinform_profile_stdfile)
                    await axios.post("http://127.0.0.1:8000/StudentFileFileView/",uploadAddOn,config).then((y) => {
                      //console.log(i+"POST ไฟล์อื่นๆ Success!!!")
                    }
                    
                    )
                  }
                }
                //setFileAddOn_id(y.data.studentinform_profile_stdfile)
                const uploadRegister = new FormData();
                //console.log("namescholarregister:"+scholar)
                //console.log("usermatch_id:"+user_ID)
                //console.log("studentinform_profile:"+file_id) 
                uploadRegister.append('statusCheck',0)
                uploadRegister.append('statusInterview',0)
                uploadRegister.append('statusTransfer',0)
                uploadRegister.append('statusReceipt',0)
                uploadRegister.append('message',"")
                uploadRegister.append('namescholarregister',scholar)
                uploadRegister.append('usermatch_id',user_ID)
                uploadRegister.append('studentinform_profile',x.data.studentinform_profile_stdfile)

                axios.post("http://127.0.0.1:8000/RegisterScholarship/",uploadRegister,config)
                .then((z) => {
                  //console.log("POST ไปยังสมัครทุน Success!!!")
                }

                  )
                  window.location = "/RegisterScholarship"
            },(err)=>{
              alert("ชนิดไฟล์ไม่ถูกต้อง โปรดอัปโหลดใหม่")
            })

          }else{
            axios.put(`http://127.0.0.1:8000/StudentFileView/${parseInt(file_id)}/`,uploadFile,config)
            .then(async (x) => {
              //console.log(x)
              //console.log("PUT ไฟล์หลัก Success!!!");
              setFile_id(x.data.studentinform_profile_stdfile)
              //console.log(file_id)
              for (let i = 0; i < addOn.length; i++) {
                const uploadAddOn = new FormData();
                //console.log("addOn[i]",addOn[i]);
                //console.log(typeof addOn[i]);
                if (typeof addOn[i] !== "string" && addOn[i] !== null && typeof addOn[i].addOn_File !== "string"){
                  //console.log("IS obj");
                  uploadAddOn.append('file',addOn[i].addOn_File[0])
                  uploadAddOn.append('fileTitle',addOn[i].title)
                  await axios.put(`http://127.0.0.1:8000/StudentFileFileView/${parseInt(fileAddOn_id[i])}/`,uploadAddOn,config).then((y) => {
                    //console.log(i+"PUT ไฟล์อื่นๆ Success!!!")
                  }
                  )
                }
              }
                window.location = "/RegisterScholarship"
              },(err)=>{
                alert("ชนิดไฟล์ไม่ถูกต้อง โปรดอัปโหลดใหม่\n")
              })
          }
      }
      
    }

  }

  const handleSubmitPage = (e) => {
    e.preventDefault()
    setAllowCheck({ข้อมูลส่วนตัวของนิสิต:"" ,ไฟล์ภาพและเอกสารเพิ่มเติม:""})
    setPage(page+1)
  };
  

  if (page===0){
    return( 
    <>
    <StructureWebUI topic="สมัครทุนนิสิต" iconic="fas fa-edit"/>
    <div className='containerNew'>
    <div className='body-l1'>
      <form onSubmit= {(e) => handleSubmitPage(e)} class="was-validated">
        {(()=>{
          if(check_Edit) {
            return(
              <label for="formFile" class="form-label" style={{color:"#661B13"}}>!!!  กรุณาอัปโหลดไฟล์เเก้ไข</label>
            )}
        })()}
          <div className='body-l1'>
            <label for="formFile" class="form-label">แนบไฟล์เรียงความเล่าประวัติส่วนตัวของนิสิตและปัญหาความเดือดร้อนความยาวไม่เกิน 1 หน้ากระดาษ A4 (.pdf)</label>
            <label class="form-label" style={{color:"blue",width:"600px"}}>อัปโหลด: {essay_Show}</label>
            <div className='topic_sc-row'>
              <input class="form-control" type="file" accept="application/pdf" onChange={(e)=>handleFile(e,setEssay_File,setEssay_Show)} style={{fontSize:"20px",width:"450px"}} required={essay_Show ? false:true}/>
              <label for="formFile" class="form-label" style={{marginLeft:"100px",color:"#661B13"}}>เช่น เรียงความ.pdf</label>
            </div>

            <label for="formFile" class="form-label">แนบไฟล์สำเนาบัตรประจำตัวประชาชน 1 ฉบับ  (.pdf)</label>
            <label class="form-label" style={{color:"blue",width:"600px"}}>อัปโหลด: {IDCard_Show}</label>
            <div className='topic_sc-row'>
              <input class="form-control" type="file" accept="application/pdf" onChange={(e)=>handleFile(e,setIDCard_File,setIDCard_Show)} style={{fontSize:"20px",width:"450px"}} required={IDCard_Show ? false:true}/>
              <label for="formFile" class="form-label" style={{marginLeft:"100px",color:"#661B13"}}>เช่น สำเนาบัตรประจำตัวประชาชน.pdf</label>
            </div>
            
            <label for="formFile" class="form-label">แนบไฟล์สำเนาทะเบียนบ้านจำนวน 1 ฉบับ   (.pdf)</label>
            <label class="form-label" style={{color:"blue",width:"600px"}}>อัปโหลด: {houseReg_Show}</label>
            <div className='topic_sc-row'>
              <input class="form-control" type="file" accept="application/pdf" onChange={(e)=>handleFile(e,setHouseReg_File,setHouseReg_Show)} style={{fontSize:"20px",width:"450px"}} required={houseReg_Show ? false:true}/>
              <label for="formFile" class="form-label" style={{marginLeft:"100px",color:"#661B13"}}>เช่น สำเนาทะเบียนบ้าน.pdf</label>
            </div>
            
            <label for="formFile" class="form-label">แนบไฟล์ใบรายงานผลการศึกษา (Transcript) ปริ้นจากเว็บได้  (.pdf)</label>
            <label class="form-label" style={{color:"blue",width:"600px"}}>อัปโหลด: {transcript_Show}</label>
            <div className='topic_sc-row'>
              <input class="form-control" type="file" accept="application/pdf" onChange={(e)=>handleFile(e,setTranscript,setTranscript_Show)} style={{fontSize:"20px",width:"450px"}} required={transcript_Show ? false:true}/>
              <label for="formFile" class="form-label" style={{marginLeft:"100px",color:"#661B13"}}>เช่น ใบรายงานผลการศึกษา.pdf</label>
            </div>

            <br/>
            <div className='body-l1' style={{backgroundColor:"#D8D8D8"}}>
            <div style={{height:"220px",overflow:"auto"}} >
            <label for="formFile" class="form-label">+ การเเนบไฟล์เอกสารอื่นๆ</label><br/>
              {addOn.map((d, index) => (<>
                <label for="formFile" class="form-label">{d.title}</label>
                {/*<label class="form-label" style={{color:"blue"}}>Uploaded: {d.addOn_Show}</label>*/}
                <label for="formFile" class="form-label" style={{color:"blue",width:"600px"}}>{"อัปโหลด: "+d.addOn_Show}</label>
                <div className='topic_sc-row'>
                  <input class="form-control" type="file" accept={d.fileType} 
                  onChange={(e)=>{
                    d.addOn_File = e.target.files
                    d.addOn_Show = e.target.files[0].name
                    //console.log("ARR:",addOn);
                  }} 
                  style={{fontSize:"20px",width:"450px"}} required={d.addOn_Show ? false:true}/>
                  <label for="formFile" class="form-label" style={{marginLeft:"100px",color:"#661B13"}}>{"ชนิดไฟล์: "+d.fileChk}</label>
                </div>
                <br/>
              </> 
              ))}

                  
            </div>
            </div>
            <button type="submit" className='btn btn-success btn-lg' style={{width:"300px"}}  >บันทึก </button>
            {/*<button type="submit" className='btn btn-success btn-lg' style={{width:"300px"}}  disabled={submitted}>บันทึก </button>*/}
          </div>
          </form>
    
        </div></div>  
      </>
    );
  }
  if (page===1){
    return(
    <> 
     <LoadingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <StructureWebUI topic="สมัครทุนนิสิต" iconic="fas fa-edit"/>
    <div className='containerNew'>
    <div className='body-l1'>
      
      <form onSubmit= {(e) => onSendAx(e)} class="was-validated">
      <div style={{height:"600px",overflow:"auto"}} >
      <div class="alert alert-dark" role="alert">
        <h>ทุนนี้ต้องการทราบข้อมูลดังต่อไปนี้ซึ่งต้องถูกนำไปใช้ในการเผยเเพร่ให้ผู้พิจารณาทุน</h>
        <div className='topic_sc-col alert alert-secondary' >
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}><i class="fa fa-user" aria-hidden="true"></i> ข้อมูลส่วนตัวของนิสิต</label>
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}><i class="fa fa-file-o" aria-hidden="true"></i> เอกสารหลัก</label>
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}>♦ เรียงความเล่าประวัติส่วนตัวของนิสิตและปัญหาความเดือดร้อน</label>
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}>♦ สำเนาบัตรประจำตัวประชาชน</label>
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}>♦ สำเนาทะเบียนบ้าน</label>
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}>♦ ใบรายงานผลการศึกษา</label>
        <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}><i class="fa fa-files-o" aria-hidden="true"></i> เอกสารเพิ่มเติม</label>
        {addOn.map((d, index) => (<>
          <label class="form-label" style={{marginTop:"15px",color:"#661B13",fontSize:"20px"}}>♦ {d.title}</label>
        
        </>
        ))}
        </div>
        </div>
       
        {/*console.log(allowCheck.ข้อมูลส่วนตัวของนิสิต)*/}
      </div>
      <CheckBox topic="โปรดยอมรับ" data={userSubmitAllow} value={allowCheck} action={(e)=>checkboxSubmit1(e.target.name,e.target.value)} />
        <button type="submit" className='btn btn-success btn-lg' style={{width:"300px"}}  >บันทึก </button>
        <button type="button" className='btn btn-warning btn-lg' style={{marginLeft:"20px",width:"300px"}}  onClick={()=>{setPage(page-1)}}>ย้อนกลับ </button>
      </form>
      
      </div>
    </div>  
    
    </>);
  }
}
