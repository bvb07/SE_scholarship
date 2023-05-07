import React, { Component, useState } from "react";

import {Form} from 'react-bootstrap';

const FormTextArea = (props) => {
    
    const {topic,value,onChange,name,disabled,placeholder,type} = props
    return(
        <>
        <div class="form-group">
            <label class="form-label">{topic}</label>
            <textarea type={type} class="form-control" rows="4" font-size="20px" value={value} placeholder ={placeholder}
            onChange={onChange} name={name} style={{fontSize:"20px",width:"500px"}} disabled={disabled} required ></textarea>
        </div>
        </>
    );
 
}

export default FormTextArea;