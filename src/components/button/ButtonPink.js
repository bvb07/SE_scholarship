import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonPink = (props)=>{
    const {BTNP} = props
    return (
        <div><Button className="BCP" variant="white">{BTNP}</Button></div>
    );
}
export default ButtonPink;
