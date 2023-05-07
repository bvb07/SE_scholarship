import {Container,Row,Accordion,Stack,Badge,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component, useState, useEffect } from "react";
import './Button_Dashboard.css'

const Button_Dashboard = (props)=>{
    const {title,pp} = props
    return (
        <div className='ms-5'>
            <Button className='card1 mt-2' onClick={pp}>{title}</Button>
        </div>
    );
}
export default Button_Dashboard;