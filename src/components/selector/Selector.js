import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import '../form/StudentInform.css'

const Selector = (props) => {
    const {topic,data,id,value,onChange,disabled} = props
    return(
        <div className='select01' >
            <label className='labelinput'>{topic} </label>
            <Form.Select  value={value} onChange={onChange} style={{fontSize:"20px",width:"400px"}} disabled={disabled} required>
                {data.map(({list})=><option  value={list=="เลือก" ? "":list} style={{fontSize:"20px"}} disabled={disabled} required>{list}</option>) }
            </Form.Select>
        </div>
    )

}
export default Selector;
