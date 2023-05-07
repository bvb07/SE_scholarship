import { Link } from 'react-router-dom'
import {Container,Row,Accordion,Stack,Badge,Card} from 'react-bootstrap';
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import FormTextArea from '../form/FormTextArea'




const Card_Std_Status = (props)=>{
    const {ScholarId,ScholarData,eventKey,link,RegId,statusCheck,statusInterview,statusTransfer,statusReceipt,message,fullname,id} = props
    //const [getStd_Status,setGetStd_Status] = useState([]);
    /*useEffect(() => {
        axios.get(`http://127.0.0.1:8000/RegisterScholarship/${RegId}/`).then((response)=>{
          
            setGetStd_Status(response.data)
    },(err)=>{
        alert("GET ไม่ได้3")
      }
    );
    },[]);*/

    return(<>
        <div className="">
            <Accordion.Item eventKey= {eventKey}>
                <Accordion.Header>
                    <Stack direction="horizontal" gap={5} style={{ width: '50rem'}}>
                    <div style={{display: "flex",flexDirection:"row",width:"250px",justifyContent:"space-between",background:"null"}}>
                    {(()=>{ 
                        if(statusCheck == 0){
                            return(
                              <div className="circle-mini-gray">1</div> 
                          )}else if(statusCheck == 1){
                            return(
                              <div className="circle-mini-green">1</div> 
                          )}else if(statusCheck == 2){
                            return(
                              <div className="circle-mini-yellow">1</div> 
                          )}else if(statusCheck == 3){
                            return(
                              <div className="circle-mini-red">1</div> 
                          )}
                    })()}
                    {(()=>{ 
                        if(statusInterview == 0){
                        return(
                            <div className="circle-mini-gray">2</div> 
                        )}else if(statusInterview == 1){
                        return(
                            <div className="circle-mini-green">2</div> 
                        )}else if(statusInterview == 2){
                        return(
                            <div className="circle-mini-yellow">2</div> 
                        )}else if(statusInterview == 3){
                        return(
                            <div className="circle-mini-red">2</div> 
                        )}
                    })()}
                    {(()=>{ 
                        if(statusTransfer == 0){
                        return(
                            <div className="circle-mini-gray">3</div> 
                        )}else if(statusTransfer == 1){
                        return(
                            <div className="circle-mini-green">3</div> 
                        )}else if(statusTransfer == 2){
                        return(
                            <div className="circle-mini-yellow">3</div> 
                        )}else if(statusTransfer == 3){
                        return(
                            <div className="circle-mini-red">3</div> 
                        )}
                    })()}
                    {(()=>{ 
                        if(statusReceipt == 0){
                        return(
                            <div className="circle-mini-gray">4</div> 
                        )}else if(statusReceipt == 1){
                        return(
                            <div className="circle-mini-green">4</div> 
                        )}else if(statusReceipt == 2){
                        return(
                            <div className="circle-mini-yellow">4</div> 
                        )}else if(statusReceipt == 3){
                        return(
                            <div className="circle-mini-red">4</div> 
                        )}
                    })()}
                    </div>  
                    <div className="illution">{ScholarData}</div>
                    <div className="ms-auto">
                    {(()=>{
                        if(statusCheck == 0 && statusInterview == 0 &&
                        statusTransfer == 0 && statusReceipt == 0){
                            return(<>
                                <Badge bg="info" text="black" >กำลังตรวจเอกสาร</Badge>&nbsp;
                            </>)
                        }else if (statusCheck == 1 && statusInterview == 0 &&
                        statusTransfer == 0 && statusReceipt == 0){
                            return(<>
                                <Badge bg="info" text="black" style={{background:"gray"}}>กำลังรอการสัมภาษณ์</Badge>&nbsp;
                            </>)
                        }else if (statusCheck == 1 && statusInterview == 1 &&
                            statusTransfer == 0 && statusReceipt == 0){
                                return(<>
                                    <Badge bg="info" text="black" style={{background:"gray"}}>กำลังรอการมอบทุน</Badge>&nbsp;
                                </>)
                        }else if (statusCheck == 1 && statusInterview == 1 &&
                            statusTransfer == 1 && statusReceipt == 0){
                                return(<>
                                    <Badge bg="info" text="black" style={{background:"gray"}}>โปรดส่งใบสำคัญรับเงิน</Badge>&nbsp;
                                </>)
                        }else if (statusCheck == 1 && statusInterview == 1 &&
                            statusTransfer == 1 && statusReceipt == 1){
                                return(<>
                                    <Badge bg="info" text="black" style={{background:"gray"}}>เสร็จสิ้นการรับทุน</Badge>&nbsp;
                                </>)
                        }else if (statusCheck == 3 || statusInterview == 3 ||
                            statusTransfer == 3 || statusReceipt == 3){
                                return(<>
                                    <Badge bg="info" text="black">ไม่ผ่าน</Badge>&nbsp;
                                </>)
                        }else if (statusCheck == 2 || statusInterview == 2 ||
                            statusTransfer == 2 || statusReceipt == 2){
                                return(<>
                                    <Badge bg="info" text="black">มีปัญหา</Badge>&nbsp;
                                </>)
                        }
                    })()}
                    </div>
                    </Stack>
                </Accordion.Header>
                <Accordion.Body>
                    <div style={{width:"1200px",display: "flex", flexDirection: "row"}}>
                        <label class="form-label" style={{fontSize:"30px",marginLeft:"150px"}}>{id} </label>
                        <label class="form-label" style={{fontSize:"30px",marginLeft:"100px",}}>{fullname} </label>
                    </div>
                    <div className="topic_sc-row" style={{height:"180px"}}>
                    
                    {(()=>{ 
                            if (statusCheck == 0){
                                return(
     		                        <div className="ms-3 front-status">
	 	                            การตรวจเอกสาร
                                    <div className="ms-3"><div className='circle-gray'>1</div></div></div>)
                                
                            }else if(statusCheck == 1){
                                return(
                                    <div className="ms-3 front-status">
                                    การตรวจเอกสาร
                                        <div className="ms-3"><div className='circle-green'>1</div></div></div>)
                            }else if(statusCheck == 2){
                                return(
                                    <div className="ms-3 front-status">
                                    การตรวจเอกสาร
                                        <div className="ms-3"><div className='circle-yellow3'>1</div></div>
                                    </div>)
                            }else if(statusCheck == 3){
                                return(
                                    <div className="ms-3 front-status">
                                    การตรวจเอกสาร
                                        <div className="ms-3"><div className='circle-red'>1</div></div>
                                    </div>)
                            }
                        })()} 
          
                        {(()=>{ 
                            if (statusInterview == 0){
                                return(
                                    <div className="ms-3 front-status">
                                    การสัมภาษณ์
                                        <div className="ms-3"><div className='circle-gray'>2</div>
                                        </div>
                                    </div>)
                                
                            }else if(statusInterview == 1){
                                return(
                                    <div className="ms-3 front-status">
                                    การสัมภาษณ์
                                        <div className="ms-3"><div className='circle-green'>2</div></div></div>)
                            }else if(statusInterview == 2){
                                return(
                                    <div className="ms-3 front-status">
                                    การสัมภาษณ์
                                        <div className="ms-3"><div className='circle-yellow3'>2</div></div>
                                    </div>)
                            }else if(statusInterview == 3){
                                return(
                                    <div className="ms-3 front-status">
                                    การสัมภาษณ์
                                        <div className="ms-3"><div className='circle-red'>2</div></div>
                                    </div>)
                            }
                        })()} 
                        {(()=>{ 
                            if (statusTransfer == 0){
                                return(
                                    <div className="ms-4 front-status">
                                    การมอบเงิน
                                    <div className="ms-4"><div className='circle-gray'>3</div></div></div>)
                                
                            }else if(statusTransfer == 1){
                                return(
                                    <div className="ms-4 front-status">
                                    การมอบเงิน
                                        <div className="ms-4"><div className='circle-green'>3</div></div></div>)
                            }else if(statusTransfer == 2){
                                return(
                                    <div className="ms-4 front-status">
                                    การมอบเงิน
                                        <div className="ms-4"><div className='circle-yellow3'>3</div></div>
                                    </div>)
                            }else if(statusTransfer == 3){
                                return(
                                    <div className="ms-4 front-status">
                                    การมอบเงิน
                                        <div className="ms-4"><div className='circle-red'>3</div></div>
                                    </div>)
                            }
                        })()} 
                       {(()=>{ 
                            if (statusReceipt == 0){
                                return(
                                    <div className="ms-4 front-status">
                                    ใบสำคัญรับเงิน
                                    <div className="ms-4"><div className='circle-gray'>4</div></div></div>)
                                
                            }else if(statusReceipt == 1){
                                return(
                                    <div className="ms-4 front-status">
                                    ใบสำคัญรับเงิน
                                        <div className="ms-4"><div className='circle-green'>4</div></div></div>)
                            }else if(statusReceipt == 2){
                                return(
                                    <div className="ms-4 front-status">
                                    ใบสำคัญรับเงิน
                                        <div className="ms-4"><div className='circle-yellow3'>4</div></div>
                                    </div>)
                            }else if(statusReceipt == 3){
                                return(
                                    <div className="ms-4 front-status">
                                    ใบสำคัญรับเงิน
                                        <div className="ms-4"><div className='circle-red'>4</div></div>
                                    </div>)
                            }
                        })()} 

                    </div>
                    {(()=>{
                        if (statusCheck == 1 && statusInterview == 1 &&
                            statusTransfer == 1 && statusReceipt == 1){
                            <label class="form-label" style={{fontSize:"20px",marginLeft:"150px",color:"rgb(20, 116, 87)"}}>นิสิตได้เสร็จสิ้นการรับทุนนี้แล้ว</label>
                        }else if(statusCheck == 3 || statusInterview == 3 ||
                            statusTransfer == 3 || statusReceipt == 3){
                            <label class="form-label" style={{fontSize:"20px",marginLeft:"150px",color:"rgb(177, 0, 0)"}}>นิสิตไม่ผ่านการคัดเลือกในทุนนี้</label>
                            }
                    })()} 
                    <FormTextArea topic="รายละเอียด" name="message" value={message} disabled={true}/><br/>
                    <Stack direction="horizontal" gap={0}>
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
                            </Stack>
                            </Card>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    </>)


}    
export default Card_Std_Status
