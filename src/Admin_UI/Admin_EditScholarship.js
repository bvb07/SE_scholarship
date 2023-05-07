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


function Admin_EditScholarship(params) {
    function refreshPage() {
        window.location.reload(false);
      }
      const {authState,user_ID,role} = useContext(AuthContext)




      
      const [chooseFileType_Add, setChooseFileType_Add] = useState();
      const [chooseFileType_Edit, setChooseFileType_Edit] = useState();
      const [scholarName, setScholarName] = useState([]);
      const [getProcessStatus,setGetProcessStatus]=useState('')
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
        if(value==""){alert("เป็นทุนต่อเนื่อง")}
        else{alert("เป็นทุนปกติ")}
        
      };
      //==========================================================================
      function changePage(goToPage){
        if(goToPage===1){
          window.location = "/Admin_Managescholarship"
        }
        else if(goToPage===2){
    
        }
        
      }
      const deleteSrcSholarship_scholarName = (id) => {
        axios.delete(`http://127.0.0.1:8000/Managescholarship/${id}/`).then((response)=>{
          setGetNameSrcScholarDB(
            scholarName.filter((val) => {
              return val.id != id;
            })
          )
        })
       {alert("ลบสำเร็จ กำลังรีเฟรช")
        refreshPage()
      }
       

      
      }
      const EditableRow = ({
        editFormData,
        handleEditFormChange,
        handleCancelClick,
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
            <td >
            </td>
          </tr>
        );
      };
      const ReadOnlyRow = ({ addFile, handleDeleteClick }) => {
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
            id: addFile1.length+1,
            fileName: addFormData.fileName.trim(),
            fileType: addFormData.fileType,  
          };
      
          const newContacts = [...addFile1, newContact];
          setAddFile(newContacts);
          }

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
          const newContacts = [...addFile1];
          const index = addFile1.findIndex((addFile) => addFile.id === contactId);
          newContacts.splice(index, 1);
          setAddFile(newContacts);
        };
        return (
          <div className="table-container">
            <form className="tableform" style={{width:"600px"}} >
            <div className="restrict-table" style={{width:"600px",height:"200px",overflow:"auto"}}>
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
                          {addFile1.map((addFile) => (
                            <Fragment>
                              {editContactId === addFile.id ? (
                                <EditableRow
                                  editFormData={editFormData}
                                  handleEditFormChange={handleEditFormChange}
                                  handleCancelClick={handleCancelClick}
                                />
                              ) : (
                                <ReadOnlyRow
                                addFile={addFile}
                                  handleDeleteClick={handleDeleteClick}
                                />
                              )}
                            </Fragment>
                          ))}
                </tbody>  
              </table>
              </div>
            </form>
            <form style={{width:"100px",marginLeft:"-100px",marginTop:"20px"}}>
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
      
      const [srcStartDate,setSrcStartDate] = useState("")
      const [srcEndDate,setSrcEndDate] = useState("")
      //checkbox
            const [yearScholar,setํYearScholar] = useState("")//new!
      //right
      
      const [addFile1, setAddFile] = useState([])
      const [addFileName,setAddFileName] = useState("")
      const [addFileType,setAddFileType] = useState("")
      
      //ตารางใช้ 11 ตัว
      const postYear = () =>{
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        const uploadDataYear = new FormData();
        uploadDataYear.append('year',addYearStep)
        axios.post("http://127.0.0.1:8000/AcademicYear/",uploadDataYear,config).then((x) => 
        {
        //console.log("Send Success!!!");
        })
        alert("เพิ่มปีกาณศึกษาสำเร็จ")
        refreshPage()
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
      
      const [detailAddr,setDetailAddr] = useState("")
      const [selectedDate,setSelectedDate] = useState('')
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      //fromDB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      const [getNameSrcScholarDB,setGetNameSrcScholarDB] = useState([])//DB
      const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
    
        
        
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
      //Delete---------------------------------------------------
      //const [getnameSrcScholar, setGetNameSrcScholar] = useState(sourcetxt);//JSON
      const deleteSrcSholarship = (id) => {
        axios.delete(`http://127.0.0.1:8000/SourceOfScholarship/${id}/`).then((response)=>{
          setGetNameSrcScholarDB(
            getNameSrcScholarDB.filter((val) => {
              return val.id != id;
            })
          )
        })
       
      }
    

      //page3 Source===============================================================================
      //page5 Edit===============================================================================
      //page5 Edit===============================================================================
      //left
      const schoGetByYear =[]
      const [srcUploadForShow_Edit,setSrcUploadForShow_Edit] = useState("")
      const [srcStartDate_Edit,setSrcStartDate_Edit] = useState("")
      const [srcNormOrCon,setSrcNormOrCon] = useState("")
      const [srcEndDate_Edit,setSrcEndDate_Edit] = useState("")

      const [scholar_Edit,setScholar_Edit] = useState([])
      const [srcUpload_Edit,setSrcUpload_Edit] = useState("")
      const [srcScholar_Edit,setSrcScholar_Edit] = useState("")
      const [yearScholar_Edit,setYearScholar_Edit] = useState("")
      const [getRecentYear,setGetRecentYear]= useState("")
      //checkbox
      const [majorSelect_Edit,setMajorSelect_Edit] = useState({วิศวกรรมโยธา:"",วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์:"",วิศวกรรมเครื่องกลและการออกแบบ:"",วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์:"",วิศวกรรมอุตสาหการและระบบ:"",วิศวกรรมเครื่องกลและระบบการผลิต:"",วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ:""})
      //right
      const [nameScholar_Edit,setNameScholar_Edit] = useState("")
      const [amountScholar_Edit,setAmountScholar_Edit] = useState("")
      const [costScholar_Edit,setCostScholar_Edit] = useState("")
      const [detailScholar_Edit,setDetailScholar_Edit] = useState("")
      const [qualificationScholar_Edit,setQualificationScholar_Edit] = useState("")
      const [addOnScholar_Edit,setAddOnScholar_Edit] = useState("")

      const [getRecentName,setGetRecentName] = useState("")
      const majorlist_Edit = [{list:"วิศวกรรมโยธา",parent:"วิศวกรรมโยธา"},
                          {list:"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์",parent:"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"},
                          {list:"วิศวกรรมเครื่องกลและการออกแบบ",parent:"วิศวกรรมเครื่องกลและการออกแบบ"},
                          {list:"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์",parent:"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"},
                          {list:"วิศวกรรมอุตสาหการและระบบ",parent:"วิศวกรรมอุตสาหการและระบบ"},
                          {list:"วิศวกรรมเครื่องกลและระบบการผลิต",parent:"วิศวกรรมเครื่องกลและระบบการผลิต"},
                          {list:"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ",parent:"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"}]
      const checkboxSubmit2 = (name,value) => {
        {/*console.log(name);
      console.log(value);*/}
        if(value==""){
          //console.log("value air");
          setMajorSelect_Edit(majorSelect_Edit => ({
          ...majorSelect_Edit,
          [name]: (value="ถูกเลือก")
        }));
        }
        else if(value=="ถูกเลือก"){
          //console.log("value cho");
          setMajorSelect_Edit(majorSelect_Edit => ({
            ...majorSelect_Edit,
            [name]: (value="")
          }));

        }
        
      };


      
        const {idEditScho} = useParams()
       //page5 Edit===============================================================================
       const [checkEditLoad,setCheckEditLoad] = useState(false);
       useEffect(function useCheckInform_DB(){ //
        checkInform_DB(parseInt(idEditScho))
      },[])

       const checkInform_DB =(scholarID)=>{
    
        axios.get("http://127.0.0.1:8000/Managescholarship/"+scholarID+"/").then((response)=>{
          var editDetail = response.data
          var addFileJson = JSON.parse(editDetail.addOnScholar)
          var majorSelectJson = JSON.parse(editDetail.majorSelect)

          
          setSrcUpload(editDetail.srcUpload)
          setSrcUploadForShow(editDetail.srcUpload)
          setNameScholar_Edit(editDetail.nameScholar)
          setGetRecentName(editDetail.nameScholar)
          setAmountScholar_Edit(editDetail.amountScholar)
          setSrcStartDate_Edit(editDetail.srcStartDate)
          setSrcEndDate_Edit(editDetail.srcEndDate)
          setSrcScholar_Edit(editDetail.srcScholar)
          setYearScholar_Edit(editDetail.srcYear)
          setGetRecentYear(editDetail.srcYear)
          setGetProcessStatus(editDetail.processStatus)
          setSrcNormOrCon(editDetail.normalOrcontinue)
          setMajorSelect_Edit(majorSelectJson)
          setCostScholar_Edit(editDetail.costScholar)
          setDetailScholar_Edit(editDetail.detailScholar)
          setQualificationScholar_Edit(editDetail.qualificationScholar)
          setAddFile(addFileJson["addFile"])
          setCheckEditLoad(true);
         
              
          
    
             
             
        }
        ,(err)=>{
          alert("โปรดตรวจสอบ:\nไม่พบทุนนี้")
        }
        );
      }
      const onSendAdminEdit = (idEdit) =>{
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        var errorInput = "";
        var thisSchoExist = false;
        var inputNameCf = false;
        var allowAddDB = false;
        if((nameScholar_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้กรอกชื่อ\n"
          allowAddDB = false
        }
        if((srcScholar_Edit).length==0 || srcScholar_Edit==='เลือก' ){
          errorInput +="ยังไม่ได้เลือกแหล่งที่มาของทุน\n"
          allowAddDB = false
        }
       
        if((yearScholar_Edit).length==0 || yearScholar_Edit==='เลือก'){
          errorInput +="ยังไม่ได้เลือกปีการศึกษา\n"
          allowAddDB = false
        }
        if((srcStartDate_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้เลือกวันที่เริ่ม\n"
          allowAddDB = false
        }
        if((srcEndDate_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้เลือกวันที่สิ้นสุด\n"
          allowAddDB = false
        }
        
        if((amountScholar_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้กรอกจำนวนทุน\n"
          allowAddDB = false
        }
        if((costScholar_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้กรอกมูลค่าทุน\n"
          allowAddDB = false
        }
        if((detailScholar_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้กรอกรายละเอียด\n"
          allowAddDB = false
        }
        if((qualificationScholar_Edit.trim()).length==0){
          errorInput +="ยังไม่ได้กรอกคุณสมบัติ\n"
          allowAddDB = false
        }
        
      if(
        (nameScholar_Edit.trim()).length!=0 &&
        (srcScholar_Edit).length!=0 &&
        (yearScholar_Edit).length!=0 &&
        (srcStartDate_Edit.trim()).length!=0 &&
        (srcEndDate_Edit.trim()).length!=0 &&
        (amountScholar_Edit.trim()).length!=0 &&
        (costScholar_Edit.trim()).length!=0 &&
        (detailScholar_Edit.trim()).length!=0 &&
        (qualificationScholar_Edit.trim()).length!=0

      ){  if(parseInt(amountScholar_Edit.trim())<=0){
          // console.log('amountScholar_Edit');
            errorInput+="จำนวนทุนไม่ต่ำกว่าและเท่ากับ 0\n"
            allowAddDB = false
          
          }
          if(parseInt(costScholar_Edit.trim())<=0){
            errorInput+="มูลค่าทุนไม่ต่ำกว่าและเท่ากับ 0\n"
            allowAddDB = false
            
          }
          if(parseInt(amountScholar_Edit.trim())>0 && parseInt(costScholar_Edit.trim())>0){
        
                allowAddDB = true;
                  for (let i = 0; i < scholarName.length; i++) {

                    if((yearScholar_Edit==getRecentYear)){//recent == new
                      //console.log('norm year');
                      if(nameScholar_Edit.trim()!=(getRecentName)){
                          if((nameScholar_Edit.trim())===(scholarName[i].nameScholar)){
                          allowAddDB = false
                          //console.log('name exist');
                          errorInput+="ตรวจพบการใช้ชื่อซ้ำ โปรดลองอีกครั้ง\n"
                          break
                        }
                      }
                  
                      else{
                        //console.log('original name');
                        }
                  }  
                  else{//recent != new
                    //console.log('new year');
                    if((nameScholar_Edit.trim())===(scholarName[i].nameScholar)){
                      allowAddDB = false
                      //console.log('name exist');
                      errorInput+="ตรวจพบการใช้ชื่อซ้ำ โปรดลองอีกครั้ง\n"
                      break
                    }

                  }
                }
          }

      }

        if(allowAddDB){
         const uploadData = new FormData();
         if (typeof srcUpload !== "string" && srcUpload !== null){
            //console.log("IS obj");
            uploadData.append('srcUpload',srcUpload[0])
          }
         uploadData.append('srcScholar',srcScholar_Edit)
         uploadData.append('srcYear',yearScholar_Edit)
         uploadData.append('srcStartDate',srcStartDate_Edit)
         uploadData.append('srcEndDate',srcEndDate_Edit)
         uploadData.append('majorSelect',JSON.stringify(majorSelect_Edit))
         uploadData.append('nameScholar',nameScholar_Edit)
         uploadData.append('amountScholar',amountScholar_Edit)
         uploadData.append('costScholar',costScholar_Edit)
         uploadData.append('detailScholar',detailScholar_Edit)
         uploadData.append('qualificationScholar',qualificationScholar_Edit)
         uploadData.append('addOnScholar',JSON.stringify({addFile:addFile1}))
           
         axios.put(`http://127.0.0.1:8000/Managescholarship/${idEdit}/`,uploadData,config).then((x) => 
         {
          //console.log("Send Success!!!");
         
         alert("แก้ไขสำเร็จ")
        refreshPage()} ,(err)=>{
          if((errorInput.length)!=0){
            window.alert("โปรดตรวจสอบ:\n"+errorInput)
          }
          else{
             window.alert("โปรดตรวจสอบ:\n ไม่พบทุนนี้")
          }
         
        }
         )
      } 
      else{
        window.alert("โปรดตรวจสอบ:\n"+errorInput)
      } 
      }
      const handleSubmitPage = (e) => {
        e.preventDefault()
        onSendAdminEdit(idEditScho)
       
      };
      
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
          alert("ไม่สามารถดึงปีการศึกษาได้")
        }
        );
      },[]) 
    
      useEffect(function useSetSetScholarName(){ //
        axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
          var getScholarName = response.data
         // setScholarName(getScholarName);
         
         for (let i = 0; i < getScholarName.length; i++) {
          if ( yearScholar_Edit == (getScholarName[i].srcYear)) {

            if(getScholarName[i].statusScholar!='ปิดทุน'){
            schoGetByYear.push({
              "srcUpload":getScholarName[i].srcUpload,
              "srcYear":getScholarName[i].yearScholar,
            "srcStartDate":getScholarName[i].srcStartDate,
            "srcEndDate":getScholarName[i].srcEndDate,
            "majorSelect":getScholarName[i].majorSelect,
              "nameScholar":getScholarName[i].nameScholar,
              "amountScholar":getScholarName[i].amountScholar,
            "managescho_id":getScholarName[i].managescho_id,
            "costScholar":getScholarName[i].costScholar,
            "detailScholar":getScholarName[i].detailScholar,
            "qualificationScholar":getScholarName[i].qualificationScholar,
            "addOnScholar":getScholarName[i].addOnScholar,
            "srcScholar":getScholarName[i].srcScholar,
            "statusScholar":getScholarName[i].statusScholar,
            "processStatus":getScholarName[i].processStatus
          }
            )
          } 
        }
      } 
        setScholarName(schoGetByYear)
        }
        ,(err)=>{
          alert("ไม่สามารถดึ")
        }
        );
      },[yearScholar_Edit]) 
      
      function noFunction(){ 
      }
    
    

      //console.log("idparam"+idEditScho);
    return(<div>
      <div className="popUpSureEditScho">
                  <div class="modal fade" id="ruSureModalEdit" tabindex="-1" aria-labelledby="ruSureModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="ruSureModalEdit">ยืนยันบันทึก</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="alert alert-warning" role="alert" style={{fontSize:"20px",width:"450px"}}> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> โปรดตรวจสอบก่อนบันทึก</div>
                      
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
          <UI_Admin_StructureWebUI topic="แก้ไขทุน" iconic="fas fa-list-alt"/>
        { 
          <form>
                  <div className='containerNew'>
                  <div className='header-l2'><p1>แก้ไขทุน:</p1></div>
                  <div className='layout-2'>
                    <div className='body-l2'>
                        <div className='body-l2-left'>
                          <div class="uploadimg">
                          <label for="formFile" class="form-label">รูป (.png, .gif, .jpg)</label>
                      <label class="form-label" style={{color:"blue"}}>Uploaded: {srcUploadForShow}</label>
                      <input class="form-control" type="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>getImgMakeScholar(e)} style={{fontSize:"20px",width:"450px"}} />
              
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
                               
                              }  value={srcScholar_Edit} onChange={(e)=>setSrcScholar_Edit(e.target.value)}
                             
                              />
                            {/*console.log(srcScholar_Edit)*/}
                              <SelectorTwoFactor topic="ปีการศึกษา" 
                              data={
                                getYearScholarDB.map((getYearScholarDB) => (
                                  {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                                ))
                              } value={yearScholar_Edit} onChange={(e)=>setYearScholar_Edit(e.target.value)}
                             
                              />
                                {/*console.log("yearScholar_Edit"+yearScholar_Edit)}{console.log("getRecentYear"+getRecentYear)*/}
                          </div>
                          <div></div>
                        
                          <div className='calendar-select'>
                            <div className="col-md-7_EditDetailScholarship">
                                <DatePicker topic="ระยะเวลาของการเปิดรับสมัครทุน" value={srcStartDate_Edit} onChange={(e)=>setSrcStartDate_Edit(e.target.value)} />
                                {/*console.log(srcStartDate_Edit)*/}
                            </div>
                          </div>
                          <div className='calendar-select'>
                            <div className="col-md-7_EditDetailScholarship">
                            <DatePicker topic="ถึง" value={srcEndDate_Edit} onChange={(e)=>setSrcEndDate_Edit(e.target.value)} />
                                {/*console.log(srcEndDate_Edit)*/}
                            </div>
                          </div>
                          <div className='inputlb01_EditDetailScholarship'>
                          <CheckBoxEdit topic="สาขาที่สามารถสมัครทุนนี้ได้" data={majorlist_Edit} value={majorSelect_Edit} action={(e)=>checkboxSubmit2(e.target.name,e.target.value)}/>
                            {/*console.log(majorSelect_Edit)*/}
                          </div>
                        </div>
                            <div className='body-l2-right' >
                              <div className='body-l1'>
                                <div className='inputlb01_EditDetailScholarship'>
                               
                                    <FormInputEdit topic="ชื่อทุน" placeholder={nameScholar_Edit}value={nameScholar_Edit} onChange={(e)=>setNameScholar_Edit(e.target.value)}/>
                                    {/*console.log(nameScholar_Edit)*/}
                                </div>
                                <div className='inputlb01_EditDetailScholarship'>
                                  <FormNumber topic="จำนวนทุน" min="1" placeholdere={amountScholar_Edit} value={amountScholar_Edit} onChange={(e)=>setAmountScholar_Edit(e.target.value)}/>
                                    {/*console.log(amountScholar)*/}
                                </div>
                                <div className='inputlb01_EditDetailScholarship'>
                                  <FormNumber topic="จำนวนเงิน ทุนละ (บาท)" min="1" placeholder={costScholar_Edit} value={costScholar_Edit} onChange={(e)=>setCostScholar_Edit(e.target.value)}/>
                                    {/*console.log(costScholar)*/}
                                </div>
                                {(()=>{
                                  if(srcNormOrCon=='ทุนต่อเนื่อง'){
                                      return (<>
                                      <div className='inputlb01_EditDetailScholarship' style={{ cursor: "not-allowed" }}>
                                        <span class="d-inline-block" data-bs-toggle="tooltip" title="ไม่สามารถเปลี่ยนประเภทของทุนได้">
                                      <CheckBox topic="ทุนต่อเนื่อง" data={toggleContinue} value={useToggleContinue} disabled={true} defaultChecked={true} action={(e)=>checkboxToggleContinue(e.target.name,e.target.value)}/>
                                        </span>
                                        </div>
                                      </>)
                                  }
                                  else{
                                    return (<>
                                      <div className='inputlb01_EditDetailScholarship' style={{ cursor: "not-allowed" }}>
                                      <span class="d-inline-block" data-bs-toggle="tooltip" title="ไม่สามารถเปลี่ยนประเภทของทุนได้">
                                      <CheckBox topic="ทุนต่อเนื่อง" data={toggleContinue} value={useToggleContinue}  disabled={true} action={(e)=>checkboxToggleContinue(e.target.name,e.target.value)}/>
                                      </span>
                                       </div>
                                      </>)
                                  }
                              })()}
                                
                              </div>
                              <div className='body-l1' style={{marginTop:"50px"}}>  
                                <div className='body-l1' >
                                    <FormTextArea topic="รายละเอียด"  value={detailScholar_Edit} onChange={(e)=>setDetailScholar_Edit(e.target.value)}/>
                                    {/*console.log(detailScholar)*/}
                                </div>
                                
                                <div className='body-l1'>
                                  <FormTextArea topic="คุณสมบัติของผู้ขอรับทุน"  value={qualificationScholar_Edit} onChange={(e)=>setQualificationScholar_Edit(e.target.value)}/>
                                    {/*console.log(qualificationScholar)*/}
                                
                                </div>
                                <div className='body-l1'>
                                {/*<FormTextArea topic="เอกสารเพิ่มเติม"  value={addOnScholar} onChange={(e)=>setAddOnScholar(e.target.value)}/>
                                    console.log(addOnScholar)*/}
    
                                    
                                  <label class="form-label" style={{marginLeft:"-100px"}}>เอกสารเพิ่มเติม</label>
                                  <div className="useOldScholarTable" style={{marginLeft:"-100px",width:"600px",backgroundColor:"#A83B3B"}}>
                                  
                                   <OldScholarTable/>
                                  </div>
                                </div>
                              </div>
                            </div>       
                    </div>
                    <div className='footer-l2-center'>
                    {(()=>{
                    if(parseInt(getProcessStatus)>0){
                        return (<> <div style={{ cursor: "not-allowed" }}>
                        <span data-toggle="tooltip" data-placement="top" title="ไม่สามารถแก้ไขทุนได้เนื่องจากทุนกำลังตรวจเอกสารแล้ว" style={{fontSize:"20px"}}>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#ruSureModalEdit" class='btn btn-warning' style={{width:"150px"}}  disabled={true}>
                       แก้ไข
                          </button>
                          </span>
                     
                       </div> </>)
                    }
                    else{
                      return(<>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#ruSureModalEdit" class='btn btn-warning' style={{width:"150px"}}>แก้ไข</button>
                      </>)
                    }
                })()}   
                      <Link to="/Admin_Managescholarship"> <button className='btn btn-danger' style={{marginLeft:"30px",width:"150px"}}>ย้อนกลับ</button></Link>
                   
                    </div>
                  </div>
              </div>
            </form>              
        }
        </div>
          
      </div>);
}

export default Admin_EditScholarship;