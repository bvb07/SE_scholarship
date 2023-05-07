import React, { Component, useState } from "react";
import {Form} from 'react-bootstrap';
//checked={term_Std==="ภาคพิเศษ"?"checked":""}
const check = (list,value) =>{
    if (value === list) 
        return true
}
const GroupRadioForStatus = (props) => {
    const {topic,data,onChange,disabled} = props
    return(
        <div className='inputlb01'>
            <label className='labelinput'>{topic} </label>
                {data.map((d)=>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name={topic} value={d.state} onChange={onChange} checked={check(d.list,d.state)} disabled={disabled} required/>
                    <label class="form-check-label" for="flexRadioDefault1">{d.list}</label>
                </div>)} 
        </div>

    )
}

export default GroupRadioForStatus;