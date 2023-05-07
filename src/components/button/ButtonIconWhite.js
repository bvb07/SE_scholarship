import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonIconWhite = (props)=>{
    const {BTNIW,ICON} = props
    return (
        <div><Button  className="BCIW" variant="white"><i class={ICON}>{BTNIW}</i></Button></div>
    );
}
export default ButtonIconWhite;
