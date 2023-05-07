import React, { Component, useState } from "react";
import {Form} from 'react-bootstrap';

const check = (list,value) =>{
    if (value === list) 
        return true
}
const GroupRadio_Btn = (props) => {
    const {topic,data,value,onChange,disabled} = props
    return(
        <>
            <label className='labelinput'>{topic} </label>
                {data.map(({list})=>
                <div class="form-check">
        
                    <input type="radio" class="btn-check" name="options" value={list} onChange={onChange} checked={check(list,value)} autocomplete="off"/>
                    <label class="btn btn-outline-success" for={list}>{list}</label>
                </div>)} 
        </>
    )
}

export default GroupRadio_Btn;