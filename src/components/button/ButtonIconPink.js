import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonIconPink = (props)=>{
    const {BTNIP,ICON} = props
    return (
        <div><Button  className="BCIP" variant="white"><i class={ICON}>{BTNIP}</i></Button></div>
    );
}
export default ButtonIconPink;
