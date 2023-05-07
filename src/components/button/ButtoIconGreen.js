import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonIconGreen = (props)=>{
    const {BTNIG,ICON} = props
    return (
        <div><Button  className="BCIG" variant="white"><i class={ICON}>{BTNIG}</i></Button></div>
    );
}
export default ButtonIconGreen;
