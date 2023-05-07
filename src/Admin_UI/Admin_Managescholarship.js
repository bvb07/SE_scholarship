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

export default function Admin_Managescholarship() {//main
  function refreshPage() {
    window.location.reload(false);
  }
  const {authState,user_ID,role} = useContext(AuthContext)

  const [cursor, setCursor] = useState('crosshair');


  const changeCursor = () => {
    setCursor(prevState => {
      if(prevState === 'crosshair'){
        return 'pointer';
      }
      return 'crosshair';
    });
  }











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
        axios.put(`http://127.0.0.1:8000/Managescholarship/${idClose}/`,uploadData,config).then((x) => 
        {
        //console.log("Send Success!!!");
        alert("ปิดสำเร็จ ตรวจสอบได้ที่รายชื่อทุนที่ปิด")
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
        {alert("Click to refresh")
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
       // console.log('get empty');
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
      
      if((amountScholar.trim()).length==0){
        errorInput +="ยังไม่ได้กรอกจำนวนทุน\n"
        allowAddDB = false
      }
      if((costScholar.trim()).length==0){
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

      ){ allowAddDB = true;
          for (let i = 0; i < scholarName.length; i++) {

          if((nameScholar.trim())===(scholarName[i].nameScholar)){
            allowAddDB = false
            //console.log('name exist');
            errorInput+="ตรวจพบการใช้ชื่อซ้ำ โปรดลองอีกครั้ง\n"
            break
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
          uploadData.append('processStatus',"0")
          uploadData.append('addOnScholar',JSON.stringify({addFile:addFile}))
          if(useToggleContinue.ทุนต่อเนื่อง==="ถูกเลือก"){
            uploadData.append('normalOrcontinue','ทุนต่อเนื่อง')
          }
          else{
            uploadData.append('normalOrcontinue','ทุนปกติ')
          }
          axios.post("http://127.0.0.1:8000/Managescholarship/",uploadData,config).then((x) => 
          {
          //console.log("Send Success!!!");
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
        axios.post("http://127.0.0.1:8000/AcademicYear/",uploadDataYear,config).then((x) => 
        {
        //console.log("Send Success!!!");
        })
        alert("เพิ่มปีสำเร็จ")
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
         alert("ลบสำเร็จ")
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
      alert("ไม่สามารถดึงแหล่งที่มา")
    }
    );
  },[])

  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
     
      setGetYearScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
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
      alert("ไม่สามารถดึงรายชื่อทุน")
    }
    );
  },[yearScholarDB]) 
  
  function noFunction(){ 
  }


   return ( 
    <div ><UI_Admin_StructureWebUI topic="การบริหารทุน" iconic="fas fa-list-alt"/>
     
      <div className='containerNew'>
        <div className='layout-1'>
          <div className='header-l2' style={{marginTop:"-10px"}} >
             <div>จัดการทุนการศึกษา</div>
             <div style={{marginLeft:"600px"}}> 
             
             <form style={{marginLeft:"-780px",marginTop:'55px',position:"absolute"}}>
              <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
              <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
              </form>

             <div style={{marginLeft:"-170px"}}> 
             <CheckBox topic="ดูทุนที่ปิดแล้ว" data={hiddenTag} value={usehiddenTag} action={(e)=>checkboxSubmitHidden(e.target.name,e.target.value)}/>
             {/*console.log(usehiddenTag)*/}
             </div>
             <div style={{marginTop:"-65px"}}> 
          <span class="d-inline-block" data-bs-toggle="tooltip" title="เลือกปีการศึกษาสำหรับกรองทุน">
          <SelectorTwoFactor topic="ปีการศึกษา" 
            data={

              getYearScholarDB.map((getYearScholarDB) => (
                {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
              ))
            } value={yearScholarDB} onChange={(e)=>setYearScholarDB(e.target.value)}
            /> 
          </span>
          </div>
          </div>
          </div>
              <div className='body-l1' >
                <div className="scroller" style={{marginTop:"20px",height:"550px",overflow:"auto"}}>
                   {(()=>{
                    if(usehiddenTag.ทุนที่ปิด==="ถูกเลือก"){
                        return (<>
                        {/*console.log("จำนวนทุน:"+scholarName.length)*/}
                        {(()=>{
                              if((seeClosedscholarName.length)==0){
                                  return (<>
                                  <div class="alert alert-warning" role="alert">
                                    <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                    <p class="fs-5">Q & A</p>
                                    <p class="fs-6">Q : ฉันต้องทำอย่างไรจึงจะพบทุน?</p>
                                    <p class="fs-6">A : เลือกปิดทุนที่ต้องการ ทุนจึงจะปรากฎ</p>
                                    </div>
                                  </>)
                              }
                              else{
                                return (<>
                                			{(()=>{
                                      if((seeClosedscholarName.filter((invisibledScholarName)=>{
                                        if (searchList==""){
                                          return invisibledScholarName
                                        }
                                        else if(invisibledScholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return invisibledScholarName
                                        }
                                      
                                      }
                                    ).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                                  <p class="fs-6">โปรดตรวจสอบการสะกด</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<>
                                          <Accordion flush>
                                            {seeClosedscholarName.filter((invisibledScholarName)=>{
                                                      if (searchList==""){
                                                        return invisibledScholarName
                                                      }
                                                      else if(invisibledScholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                          return invisibledScholarName
                                                      }
                                                    }
                                                  ).map((invisibledScholarName,index)=>{
                                                    return(<>
                                                <Scholarbadget topic = {invisibledScholarName.nameScholar}  eventKey={index}
                                                actionEdit={()=>noFunction()} 
                                                actionDelete={()=>deleteSrcSholarship_scholarName(invisibledScholarName.managescho_id)}
                                                actionClose={()=>shutDownScholar(invisibledScholarName.managescho_id,
                                                  invisibledScholarName.srcStartDate,
                                                  invisibledScholarName.srcEndDate,
                                                  invisibledScholarName.srcScholar,
                                                  'ปิดทุน',
                                                  parseInt(invisibledScholarName.processStatus),
                                                  invisibledScholarName.statusScholar)}

                                                StartDate={invisibledScholarName.srcStartDate} 
                                                EndDate={invisibledScholarName.srcEndDate} 
                                                link={"/Admin_EditScholarship/"+invisibledScholarName.managescho_id}
                                                /> </>)
                                              } 
                    
                                        )
                                      }</Accordion>
                                      </>)}
                                  })()}
                                {/* <Accordion flush>
                                  {seeClosedscholarName.map((invisibledScholarName,index) => (
                                    <Scholarbadget topic = {invisibledScholarName.nameScholar}  eventKey={index}
                                    actionEdit={()=>noFunction()} 
                                    actionDelete={()=>deleteSrcSholarship_scholarName(invisibledScholarName.managescho_id)}
                                    actionClose={()=>shutDownScholar(invisibledScholarName.managescho_id,
                                      invisibledScholarName.srcStartDate,
                                      invisibledScholarName.srcEndDate,
                                      invisibledScholarName.srcScholar,
                                      'ปิดทุน',
                                      parseInt(invisibledScholarName.processStatus),
                                      invisibledScholarName.statusScholar)}

                                    StartDate={invisibledScholarName.srcStartDate} 
                                    EndDate={invisibledScholarName.srcEndDate} 
                                    link={"/Admin_EditScholarship/"+invisibledScholarName.managescho_id}
                                    />
                                ))
                                }
                                </Accordion> */}

                                </>)
                              }
                          })()}
                        </>)
                    }
                    else{
                      return (<>
                       {/*console.log("จำนวนทุน:"+scholarName.length)*/}
                          {(()=>{
                              if((scholarName.length)==0){
                                  return (<>
                                  <div class="alert alert-warning" role="alert">
                                    <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                    <p class="fs-5">Q & A</p>
                                    <p class="fs-6">Q : ฉันต้องทำอย่างไรจึงจะพบทุน?</p>
                                    <p class="fs-6">A : เลือกเพิ่มทุนใหม่ และกรอกรายละเอียด</p>
                                    <p class="fs-6">Q : รายชื่อแหล่งที่มาของทุนคืออะไร?</p> 
                                    <p class="fs-6">A : สำหรับกำหนดแหล่งที่มาของทุน จำเป็นต้องกำหนดก่อนสร้างทุน</p>
                                    <p class="fs-6">Q : เกณฑ์การให้คะแนนคืออะไร?</p> 
                                    <p class="fs-6">A : สำหรับกำหนดเกณฑ์คะแนนของทุน จำเป็นต้องสร้างทุนก่อน</p>
                                  </div>
                                  </>)
                              }
                              else{
                                return (<>  
                                {(()=>{
                                      if((scholarName.filter((scholarNameMap)=>{
                                        if (searchList==""){
                                          return scholarNameMap
                                        }
                                        else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                            return scholarNameMap
                                        }
                                      }
                                    ).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกด</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<>
                                          <Accordion flush>
                                            {scholarName.filter((scholarNameMap)=>{
                                                      if (searchList==""){
                                                        return scholarNameMap
                                                      }
                                                      else if(scholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                          return scholarNameMap
                                                      }
                                                    }
                                                  ).map((scholarNameMap,index)=>{
                                                    return(<>
                                                <Scholarbadget topic = {scholarNameMap.nameScholar}  eventKey={index}
                                                actionEdit={()=>noFunction()} 
                                                actionDelete={()=>deleteSrcSholarship_scholarName(scholarNameMap.managescho_id)}
                                                actionClose={()=>shutDownScholar(scholarNameMap.managescho_id,
                                                  scholarNameMap.srcStartDate,
                                                  scholarNameMap.srcEndDate,
                                                  scholarNameMap.srcScholar,
                                                  'ปิดทุน',
                                                  parseInt(scholarNameMap.processStatus),
                                                  scholarNameMap.statusScholar)}
                                                StartDate={scholarNameMap.srcStartDate} 
                                                EndDate={scholarNameMap.srcEndDate} 
                                                link={"/Admin_EditScholarship/"+scholarNameMap.managescho_id}
                                                /> </>)
                                              } 
                    
                                        )
                                      }</Accordion>
                                      </>)}
                                  })()}

                                {/* <Accordion flush>
                                  {scholarName.map((scholarNameMap, index) => (
                                    <Scholarbadget topic = {scholarNameMap.nameScholar} eventKey={index}
                                    actionEdit={()=>noFunction()} 
                                    actionDelete={()=>deleteSrcSholarship_scholarName(scholarNameMap.managescho_id)}
                                    actionClose={()=>shutDownScholar(scholarNameMap.managescho_id
                                      ,scholarNameMap.srcStartDate,scholarNameMap.srcEndDate
                                      ,scholarNameMap.srcScholar,'ปิดทุน',parseInt(scholarNameMap.processStatus) 
                                    ,scholarNameMap.statusScholar)}
                                    StartDate={scholarNameMap.srcStartDate} 
                                    EndDate={scholarNameMap.srcEndDate} 
                                    link={"/Admin_EditScholarship/"+scholarNameMap.managescho_id}
                                    />
                                ))
                                }  
                                </Accordion> */}
                                </>)
                              }
                          })()}
                        </>)
                    }
                })()} 
                </div> 
              </div>
            <div className='body-l2' style={{marginTop:"20px"}}>
            <Link to="/Admin_Managescholarship/add"><button type="button" className='btn ' style={{width:"300px",background:"#36802d",color:"white"}} data-bs-toggle="tooltip" data-bs-placement="right" title="สร้างทุน"><i class="fa fa-plus" aria-hidden="true"></i> เพิ่มทุนใหม่</button></Link><br/>
            <Link to="/Admin_Managescholarship/SourceScholarship"> <button type="button" className='btn ' style={{width:"300px",background:"#99cc33"}} data-bs-toggle="tooltip" data-bs-placement="right" title="เพิ่มรายชื่อแหล่งที่มา"><i class="fa fa-building-o" aria-hidden="true"></i> รายชื่อแหล่งที่มาของทุน</button></Link><br/>
            <Link to="/Admin_Managescholarship/WeightPoint"><button type="button" className='btn ' style={{width:"300px",background:"#88ee88"}} data-bs-toggle="tooltip" data-bs-placement="right" title="เพิ่มเกณฑ์สำหรับแต่ละทุน"><i class="fa fa-gavel" aria-hidden="true"></i> เกณฑ์การให้คะแนน</button></Link>
            </div>
            <div className='footer-l2'>
            </div>
          </div>
        </div>
    </div>
  );





}