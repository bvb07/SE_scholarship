import React from 'react'
import { useState, Fragment ,useEffect} from "react";
import { nanoid } from "nanoid";
import "./TableComp.css";
import data from "./mock-datatua.json";
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'


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
        <button type="submit" class="btn btn-success">บันทึก</button>
        <button type="button" class="btn btn-danger" onClick={handleCancelClick}>ยกเลิก </button>
      </td>
      
    </tr>
  );
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="tableform">{contact.fullName}</td>
      <td className="tableform">{contact.education}</td>
      <td className="tableform">{contact.job}</td>
      <td className="tableform">{contact.workplace}</td>
      <td className="tableform">
        <button type="button" class="btn btn-warning" onClick={(event) => handleEditClick(event, contact)}>แก้ไข</button>
        <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>ลบ</button>
      </td>
    </tr>
  );
}

function TableComp(){
  const [contacts, setContacts] = useState(data);
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
      fullName: addFormData.fullName,
      education: addFormData.education,
      job: addFormData.job,
      workplace: addFormData.workplace
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
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
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  const PrintSubmit = () => {
    //console.log(contacts);
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
          />
          <input className="tableform"
            type="text"
            name="education"
            required="required"
            placeholder="กรอกระดับการศึกษา..."
            onChange={handleAddFormChange}
          />
          <input className="tableform"
            type="text"
            name="job"
            required="required"
            placeholder="กรอกอาชีพ..."
            onChange={handleAddFormChange}
          />
          <input className="tableform"
            type="text" 
            name="workplace"
            required="required"
            placeholder="กรอกสถานประกอบอาชีพ/สถานศึกษา..."
            onChange={handleAddFormChange}
          />
          <div class="tableform-btn">
          <button type="submit" class="btn btn-success">เพิ่ม</button>
          </div>
        </form> 

    {/*></><button class="btn btn-success" onClick={() => PrintSubmit()}>ส่ง</button>*/}
  </div>
  );
  
}


export default TableComp;