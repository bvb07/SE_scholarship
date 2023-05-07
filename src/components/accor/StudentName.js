import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, { Component, useState } from "react";
import './Accor.css'

const StudentName = (props)=>{
    const {num,ns,idnisit,link} = props
    return (
        <div className=''>
                <Link to={link} style={{ textDecoration: 'none' }}><Card className='cc' style={{ width: '24rem' }} >
                        <ListGroup variant="flush" className='cc'>
                          <ListGroup.Item className='f1 cc' >
                          <Stack direction="horizontal" gap={3} className=''>
                            <div className="f1">{num}</div>
                            <div className="f1 ms-4">{ns}</div>
                            <div className="f1 ms-auto">{idnisit}</div>
                            <div className="f1 ms-2">T12</div>
                          </Stack>
                          </ListGroup.Item>
                          </ListGroup>
                  </Card>
                </Link>
        </div>
    );
}
export default StudentName;