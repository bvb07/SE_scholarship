import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import '../form/StudentInform.css'

const SelectorTwoFactor = (props) => {
    const {topic,data,id,value,onChange,disabled} = props
    return(
        <div className='select01' >
            <label className='labelinput'>{topic} </label>
            <Form.Select  value={value} onChange={onChange} style={{fontSize:"20px",width:"400px"}} disabled={disabled} required>
               <option>เลือก</option>
                {data.map(({list,id})=>
                
                <option value={id} style={{fontSize:"20px"}} disabled={disabled} required>{list}</option>
                
                ) 
                
                }
            </Form.Select>
        </div>
    )

}
export default SelectorTwoFactor;
