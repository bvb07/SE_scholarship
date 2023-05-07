import React from "react";
import {Form} from 'react-bootstrap';
//min="1980-02-20" max="2010-01-01"
const DatePicker = (props) => {
    const {topic,value,onChange,disabled} = props
    return(
        <Form.Group controlId="dob">
            <Form.Label>{topic}</Form.Label>
            <Form.Control type="date" value={value} onChange={onChange} name="dob" placeholder={topic} style={{fontSize:"20px",width:"260px"}} disabled={disabled} required/>
        </Form.Group>
    )
 }    

 export default DatePicker;