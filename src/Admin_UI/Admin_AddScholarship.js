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

export default function Admin_AddScholarship() {//main
  function refreshPage() {
    window.location.reload(false);
  }
  const {authState,user_ID,role} = useContext(AuthContext)





  const [yearScholarDB,setYearScholarDB] = useState('')//new!
  const [chooseFileType_Add, setChooseFileType_Add] = useState();
  const [chooseFileType_Edit, setChooseFileType_Edit] = useState();
  const [scholarName, setScholarName] = useState([]);
 //=========================================================================
  var seeHiddenScholar = []
  const [seeClosedscholarName, setSeeClosedScholarName] = useState([]);
  const hiddenTag = [{list:"ทุนที่ปิด",parent:"ทุนที่ปิด"}]
  //checkbox
  const [usehiddenTag,setUsehiddenTag] = useState({ทุนที่ปิด:""})
  const checkboxSubmitHidden = (name,value) => {
    setUsehiddenTag(usehiddenTag => ({
      ...usehiddenTag,
      [name]: (value?"":"ถูกเลือก")
    }));
  };
//==========================================================================

//=========================================================================
//var toggleContinue = []
const toggleContinue = [{list:"ทุนต่อเนื่อง",parent:"ทุนต่อเนื่อง"}]
//checkbox
const [useToggleContinue,setUseToggleContinue] = useState({ทุนต่อเนื่อง:""})
const checkboxToggleContinue= (name,value) => {
  setUseToggleContinue(useToggleContinue => ({
    ...useToggleContinue,
    [name]: (value?"":"ถูกเลือก")
  }));
  if(value==""){alert("เป็นทุนต่อเนื่อง หลังจากบันทึกจะไม่สามารถเปลี่ยนประเภทได้")}
  else{alert("เป็นทุนปกติ หลังจากบันทึกจะไม่สามารถเปลี่ยนประเภทได้")}
  
};
//==========================================================================
//search control
const [searchList,setSearchList] = useState('');





  const [forceClose,setForceClose] = useState("")
  const shutDownScholar = (idClose,start,end,from,closeSign,processScholar,chkClosed) => {
    const uploadData = new FormData();
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    //console.log(typeof(processScholar));
    if(chkClosed==='ปิดทุน'){
      window.alert("ปิดไม่ได้เนื่องจากทุนปิดแล้ว")
    }
    else{
      if(processScholar==5){
        var answer = window.confirm("ยืนยันการปิดทุน ไ่ม่สามารถกลับมาเปิดได้อีก?");
        if (answer) {
        //setForceClose('ปิดทุน')
        uploadData.append('srcStartDate',start)
        uploadData.append('srcEndDate',end)
        uploadData.append('srcScholar',from)
        uploadData.append('statusScholar',closeSign)
        axios.put(`http://127.0.0.1:8000/Managescholarship/${idClose}/`,uploadData,config).then((x) => {
          //console.log("Send Success!!!");
        alert("Success!")
      refreshPage()} 
      ,(err)=>{
        window.alert("ปิดไม่ได้:\n")
      }
        )
      }
      else{

      }
    }
    else{
      switch (processScholar) {
        case 4:alert('ยังไม่สามารถปิดทุนได้เนื่องจาก: ทุนกำลังอยู่หว่างรอใบสำคัญรับเงิน')
          break;
        case 3:alert('ยังไม่สามารถปิดทุนได้เนื่องจาก: ทุนกำลังอยู่หว่างการมอบเงิน')
          break;
        case 2: alert('ยังไม่สามารถปิดทุนได้เนื่องจาก: ทุนกำลังอยู่หว่างการสัมภาษณ์')
          break;
         case 1: alert('ยังไม่สามารถปิดทุนได้เนื่องจาก: ทุนกำลังอยู่หว่างการตรวจเอกสาร')
          break;
          case 0: alert('ยังไม่สามารถปิดทุนได้เนื่องจาก: ทุนกำลังรับสมัคร')
          break;
    
      }
  }

    }
  
    

  
    
    //console.log(idClose+'forceClose'+forceClose)
  }
  const deleteSrcSholarship_scholarName = (id) => {
    var answer = window.confirm("ยืนยันการลบ?\n-ข้อควรระวัง:\n-รายชื่อนิสิตที่สมัครจะถูกลบ\n-เกณฑ์จะถูกลบ\n-สถานะจะถูกลบและอื่นๆ");
        if (answer) {
            axios.delete(`http://127.0.0.1:8000/Managescholarship/${id}/`).then((response)=>{
              setGetNameSrcScholarDB(
                scholarName.filter((val) => {
                  return val.id != id;
                })
              )
            })
        {alert("ลบสำเร็จ กำลังรีเฟรช")
    refreshPage()} 
        
          }
        else {
        }
  }
  const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    handleEditFormSubmit,
  }) => {
    return (
      <tr>
        <td>
          <input className="tableform"
            type="text"
            required="required"
            placeholder="Enter a Schoolyear..."
            name="fileName"
            value={editFormData.fileName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
        </td>
        <td className="tableform">
          <button type="button" class="btn btn-success" onClick={handleEditFormSubmit} >บันทึก</button>
          <button type="button" class="btn btn-danger" onClick={handleCancelClick}>ยกเลิก </button>
        </td>
        
      </tr>
    );
  };
  const ReadOnlyRow = ({ addFile, handleEditClick, handleDeleteClick }) => {
    return (
      <tr>
        <td className="tableform">{addFile.fileName}</td>
        <td className="tableform">{addFile.fileType}</td>
        <td className="tableform">
          <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(addFile.id)}>ลบ</button>
        </td>
      </tr>
    );
  }
  function OldScholarTable(){
    //const [setAddFile, setAddFile] = useState(datason2);
    const [addFormData, setAddFormData] = useState({
      id:"",
      fileName: "",
      fileType: chooseFileType_Add,
    });
    const [editFormData, setEditFormData] = useState({
      id:"",
      fileName: "",
      fileType: chooseFileType_Edit,
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
      
      if((chooseFileType_Add)===''|| ((addFormData.fileType))===undefined){
        //console.log('get empty');
        alert('โปรดเลือกประเภท')

      }
      else if(((addFormData.fileName.trim()).length)===0){
        //console.log('get empty');
        alert('โปรดกรอกชื่อไฟล์')

      }
      else{
        const newContact = {
        id: addFile.length+1,
        fileName: addFormData.fileName.trim(),
        fileType: addFormData.fileType,
        
      };
  
      const newContacts = [...addFile, newContact];
      setAddFile(newContacts);
      //console.log(addOnScholar)
      }
      

    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
      const editedContact = {
        id: editContactId,
        fileName: editFormData.fileName,
        fileType: editFormData.fileType,
       
      };
      const newContacts = [...addFile];
      const index = addFile.findIndex((addFile) => addFile.id === editContactId);
      newContacts[index] = editedContact;
      setAddFile(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, addFile) => {
      event.preventDefault();
      setEditContactId(addFile.id);
      const formValues = {
        fileName: addFile.fileName,
        fileType: chooseFileType_Edit
      };
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...addFile];
      const index = addFile.findIndex((addFile) => addFile.id === contactId);
      newContacts.splice(index, 1);
      setAddFile(newContacts);
    };
    return (
      <div className="table-container">
        <form className="tableform" style={{width:"600px"}}>
        <div className="restrict-table" style={{width:"600px",height:"200px",overflow:"auto"}} >
          <table className="fixed" >
              <col width="600px" />
              <col width="600px" />
              <col width="600px" />
            <thead > 
              <tr>
                <th className="tableform">ชื่อไฟล์</th>
                <th className="tableform">ชนิดของไฟล์</th>
                <th className="tableform">ลบ</th>
              </tr>
             </thead>
             <tbody>
                      {addFile.map((addFile) => (
                        <Fragment>
                          {editContactId === addFile.id ? (
                            <EditableRow
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleEditFormSubmit={handleEditFormSubmit}
                              handleCancelClick={handleCancelClick}
                            />
                          ) : (
                            <ReadOnlyRow
                              addFile={addFile}
                              handleEditClick={handleEditClick}
                              handleDeleteClick={handleDeleteClick}
                            />
                          )}
                        </Fragment>
                      ))}
            </tbody>  
          </table>
          </div>
        </form>
        <form style={{width:"100px",marginLeft:"-100px",marginTop:"20px"}}  >
          <div className="typeSelect" style={{width:"100px"}}>
              <Selector topic="เลือกชนิดข้อมูล" 
              data={[{list:"เลือก"},{list:"เอกสาร(PDF)"},{list:"ภาพ(JPG,PNG)"},{list:"วีดีโอ(MP4)"}]} 
              value={chooseFileType_Add} 
              onChange={(e)=>setChooseFileType_Add(e.target.value)} />
            {/*console.log(chooseFileType_Add)*/}
            <label class="form-label">ชื่อไฟล์</label> 
            <input className="tableform"
              type="text"
              name="fileName"
              required="required"
              placeholder="กรอกชื่อไฟล์..."
              onChange={handleAddFormChange}
            />

            <button type="button" class="btn btn-success" onClick={handleAddFormSubmit}>เพิ่ม</button>
            </div>
          </form> 
  
    </div>
    );
  } 
  //page1 Menu Manage===============================================================================
  //page2 Add===============================================================================
  //left
  const [srcUpload,setSrcUpload] = useState("")
  const [srcUploadForShow,setSrcUploadForShow] = useState("")
  const [srcScholar,setSrcScholar] = useState("")
  const [srcStartDate,setSrcStartDate] = useState("")
  const [srcEndDate,setSrcEndDate] = useState("")
  //checkbox
  const [majorSelect,setMajorSelect] = useState({วิศวกรรมโยธา:"" ,วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์:"",วิศวกรรมเครื่องกลและการออกแบบ:"",วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์:"",วิศวกรรมอุตสาหการและระบบ:"",วิศวกรรมเครื่องกลและระบบการผลิต:"",วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ:""})

  //right
  const [nameScholar,setNameScholar] = useState("")
  const [amountScholar,setAmountScholar] = useState("")
  const [costScholar,setCostScholar] = useState("")
  const [detailScholar,setDetailScholar] = useState("")
  const [qualificationScholar,setQualificationScholar] = useState("")
  const [addOnScholar,setAddOnScholar] = useState("")
  const majorlist = [{list:"วิศวกรรมโยธา",parent:"วิศวกรรมโยธา"},
  {list:"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์",parent:"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"},
  {list:"วิศวกรรมเครื่องกลและการออกแบบ",parent:"วิศวกรรมเครื่องกลและการออกแบบ"},
  {list:"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์",parent:"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"},
  {list:"วิศวกรรมอุตสาหการและระบบ",parent:"วิศวกรรมอุตสาหการและระบบ"},
  {list:"วิศวกรรมเครื่องกลและระบบการผลิต",parent:"วิศวกรรมเครื่องกลและระบบการผลิต"},
  {list:"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ",parent:"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"}]
  const checkboxSubmit1 = (name,value) => {
    {/*console.log(name);
    console.log(value);*/}
    setMajorSelect(majorSelect => ({
      ...majorSelect,
      [name]: (value?"":"ถูกเลือก")
    }));
  };
  const [addFile, setAddFile] = useState([])
  const [addFileName,setAddFileName] = useState("")
  const [addFileType,setAddFileType] = useState("")
  //ตารางใช้ 11 ตัว

 
  const onSendSubmit = (whatPage) => {
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    var errorInput = "";
    var thisSchoExist = false;
    var allowAddDB = false;
    if(whatPage === 2){
      if((nameScholar.trim()).length==0){
        errorInput +="ยังไม่ได้กรอกชื่อ\n"
        allowAddDB = false
      }
      if((srcScholar.trim()).length==0 || srcScholar.trim()==='เลือก' ){
        errorInput +="ยังไม่ได้เลือกแหล่งที่มาของทุน\n"
        allowAddDB = false
      }
     
      if((yearScholarDB.trim()).length==0 || yearScholarDB.trim()==='เลือก'){
        errorInput +="ยังไม่ได้เลือกปีการศึกษา\n"
        allowAddDB = false
      }
      if((srcStartDate.trim()).length==0){
        errorInput +="ยังไม่ได้เลือกวันที่เริ่ม\n"
        allowAddDB = false
      }
      if((srcEndDate.trim()).length==0){
        errorInput +="ยังไม่ได้เลือกวันที่สิ้นสุด\n"
        allowAddDB = false
      }
      
      if(((amountScholar.trim()).length)==0){
        errorInput +="ยังไม่ได้กรอกจำนวนทุน\n"
        allowAddDB = false
      }
      if(((costScholar.trim()).length)==0){
        errorInput +="ยังไม่ได้กรอกมูลค่าทุน\n"
        allowAddDB = false
      }
      if((detailScholar.trim()).length==0){
        errorInput +="ยังไม่ได้กรอกรายละเอียด\n"
        allowAddDB = false
      }
      if((qualificationScholar.trim()).length==0){
        errorInput +="ยังไม่ได้กรอกคุณสมบัติ\n"
        allowAddDB = false
      }
      if(
        (nameScholar.trim()).length!=0 &&
        (srcScholar.trim()).length!=0 &&
        (yearScholarDB.trim()).length!=0 &&
        (srcStartDate.trim()).length!=0 &&
        (srcEndDate.trim()).length!=0 &&
        (amountScholar.trim()).length!=0 &&
        (costScholar.trim()).length!=0 &&
        (detailScholar.trim()).length!=0 &&
        (qualificationScholar.trim()).length!=0

      ){
            if(parseInt(amountScholar.trim())<=0){
              allowAddDB = false
              errorInput+="จำนวนทุนไม่ต่ำกว่าและเท่ากับ 0\n"
            }
            if(parseInt(costScholar.trim())<=0){
              allowAddDB = false
              errorInput+="มูลค่าทุนไม่ต่ำกว่าและเท่ากับ 0\n"
            }
            if(parseInt(amountScholar.trim())>0 && parseInt(costScholar.trim())>0){
              allowAddDB = true;
                      for (let i = 0; i < scholarName.length; i++) {

                      if((nameScholar.trim())===(scholarName[i].nameScholar)){
                        allowAddDB = false
                        //console.log('name exist');
                        errorInput+="ตรวจพบการใช้ชื่อซ้ำ โปรดลองอีกครั้ง\n"
                        break
                      }
                    }
            
            } 
          
        }
          if(allowAddDB){
            const uploadData = new FormData();
          uploadData.append('srcUpload',((typeof srcUpload[0] === 'undefined') ? "":srcUpload[0]))
          /*uploadData.append('image_Std',image_Std[0])
          uploadData.append('srcScholar',`http://127.0.0.1:8000/SourceOfScholarship/${srcScholar}/`)
          uploadData.append('srcYear',`http://127.0.0.1:8000/AcademicYear/${DB}/`)*/
          uploadData.append('srcScholar',srcScholar)
          uploadData.append('srcYear',yearScholarDB)
          uploadData.append('srcStartDate',srcStartDate)
          uploadData.append('srcEndDate',srcEndDate)
          uploadData.append('majorSelect',JSON.stringify(majorSelect))
          uploadData.append('nameScholar',nameScholar)
          uploadData.append('amountScholar',amountScholar)
          uploadData.append('costScholar',costScholar)
          uploadData.append('detailScholar',detailScholar)
          uploadData.append('qualificationScholar',qualificationScholar)
          uploadData.append('processStatus','0')
          uploadData.append('addOnScholar',JSON.stringify({addFile:addFile}))
          if(useToggleContinue.ทุนต่อเนื่อง==="ถูกเลือก"){
            uploadData.append('normalOrcontinue','ทุนต่อเนื่อง')
          }
          else{
            uploadData.append('normalOrcontinue','ทุนปกติ')
          }
          axios.post("http://127.0.0.1:8000/Managescholarship/",uploadData,config).then((x) => 
          {/*console.log("Send Success!!!");*/
          alert("บันทึกสำเร็จ!")
          refreshPage()
            },(err)=>{
              window.alert("โปรดตรวจสอบ:\n"+errorInput)
            })
          }
          else{
            window.alert("โปรดตรวจสอบ:\n"+errorInput)
          }




        

    }
   
  }
  const postYear = () =>{
    var thisYearExist = false
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    for (let i = 0; i < getYearScholarDB.length; i++) {
      if(parseInt(addYearStep)===parseInt(getYearScholarDB[i].year)){
        thisYearExist = true
        alert("ตรวจพบปีซ้ำ โปรดลองอีกครั้ง")
        break
      }

    }
    if(!thisYearExist){
    if(parseInt(addYearStep)>=2550 && parseInt(addYearStep)<=2650){
        const uploadDataYear = new FormData();
        uploadDataYear.append('year',addYearStep)
        axios.post("http://127.0.0.1:8000/AcademicYear/",uploadDataYear,config).then((x) => {
        //console.log("Send Success!!!");
        })
        alert("บันทึกสำเร็จ")
        refreshPage()
        }
        else{
          alert("ปีการศึกษาอยู่ในช่วง 2550 - 2650")
        }


    }
    
    
  }

  const getImgMakeScholar = (e) => {
    setSrcUpload(e.target.files)
    setSrcUploadForShow(e.target.files[0].name)
    {/*console.log(e.target.files.name);*/}
  };
  //page2 Add===============================================================================
  //page3 Source===============================================================================
 //toDB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [nameSrcScholar, setNameSrcScholar] = useState('');
  const [addYearStep,setAddYearStep] = useState('')



  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //fromDB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const [getNameSrcScholarDB,setGetNameSrcScholarDB] = useState([])//DB
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB

  //Delete---------------------------------------------------
  //const [getnameSrcScholar, setGetNameSrcScholar] = useState(sourcetxt);//JSON
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
  const handleSubmitPage_forPage2 = (e) => {
    e.preventDefault()
    onSendSubmit(2)
   
  };

  //page3 Source===============================================================================
 
  
  //page5 Edit===============================================================================
  useEffect(function useSetGetNameSrcScholar(){ //
    axios.get("http://127.0.0.1:8000/SourceOfScholarship/").then((response)=>{
      setGetNameSrcScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงแหล่งที่มาได้")
    }
    );
  },[])

  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
     
      setGetYearScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษาได้")
    }
    );
  },[]) 

  var schoGetByYear = []

  useEffect(function useSetSetScholarName(){ //
   
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      var schoFromDB = response.data
      //setScholarName(schoFromDB);
      if (yearScholarDB==='' || yearScholarDB==='เลือก'){
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
            })}
            else if(schoFromDB[i].statusScholar==='ปิดทุน'){
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
             "processStatus":schoFromDB[i].processStatus
           })}

        } 
      setScholarName(schoGetByYear)
      setSeeClosedScholarName(seeHiddenScholar)
      }
      else{
        for (let i = 0; i < schoFromDB.length; i++) {
              if ( yearScholarDB == (schoFromDB[i].srcYear)) {
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
                })}
                else if(schoFromDB[i].statusScholar==='ปิดทุน'){
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
                 "processStatus":schoFromDB[i].processStatus
               })}
              } 
          } 
          setScholarName(schoGetByYear)
          setSeeClosedScholarName(seeHiddenScholar)
      }
      //console.log(scholarName)
     
      


      
    }
    ,(err)=>{
      alert("ไม่สามารถดึงรายชื่อทุนได้")
    }
    );
  },[yearScholarDB]) 
  
  function noFunction(){ 
  }
  function changePage(){
      window.location = "/Admin_Managescholarship"
  }

  
  return (<div> 
    <div className="popUpSureManage">
            <div class="modal fade" id="ruSureModal" tabindex="-1" aria-labelledby="ruSureModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ruSureModal">ยืนยันบันทึก</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <div class="alert alert-warning" role="alert" style={{fontSize:"20px",width:"450px"}}> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> โปรดตรวจสอบก่อนบันทึก หากผิดพลาด สามารถเลือกชื่อทุนเพื่อทำการแก้ไขภายหลังได้</div>
                 
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ปิด</button>
                    <button type="button" class="btn btn-primary" onClick={handleSubmitPage_forPage2}>บันทึก</button>
                  </div>
                </div>
              </div>
            </div>
    </div>
      <div className="popUp">
      <div class="modal fade" id="addYearModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modal-title" id="staticBackdropLabel">เพิ่มปีการศึกษา</div>
                  </div>
                  <form class='was-validated'>
                  <div class="modal-body">
                  <div class="alert alert-warning" role="alert" style={{fontSize:"20px"}}><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Tip : สามารถเพิ่มปีหากไม่พบให้เลือกในช่องปีการศึกษา</div>
                  <FormNumber topic="เพิ่มปีการศึกษา" min={2550} max={2650} value={addYearStep} onChange={(e)=>setAddYearStep(e.target.value)}/>
                              {/*console.log(addYearStep)*/}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ยกเลิก</button>
                    <button type="button" class="btn btn-success"  onClick={postYear}>เพิ่ม</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      <UI_Admin_StructureWebUI topic="เพิ่มทุน" iconic="fas fa-list-alt"/>
    { 
      <form onSubmit={handleSubmitPage_forPage2} class='was-validated'>
              <div className='containerNew'>
              <div style={{width:"1500px",height:"750px",overflow:"auto"}} >

              <div className='header-l2'><p1>เพิ่มทุนใหม่:</p1></div>
              <div className='layout-2'>
                <div className='body-l2'>
                    <div className='body-l2-left'>
                      <div class="uploadimg">
                      <label for="formFile" class="form-label">รูป (.png, .gif, .jpg)</label>
                  <label class="form-label" style={{color:"blue"}}>Uploaded: {srcUploadForShow}</label>
                  <input class="form-control" type="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>getImgMakeScholar(e)} style={{fontSize:"20px",width:"450px"}}/>
                      {/*<UploadFile topic="รูปของนิสิต (.png, .gif, .jpg)" accept="image/png, image/gif, image/jpeg" onChange={(e)=>setSrcUpload(e.target.files)}/> */}                    
                      {/*console.log(srcScholar)*/}
                      </div>
                      <div className='select_source' >
                      {/*console.log(getNameSrcScholarDB)*/}
                      <SelectorTwoFactor topic="แหล่งที่มาของทุน" 
                          data={

                            getNameSrcScholarDB.map((getnameSrcScholar) => (
                              {list:getnameSrcScholar.nameSrcScholar,id:getnameSrcScholar.sourceofscho_id}
                              
                            ))
                           
                          }  value={srcScholar} onChange={(e)=>setSrcScholar(e.target.value)}
                         
                          />
                           {/*console.log(srcScholar)*/}
                          <SelectorTwoFactor topic="ปีการศึกษา" 
                          data={

                            getYearScholarDB.map((getYearScholarDB) => (
                              {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                              
                            ))
                           
                          } value={yearScholarDB} onChange={(e)=>setYearScholarDB(e.target.value)}
                         
                          />
                            {/*console.log(yearScholarDB)*/}
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addYearModal" >
                            <a data-toggle="tooltip" data-placement="top" title="เพิ่มเมื่อไม่พบปีที่ต้องการ"style={{fontSize:"20px"}}>เพิ่มปี</a>  
                              </button>
                      </div>
                      <div></div>
                    
                      <div className='calendar-select'>
                        <div className="col-md-7_EditDetailScholarship">
                        
                            <DatePicker topic="ระยะเวลาของการเปิดรับสมัครทุน" onChange={(e)=>setSrcStartDate(e.target.value)} />
                            {/*console.log(canScholarDate)*/}
                        </div>
                      </div>
                      <div className='calendar-select'>
                        <div className="col-md-7_EditDetailScholarship">
                        <DatePicker topic="ถึง" onChange={(e)=>setSrcEndDate(e.target.value)} />
                            {/*console.log(srcDate)*/}
                        </div>
                      </div>
                      <div className='inputlb01_EditDetailScholarship'>
                      <CheckBox topic="สาขาที่สามารถสมัครทุนนี้ได้" data={majorlist} value={majorSelect} action={(e)=>checkboxSubmit1(e.target.name,e.target.value)}/>
                  {/*console.log(majorSelect)*/}
                          
                      </div>
                    </div>
                        <div className='body-l2-right' >
                          <div className='body-l1'>
                            <div className='inputlb01_EditDetailScholarship'>
                                <FormInput topic="ชื่อทุน" value={nameScholar} onChange={(e)=>setNameScholar(e.target.value)}/>
                                {/*console.log(nameScholar)*/}
                            </div>
                            <div className='inputlb01_EditDetailScholarship'>
                              <FormNumber topic="จำนวนทุน"  min="1" value={amountScholar} onChange={(e)=>setAmountScholar(e.target.value)}/>
                                {/*console.log(amountScholar)*/}
                            </div>
                            <div className='inputlb01_EditDetailScholarship'>
                              <FormNumber topic="จำนวนเงิน ทุนละ (บาท)" min="1" value={costScholar} onChange={(e)=>setCostScholar(e.target.value)}/>
                                {/*console.log(costScholar)*/}
                            </div>
                            <div className='inputlb01_EditDetailScholarship'>
                             <CheckBox topic="ทุนต่อเนื่อง" data={toggleContinue} value={useToggleContinue}  action={(e)=>checkboxToggleContinue(e.target.name,e.target.value)}/>
                               {/*console.log(useToggleContinue)*/}
                              </div>
                          </div>
                          <div className='body-l1' style={{marginTop:"50px"}}>  
                            <div className='body-l1' >
                           
                                <FormTextArea topic="รายละเอียด"  value={detailScholar} onChange={(e)=>setDetailScholar(e.target.value)}/>
                                {/*console.log(detailScholar)*/}
                            </div>
                            
                            <div className='body-l1'>
                              <FormTextArea topic="คุณสมบัติของผู้ขอรับทุน"  value={qualificationScholar} onChange={(e)=>setQualificationScholar(e.target.value)}/>
                                {/*console.log(qualificationScholar)*/}
                            
                            </div>
                            <div className='body-l1'>
                            {/*<FormTextArea topic="เอกสารเพิ่มเติม"  value={addOnScholar} onChange={(e)=>setAddOnScholar(e.target.value)}/>
                                console.log(addOnScholar)*/}
                              <label class="form-label" style={{marginLeft:"-100px"}}>เอกสารเพิ่มเติม(ไม่บังคับ)</label>
                              <div className="useOldScholarTable" style={{marginLeft:"-100px",width:"600px",backgroundColor:"#A83B3B"}}>
                              
                               <OldScholarTable/>
                              </div>
                            </div>
                          </div>
                        </div>       
                </div>
                <div className='footer-l2-center'>
                  <button type="button" className='btn btn-success' data-bs-toggle="modal" data-bs-target="#ruSureModal" style={{width:"150px"}} >เพิ่ม</button>
                  <button className='btn btn-warning' type="button" style={{marginLeft:"30px",width:"150px"}} onClick={()=>{changePage()}} >ย้อนกลับ</button>
                </div>
              </div>





              </div>
          </div>
        </form>              
        }
   
  </div> );




}