import React, { Component, useState, useEffect, Fragment} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {Form} from 'react-bootstrap';

import './StudentInform.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Layout/StructureWebUI.css'
import '../../Layout/Layout.css'

import Selector from "../selector/Selector";
//import TableComp from "./Package_StudentInform/TableComp";
import OldScholarTable from "./Package_StudentInform/OldScholarTable";
import GroupRadio from "../radiobutton/GroupRadio";
import CheckBox from "../checkbox/CheckBox";
import FormInput from "./FormInput";
import FormNumber from "./FormNumber";
import FormTextArea from "./FormTextArea";
import UploadFile from "../uploadfile/UploadFile";
import DatePicker from "../datepicker/DatePicker";
import ButtonGreen from "../button/ButtonGreen";
import ButtonRed from "../button/ButtonRed";
import ButtonYellow from "../button/ButtonYellow";
import ScholarBadget_2 from "../scholarbadget/ScholarBadget_2";

export default function StudentInform(id,scholar,startPage,disable,btn,viewData) {
    const [page,setPage] = useState(startPage)
    const [user_ID,setUser_ID] = useState(id)
    const [available_ID,setAvailable_ID] = useState(false)
    //Student 12
    const [image_Std,setImage_Std] = useState("")
    const [fullName_Std,setFullName_Std] = useState("")
    const [birthDate_Std,setBirthDate_Std] = useState("")
    const [major_Std,setMajor_Std] = useState("")
    const [phone_Std,setPhone_Std] = useState("")
    const [GPA_Std,setGPA_Std] = useState("")
    const [id_Std,setId_Std] = useState("")
    const [year_Std,setYear_Std] = useState("")
    const [term_Std,setTerm_Std] = useState("")
    const [email_Std,setEmail_Std] = useState("")
    const [advisor_Std,setAdvisor_Std] = useState("")
    const [address_Std,setAddress_Std] = useState("")

    //Father 7
    const [fullname_Father,setFullname_Father] = useState("")
    const [state_Father,setState_Father] = useState("")
    const [job_Father,setJob_Father] = useState("")
    const [workplace_Father,setWorkplace_Father] = useState("")
    const [salary_Father,setSalary_Father] = useState("")
    const [phone_Father,setPhone_Father] = useState("")
    const [address_Father,setAddress_Father] = useState("")

    //Mother 9
    const [fullname_Mother,setFullname_Mother] = useState("")
    const [state_Mother,setState_Mother] = useState("")
    const [job_Mother,setJob_Mother] = useState("")
    const [workplace_Mother,setWorkplace_Mother] = useState("")
    const [salary_Mother,setSalary_Mother] = useState("")
    const [phone_Mother,setPhone_Mother] = useState("")
    const [address_Mother,setAddress_Mother] = useState("")
    const [mariage_Mother,setMariage_Mother] = useState("")
    const [mariage_Seperate_Reason,setMariage_Seperate_Reason] = useState("")

    //Sibling and Parent 9
    const [money_Donator,setMoney_Donator] = useState("")
    const [who_Donators,setWho_Donators] = useState("")
    const [who_Donator,setWho_Donator] = useState({บิดา:"" ,มารดา:"",ผู้อุปการคุณ:""})
    const [whoare_Donator,setWhoare_Donator] = useState("") 
    const [sibling_Donator,setSibling_Donator] = useState("") 
    const [job_Donator,setJob_Donator] = useState("")
    const [workplace_Donator,setWorkplace_Donator] = useState("")
    const [tel_Donator,setTel_Donator] = useState("") 
    const [contacts1, setContacts1] = useState([{education: "-",fullName: "-",id: "-" ,job: "-" ,workplace: "-"}])

    //Other 5
    const [parttime_Other,setParttime_Other] = useState("")
    const [takeloan_Other,setTakeloan_Other] = useState("")
    const [job_Other,setJob_Other] = useState("")
    const [salary_Other,setSalary_Other] = useState("")
    const [contacts2, setContacts2] = useState([{id : "-",schoolyear : "-",scholarship : "-",cost : "-"}])
    

    const [showimg_Std,setShowimg_Std] = useState("")
    const [StudentInformList,setStudentInFormList] = useState([])
    const termRadio = [{list:"ภาคปกติ"},{list:"ภาคพิเศษ"},]
    const stateRadio = [{list:"มีชีวิต"},{list:"ถึงเเก่กรรม"},]
    const mariageRadio = [{list:"อยู่ด้วยกัน"},{list:"หย่าร้าง"},{list:"บิดา-มารดา สมรสใหม่"},{list:"แยกกันอยู่"}]

    var curdate = new Date();
    const difAges = (date, otherDate) => {
      //console.log("date",typeof date,"otherDate",typeof otherDate);
      //console.log(otherDate-date);
        var days = Math.floor((date-otherDate) / (1000 * 60 * 60 * 24));
        var hours = Math.floor(((date-otherDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor(((date-otherDate) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(((date-otherDate) % (1000 * 60)) / 1000);
        var year = Math.floor((days/30)/12);
        return year+" ปี"
    }
    
  const ResetInform = () => {
    setImage_Std("")
    setShowimg_Std("")
    setFullName_Std("")
    setBirthDate_Std("")
    setMajor_Std("")
    setPhone_Std("")
    setGPA_Std("")
    setId_Std("")
    setYear_Std("")
    setTerm_Std("")
    setEmail_Std("")
    setAdvisor_Std("")
    setAddress_Std("")

    setFullname_Father("")
    setState_Father("")
    setJob_Father("")
    setWorkplace_Father("")
    setSalary_Father("")
    setPhone_Father("")
    setAddress_Father("")

    setFullname_Mother("")
    setState_Mother("")
    setJob_Mother("")
    setWorkplace_Mother("")
    setSalary_Mother("")
    setPhone_Mother("")
    setAddress_Mother("")
    setMariage_Mother("")
    setMariage_Seperate_Reason("")

    setMoney_Donator("")
    setWho_Donators("")
    setWhoare_Donator("")
    setSibling_Donator("")
    setJob_Donator("")
    setWorkplace_Donator("")
    setTel_Donator("")
    setContacts1([{education: "-",fullName: "-",id: "-" ,job: "-" ,workplace: "-"}])

    setParttime_Other("")
    setTakeloan_Other("")
    setJob_Other("")
    setSalary_Other("")
    setContacts2([{id : "-",schoolyear : "-",scholarship : "-",cost : "-"}])
  }

  const usexInform_Std = () => { //function gettest
    //console.log("viewData",viewData);
    if (viewData === undefined){
      axios.get("http://127.0.0.1:8000/Studentinform/"+user_ID.toString()+"/").then((response)=>{
        //console.log("viewData: IF");
        var getInform_Std = response.data
        var father_Obj = JSON.parse(getInform_Std.Father_Profile)
        var mother_Obj = JSON.parse(getInform_Std.Mother_Profile)
        var donator_Obj = JSON.parse(getInform_Std.Sibling_Profile)
        var other_Obj = JSON.parse(getInform_Std.Other_Profile)
        //console.log(getInform_Std);
        //console.log(father_Obj.fullname_Father)

      setImage_Std(getInform_Std.image_Std)
      setShowimg_Std(getInform_Std.image_Std)
      setFullName_Std(getInform_Std.fullName_Std)
      setBirthDate_Std(getInform_Std.birthDate_Std)
      setMajor_Std(getInform_Std.major_Std)
      setPhone_Std(getInform_Std.phone_Std)
      setGPA_Std(getInform_Std.GPA_Std)
      setId_Std(getInform_Std.id_Std)
      setYear_Std(getInform_Std.year_Std)
      setTerm_Std(getInform_Std.term_Std)
      setEmail_Std(getInform_Std.email_Std)
      setAdvisor_Std(getInform_Std.advisor_Std)
      setAddress_Std(getInform_Std.address_Std)

      setFullname_Father(father_Obj.fullname_Father)
      setState_Father(father_Obj.state_Father)
      setJob_Father(father_Obj.job_Father)
      setWorkplace_Father(father_Obj.workplace_Father)
      setSalary_Father(father_Obj.salary_Father)
      setPhone_Father(father_Obj.phone_Father)
      setAddress_Father(father_Obj.address_Father)

      setFullname_Mother(mother_Obj.fullname_Mother)
      setState_Mother(mother_Obj.state_Mother)
      setJob_Mother(mother_Obj.job_Mother)
      setWorkplace_Mother(mother_Obj.workplace_Mother)
      setSalary_Mother(mother_Obj.salary_Mother)
      setPhone_Mother(mother_Obj.phone_Mother)
      setAddress_Mother(mother_Obj.address_Mother)
      setMariage_Mother(mother_Obj.mariage_Mother)
      setMariage_Seperate_Reason(mother_Obj.mariage_Seperate_Reason)

      setMoney_Donator(donator_Obj.money_Donator)
      setWho_Donators(donator_Obj.who_Donators)
      setWhoare_Donator(donator_Obj.whoare_Donator)
      setSibling_Donator(donator_Obj.sibling_Donator)
      setJob_Donator(donator_Obj.job_Donator)
      setWorkplace_Donator(donator_Obj.workplace_Donator)
      setTel_Donator(donator_Obj.tel_Donator)
      setContacts1(donator_Obj.contacts1)

      setParttime_Other(other_Obj.parttime_Other)
      setTakeloan_Other(other_Obj.takeloan_Other)
      setJob_Other(other_Obj.job_Other)
      setSalary_Other(other_Obj.salary_Other)
      setContacts2(other_Obj.contacts2)
      }
      ,(err)=>{
        alert("กรุณากรอกข้อมูล")
      });
      
    }else{
      //console.log("viewData: ELSE");
      var getInform_Std = viewData
      var father_Obj = JSON.parse(getInform_Std.Father_Profile)
      var mother_Obj = JSON.parse(getInform_Std.Mother_Profile)
      var donator_Obj = JSON.parse(getInform_Std.Sibling_Profile)
      var other_Obj = JSON.parse(getInform_Std.Other_Profile)
      setImage_Std(getInform_Std.image_Std)
      setShowimg_Std(getInform_Std.image_Std)
      setFullName_Std(getInform_Std.fullName_Std)
      setBirthDate_Std(getInform_Std.birthDate_Std)
      setMajor_Std(getInform_Std.major_Std)
      setPhone_Std(getInform_Std.phone_Std)
      setGPA_Std(getInform_Std.GPA_Std)
      setId_Std(getInform_Std.id_Std)
      setYear_Std(getInform_Std.year_Std)
      setTerm_Std(getInform_Std.term_Std)
      setEmail_Std(getInform_Std.email_Std)
      setAdvisor_Std(getInform_Std.advisor_Std)
      setAddress_Std(getInform_Std.address_Std)

      setFullname_Father(father_Obj.fullname_Father)
      setState_Father(father_Obj.state_Father)
      setJob_Father(father_Obj.job_Father)
      setWorkplace_Father(father_Obj.workplace_Father)
      setSalary_Father(father_Obj.salary_Father)
      setPhone_Father(father_Obj.phone_Father)
      setAddress_Father(father_Obj.address_Father)

      setFullname_Mother(mother_Obj.fullname_Mother)
      setState_Mother(mother_Obj.state_Mother)
      setJob_Mother(mother_Obj.job_Mother)
      setWorkplace_Mother(mother_Obj.workplace_Mother)
      setSalary_Mother(mother_Obj.salary_Mother)
      setPhone_Mother(mother_Obj.phone_Mother)
      setAddress_Mother(mother_Obj.address_Mother)
      setMariage_Mother(mother_Obj.mariage_Mother)
      setMariage_Seperate_Reason(mother_Obj.mariage_Seperate_Reason)

      setMoney_Donator(donator_Obj.money_Donator)
      setWho_Donators(donator_Obj.who_Donators)
      setWhoare_Donator(donator_Obj.whoare_Donator)
      setSibling_Donator(donator_Obj.sibling_Donator)
      setJob_Donator(donator_Obj.job_Donator)
      setWorkplace_Donator(donator_Obj.workplace_Donator)
      setTel_Donator(donator_Obj.tel_Donator)
      setContacts1(donator_Obj.contacts1)

      setParttime_Other(other_Obj.parttime_Other)
      setTakeloan_Other(other_Obj.takeloan_Other)
      setJob_Other(other_Obj.job_Other)
      setSalary_Other(other_Obj.salary_Other)
      setContacts2(other_Obj.contacts2)
    }

  }
  const checkInform_DB = () => {
    axios.get("http://127.0.0.1:8000/Studentinform/"+user_ID.toString()+"/").then((response)=>{
      usexInform_Std()
      setAvailable_ID(response.data.available_ID)
      //console.log("AVAI:",available_ID)
      /*for (let i = 0; i < response.data.length; i++) {
        //console.log("GET",response.data);
        var getID = JSON.parse(response.data[i].stdInform_id)
        console.log("ID Nisit:",getID);
        console.log("ID NisitX:",user_ID);
        if(user_ID == getID){
          console.log("FOUND ID Nisit");
          usexInform_Std()
          setAvailable_ID(true)
       
          break
        }else{
          console.log("NOT FOUND ID Nisit");
          ResetInform();
        }
      }  */
    }
    ,(err)=>{
      alert("กรุณากรอกข้อมูล")
      setAvailable_ID(false)
      //console.log("NOT FOUND ID Nisit");
      ResetInform();
    });
  }
  const onSendAx = () => {
    //console.log("XXXX")
    var check = available_ID
    const uploadData = new FormData();
    //console.log(typeof image_Std)
    //console.log(image_Std)
    if (typeof image_Std !== "string" && image_Std !== null){
      //console.log("IS obj",image_Std);
      uploadData.append('image_Std',image_Std[0])
    }
    //console.log("image_Std[0]",image_Std[0]);
    //uploadData.append('image_Std',((typeof image_Std[0] === "undefined") ?   "":image_Std[0]))
    //uploadData.append('image_Std',image_Std[0])
    uploadData.append('stdInform_id',user_ID)
    uploadData.append('fullName_Std',fullName_Std)
    uploadData.append('birthDate_Std',birthDate_Std)
    uploadData.append('major_Std',major_Std)
    uploadData.append('phone_Std',phone_Std)
    uploadData.append('GPA_Std',GPA_Std)
    uploadData.append('id_Std',id_Std)
    uploadData.append('year_Std',year_Std)
    uploadData.append('term_Std',term_Std)
    uploadData.append('email_Std',email_Std)
    uploadData.append('advisor_Std',advisor_Std)
    uploadData.append('address_Std',address_Std)
    uploadData.append('Father_Profile',JSON.stringify({
      fullname_Father : fullname_Father,
      state_Father : state_Father,
      job_Father : job_Father,
      workplace_Father : workplace_Father,
      salary_Father : salary_Father,
      phone_Father : phone_Father,
      address_Father : address_Father}))
    uploadData.append('Mother_Profile',JSON.stringify({
      fullname_Mother : fullname_Mother,
      state_Mother : state_Mother,
      job_Mother : job_Mother,
      workplace_Mother : workplace_Mother,
      salary_Mother : salary_Mother,
      phone_Mother : phone_Mother,
      address_Mother : address_Mother,
      mariage_Mother : mariage_Mother,
      mariage_Seperate_Reason : mariage_Seperate_Reason}))
    uploadData.append('Sibling_Profile',JSON.stringify({
      contacts1 : contacts1,
      money_Donator : money_Donator,
      who_Donators : who_Donators,
      whoare_Donator : whoare_Donator,
      sibling_Donator : sibling_Donator,
      job_Donator : job_Donator,
      workplace_Donator : workplace_Donator,
      tel_Donator : tel_Donator}))
    uploadData.append('Other_Profile',JSON.stringify({
      contacts2 : contacts2,
      parttime_Other : parttime_Other,
      takeloan_Other : takeloan_Other,
      job_Other : job_Other,
      salary_Other : salary_Other})
    )
    //uploadData.append('available_ID',true)
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    //console.log("available_ID:",available_ID);
    //console.log(available_ID);
    if(available_ID === false){
      setAvailable_ID(true)
      uploadData.append('available_ID',true)
      //console.log("XXXXX",available_ID);
      axios.post("http://127.0.0.1:8000/Studentinform/",uploadData,config).then((x) => {console.log("POST Success!!!");
      alert("บันทึกครั้งเเรกสำเร็จ")
      window.location.reload(false);
    })
    }
    else{//console.log(user_ID);
      setAvailable_ID(true)
      uploadData.append('available_ID',true)
      axios.put("http://127.0.0.1:8000/Studentinform/"+user_ID.toString()+"/",uploadData,config).then((x) => {console.log("PUT Success!!!");
      alert("บันทึกสำเร็จ")
      window.location.reload(false);}
      ,(err)=>{
        alert("ไม่สามารถดึงข้อมูลนิสิต")
      })
    }//console.log(available_ID);  
  }
    const majorlist = [{list:"เลือก"},
                      {list:"2560"},
                      {list:"2561"},
                      {list:"2562"},
                      {list:"2563"},
                      {list:"2566"},
                      {list:"2565"}]
                      
    const parentlist = [{list:"บิดา",parent:"บิดา"},
                      {list:"มารดา",parent:"มารดา"},
                      {list:"ผู้อุปการคุณ",parent:"ผู้อุปการคุณ"}]
  

  const checkboxSubmit = (name,value) => {
    //console.log(name);
    //console.log(value);
    setWho_Donator(who_Donator => ({
      ...who_Donator,
      [name]: (value?"":"ให้")
   }));
  };

  const handleSubmitSend = () => {
    console.log({
      image_Std : image_Std,
      fullName_Std : fullName_Std,
      birthDate_Std : birthDate_Std,
      major_Std : major_Std,
      phone_Std : phone_Std,
      GPA_Std : GPA_Std,
      id_Std : id_Std,
      year_Std : year_Std,

      term_Std : term_Std,

      email_Std : email_Std,
      advisor_Std : advisor_Std,
      address_Std : address_Std,

      Father_Profile : JSON.stringify({
      fullname_Father : fullname_Father,
      state_Father : state_Father,
      job_Father : job_Father,
      workplace_Father : workplace_Father,
      salary_Father : salary_Father,
      phone_Father : phone_Father,
      address_Father : address_Father}),
      
      Mother_Profile : JSON.stringify({
      fullname_Mother : fullname_Mother,
      state_Mother : state_Mother,
      job_Mother : job_Mother,
      workplace_Mother : workplace_Mother,
      salary_Mother : salary_Mother,
      phone_Mother : phone_Mother,
      address_Mother : address_Mother,
      mariage_Mother : mariage_Mother,
      mariage_Seperate_Reason : mariage_Seperate_Reason}),
      
      Sibling_Profile : JSON.stringify({
      money_Donator : money_Donator,
      who_Donators : who_Donators,
      whoare_Donator : whoare_Donator,
      sibling_Donator : sibling_Donator,
      job_Donator : job_Donator,
      workplace_Donator : workplace_Donator,
      tel_Donator : tel_Donator}),

      Other_Profile : JSON.stringify({
      parttime_Other : parttime_Other,
      takeloan_Other : takeloan_Other,
      job_Other : job_Other,
      salary_Other : salary_Other,
      })
    });
  };


  const handleShowImg = (e) => {
    setImage_Std(e.target.files)
    setShowimg_Std(e.target.files[0].name)
    //console.log(e.target.files.name);
  };

  const handleSubmitPage = (e) => {
    e.preventDefault()
    setPage(page+1)
  };
  
  const refreshPage = (e) => {
    e.preventDefault()
    window.location.reload(false)
  };

  useEffect(() => {
    checkInform_DB();
  }, []); 

  if(page===0){
    return (
      <div className='layout-1'>
        <div className="topic_sc-row">
          <img src={image_Std}  style={{width:"250px",height:"300px"}} class="img-thumbnail" alt="..."></img>
          <div className="topic_sc-col">
            <br/> <br/> <br/> 
          
            <label class="form-label" >&nbsp; รหัสนิสิต: {id_Std}</label>
            <label class="form-label" >&nbsp; ชื่อ: {fullName_Std}</label>
            <label class="form-label" style={{color:"blue"}}>&nbsp; สาขา: {major_Std}</label>
            <br/>
            <button type="button" className='btn btn-success btn-lg' style={{width:"300px"}} onClick={()=>setPage(1)}>บันทึก/เเก้ไขข้อมูล</button>
          </div>
        </div>
      </div>
    )
  }
  else if(page===1){
    return ( 
    <form onSubmit={handleSubmitPage} class="was-validated">
    <div className='layout-2' style={{ width:"1000px"}  }>
      <div className='header-l2'><h1 className='h1topic'>ข้อมูลนิสิต :</h1></div>
        <div className='body-l2'>    
          <div className='body-l2-left'>
              <label for="formFile" class="form-label">รูปของนิสิต (.png, .gif, .jpg)</label>
              {(()=>{
                if (showimg_Std.slice(0, 4) == "http"){
                  return(
                    <label class="form-label" style={{color:"blue",width:"300px"}}>Uploaded: อัปโหลดรูปเเล้ว</label>
                  )
                }else{
                  return(
                    <label class="form-label" style={{color:"blue",width:"300px"}}>Uploaded: {showimg_Std}</label>
                  )
                }
              })()}

              <input class="form-control" type="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>handleShowImg(e)} style={{fontSize:"20px",width:"450px"}} required={showimg_Std ? false:true} disabled={disable}/>
            {/*<UploadFile topic="รูปของนิสิต (.png, .gif, .jpg)" accept="image/png, image/gif, image/jpeg" onChange={(e)=>setImage_Std(e.target.files)}/>*/}
            <FormInput type="text" topic="ชื่อ-สกุล (ภาษาไทย)" name="fullname" value={fullName_Std} onChange={(e)=>setFullName_Std(e.target.value)} disabled={disable}/>
            <div className="topic_sc-row">
              <DatePicker topic="วัน/เดือน/ปี เกิด" value={birthDate_Std} onChange={(e)=>setBirthDate_Std(e.target.value)} disabled={disable} required/>
              <label class="form-label" style={{marginLeft:"20px",marginTop:"12px"}}>อายุ: {difAges(curdate,new Date(birthDate_Std))}</label>
            </div>
            <FormInput topic="ที่อยู่ปัจจุบัน" name="address" value={address_Std} onChange={(e)=>setAddress_Std(e.target.value)} disabled={disable}/>
            <FormInput topic="อีเมล์(ถ้ามี)" name="email" value={email_Std} onChange={(e)=>setEmail_Std(e.target.value)} disabled={disable}/>
            <FormInput type="text" topic="หมายเลขโทรศัพท์" name="tel" value={phone_Std} onChange={(e)=>setPhone_Std(e.target.value)} disabled={disable} min={"9"} max={"10"}/>
          </div>
          <div className='body-l2-right'>
            <FormInput topic="รหัสนิสิต" name="id" value={id_Std} onChange={(e)=>setId_Std(e.target.value)} disabled={disable} min={"10"} max={"10"}/>
            <FormNumber topic="ชั้นปีการศึกษา" name="year" min="1" max="8" value={year_Std} onChange={(e)=>setYear_Std(e.target.value)} disabled={disable}/>
            <GroupRadio topic="เลือกภาค" data={termRadio} value={term_Std} onChange={(e)=>setTerm_Std(e.target.value)} disabled={disable}/>
            <Selector topic="สาขา" data={[{list:"เลือก"},{list:"T05 วิศวกรรมโยธา"},{list:"T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"},{list:"T13 วิศวกรรมเครื่องกลและการออกแบบ"},{list:"T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"},{list:"T17 วิศวกรรมอุตสาหการและระบบ"},{list:"T18 วิศวกรรมเครื่องกลและระบบการผลิต"},{list:"T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"}]} value={major_Std} onChange={(e)=>setMajor_Std(e.target.value)} disabled={disable}/>
            <FormInput topic="ชื่ออาจารย์ที่ปรึกษา" name="fullname" value={advisor_Std} onChange={(e)=>setAdvisor_Std(e.target.value)} disabled={disable}/>
            <FormNumber topic="คะแนนเฉลี่ยสะสม (GPA)" name="gpa" step="0.01" min="0.00" max="4.00" value={GPA_Std} onChange={(e)=>setGPA_Std(e.target.value)} disabled={disable}/>
          </div>
        </div>
      <div className='footer-l2-center'>
        <div className='next-prevbutton'>
          <button onClick={(e)=>refreshPage(e)} type="button" class="btn btn-dark" disabled={disable}>กลับ</button>
          <button type="submit" class="btn btn-dark" >ถัดไป</button>
          {/*<button onClick={()=>setPage(2)} type="button" class="btn btn-dark">ถัดไป SKIP </button>*/}
        </div>
      </div> 
    </div> 
  </form>
      
);}
else if(page===2){
  return (
  <form onSubmit={handleSubmitPage} class="was-validated">
    <div className='layout-2' style={{ width:"1000px"}}>
      <div className='header-l2'><h1 className='h1topic'>ข้อมูลบิดา :</h1></div>
        <div className='body-l2'>    
          <div className='body-l2-left'>
            <FormInput topic="ชื่อ-สกุลบิดา (ภาษาไทย)" name="fullname" value={fullname_Father} onChange={(e)=>setFullname_Father(e.target.value)} disabled={disable}/>
            <GroupRadio topic="สถานะบิดา" data={stateRadio} value={state_Father} onChange={(e)=>setState_Father(e.target.value)} disabled={disable}/>
            {(()=>{
              if (state_Father==="มีชีวิต"){
                return(<>
                <FormInput topic="อาชีพ" name="job" value={job_Father} onChange={(e)=>setJob_Father(e.target.value)} disabled={disable}/>
                <FormInput topic="สถานที่ประกอบอาชีพ" name="workplace" value={workplace_Father} onChange={(e)=>setWorkplace_Father(e.target.value)} disabled={disable}/>
                <FormNumber topic="มีรายได้เดือนละ(บาท)" name="cost" min="0" value={salary_Father} onChange={(e)=>setSalary_Father(e.target.value)} disabled={disable}/>
                <FormInput topic="เบอร์โทรศัพท์" name="tel" value={phone_Father} onChange={(e)=>setPhone_Father(e.target.value)} disabled={disable} min={"9"} max={"10"}/>
                </>)
              }
            })()}
          </div>
          <div className='body-l2-right'>
          {(()=>{
              if (state_Father==="มีชีวิต"){
                return(
                  <FormTextArea topic="ที่อยู่ปัจจุบันของบิดา" name="address" value={address_Father} onChange={(e)=>setAddress_Father(e.target.value)} disabled={disable}/>
                )}
          })()}
          </div>
        </div>
        <div className='footer-l2-center'>
        <div className='next-prevbutton'>
          <button onClick={()=>setPage(page-1)} type="button" class="btn btn-dark">กลับ</button>
          <button type="submit" class="btn btn-dark" >ถัดไป</button>
          {/*<button onClick={()=>setPage(3)} type="button" class="btn btn-dark">ถัดไป SKIP </button>*/}
        </div>
      </div> 
    </div>
  </form>  
);}

  else if(page==3){
    return ( 
      <form onSubmit={handleSubmitPage} class="was-validated">
        <div className='layout-2' style={{ width:"1000px"}}>
          <div className='header-l2'><h1 className='h1topic'>ข้อมูลมารดา :</h1></div>
          <div className='body-l2'>    
            <div className='body-l2-left'>
              <FormInput topic="ชื่อ-สกุลมารดา (ภาษาไทย)" name="fullname" value={fullname_Mother} onChange={(e)=>setFullname_Mother(e.target.value)} disabled={disable}/>
              <GroupRadio topic="สถานะมารดา" data={stateRadio} value={state_Mother} onChange={(e)=>setState_Mother(e.target.value)} disabled={disable}/>
              {(()=>{
                if (state_Mother==="มีชีวิต"){
                  return(<>
                  <FormInput topic="อาชีพ" name="job" value={job_Mother} onChange={(e)=>setJob_Mother(e.target.value)} disabled={disable}/>
                  <FormInput topic="สถานที่ประกอบอาชีพ" name="workplace" value={workplace_Mother} onChange={(e)=>setWorkplace_Mother(e.target.value)} disabled={disable}/>
                  <FormNumber topic="มีรายได้เดือนละ(บาท)" name="cost" value={salary_Mother} onChange={(e)=>setSalary_Mother(e.target.value)} disabled={disable}/>
                  <FormInput topic="เบอร์โทรศัพท์" name="tel" value={phone_Mother} onChange={(e)=>setPhone_Mother(e.target.value)} disabled={disable} min={"9"} max={"10"}/>
                  </>)
                }
              })()}
            </div>
            <div className='sideform'>
              {(()=>{
              if (state_Mother==="มีชีวิต"){
                return(<>
                      <div className='sideform'>
                        <FormTextArea topic="ที่อยู่ปัจจุบันของมารดา" name="address" value={address_Mother} onChange={(e)=>setAddress_Mother(e.target.value)} disabled={disable}> </FormTextArea>
                      </div> 
                      </>)
                }
              })()}
                <GroupRadio topic="สถานะของบิดา-มารดา" data={mariageRadio} value={mariage_Mother} onChange={(e)=>setMariage_Mother(e.target.value)} disabled={disable}/>
                {(()=>{
                if (mariage_Mother==="แยกกันอยู่"){
                  return(<>
                        <div className='sideform'>
                          <FormInput topic="เพราะ" name="cause" value={mariage_Seperate_Reason} onChange={(e)=>setMariage_Seperate_Reason(e.target.value)} disabled={disable}/>
                        </div> 
                        </>)
                }
              })()}
            </div> 
          </div>
          <div className='footer-l2-center'>
            <div className='next-prevbutton'>
              <button onClick={()=>setPage(2)} type="button" class="btn btn-dark">กลับ </button>
              <button type="submit" class="btn btn-dark" >ถัดไป</button>
              {/*<button onClick={()=>setPage(4)} type="button" class="btn btn-dark">ถัดไป SKIP </button>*/}
            </div>
          </div> 
        </div> 
    </form>
    );
  }

  else if(page==4){
    const EditableRow = ({
      editFormData,
      handleEditFormChange,
      handleCancelClick,
    }) => {
      return (
        <tr>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter a name..."
              name="fullName"
              value={editFormData.fullName}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter an education..."
              name="education"
              value={editFormData.education}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter an job..."
              name="job"
              value={editFormData.job}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter an workplace..."
              name="workplace"
              value={editFormData.workplace}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <button type="submit" class="btn btn-success" >บันทึก</button>
            <button type="button" class="btn btn-danger" onClick={handleCancelClick}>ยกเลิก </button>
          </td>
          
        </tr>
      );
    };
    
    const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick }) => {
      return(
        <tr>
          <td className="tableform">{contact.fullName}</td>
          <td className="tableform">{contact.education}</td>
          <td className="tableform">{contact.job}</td>
          <td className="tableform">{contact.workplace}</td>
          <td className="tableform">
            <button type="button" class="btn btn-warning" onClick={(event) => handleEditClick(event, contact)} disabled={disable}>แก้ไข</button>
            <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(contact.id)} disabled={disable}>ลบ</button>
          </td>
        </tr>
      );
    }
    function TableComp(){
      //const [contacts, setContacts] = useState(datason1);
      const [addFormData, setAddFormData] = useState({
        id:"",
        fullName: "",
        education: "",
        job:"",
        workplace: "",
      });
      const [editFormData, setEditFormData] = useState({
        id:"",
        fullName: "",
        education: "",
        job:"",
        workplace: "",
      });
    
      const [editContactId, setEditContactId] = useState(null);
    
      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
    
        setAddFormData(newFormData);
      };
    
      const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };
    
      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
          //id: nanoid(),
          id: contacts1.length+1,
          fullName: addFormData.fullName,
          education: addFormData.education,
          job: addFormData.job,
          workplace: addFormData.workplace
        };
    
        const newContacts = [...contacts1, newContact];
        setContacts1(newContacts);
      };
    
      const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedContact = {
          id: editContactId,
          fullName: editFormData.fullName,
          education: editFormData.education,
          job: editFormData.job,
          workplace: editFormData.workplace
        
        };
    
        const newContacts = [...contacts1];
    
        const index = contacts1.findIndex((contact) => contact.id === editContactId);
    
        newContacts[index] = editedContact;
    
        setContacts1(newContacts);
        setEditContactId(null);
      };
    
      const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
    
        const formValues = {
          fullName: contact.fullName,
          education: contact.education,
          job: contact.job,
          workplace: contact.workplace
         
        };
    
        setEditFormData(formValues);
      };
    
      const handleCancelClick = () => {
        setEditContactId(null);
      };
    
      const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts1];
    
        const index = contacts1.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts1(newContacts);
      };
      const PrintSubmit = () => {
        //console.log(contacts1);
      }
      return (
        <div className="table-container">
          <form className="tableform" onSubmit={handleEditFormSubmit}>
            <table className="tableform">
              <thead>
                <tr>
                  <th className="tableform">ชื่อ-สกุลของพี่น้อง</th>
                  <th className="tableform">ระดับการศึกษา</th>
                  <th className="tableform">อาชีพ</th>
                  <th className="tableform">สถานประกอบอาชีพ/สถานศึกษา</th>
                  <th className="tableform">แก้ไข/ลบ</th>
                </tr>
              </thead>
              <tbody>
                {contacts1.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
    
          <form className="textform" onSubmit={handleAddFormSubmit}>
              <label for="explicit-label-name" className='labelinput'>เพิ่มรายชื่อ</label> 
              <input className="tableform"
                type="text"
                name="fullName"
                required="required"
                placeholder="กรอกชื่อ (มีคำนำหน้า)..."
                onChange={handleAddFormChange}
                disabled={disable}
              />
              <input className="tableform"
                type="text"
                name="education"
                required="required"
                placeholder="กรอกระดับการศึกษา..."
                onChange={handleAddFormChange}
                disabled={disable}
              />
              <input className="tableform"
                type="text"
                name="job"
                required="required"
                placeholder="กรอกอาชีพ..."
                onChange={handleAddFormChange}
                disabled={disable}
              />
              <input className="tableform"
                type="text" 
                name="workplace"
                required="required"
                placeholder="กรอกสถานประกอบอาชีพ/สถานศึกษา..."
                onChange={handleAddFormChange}
                disabled={disable}
              />
              <div class="tableform-btn">
                <button type="submit" class="btn btn-success" disabled={disable}>เพิ่ม</button>
              </div>
            </form> 
    
        {/*<button class="btn btn-success" onClick={() => PrintSubmit()}>ส่ง</button>*/} 
      </div>
      );
    }
    return ( 
      <div className='layout-2'>
        <h1 className='h1topic'>ข้อมูลพี่-น้อง :</h1>
        <label className='labelinput'>พี่น้องร่วมบิดา มารดา และระดับการศึกษาหรืออาชีพ เรียงตามลําดับดังนี้ (รวมนิสิตผู้สมัครด้วย) </label>
        <TableComp/>
        <form onSubmit={handleSubmitPage} class="was-validated">
          <div className='body-l1'>
            <div className='body-l2'>
              <div className='body-l2-left'>
                <FormNumber topic="ผู้สมัครได้รับเงินค่าใช้จ่ายเดือนละ (บาท)" name="cost" min="0" value={money_Donator} onChange={(e)=>setMoney_Donator(e.target.value)} disabled={disable}/>
                {/*<CheckBox topic="รับเงินจาก" data={parentlist} value={who_Donator} action={(e)=>checkboxSubmit(e.target.name,e.target.value)}/>*/}
                <GroupRadio topic="รับเงินจาก" data={[{list:"บิดา"},{list:"มารดา"},{list:"ผู้อุปการคุณ"}]} value={who_Donators} onChange={(e)=>setWho_Donators(e.target.value)} disabled={disable}/>
                {(()=>{
                  if (who_Donators==="ผู้อุปการคุณ"){
                    return(
                            <FormInput topic="ผู้อุปการะนั้นเกี่ยวข้องเป็น" name="who" value={whoare_Donator} onChange={(e)=>setWhoare_Donator(e.target.value)} disabled={disable}/>
                          )
                    }
                })()}
              </div>
              <div className='body-l2-right'>
                {(()=>{
                    if (who_Donators==="ผู้อุปการคุณ"){
                      return(
                          <>
                            <FormInput topic="ผู้อุปการะมีบุตรในอุปการะอีกจํานวน (คน)" name="who" value={sibling_Donator} onChange={(e)=>setSibling_Donator(e.target.value)} disabled={disable}/>
                            <FormInput topic="มีอาชีพ" name="job" value={job_Donator} onChange={(e)=>setJob_Donator(e.target.value)} disabled={disable}/>
                            <FormInput topic="สถานที่ประกอบอาชีพ" name="workplace" value={workplace_Donator} onChange={(e)=>setWorkplace_Donator(e.target.value)} disabled={disable}/>
                            <FormInput topic="โทรศัพท์" name="tel" value={tel_Donator} onChange={(e)=>setTel_Donator(e.target.value)} disabled={disable}/>
                          </>
                            )
                    }
                })()}
              </div>
            </div>
            <div className='footer-l2-center'>
              <div className='next-prevbutton'>
                <button onClick={()=>setPage(3)} type="button" class="btn btn-dark">กลับ </button>
                <button type="submit" class="btn btn-dark" >ถัดไป</button>
                {/*<button onClick={()=>setPage(5)} type="button" class="btn btn-dark">ถัดไป SKIP </button>*/}
              </div>
            </div> 
          </div>
        </form>
      </div>
    
    );
  }

  else if(page==5){
    const EditableRow = ({
      editFormData,
      handleEditFormChange,
      handleCancelClick,
    }) => {
      return (
        <tr>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter a Schoolyear..."
              name="schoolyear"
              value={editFormData.schoolyear}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter an Scholarship..."
              name="scholarship"
              value={editFormData.scholarship}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <input className="tableform"
              type="text"
              required="required"
              placeholder="Enter an Cost..."
              name="cost"
              value={editFormData.cost}
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="tableform">
            <button type="submit" class="btn btn-success">บันทึก</button>
            <button type="button" class="btn btn-danger" onClick={handleCancelClick}>ยกเลิก </button>
          </td>
          
        </tr>
      );
    };
    
    const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
      return (
        <tr>
          <td className="tableform">{contact.schoolyear}</td>
          <td className="tableform">{contact.scholarship}</td>
          <td className="tableform">{contact.cost}</td>
          <td className="tableform">
            <button type="button" class="btn btn-warning" onClick={(event) => handleEditClick(event, contact)} disabled={disable}>แก้ไข</button>
            <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(contact.id)} disabled={disable}>ลบ</button>
          </td>
        </tr>
      );
    }
    
    function OldScholarTable(){
      //const [contacts2, setContacts2] = useState(datason2);
      const [addFormData, setAddFormData] = useState({
        id:"",
        schoolyear: "",
        scholarship: "",
        cost:"",
      });
      const [editFormData, setEditFormData] = useState({
        id:"",
        schoolyear: "",
        scholarship: "",
        cost:"",
      });
    
      const [editContactId, setEditContactId] = useState(null);
    
      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
    
        setAddFormData(newFormData);
      };
    
      const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };
    
      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
          //id: nanoid(),
          id: contacts2.length+1,
          schoolyear: addFormData.schoolyear,
          scholarship: addFormData.scholarship,
          cost: addFormData.cost,
        };
    
        const newContacts = [...contacts2, newContact];
        setContacts2(newContacts);
      };
    
      const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedContact = {
          id: editContactId,
          schoolyear: editFormData.schoolyear,
          scholarship: editFormData.scholarship,
          cost: editFormData.cost,
        };
    
        const newContacts = [...contacts2];
    
        const index = contacts2.findIndex((contact) => contact.id === editContactId);
    
        newContacts[index] = editedContact;
    
        setContacts2(newContacts);
        setEditContactId(null);
      };
    
      const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
    
        const formValues = {
          schoolyear: contact.schoolyear,
          scholarship: contact.scholarship,
          cost: contact.cost
        };
    
        setEditFormData(formValues);
      };
    
      const handleCancelClick = () => {
        setEditContactId(null);
      };
    
      const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts2];
    
        const index = contacts2.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts2(newContacts);
      };
      const PrintSubmit = () => {
        //console.log(contacts2);
      }
      return (
        <div className="table-container">
          <form className="tableform" onSubmit={handleEditFormSubmit}>
            <table className="tableform">
              <thead>
                <tr>
                  <th className="tableform">ปีการศึกษา</th>
                  <th className="tableform">ชื่อทุนการศึกษา</th>
                  <th className="tableform">มูลค่าทุนละ</th>
                  <th className="tableform">แก้ไข/ลบ</th>
                </tr>
              </thead>
              <tbody>
                {contacts2.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
    
          <form className="textform" onSubmit={handleAddFormSubmit}>
              <label for="explicit-label-name" className='labelinput'>เพิ่มรายชื่อทุน</label> 
              <input className="tableform"
                type="number"
                name="schoolyear"
                required="required"
                placeholder="กรอกปีการศึกษา..."
                onChange={handleAddFormChange}
                disabled={disable}
                min={"2560"}
              />
              <input className="tableform"
                type="text"
                name="scholarship"
                required="required"
                placeholder="กรอกรายชื่อทุน..."
                onChange={handleAddFormChange}
                disabled={disable}
              />
              <input className="tableform"
                type="number"
                name="cost"
                required="required"
                placeholder="กรอกมูลค่าทุน..."
                onChange={handleAddFormChange}
                disabled={disable}
                min={"0"}
              />
              <div class="tableform-btn">
              <button type="submit" class="btn btn-success" disabled={disable}>เพิ่ม</button>
              </div>
            </form> 
    
        {/*></><button class="btn btn-success" onClick={() => PrintSubmit()}>ส่ง</button>*/}
      </div>
      );
    }    
    return ( 
      <div className='layout-2'>
        <h1 className='h1topic'>ข้อมูลทุนการศึกษาเเละอื่นๆ :</h1>
        <label for="explicit-label-name" className='labelinput'>ข้อมูลทุนการศึกษาเเละอื่นๆ</label>
        <OldScholarTable/>
        <form onSubmit={handleSubmitPage} class="was-validated">
        <div className='body-l1'>
          <div className='body-l2'>
            <div className='body-l2-left'>
              <GroupRadio topic="ปัจจุบันท่านได้กู้ยืมเงินกองทุนเงินให้กู้ยืมเพื่อการศึกษาหรือไม่" data={[{list:"กยศ."},{list:"กรอ."},{list:"ไม่ได้กู้ยืม"}]} value={takeloan_Other} onChange={(e)=>setTakeloan_Other(e.target.value)} disabled={disable}/>
              <GroupRadio topic="ผู้สมัครเคยทํางานพิเศษระหว่างหยุดภาคเรียนหรือไม่" data={[{list:"เคย"},{list:"ไม่เคย"}]} value={parttime_Other} onChange={(e)=>setParttime_Other(e.target.value)} disabled={disable}/>
            </div>
            <div className='body-l2-right'>
              {(()=>{
                    if (parttime_Other==="เคย"){
                      return(
                          <>
                            <FormInput topic="ระบุประเภทของงานที่ทํา" name="job" value={job_Other} onChange={(e)=>setJob_Other(e.target.value)} disabled={disable}/>
                            <FormNumber topic="ถ้าเคยได้รับค่าจ้างเฉลี่ยสัปดาห์ละ [บาท]" name="cost" min="0" value={salary_Other} onChange={(e)=>setSalary_Other(e.target.value)} disabled={disable}/>
                          </>
                    )}
              })()}
              
            </div> 
          </div>
          <div className='footer-l2-center'  style={{marginLeft:"220px"}}>
          {(()=>{
                if(btn===0){
                  return(
                    <label for="explicit-label-name" className='labelinput' style={{color:"red"}}>! กรุณากรอกข้อมูลตามความจริงตรวจสอบความถูกต้องก่อนกดบันทึกข้อมูล</label>
                )}
                else if(btn===1){
                  return(
                    <label for="explicit-label-name" className='labelinput' style={{color:"red"}}>! กรุณากรอกข้อมูลตามความจริงตรวจสอบความถูกต้องก่อนกดส่งข้อมูล</label>
                )}
              })()}      
          </div>
          <div className='footer-l2-center'>
            <div className='next-prevbutton' style={{width:"1000px"}}>              
              {(()=>{
                if(btn===0){
                  return(<>
                    <button onClick={()=>setPage(4)} type="button" class="btn btn-dark">กลับ </button>
                    <button onClick={()=>setPage(1)} type="button" class="btn btn-dark">หน้า1 </button>
                    <button onClick={()=>onSendAx()} type="button" className='btn btn-success btn-lg' style={{width:"300px"}}>บันทึก </button></>
                )}
                else if(btn===1){
                  return(
                  <div className='footer-l2-center'>
                    <button onClick={()=>setPage(4)} type="button" class="btn btn-dark" style={{marginLeft:"-300px",marginRight:"20px"}}> กลับ </button>
                    <Link to={"/RegisterScholarship/uploadFile/"+scholar}><button className='btn btn-success btn-lg' style={{width:"300px"}} type="button" >เเนบไฟล์เอกสาร</button></Link>
                  </div>
                )}
                else if(btn===2){
                  return(
                  <div className='footer-l2-center'>
                    <button onClick={()=>setPage(4)} type="button" class="btn btn-dark" style={{marginLeft:"-300px",marginRight:"20px"}}> กลับ </button>
                  </div>
                )}
              })()}    
            </div>
          </div> 
          </div>
        </form>
      </div>
    );
  }
}