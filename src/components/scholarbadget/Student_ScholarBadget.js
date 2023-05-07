import React, { Component, useState , useEffect,Fragment} from "react";
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import {Card,Button,Accordion,ListGroup,Stack,Badge} from 'react-bootstrap';
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'

import FormTextArea from '../form/FormTextArea'

const Student_Scholarbadget = (props) => {
    const {topic,detail1,detail2,detail3,detail4,timestart,timeend,amountsch,normal,eventKey} = props

    var curdate = new Date();
    const [delayTime,setDelayTime] = useState(new Date())

   


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
            {/* <div className="illution">{topic}</div> */}
            <Stack direction="horizontal" gap={4} style={{ width: '70rem'}}>
                <img src={detail1}  style={{width: "300px", height: "200px"}}/>
                <div className="illution">{topic}</div>
                <div className="ms-auto" style={{display: "flex",flexDirection: "column",marginRight:"20px",height:"150px",justifyContent:"space-around"}}>
                    <Badge bg="success">{diffDays(new Date((timeend.toString())),curdate)}</Badge>    
                    <Badge bg="white" text="black" >{amountsch} ทุน</Badge>

                    <Badge bg="black" text="white">{normal}</Badge>

                    
                </div>
            </Stack>    
            </AccordionHeader>
            <Accordion.Body>



            {/* <div className='topic_col'>
            <div className="illution">รายละเอียด</div>
            </div>
            <div className=''>
                <img src={detail1} alt="No image" width="300" height="300"></img>
            </div><br/>
            <div className='topic_col'> 
            <label className='form-label' style={{backgroundColor : "rgb(190, 190, 190)"}}>รายละเอียด</label>
            </div>
            <div className='topic_col'> 
            <label className='form-label' style={{backgroundColor : "rgb(190, 190, 190)"}}>{detail2}</label>
            </div>
            <div className='topic_col'>
             <label className='form-label' style={{backgroundColor : "rgb(190, 190, 190)"}}>คุณสมบัติของผู้ขอรับทุน</label>
             </div>
             <div className='topic_col'>
            <label className='form-label' style={{backgroundColor : "rgb(190, 190, 190)"}}>{detail3}</label>
            </div>
            <div className='topic_col'>
          
            <label className='form-label' style={{backgroundColor : "rgb(190, 190, 190)"}}>{detail4}</label>
            </div> */}






                <div className='topic_sc-row' style={{backgroundColor : "rgb(190, 190, 190)"}}>      
                     

                  
                        {/* <label class="form-label" style={{color : "#661B13"}}>{"ตั้งเเต่ "+d.srcStartDate+" ถึง "+d.srcEndDate} </label> */}
                        {/* <img src={detail} alt="No image" width="300" height="300"></img> */}
                           
                        <div className='topic_col' style={{backgroundColor : "rgb(190, 190, 190)"}}>      
                        <FormTextArea topic="รายละเอียด" name="detail" value={detail2} disabled={true}/><br/> 
                        <FormTextArea topic="คุณสมบัติของผู้ขอรับทุน" name="qualification" value={detail3} disabled={true}/><br/>
                        </div> 
                       

                        
                            <img src={detail1}  style={{width: "400px", height: "500px", marginLeft: "70px"}}/>
                            
                     
                        {/* <img src={detail1}  style={{width: "400px", height: "500px", marginLeft: "70px"}}/> */}
                            
                       
                        
                      
                 
                        
                </div>

                    
            </Accordion.Body>
        </Accordion.Item>
           
        </div> 
    </>)
}

export default Student_Scholarbadget;
