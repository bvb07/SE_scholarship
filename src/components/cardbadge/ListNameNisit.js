import {Card,Button,Accordion,ListGroup,Stack,Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, { Component, useState } from "react";


const ListNameNisit = (props)=>{
    const {order,nisitname,id,faculty} = props
    return (
        
          <div className=''>
                <Accordion className='' style={{ width: '24rem' }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                          <Stack direction="horizontal" gap={4} className='' style={{ width: '18rem' }}>
                            <div className="fs">{order}</div>
                            <div className="fs">{nisitname}</div>
                            <div className="fs ms-auto">{id}</div>
                            <div className="fs ms-0">{faculty}</div>
                          </Stack>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="fs">บัตรประชาชน.pdf</div>
                    </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
          </div>
        
    );
}
export default ListNameNisit;