import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import {Card,Button,Accordion,ListGroup,Stack,Badge} from 'react-bootstrap';
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import React, { Component, useState , useEffect,Fragment} from "react";
import axios from "axios";
import './ScholarBadget.css'


const Scholarbadget = (props) => {
    
    const {topic,actionEdit,actionDelete,actionClose,link,EndDate,StartDate,eventKey} = props

    const [delayTime,setDelayTime] = useState(new Date())


    var curdate = new Date();
    const diffDays = (date, otherDate) => {
        var days = Math.floor((date-otherDate) / (1000 * 60 * 60 * 24));
        var hours = Math.floor(((date-otherDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor(((date-otherDate) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(((date-otherDate) % (1000 * 60)) / 1000);
        //return days.toString()+" วัน "+hours.toString()+" ชม. "+minutes.toString()+" นาที "+seconds.toString()+" วินาที."
        if(days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0){
            return days.toString()+" วัน [ "+hours.toString()+":"+minutes.toString()+":"+seconds.toString()+" ]"
        }else{
            return "หมดเวลา"
        }
    }

    useEffect(() => {
        const time = setInterval(() => setDelayTime(new Date()), 1000);




        
      }, []); 
    

    
    return(<>
    
        <div>
      
                    <Accordion.Item eventKey={eventKey}>
                      <AccordionHeader> 
                      <div  style={{marginRight:"auto"}}>
                      <div className="illution">{topic}</div>
                      </div>
                          <div  style={{marginLeft:"1000px",position:"absolute"}}>
                        <Badge bg="success">{diffDays(new Date((EndDate).toString()),curdate)}</Badge>
                        </div>
                      </AccordionHeader>
                      <Accordion.Body>
                       
                        <Link to={link}><button type="button" className='btn btn-warning btn-lg' style={{width:"300px",marginLeft:"50px"}} onClick={actionEdit} data-bs-toggle="tooltip" data-bs-placement="right" title="เข้าสู้การแก้ไข" >แก้ไข</button></Link>
                        <button type="button" className='btn btn-secondary' style={{width:"300px",marginLeft:"50px"}} onClick={actionClose} data-bs-toggle="tooltip" data-bs-placement="right" title="ทำการปิดทุน"  >X ปิดทุน</button>
                        <button type="button" className='btn btn-danger btn-lg' style={{width:"300px",marginLeft:"50px"}} onClick={actionDelete} data-bs-toggle="tooltip" data-bs-placement="right" title="ทำการลบทุน" >ลบ</button>
                       
                        </Accordion.Body>
                    </Accordion.Item>
          
        </div> 
    </>)
}

export default Scholarbadget;
