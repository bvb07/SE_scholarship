import React, { Component, useState } from "react";
import {Form} from 'react-bootstrap';
//checked={term_Std==="ภาคพิเศษ"?"checked":""}
const check = (list,value) =>{
    if (value === list) 
        return true
}
const GroupRadio = (props) => {
    const {topic,data,value,onChange,disabled} = props
    return(

        <div className='inputlb01'>
            <label className='labelinput'>{topic} </label>
                {data.map(({list})=>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name={topic} value={list} onChange={onChange} checked={check(list,value)} disabled={disabled} required/>
                    <label class="form-check-label" for="flexRadioDefault1">{list}</label>
                </div>)} 
        </div>

    )
}

export default GroupRadio;