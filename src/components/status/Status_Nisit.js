import {Card,Button,Accordion,ListGroup,Stack,ProgressBar,Container,Row,Col,Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component, useState } from "react";
import './Status_Nisit.css'
import '../../Layout/Layout.css'

const Status_Nisit = (props)=>{
    const {title,num} = props
    const isBackgroundRed = false;
    return (
        <div>
            <div>
            <Accordion.Item eventKey={num}>
                <Accordion.Header>
                    <Stack direction="horizontal" gap={2} style={{ width: '30rem'}}>
                        <div>
                            <Badge bg="info" text="black">
                                <div className={isBackgroundRed ? 'circle-mini-red' : 'circle-mini-red'}>1</div>
                            </Badge>&nbsp;
                        </div>
                        <div className="illution">{title}</div>
                    </Stack>
                </Accordion.Header>
                <Accordion.Body>
                <div className = "header-l2" >
                    <div className="ms-3 front-status">
                    การตรวจเอกสาร
                    <div className="ms-3">
                    <div className={isBackgroundRed ? 'circle-green' : 'circle-red'}>1
                    </div>
                    </div>
                    </div>
                    <div className="ms-3 front-status">
                    การสัมภาษณ์
                    <div className="ms-2">
                    <div className={isBackgroundRed ? 'circle-green' : 'circle-red'}>2</div>
                    </div>
                    </div>
                    <div className="ms-4 front-status">
                    การมอบเงิน
                    <div className="ms-3">
                    <div className={isBackgroundRed ? 'circle-green' : 'circle-red'}>3</div>
                    </div>
                    </div>
                    <div className="ms-4 front-status">
                    ใบสำคัญรับเงิน
                    <div className="ms-4">
                    <div className={isBackgroundRed ? 'circle-green' : 'circle-red'}>4</div>
                    </div>
                    </div>
                </div>
                <Stack gap={2} className="col-md-5 mx-auto">
                <div className="mt-5 mb-3">นายทิวัตถ์ สู้เสงี่ยม 6230300397</div>
                </Stack>
                <Stack direction="horizontal" gap={0}>
                      <Card style={{ width: '24rem' }} className='mt-2'>
                      <ListGroup variant="flush">
                          <ListGroup.Item className='stacolor'>สถานะ : กำลังตรวจเอกสาร</ListGroup.Item>
                          <ListGroup.Item className=''>
                              หมายเหตุ: นัดสัมภาษณ์ ที่ Application MS team:QV34A1
                                ณ วันที่ 16 มกราคม พ.ศ. 2565  เวลาตั้งแต่ 9:00 น. ถึง 16:00 น.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                      <Card className='mt-2 ms-2' style={{ width: '12rem'}}>
                      <Stack gap={3} className="mt-2">
                      <Stack direction="horizontal" gap={3}>
                      <div className='circle-green2 ms-2'></div>
                        <div className="">ผ่าน</div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                        <div className='circle-yellow2 ms-2'></div>
                        <div className="">สถานะผิดปกติ</div>
                        </Stack>
                        <Stack direction="horizontal" gap={3} >
                        <div className='circle-red2 mb-2 ms-2'></div>
                        <div className=" mb-2">ไม่ผ่าน</div>
                        </Stack>
                      {/* <div className='circle-green2'></div>
                      <div className='circle-yellow2'></div>
                      <div className='circle-red2'></div> */}
                      </Stack>
                      </Card>
                </Stack>
                </Accordion.Body>
            </Accordion.Item>
            </div>
        </div>
    );
}
export default Status_Nisit;

