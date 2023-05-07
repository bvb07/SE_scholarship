import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import React, { Component, useState } from "react";
import './Accor.css'
import StudentName from './StudentName';
const nameni = [
    {num:"1.",ns:"นายชลสิทธิ์ สุธรรมา",idnisit:"6230300249",link:"/Admin_Output"},
    {num:"2.",ns:"นายทิวัตถ์ สู้เสงี่ยม",idnisit:"6230300397",link:"/Admin_Output"},
    {num:"3.",ns:"นายกฤษณพล จุ้ยประเสริฐ",idnisit:"6230300028",link:"/Admin_Output"},
    {num:"4.",ns:"นายคุณภัทร มีเจริญ",idnisit:"6230300141",link:"/Admin_Output"},
    {num:"5.",ns:"นายสพล มหาวงศ์",idnisit:"6230300940",link:"/Admin_Output"},
    {num:"6.",ns:"นายชลทัศน์ เจริญยิ่ง",idnisit:"6230300222",link:"/Admin_Output"}
]

const nameList = nameni.map(nn => ( <StudentName num={nn.num} ns={nn.ns} idnisit={nn.idnisit} link={nn.link} />))
const Accor = (props)=>{
    const {title,tdetail,adetail,date,n1,n2,n3,allmoney,total} = props
    return (
        <div className='mb-2 mt-2'>
             <div className="mt-2 mb-4"><Card body className='card2'>{title}</Card></div>
            <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <AccordionHeader>รายละเอียดทุน</AccordionHeader>
              <Accordion.Body>
                <div className='f1'>{title}</div>
                <div className='f1'>{tdetail}</div>
                <div className='f1 mt-2'>คุณสมบัติของผู้ขอรับทุน :</div>
                <div className='f1'>{adetail}</div>
                <div className='f1 mt-2'>ระยะเวลาเปิดรับสมัคร :</div>
                <div className='f1'>{date}</div>
                <Stack direction="horizontal" gap={0}>
                      <Card style={{ width: '12rem' }} className='mt-2'>
                        <ListGroup variant="flush">
                          <ListGroup.Item className='f1 bg1'>จำนวนที่นิสิตมาสมัคร</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนทุนที่มอบให้นิสิต</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>จำนวนเงินทุนละ</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>รวมเป็นเงินทั้งหมด</ListGroup.Item>
                          <ListGroup.Item className='f1 bg1'>เงินคงเหลือ(กลับเข้ากองทุน)</ListGroup.Item>
                        </ListGroup>
                      </Card>
                      <Card style={{ width: '12rem' }} className='mt-2'>
                        <ListGroup variant="flush">
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{n1}</div>
                            <div className="f1 ms-auto">คน</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{n2}</div>
                            <div className="f1 ms-auto">คน</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{n3}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{allmoney}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                          <ListGroup.Item className='f1 '>
                          <Stack direction="horizontal" gap={3}>
                            <div className="f1 ms-3">{total}</div>
                            <div className="f1 ms-auto">บาท</div>
                          </Stack>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                </Stack>
                </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>รายชื่อนิสิตที่ได้รับทุน</Accordion.Header>
              <Accordion.Body>
                {nameList}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    );
}
export default Accor;