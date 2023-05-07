import React, { Component, useState } from "react";

const FormInput = (props) => {
    
    const {topic,value,onChange,name,disabled,type,max,min} = props
    return(
        <div>
            <label class="form-label">{topic}</label>
            <input type={type} class="form-control" id={topic} placeholder={topic} value={value} onChange={onChange} name={name} 
            style={{fontSize:"20px",width:"350px"}} disabled={disabled} maxLength={max} minLength={min} required/>
        </div>
    );
 
}

export default FormInput;