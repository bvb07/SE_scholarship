import '../Layout/Layout.css'
import { useState, Fragment ,useEffect, useContext} from "react";

import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import { Routes,Route,BrowserRouter,Link,useNavigate } from 'react-router-dom'
import DatePicker from '../components/datepicker/DatePicker';
import FormTextArea from '../components/form/FormTextArea';
import axios from "axios";
import {AuthContext} from "../Login/Authenticate";

function Admin_Schedule(){
  /*const reload = useNavigate();*/
  const {authState,user_ID,role} = useContext(AuthContext)




  
  const [titleSchedule,setTitleSchedule] = useState("")
  const [dateSchedule,setDateSchedule] = useState("")
  const [available_ID,setAvailable_ID] = useState(false)

  const [titleSchedule_Edit,setTitleSchedule_Edit] = useState("")
  const [dateSchedule_Edit,setDateSchedule_Edit] = useState("")
  function refreshPage() {
    window.location.reload(false);
  }
  const onSendSubmit = () => {
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    var answer = window.confirm("ยืนยันการสร้างกำหนดการ?");

    if (answer) {
      const uploadData = new FormData();
      uploadData.append('dateSchedule',dateSchedule)
      uploadData.append('titleSchedule',titleSchedule)
      axios.post("http://127.0.0.1:8000/ScheduleView/",uploadData,config).then((x) =>
      {
        let addadd = contacts;
        addadd.push({
          dateSchedule:dateSchedule,
          titleSchedule:titleSchedule
        })
        setContacts(addadd)
        }) 
    }
  }
   
    const [contacts, setContacts] = useState([]);
    useEffect(function gotContact(){ //function gettest
      axios.get("http://127.0.0.1:8000/ScheduleView/").then((response)=>{
        //console.log(response.data);
        response.data=response.data.sort((a,b)=>{
              let keyA = a.dateSchedule.slice(6, 10)+"/"+a.dateSchedule.slice(3, 5)+"/"+a.dateSchedule.slice(0, 2)
              let keyB = b.dateSchedule.slice(6, 10)+"/"+b.dateSchedule.slice(3, 5)+"/"+b.dateSchedule.slice(0, 2)
              if(keyA < keyB) return -1
              if(keyA > keyB) return 1
              return 0
            })
       { /*console.log(response.data);*/}
        setContacts(response.data);
      }
      ,(err)=>{
        alert("ไม่สามารถดึงกำหนดการ")
      });
    },[]) 

    const deleteSchedule = (sche_id) => {
      var answer = window.confirm("ยืนยันลบกำหนดการ?");
      if (answer) {
        axios.delete(`http://127.0.0.1:8000/ScheduleView/${sche_id}/`).then((response)=>{
          setContacts(
            contacts.filter((val) => {
              return val.sche_id != sche_id;
            })
          )
        })
      }
      refreshPage()
    }
    const [addFormData, setAddFormData] = useState({
      sche_id:"",
      date: "",
      title: "",
    });
    const [editFormData, setEditFormData] = useState({
      sche_id:"",
      date: "",
      title: ""
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
  
    const handleEditFormChange = (event,name) => {
      event.preventDefault();
      const fieldValue = event.target.value;
      
      /*console.log(name);
      //console.log(fieldValue);
   
      const newFormData = { ...editFormData };
      newFormData[name] = fieldValue;
      console.log(newFormData);*/
  
      setEditFormData(editFormData=>({
        ...editFormData,
        [name]:fieldValue
      }));
    };
    
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        //sche_id: nanoid(),
        date: addFormData.date,
        title: addFormData.title
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
      //console.log(editContactId, dateSchedule_Edit, titleSchedule_Edit);
      const editedContact = {
        sche_id: editContactId,
        dateSchedule: dateSchedule_Edit,
        titleSchedule:titleSchedule_Edit
      };
  
      const newContacts = [...contacts];
      //console.log(newContacts);
  
      const index = contacts.findIndex((contact) => contact.sche_id === editContactId);
      //console.log(index);
      //console.log(newContacts[index]);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => { //เมื่อกด Edit จะมาที่นี่
      event.preventDefault();
      setEditContactId(contact.id);


      const formValues = {
        date: contact.sche_id.date,
        title: contact.sche_id.title
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
    const EditableRow = ({
      editFormData,
      handleEditFormChange,
      handleCancelClick,
    }) => {
      return (
        <tr>
          <td>{editFormData.sche_id}</td>
          <td>
          <DatePicker topic="เพิ่มกำหนดการ" name="date" value={dateSchedule_Edit} onChange={(e) => setDateSchedule_Edit(e.target.value)}/>
          </td>
          <td className="tableform">
            <input className="tableform" type="text" 
            
                value={titleSchedule_Edit} onChange={(e) => setTitleSchedule_Edit(e.target.value)}>
          </input>
          </td>
          <td>
          <button type="submit" class="btn btn-success" >บันทึก</button>
            <button type="button" onClick={handleCancelClick}>
              ยกเลิก
            </button>
          </td>
        </tr>
      );
    };
    
    const ReadOnlyRow = ({ contact, handleEditClick, deleteSchedule }) => {
      return (
        <tr>
          <td>{contact.dateSchedule}</td>
          <td>{contact.titleSchedule}</td>
          
          <td>
            <button type="button" class="btn btn-danger" onClick={() => deleteSchedule(contact.sche_id)}>ลบ</button> 
            { /**  <button type="button" class="btn btn-warning" onClick={(event) => editSchedule(event, contact.sche_id)}>แก้ไข</button>*/ }
          </td>
        </tr>
      );
    };
    return ( 
    <div><UI_Admin_StructureWebUI topic="กำหนดการ" iconic="fas fa-calendar-alt"/>
    <div className='containerNew'>
      <div className='layout-1'>
      <div className='body-l1'>
        {<div className="table-container">
                <form className="tableform" onSubmit={handleEditFormSubmit}>
                <div style={{height:"300px",width:"1500px",overflow:"auto"}}>
                  <table className="tableform">
                    <thead>
                      <tr>
                        <th className="tableform" style={{color:"white",width:500}}>วันที่</th>
                        <th className="tableform" style={{color:"white"}}>รายละเอียดกำหนดการ</th>
                        <th className="tableform" style={{color:"white",marginLeft:"150px"}}>ลบ</th>
                      </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <Fragment>
                          {editContactId === contact.sche_id ? (
                            <EditableRow
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick}
                            />
                          ) : (
                            <ReadOnlyRow
                              contact={contact}
                              handleEditClick={handleEditClick}
                              deleteSchedule={deleteSchedule}
                            />
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </form>
                <form className="textform" >
                  <div class="footer-l2" style={{marginTop:"60px"}}>
                <div class="container">
                        <div class="column">
                          <div class="col-sm">
                            <DatePicker topic="เพิ่มกำหนดการ" onChange={(e)=>setDateSchedule(e.target.value)}/>
                          </div>
                          <div class="col-sm">
                            <FormTextArea topic="ใส่รายละเอียดกำหนดการ" onChange={(e)=>setTitleSchedule(e.target.value)} />
                          </div>
                          <div class="col-sm">
                              <button type="submit" class="btn btn-success" onClick={()=>onSendSubmit()}>เพิ่ม</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form> 
                </div>}
                </div> 
                </div>
              </div>
              </div>
              );
  }
  export default Admin_Schedule;
              



