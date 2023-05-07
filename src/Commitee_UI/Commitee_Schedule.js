import React, { Component, useContext,useState, Fragment ,useEffect} from "react";
import UI_Commitee_StructureWebUI from './UI_Commitee_StructureWebUI';
import { Routes,Route,BrowserRouter,Link,useNavigate } from 'react-router-dom'
import {AuthContext} from "../Login/Authenticate";
import '../Layout/Layout.css';
import axios from "axios";
import DatePicker from '../components/datepicker/DatePicker';
import FormTextArea from '../components/form/FormTextArea';

export default function Student_Schedule(){
  const {authState,user_ID,role} = useContext(AuthContext)
  
  // if (!authState  || role != "Committee") {
  //   window.location = "/Login_All"
  // }
  

  const [titleSchedule,setTitleSchedule] = useState("")
  const [dateSchedule,setDateSchedule] = useState("")
  //console.log("role : ",role);
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
        //console.log(response.data);
        setContacts(response.data);
      }
      ,(err)=>{
        alert("ไม่สามารถดึงกำหนดการได้")
      });
    },[]) 

    const deleteSchedule = (id) => {
      axios.delete(`http://127.0.0.1:8000/ScheduleView/${id}/`).then((response)=>{
        setContacts(
          contacts.filter((val) => {
            return val.id != id;
          })
        )
      })
    }
    
    
    const [addFormData, setAddFormData] = useState({
      id:"",
      date: "",
      title: "",
    });
    const [editFormData, setEditFormData] = useState({
      id:"",
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
        date: addFormData.date,
        title: addFormData.title
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        date: addFormData.date,
        title: addFormData.title
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        date: contact.date,
        title: contact.title
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
          <td>{editFormData.id}</td>
          <td>
          </td>
        </tr>
      );
    };
    
    const ReadOnlyRow = ({ contact, handleEditClick, deleteSchedule }) => {
      return (
        <tr>
          <td>{contact.dateSchedule}</td>
          <td>{contact.titleSchedule}</td>
        </tr>
      );
    };
    return ( 
    <div><UI_Commitee_StructureWebUI topic="กำหนดการ" iconic="fas fa-user-circle"/>
    <div className='containerNew'>
      <div className='layout-1'>
      <div className='body-l1'>
        {<div className="table-container">
                <form className="tableform" onSubmit={handleEditFormSubmit}>
                <div style={{height:"500px",width:"1500px",overflow:"auto"}}>
                  <table className="tableform">
                  <div className="header-l2" style={{backgrond:"white"}}>
                    <thead>
                      <tr >
                        <th  style={{background:"white"}}>วันที่</th>
                        <th  style={{width:"500px",marginLeft:"600px",position:"absolute"}}>รายละเอียดกำหนดการ</th>
                      </tr>
                    </thead>
                    </div>
                    <tbody>
                    {contacts.map((contact) => (
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
                              deleteSchedule={deleteSchedule}
                            />
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </form>
                </div>}
                </div> 
                </div>
              </div>
              </div>
              );

  }

              



