import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonWhite = (props)=>{
    const {BTNW} = props
    return (
        <div><Button className="BCW" variant="white">{BTNW}</Button></div>
    );
}
export default ButtonWhite;
