import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonBrown = (props)=>{
    const {BTNB} = props
    return (
        <div><Button className="BCB" variant="white">{BTNB}</Button></div>
    );
}
export default ButtonBrown;
