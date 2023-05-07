import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonRed = (props)=>{
    const {BTNR} = props
    return (
        <div><Button className="BCR" variant="white">{BTNR}</Button></div>
    );
}
export default ButtonRed;
