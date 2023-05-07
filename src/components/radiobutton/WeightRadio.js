import React, { Component, useState, useContext, useEffect} from "react";
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
import {Form} from 'react-bootstrap';
import axios from "axios";
const check = (list,value) =>{
    if (value === list) 
        return true
}
const WeightRadio = (props) => {
    const {topic} = props
    return(

        <div className='inputlb01'>
            <label className='labelinput'>{topic} </label>
            <Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                    inline
                    label="5"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    className="ms-4"
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                className="ms-4"
                    inline
                    label="3"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                className="ms-4"
                    inline
                    label="2"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                className="ms-4"
                    inline
                    label="1"
                    type={type}
                    id={`inline-${type}-3`}
                />
                </div>
            ))}
            </Form>
        </div>

    )
}

export default WeightRadio;