import { Link } from 'react-router-dom'
import {Container,Row,Accordion,Stack,Badge,ListGroup,Card,Button} from 'react-bootstrap';
import './Card_Button.css'
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import UseFileDownloader from "../dowload/UseFileDownloader"
import ViewInform from "../form/ViewInform"
import GroupRadio_Btn from "../radiobutton/GroupRadio_Btn"
// import dowload
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card_Dash = (props)=>{
  const {mode,ScholarId,ScholarData,srcEndDate,eventKey,t1,t2,t3,t4,t5,t6,d1,d2,status} = props
  //const {capname,idScholar,number} = props
  const [schorlar_Reg,setSchorlar_Reg] = useState([]);
  const [student_FileView,setStudent_FileView] = useState([]);
  const [fullName_Std,setFullName_Std] = useState([]);
  const [dataList,setDataList] =  useState();
  const [list_Scholar,setList_Scholar] = useState([]);

  const [studentReg,setStudentReg] = useState([]);
  const [studentRegAll,setStudentRegAll] = useState([]);
  
  const [stdInform_Show,setStdInform_Show] =  useState(false);
  const [stdEssay_Show,setStdEssay_Show] =  useState(false)
  const [stdIDcard_Show,setStdIDcard_Show] =  useState(false);
  const [stdHouseReg_Show,setStdHouseReg_Show] =  useState(false);
  const [stdTranscript_Show,setStdTranscript_Show] =  useState(false);

  const [stdFileAddOn_Show,setStdFileAddOn_Show] =  useState(false);
  const [stdFileAddOn,setStdFileAddOn] =  useState();

  //console.log("ScholarData",ScholarData);

  var getStudentInformProfile = []
  var getProfileByNameWithSchoId = []

  var curdate = new Date();
  const [delayTime,setDelayTime] = useState(new Date())
  const diffDays = (date, otherDate) => {
      var days = Math.floor((date-otherDate) / (1000 * 60 * 60 * 24));
      var hours = Math.floor(((date-otherDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor(((date-otherDate) % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor(((date-otherDate) % (1000 * 60)) / 1000);
      //return days.toString()+" วัน "+hours.toString()+" ชม. "+minutes.toString()+" นาที "+seconds.toString()+" วินาที."
      if(days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0){
          return days.toString()+" วัน [ "+hours.toString()+":"+minutes.toString()+":"+seconds.toString()+" ]"
      }else{
          return "หมดเวลา"
      }
  }

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  }

  const getScholarData = () => {
    
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      setList_Scholar(response.data)
    })

    axios.get("http://127.0.0.1:8000/RegisterScholarship/").then((response)=>{
      var getData = response.data
      
      for (let i = 0; i < getData.length; i++) {
        getStudentInformProfile.push(getData[i].studentinform_profile)
      } 
    })
    
  }
  useEffect(() => {
    getScholarData();
  }, []); 
 
  useEffect(() => {
  axios.get("http://localhost:8000/RegisterScholarship/").then((response)=>{
      var getData2 = response.data

      for (let i = 0; i < getData2.length; i++) {
          if ( ScholarId == (getData2[i].namescholarregister)) {
            getProfileByNameWithSchoId.push(getData2[i].studentinform_profile)
          } 
      }
   
  axios.post(`http://127.0.0.1:8000/queryStudentFile/`,getProfileByNameWithSchoId).then((response) =>{
    var getDataIdStudent = response.data
    var getDataIdStudentFilter = response.data
    setStudentRegAll(getDataIdStudent)
    getDataIdStudentFilter = getDataIdStudent.filter((x, i, a) => a.findIndex(obj => obj.stdinform_id==x.stdinform_id && obj.statusReceipt == 1) == i)
    setStudentReg(getDataIdStudentFilter)

    //console.log("getDataIdStudent",response.data);
  })
  }
    ,(err)=>{
      alert("ไม่สามารถดึงข้อมูลนิสิต")
    });

}, []); 

 
  

var majorT = "T_T";
  var myStr = "";
    if (fullName_Std.major_Std=="สาขาวิชาวิศวกรรมคอมพิวเตอร์") {
      var newStr = myStr.replace("", "T12");
    }else if(fullName_Std.major_Std=="สาขาวิชาวิศวกรรมไฟฟ้า"){
      var newStr = myStr.replace("", "T13");
    }else if(fullName_Std.major_Std=="สาขาวิชาวิศวกรรมอุตสาหการ"){
      var newStr = myStr.replace("", "T14");
    }else if(fullName_Std.major_Std=="สาขาวิศวกรรมเครื่องกลและการออกแบบ"){
      var newStr = myStr.replace("", "T15");
    }else if(fullName_Std.major_Std=="สาขาวิศวกรรมเครื่องกลและระบบการผลิต"){
      var newStr = myStr.replace("", "T16");
    }else if(fullName_Std.major_Std=="สาขาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"){
      var newStr = myStr.replace("", "T17");
    }else if(fullName_Std.major_Std=="สาขาวิศวกรรมโยธา"){
      var newStr = myStr.replace("", "T18");
    }



    const [downloadFile, downloaderComponentUI] = UseFileDownloader();
    const download = (data,idx,fileAddOn) => {
      const files = [
        {
          name: data.id_Std+"_เรียงความ",
          thumb: data.profile_essay ,
          file: data.profile_essay ,
          filename: data.id_Std+"_เรียงความ"
        },
        {
          name : data.id_Std+"_สำเนาบัตรประจำตัวประชาชน",
          thumb: data.national_id_card,
          file: data.national_id_card,
          filename: data.id_Std+"_สำเนาบัตรประจำตัวประชาชน"
        },
        {
          name : data.id_Std+"_สำเนาทะเบียนบ้านบ้าน",
          thumb: data.house_registration ,
          file: data.house_registration,
          filename: data.id_Std+"_สำเนาทะเบียนบ้าน",
        },
        {
          name : data.id_Std+"_ผลการศึกษา",
          thumb: data.transcript ,
          file: data.transcript,
          filename: data.id_Std+"_ผลการศึกษา",
        }
      ];
      if (fileAddOn !== undefined){
        //console.log("fileAddOn",fileAddOn);
          files.push({
            name : data.id_Std+"_"+fileAddOn.fileTitle,
            thumb: fileAddOn.file ,
            file: fileAddOn.file,
            filename: data.id_Std+"_"+fileAddOn.fileTitle,
          })
        //console.log("files",files);
      }
      downloadFile(files[idx])
      
    }

    const Show_Std = (set,val,src) => {
      setStdInform_Show(false)
      setStdEssay_Show(false)
      setStdIDcard_Show(false)
      setStdHouseReg_Show(false)
      setStdTranscript_Show(false)
      setStdFileAddOn_Show(false)

      if (src !== undefined){
        setStdFileAddOn(src)
        //setStdFileAddOn(src)
      }
      set(!val)
    } 


    const check = (list,value) =>{
      if (value == list) 
        //console.log("CCCCC");
          return true
  }
    //const termRadio = [{list:"ข้อมูลนิสิต"},{list:"ไฟล์เรียงความ"},{list:"สำเนาบัตรประจำตัวประชาชน"},{list:"สำเนาทะเบียนบ้าน"},{list:"ผลการศึกษา"}]
    //console.log("studentReg",studentReg);
    return (
        <div className=""  >
            <Accordion.Item eventKey= {eventKey}>
              <Accordion.Header>
                <Stack direction="horizontal" gap={3} style={{ width: '30rem' }}>
                  {(()=>{ 
                        if (studentReg.length != 0){ 
                            return(
                            <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                            <div className="illution">{ScholarData}</div>
                            <div  style={{marginLeft:"1050px",position:"absolute"}}>
                            <div className="ms-auto">
                              <Badge bg="info" text="black">{studentReg.length} คน</Badge>&nbsp;
                            </div>
                            </div>
                            </Stack>)}
                        else{
                            return(
                            <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                            <div className="illution">{ScholarData}</div>
                            <div  style={{marginLeft:"1050px",position:"absolute"}}>
                            <div className="ms-auto">
                              <Badge bg="info" text="black">ไม่มีผู้สมัคร</Badge>&nbsp;
                            </div>
                            </div>
                            </Stack>)}
                    })()}
                </Stack>
              </Accordion.Header>
              <Accordion.Body>
                <div className="illution">
                <div>รายละเอียดทุน</div>
                <div className="fff2 mt-2">{t1}</div>
                <div className="mt-2">ระยะเวลาการเปิดรับสมัคร </div>
                <Stack direction="horizontal" gap={3}>
                  <div className="fff2 mt-2">{d1}</div>
                  <div className="fff2 mt-2">ถึง</div>
                  <div className="fff2 mt-2">{d2}</div>
                </Stack>
                {/* <div>{list_Scholar.map(ss => (<div>{ss.nameScholar}</div>))}</div> */}
                <Stack direction="horizontal" gap={0} className="mb-3">
                      <Card style={{ width: '21rem' }} className='mt-2'>
                        <ListGroup variant="flush">
                          <ListGroup.Item className='f1 bg1'>จำนวนที่นิสิตมาสมัคร</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนทุนที่มอบให้นิสิต</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนเงินทุนละ</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนเงินทุนทั้งหมด</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนนิสิตที่ได้รับทุน</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนเงินที่มอบให้นิสิต</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนเงินที่เหลือ</ListGroup.Item>
                        </ListGroup>
                      </Card>
                      
                      <Card style={{ width: '11rem' }} className='mt-2'>
                        <ListGroup variant="flush">
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{studentRegAll.length}</div>
                            <div className="f1 ms-auto">คน</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{t2}</div>
                            <div className="f1 ms-auto">ทุน</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{t3}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{t6}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{studentReg.length}</div>
                            <div className="f1 ms-auto">คน</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{t4*studentReg.length}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{t5-t4*studentReg.length}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                </Stack>
                {/* <div className='mt-2'>
                  <Link to="/Admin_Graph"><Button variant="success" className='b2 b' >
                    กราฟข้อมูล
                  </Button></Link>
                  </div> */}
                <div className="mb-3">รายชื่อนิสิตที่ได้รับทุนการศึกษา</div>
                  {/* <Accordion defaultActiveKey="0" flush> */}
                  {studentReg.map((studentRegMap, index) => (
                  // <Accordion.Item eventKey={index}> 
                    <Card className="card1" style={{ width: '31rem'}}>
                    <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                        <div className="illution ms-4">{index+1}.</div> 
                        <div className="illution">{studentRegMap.id_Std}</div>  
                        <div className="illution">{studentRegMap.fullName_Std}</div>
                        <div className="ms-auto">
                          {(()=>{
                              if ((studentRegMap.major_Std) =="T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์") {
                                  majorT = "T12";}
                            else if ((studentRegMap.major_Std) =="T05 วิศวกรรมโยธา") {
                                  majorT = "T05";}
                            else if ((studentRegMap.major_Std) =="T13 วิศวกรรมเครื่องกลและการออกแบบ") {
                                  majorT = "T13";}
                            else if ((studentRegMap.major_Std) =="T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์") {
                                  majorT = "T14";}
                            else if ((studentRegMap.major_Std) =="T17 วิศวกรรมอุตสาหการและระบบ") {
                                  majorT = "T17";}
                            else if ((studentRegMap.major_Std) =="T18 วิศวกรรมเครื่องกลและระบบการผลิต") {
                                  majorT = "T18";}
                            else if ((studentRegMap.major_Std) =="T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ") {
                                  majorT = "T19";}
                          })()}
                        <div className="illution">{majorT}</div>
                        </div>
                      </Stack>
                      </Card>

                     
                      
                  ))}
                  
                  
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {downloaderComponentUI}
        </div>
    );
}    
export default Card_Dash
