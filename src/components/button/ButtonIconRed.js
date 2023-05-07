import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonIconRed = (props)=>{
    const {BTNIR,ICON} = props
    return (
        <div><Button  className="BCIR" variant="white"><i class={ICON}>{BTNIR}</i></Button></div>
    );
}
export default ButtonIconRed;
