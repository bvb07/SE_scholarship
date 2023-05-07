import React, { Component, useState } from "react";

const FormInputEdit = (props) => {
    
    const {topic,value,onChange,name,disabled,oldData} = props
    return(
        <div>
            <label class="form-label">{topic}</label>
            <input type="text" class="form-control" id={topic} placeholder={oldData} value={value} onChange={onChange} name={name} style={{fontSize:"20px",width:"350px"}} disabled={disabled} required/>
        </div>
    );
 
}

export default FormInputEdit;