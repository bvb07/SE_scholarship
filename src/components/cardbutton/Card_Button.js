import {Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component, useState } from "react";
import './Card_Button.css'

const Card_Button = (props)=>{
    const {title,link} = props
    return (
        <div className='ms-5'>
            <Link to={link} style={{ textDecoration: 'none' }}><Card className='card1 mt-2'> <div className='ms-3'>{title}</div></Card></Link>
        </div>
    );
}
export default Card_Button;
