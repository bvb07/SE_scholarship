import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonGreen = (props)=>{
    const {BTNG} = props
    return (
        <div><Button className="BCG" variant="white">{BTNG}</Button></div>
    );
}
export default ButtonGreen;
