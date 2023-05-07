import React, { Component, useState } from "react";

const FormNumber= (props) => {
    
    const {topic,value,onChange,name,disabled,step,min,max} = props
    return(
        <div>
            <label class="form-label">{topic}</label>
            <input type="number" step={step} min={min} max={max} class="form-control" id={topic} placeholder={topic} value={value} onChange={onChange} name={name} style={{fontSize:"20px",width:"200px"}} disabled={disabled} required/>
        </div>
    );
 
}

export default FormNumber;