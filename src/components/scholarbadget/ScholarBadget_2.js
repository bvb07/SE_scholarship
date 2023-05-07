import React, { Component, useState , useEffect,Fragment} from "react";
import axios from "axios";
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import {Link } from 'react-router-dom';
import FormTextArea from '../form/FormTextArea'
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import FormUpload from '../form/FormUpload'
import StudentInform from '../form/StudentInform'
import ViewInform from '../form/ViewInform'
import '../../Layout/Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ScholarBadget.css"
import SelectorTwoFactor from "../selector/SelectorTwoFactor";

const ScholarBadget_2 = (props) => {
    const {user_ID,startPage} = props
    const [page,setPage] = useState(startPage)
    const [currentTime,setCurrentTime] = useState("")
    const [delayTime,setDelayTime] = useState(new Date())
    const [list_Scholar,setList_Scholar] = useState([])
    const [list_ScholarReg,setList_ScholarReg] = useState([])
    const [registered1,setRegistered1] = useState([])
    const [selectScholar,setSelectScholar] = useState("")
    const [hasInform,setHasInform] = useState(false)
    const [inform_Std,setInform_Std] = useState("")

    const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
    const [yearScholar,setYearScholar] = useState('')//new!
    
    const scholarCollection = [] 
    //search control
    const [searchList,setSearchList] = useState('');
    useEffect(function useSetGetYearScholarDB(){ ////new!
        axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
          setGetYearScholarDB(response.data);
        }
        ,(err)=>{
          alert("ไม่สามารถดึงปีการศึกษาได้")
        }
        );
      },[]) 
 

    async function checkScholar_DB(){
        await axios.get("http://127.0.0.1:8000/Studentinform/"+user_ID.toString()+"/").then((response1)=>{
        //axios.get("http://127.0.0.1:8000/Studentinform/22/").then((response1)=>{
            setHasInform(false)
            setInform_Std(response1.data)
        }
        ,(err)=>{
          alert("กรุณากรอกข้อมูลที่เมนู 'ข้อมูลนิสิต'")
          //console.log("ไปกรอกข้อมูล");
          setHasInform(true)
        });
        
        axios.get("http://127.0.0.1:8000/Managescholarship/").then((response1)=>{
            var schoFromDB = response1.data
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
                        "processStatus":schoFromDB[i].processStatus,
                        "normalOrcontinue":schoFromDB[i].normalOrcontinue,
                        "Round":schoFromDB[i].Round
                    }
                      )
                    }
                } 
                setList_Scholar(scholarCollection)
              }
              else{
                for (let i = 0; i < schoFromDB.length; i++) {
                      if ( yearScholar == (schoFromDB[i].srcYear)) {
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
                            "processStatus":schoFromDB[i].processStatus,
                            "normalOrcontinue":schoFromDB[i].normalOrcontinue,
                            "Round":schoFromDB[i].Round
                        }
                          )
                        }
                      } 
                  } 
                  setList_Scholar(scholarCollection)
              }
        }
        ,(err)=>{
          alert("ไม่สามารถดึงทุนการศึกษาได้")
        });

        axios.get("http://127.0.0.1:8000/RegisterScholarship/").then((response2)=>{
            var reg = response2.data
            //console.log("RES3",response2.data);
            setList_ScholarReg(response2.data)
        }
        ,(err)=>{
          alert("ไม่สามารถดึงปีการสมัครทุนการศึกษาได้")
        });
    }
    const checkRegCont_DB = (scholar) => {
        //console.log("user_ID",user_ID);
        for (let i = 0; i < list_ScholarReg.length; i++) {
            //console.log("parseInt(list_ScholarReg[i].statusRound)",parseInt(list_ScholarReg[i].statusRound));  
            if ((list_ScholarReg[i].usermatch_id === user_ID )&&( list_ScholarReg[i].namescholarregister === scholar )&& (parseInt(list_ScholarReg[i].statusRound) > 1)){
                //console.log("list_ScholarReg[i].statusRound",list_ScholarReg[i].statusRound);  
                return true
            }
        }  
        return false  
    }
      
    const checkScholar2_DB = (scholar) => {
        for (let i = 0; i < list_ScholarReg.length; i++) {
            if (list_ScholarReg[i].usermatch_id === user_ID && list_ScholarReg[i].namescholarregister === scholar){
                return true
            }
        }  
        return false  
    }

    const checkRegEdit_DB = (scholar) => {
        for (let i = 0; i < list_ScholarReg.length; i++) {
            if (list_ScholarReg[i].usermatch_id === user_ID && list_ScholarReg[i].namescholarregister == scholar && parseInt(list_ScholarReg[i].statusCheck) == 2){
                    return true
            }
        }  
        return false  
    }

    const checkList = () => {
        if(registered1.indexOf())
            return true
        else{return false}  
    }
    useEffect(() => {
        checkScholar_DB();
    }, [yearScholar]); 

    const majorConvert = (major) => {
        var major_Obj = JSON.parse(major)
        let output_Str = "-"
            //console.log(major_Obj);
            //console.log(inform_Std.major_Std);
        if(major_Obj["วิศวกรรมโยธา"] == "ถูกเลือก"){
            output_Str += "T05 | " 
        }if (major_Obj["วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"] == "ถูกเลือก") {
            output_Str += "T12 | " 
        }if(major_Obj["วิศวกรรมเครื่องกลและการออกแบบ"] == "ถูกเลือก"){
            output_Str += "T13 | " 
        }if(major_Obj["วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"] == "ถูกเลือก"){
            output_Str += "T14 | " 
        }if(major_Obj["วิศวกรรมอุตสาหการและระบบ"] == "ถูกเลือก"){
            output_Str += "T17 | " 
        }if(major_Obj["วิศวกรรมเครื่องกลและระบบการผลิต"] == "ถูกเลือก"){
            output_Str += "T18 | " 
        }if(major_Obj["วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"] == "ถูกเลือก"){
            output_Str += "T19 | " 
        }
        
        output_Str += "\n" 
        return(output_Str)
    }
    var curdate = new Date();
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
    
    useEffect(() => {
        const time = setInterval(() => setDelayTime(new Date()), 1000);        
      }, []); 

    const AddOnFile = (value) => {
        //console.log("val",value);
        var add = JSON.parse(value)
        var stradd = ""
        add.addFile.map((a) => (a.fileName!="-" ? stradd += "- "+a.fileName +"\n":null)
        )
        return stradd

    };

    const handleSubmitPage = (e,select) => {
        e.preventDefault(select)
        //console.log("Sel",select);
        setPage(page+1)
        setSelectScholar(select)
      };
    if (page === 1){
    return( 
        <div>
             <div className='header-l2' style={{marginTop:"-10px"}} >
             <div><label class="form-label">{curdate.toDateString()}</label> </div>
             <div style={{marginLeft:"500px",marginTop:"10px"}}> 

             <form style={{marginLeft:"-701px",marginTop:'25px',position:"absolute"}}>
              <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
              <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
              </form>
              <div style={{marginLeft:"50px",marginTop:"17px"}}>
             <span class="d-inline-block" data-bs-toggle="tooltip" title="เลือกปีการศึกษาสำหรับกรองทุน">
            <SelectorTwoFactor topic="ปีการศึกษา" 
                data={
                    getYearScholarDB.map((getYearScholarDB) => (
                    {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                    ))
                } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                /> 
            </span>
            </div>
                </div>
                </div>
            {(()=>{ 
                //console.log("hasInform",hasInform);
                if (hasInform){ 
                    return(
                        <><br/><label class="form-label">!!! กรุณากรอกข้อมูลก่อนที่จะทำการสมัครที่เมนู 'ข้อมูลนิสิต</label></>
                    )
                }
            })()}
            
            <div style={{marginTop:"10px",height:"650px",width:"auto",overflow:"auto"}}> 
            {(()=>{
                    if(list_Scholar.length===0){
                        return (<>
                        <div class="alert alert-warning" role="alert">
                          <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                          
                        </div>
                        </>)
                    }
                    else{
                        return (<>

                        {(()=>{
                            if((list_Scholar.filter((d)=>{
                            if (searchList==""){return d}
                            else if(d.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return d}
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
                                {list_Scholar.filter((d)=>{
                                    if (searchList==""){
                                        return d
                                    }
                                    else if(d.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                        return d
                                    }
                                    }
                                ).map((d,index)=>{
                                    return(<>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>
                                        
                                        {(()=>{
                                            if (checkRegEdit_DB(d.managescho_id)){ 
                                                return(
                                                <Stack direction="horizontal" gap={4} style={{ width: '70rem'}}>
                                                    <img src={d.srcUpload}  style={{width: "300px", height: "200px"}}/>
                                                <div className="illution">{d.nameScholar}</div>
                                                <div className="ms-auto" style={{display: "flex",flexDirection: "column",marginRight:"20px",height:"150px",justifyContent:"space-around"}}>
                                                    <Badge bg="warning" text="black">แก้ไขข้อมูล</Badge>                                            
                                                    <Badge bg="success">{diffDays(new Date((d.srcEndDate).toString()),curdate)}</Badge>
                                                    <Badge bg="white" text="black">{d.amountScholar} ทุน</Badge>
                                                    <Badge bg="black" text="white">{d.normalOrcontinue}</Badge>
                                                    
                                                </div>
                                                </Stack>
                                            )} 
                                            else if (checkScholar2_DB(d.managescho_id)){ 
                                                return(
                                                <Stack direction="horizontal" gap={4} style={{ width: '70rem'}}>
                                                    <img src={d.srcUpload}  style={{width: "300px", height: "200px"}}/>
                                                <div className="illution">{d.nameScholar}</div>
                                                <div className="ms-auto" style={{display: "flex",flexDirection: "column",marginRight:"20px",height:"150px",justifyContent:"space-around"}}>
                                                    <Badge bg="info" text="black">สมัครเเล้ว</Badge>
                                                    <Badge bg="success">{diffDays(new Date((d.srcEndDate).toString()),curdate)}</Badge>
                                                    <Badge bg="white" text="black">{d.amountScholar} ทุน</Badge>
                                                    <Badge bg="black" text="white">{d.normalOrcontinue}</Badge>
                                   
                                                    
                                                </div>
                                                </Stack>)}
                                            else{
                                                return(
                                                <Stack direction="horizontal" gap={4} style={{ width: '70rem'}}>
                                                <img src={d.srcUpload}  style={{width: "300px", height: "200px"}}/> 
                                                <div className="illution" >{d.nameScholar}</div>
                                                <div className="ms-auto" style={{display: "flex",flexDirection: "column",marginRight:"20px",height:"150px",justifyContent:"space-around"}}>
                                                    <Badge bg="success">{diffDays(new Date((d.srcEndDate).toString()),curdate)}</Badge>
                                                    <Badge bg="white" text="black">{d.amountScholar} ทุน</Badge>
                                                    <Badge bg="black" text="white">{d.normalOrcontinue}</Badge>
                                                </div>
                                                </Stack>)}
                                        })()}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='topic_sc-row' style={{backgroundColor : "rgb(190, 190, 190)"}}>      
                                                <div className='topic_sc-col' style={{backgroundColor : "rgb(190, 190, 190)", width:"550px"}}>     
                                        
                                                <p className='detail'>
                                                    <label class="form-label" style={{color : "#661B13"}}>{"ตั้งเเต่ "+d.srcStartDate+" ถึง "+d.srcEndDate} </label>
                                                    <FormTextArea topic="รายละเอียด" name="detail" value={d.detailScholar} disabled={true}/><br/> 
                                                    <label class="form-label">จำนวนของทุน</label><br/> {d.amountScholar} ทุน ทุนละ {d.costScholar} บาท<br/>
                                                    <FormTextArea topic="คุณสมบัติ" name="qualification" value={majorConvert(d.majorSelect)+d.qualificationScholar} disabled={true}/><br/> 
                                                    <label class="form-label">เอกสารที่ต้องการ</label><br/>
                                                    ♦ เรียงความเล่าประวัติส่วนตัวและปัญหาความเดือดร้อน<br/>
                                                    ♦ สำเนาบัตรประจำตัวประชาชนและสำเนาทะเบียนบ้าน<br/>
                                                    ♦ ผลการศึกษา (Transcript)<br/>
                                                    <br/>
                                                    </p> 
                                                </div>
                                                    <div className='topic_sc-col' style={{backgroundColor : "rgb(190, 190, 190)", width:"600px"}}>    
                                                        <img src={d.srcUpload}  style={{width: "400px", height: "500px", marginLeft: "70px"}}/>
                                                    <div style={{fontSize:"20px", marginTop:"80px"}}>
                                                    <FormTextArea topic="เอกสารเพิ่มเติม" name="addOnScholar" value={AddOnFile(d.addOnScholar)} disabled={true}/><br/> 
                                                    </div>
                                                    
                                                    </div>
                                                </div>

                                                {(()=>{ 
                                                    if (checkRegCont_DB(d.managescho_id)  && d.normalOrcontinue == "ทุนต่อเนื่อง" && d.Round > 1 && (parseInt(d.processStatus) === 0)) {
                                                        return(
                                                            <button className={'btn btn-warning btn-lg'} style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)}>ต่อทุนต่อเนื่อง</button>
                                                    )}
                                                    else if(!checkRegCont_DB(d.managescho_id) && d.normalOrcontinue == "ทุนต่อเนื่อง" && d.Round > 1 && (parseInt(d.processStatus) === 0)){
                                                        return(<div style={{ cursor: "not-allowed" }}>
                                                            <span data-toggle="tooltip" data-placement="top" title="ไม่สามารถสมัครได้เนื่องจากทุนต่อเนื่อง" style={{fontSize:"20px"}}>
                                                            <button className='btn btn-success btn-lg' style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)} disabled >ไม่สามารถสมัครได้</button> 
                                                            </span>
                                                    </div>)}
                                                    else if(checkRegEdit_DB(d.managescho_id)){
                                                        return(<>
                                                            <button className={'btn btn-warning btn-lg'} style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)}>แก้ไขข้อมูลใหม่</button>
                                                   </> )}
                                                    else if(checkScholar2_DB(d.managescho_id)){
                                                        return(<div style={{ cursor: "not-allowed" }}> 
                                                        <span data-toggle="tooltip" data-placement="top" title="สมัครได้เพียงหนึ่งครั้ง" style={{fontSize:"20px"}}>
                                                            <button className='btn btn-success btn-lg' style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)} disabled >สมัครเเล้ว</button> 
                                                            </span>
                                                    </div>)}
                                                    else if(diffDays(new Date((d.srcEndDate).toString()),curdate) == "หมดเวลา"){
                                                        return(<div style={{ cursor: "not-allowed" }}>
                                                            <button className='btn btn-success btn-lg' style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)} disabled >หมดเวลา</button> 
                                                   </div> )}else if((checkRegCont_DB(d.managescho_id) == false) && (parseInt(d.processStatus) === 0) && diffDays(new Date((d.srcEndDate).toString()),curdate) !== "หมดเวลา"){
                                                        return(
                                                            <button className='btn btn-success btn-lg' style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)} >สมัคร</button> 
                                                    )}

                                                    else{
                                                        return(<div style={{ cursor: "not-allowed" }}> 
                                                        <span data-toggle="tooltip" data-placement="top" title="ไม่สามารถสมัครได้เนื่องจากทุนกำลังตรวจเอกสารแล้ว" style={{fontSize:"20px"}}>
                                                            <button className='btn btn-success btn-lg' style={{width:"300px",marginLeft:"400px"}} type="button" 
                                                            onClick={(e)=>handleSubmitPage(e,d.managescho_id)} disabled >ไม่สามารถสมัครได้</button> 
                                                            </span>
                                                    </div>)}
                                                })()}
                                            </Accordion.Body>   
                                    </Accordion.Item></>
                                    )})}
                                </Accordion>  </>)}
                        })()}</>)}
            })()} 
            </div>
        </div> 
        )
    }
    if (page === 2){
        return( <>
            <ViewInform scholar={selectScholar} mode={0}/>
            <button type="button" class="btn btn-dark" onClick={() => setPage(1)} >ดูทุนอื่น</button>
            </>
        )
    }
}

export default ScholarBadget_2;
