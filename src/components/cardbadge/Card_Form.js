import { Link } from 'react-router-dom'
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import ListNameNisit from './ListNameNisit';
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import UseFileDownloader from "../dowload/UseFileDownloader"
import ViewInform from "../form/ViewInform"
import GroupRadio_Btn from "../radiobutton/GroupRadio_Btn"
// import dowload
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card_Form = (props)=>{
  const {mode,ScholarId,ScholarData,processStatus,srcEndDate,eventKey} = props
  //const {capname,idScholar,number} = props
  const [schorlar_Reg,setSchorlar_Reg] = useState([]);
  const [student_FileView,setStudent_FileView] = useState([]);
  const [fullName_Std,setFullName_Std] = useState([]);
  const [dataList,setDataList] =  useState();
  const [list_Scholar,setList_Scholar] = useState([]);

  const [studentReg,setStudentReg] = useState([]);
  
  const [stdInform_Show,setStdInform_Show] =  useState(false);
  const [stdEssay_Show,setStdEssay_Show] =  useState(false)
  const [stdIDcard_Show,setStdIDcard_Show] =  useState(false);
  const [stdHouseReg_Show,setStdHouseReg_Show] =  useState(false);
  const [stdTranscript_Show,setStdTranscript_Show] =  useState(false);

  const [stdFileAddOn_Show,setStdFileAddOn_Show] =  useState(false);
  const [stdFileAddOn,setStdFileAddOn] =  useState();

  useEffect(() => {
    const time = setInterval(() => setDelayTime(new Date()), 1000);        
  }, []); 


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
          return "หมดเวลาเเล้ว"
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
      getDataIdStudent = getDataIdStudent.filter((x, i, a) => a.findIndex(obj => obj.stdinform_id==x.stdinform_id) == i)
      setStudentReg(getDataIdStudent)
      //console.log("getDataIdStudent",response.data);
    })
    }
    ,(err)=>{
      alert("ไม่สามารถดึงไฟล์studentได้")
    });

}, []); 

 
  

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
    var majorT = ""
    return (
        <div>
            <Accordion.Item eventKey= {eventKey}>
              <Accordion.Header>
                <Stack direction="horizontal" gap={3} style={{ width: '30rem' }}>
                {(()=>{ 
                        if (processStatus == "0"){ 
                            return(<div className="ms-3"><div className='circle-mini-crimson'>0</div></div>
                        )}
                        else if (processStatus == "1"){
                            return(<div className="ms-3"><div className='circle-mini-crimson'>1</div></div>
                        )}
                        else if (processStatus == "2"){
                          return(<div className="ms-3"><div className='circle-mini-magenta'>ลง</div></div>
                        )}
                          else if (processStatus == "3"){
                            return(<div className="ms-3"><div className='circle-mini-crimson'>3</div></div>
                        )}
                          else if (processStatus == "4"){
                            return(<div className="ms-3"><div className='circle-mini-crimson'>4</div></div>
                        )}
                        else if (processStatus == "5"){
                            return(<div className="ms-3"><div className='circle-mini-green'>จบ</div></div>
                        )}
                  })()}
                  {(()=>{ 
                        if (studentReg.length != 0){ 
                            return(
                            <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                            <div  style={{marginRight:"auto"}}>
                            <div className="illution">{ScholarData}</div>
                           </div>
                           <div  style={{marginLeft:"820px",position:"absolute"}}>
                            <div className="ms-auto">
                              <Badge bg="success">{diffDays(new Date((srcEndDate).toString()),curdate)}</Badge>&nbsp;
                              <Badge bg="info" text="black">{studentReg.length} คน</Badge>&nbsp;
                            </div>
                            </div>
                            </Stack>)}
                        else{
                            return(
                            <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                              <div  style={{marginRight:"auto"}}>
                            <div className="illution">{ScholarData}</div>
                            </div>
                            <div  style={{marginLeft:"820px",position:"absolute"}}>
                            <div className="ms-auto">
                              <Badge bg="success">{diffDays(new Date((srcEndDate).toString()),curdate)}</Badge>&nbsp;
                              <Badge bg="info" text="black">ไม่มีผู้สมัคร</Badge>&nbsp;
                            </div>
                            </div>
                            </Stack>)}
                    })()}
                  
                </Stack>
              </Accordion.Header>
              <Accordion.Body>
                {(()=>{ 
                  if (mode === 0){  
                    return(
                      <Link to={"/Admin_Ranking/"+ScholarId} target="popup"><button className='btn' style={{marginLeft:"450px",marginBottom:"15px",width:"250px",height:"auto",color:"white",background:"#6F079F"}} 
                      type="button"><i class="fa fa-gavel" aria-hidden="true"></i> ดูผลการลงคะเเนน</button></Link>
                    )
                  }
                })()}
                <div className="illution">
                  <Accordion defaultActiveKey="0" flush>
                  {studentReg.map((studentRegMap, index) => (
                  <Accordion.Item eventKey={index}> 
                    <Accordion.Header>
                    <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                        <div className="illution">{index+1}.</div> 
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
                     </Accordion.Header>
                     <Accordion.Body>
                     <div className="topic_sc-col" >
                      <div className="topic_sc-row" >
                        <img src={studentRegMap.image_Std}  style={{width:"250px",height:"300px"}} class="img-thumbnail" alt="..."></img>
                        <div className="topic_sc-col" style={{background:"#A83B3B"}}>
                          <div class="btn-group">
                            <button className='btn btn-lg' style={{width:"150px",height:"80px",background:"#661b13",color:"white"}} type="button" onClick={() => Show_Std(setStdEssay_Show,stdEssay_Show)}><i class="fa fa-pencil-square" aria-hidden="true"></i> เรียงความ </button>
                            <button className='btn' style={{width:"60px",height:"80px",background:"#F71C44",color:"white"}} type="button" onClick={() => download(studentRegMap,0)}><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                            <button className='btn btn-lg' style={{width:"150px",height:"80px",background:"#661b13",color:"white"}} type="button" onClick={() => Show_Std(setStdIDcard_Show,stdIDcard_Show)}><i class="fa fa-id-card" aria-hidden="true"></i> บัตรประชาชน</button>
                            <button className='btn' style={{width:"60px",height:"80px",background:"#F71C44",color:"white"}} type="button" onClick={() => download(studentRegMap,1)}><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                            <button className='btn btn-lg' style={{width:"160px",height:"80px",background:"#661b13",color:"white"}} type="button" onClick={() => Show_Std(setStdHouseReg_Show,stdHouseReg_Show)}><i class="fa fa-home" aria-hidden="true"></i> ทะเบียนบ้าน</button>
                            <button className='btn' style={{width:"60px",height:"80px",background:"#F71C44",color:"white"}} type="button" onClick={() => download(studentRegMap,2)}><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                            <button className='btn btn-lg' style={{width:"150px",height:"80px",background:"#661b13",color:"white"}} type="button" onClick={() => Show_Std(setStdTranscript_Show,stdTranscript_Show)}><i class="fa fa-graduation-cap" aria-hidden="true"></i> ผลการศึกษา</button> 
                            <button className='btn' style={{width:"60px",height:"80px",background:"#F71C44",color:"white"}} type="button" onClick={() => download(studentRegMap,3)}><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                          </div> 
                          <div className="topic_sc-row" style={{marginTop:"15px",background:"#A83B3B"}}>
                          <button className='btn btn-lg' style={{width:"150px",height:"auto",background:"#661b13",color:"white"}} type="button" onClick={() => Show_Std(setStdInform_Show,stdInform_Show)}><i class="fa fa-user-circle-o" aria-hidden="true"></i> ข้อมูลนิสิต</button>
                        
                          <div className="topic_sc-col" style={{marginLeft:"15px",background:"#A83B3B"}}>
                          <label class="form-label" style={{marginTop:"15px",color:"white"}}>เอกสารเพิ่มเติม: </label>
                          {studentRegMap.file.map((filex, index) => (
                            <div class="btn-group" style={{marginTop:"5px"}}>
                              <button className='btn btn-success btn-lg' style={{width:"380px",height:"50px"}} type="button" onClick={() => Show_Std(setStdFileAddOn_Show,stdFileAddOn_Show,filex.file)}><i class="fa fa-fire" aria-hidden="true"></i> {filex.fileTitle}</button> 
                              <button className='btn btn-warning' style={{width:"100px",height:"50px",color:"white"}} type="button" onClick={() => download(studentRegMap,4,filex)}><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                            </div> 
                          ))}
                          {(()=>{
                            if(studentRegMap.file.length === 0){
                              return(<label class="form-label" style={{marginTop:"15px",color:"white"}}>ทุนนี้ไม่มีเอกสารเพิ่มเติม! </label>)
                            }
                          })()}
                          </div> 
                          {(()=>{ 
                            if (mode === 1 && studentRegMap.statusCheck != 3){  
                              return(
                                <Link to={"/Commitee_Score/vote/"+studentRegMap.register_id} target="popup"><button className='btn' style={{marginLeft:"15px",width:"150px",height:"auto",color:"white",background:"#6F079F"}} 
                                type="button"><i class="fa fa-gavel" aria-hidden="true"></i> การลงคะเเนน</button></Link>
                              )
                            }
                          })()}
                          </div> 
                          </div> 
                      </div >
                      <br/>
                       
                      
                      {(()=>{
                      
                        if (stdInform_Show == true){
                          return(
                            <ViewInform mode={1} viewData={studentRegMap}/>
                          )
                        }else if (stdEssay_Show == true){
                          //setStdInform_Show(false)
                          return(
                            <div style={{width:"1080px",height:"1000px"}}>
                              <iframe src={studentRegMap.profile_essay}  width="100%" height="100%"/>
                            </div>
                          )
                        }else if (stdIDcard_Show == true){
                          //setStdInform_Show(false)
                          return(
                            //<img src={studentRegMap.national_id_card} style={{width:"250",height:"auto"}} class="img-thumbnail" alt="..."></img>
                            <div style={{width:"1080px",height:"1000px"}}>
                              <iframe src={studentRegMap.national_id_card} width="100%" height="100%" />
                            </div>
                            )
                        }else if (stdHouseReg_Show == true){
                          //setStdInform_Show(false)
                          return(
                            //<img src={studentRegMap.house_registration} style={{width:"250",height:"auto"}} class="img-thumbnail" alt="..."></img>
                            <div style={{width:"1080px",height:"1000px"}}>
                              <iframe src={studentRegMap.house_registration} width="100%" height="100%"/> 
                            </div> 
                            )
                        }else if (stdTranscript_Show == true){
                          //setStdInform_Show(false)
                          return(
                            //<img src={studentRegMap.transcript} style={{width:"250",height:"auto"}} class="img-thumbnail" alt="..."></img>
                            <div style={{width:"1080px",height:"1000px"}}>
                              <iframe src={studentRegMap.transcript} width="100%" height="100%"/>
                            </div>
                            )
                        }else if (stdFileAddOn_Show == true){
                          //setStdInform_Show(false)

                          return(
                            //<img src={studentRegMap.transcript} style={{width:"250",height:"auto"}} class="img-thumbnail" alt="..."></img>

                              <div style={{width:"1080px",height:"1000px"}}>
                                  <iframe src={stdFileAddOn} width="100%" height="100%"/>
                              </div>

                            )
                        }
                      })()}
                      </div>
                      

                     </Accordion.Body>   
                     </Accordion.Item>
                      
                  ))}
                  
                  </Accordion>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {downloaderComponentUI}
        </div>
    );
}    
export default Card_Form
