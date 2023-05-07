import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './ButtonColor.css';

const ButtonYellow = (props)=>{
    const {BTNY} = props
    return (
        <div><Button className="BCY" variant="white">{BTNY}</Button></div>
    );
}
export default ButtonYellow;
