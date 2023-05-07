import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import {Card,Button,Accordion,ListGroup,Stack,Badge} from 'react-bootstrap';
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import React, { Component, useState , useEffect,Fragment} from "react";
import axios from "axios";
import './ScholarBadget.css'
import {DropdownButton,Dropdown,Form} from 'react-bootstrap';

import TabDropdown from '../../components/dropdown/TabDropdown';
import '../../Layout/Layout.css';
import SelectorTwoFactor from "../../components/selector/SelectorTwoFactor";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GroupRadio from "../../components/radiobutton/GroupRadio";


const WeightBadget = (props) => {

    
    const {topic,actionEdit,actionDelete,link,idEdit,weightInput,detailInput,nameModal,getscholarNameId,useModal,modalTarget,eventKey} = props
    const [delayTime,setDelayTime] = useState(new Date())
    //Modal
    const [getWeightScholarship,setGetWeightScholarship] = useState('')
    const [getMessScholarship,setGetMessScholarship] = useState('')
    const [setWeight,setSetWeight]  = useState('')
    const weightRadio = [{list:"1"},{list:"2"},{list:"3"},{list:"4"},{list:"5"}]

    const [scholarName, setScholarName] = useState([]);

    const [scholarNameYearSelect, setScholarNameYearSelect] = useState([]);

    const [getWeightByScholar,setGetWeightByScholar] = useState([])
    
    const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
    const [getWeightScholarDB,setGetWeightScholarDB] = useState([])//DB
    const [idEditBySet,setIdEditBySet]= useState('')//DB

    const [getScholar,setGetScholar] = useState([])
    return(<>
    <div>
        
                <Accordion.Item eventKey={eventKey}>
                    <AccordionHeader>
                        <div className="illution">
                        {topic}
                        </div>
                    </AccordionHeader>
                    <Accordion.Body>
                    
                    <label class="form-label">น้ำหนัก :&nbsp;{weightInput}</label><br/>
                    <label class="form-label">รายละเอียด</label><br/>
                    <label class="form-label">{detailInput}</label><br/>
           
                    <button className='btn btn-danger btn-lg' style={{width:"100px",height:"70px"}} type="button" onClick={actionDelete} >ลบ</button>
                    </Accordion.Body>
                </Accordion.Item>
        
    </div> 
    
    </>)
}

export default WeightBadget;
