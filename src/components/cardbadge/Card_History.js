import { Link } from 'react-router-dom'
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import ListNameNisit from './ListNameNisit';
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import UseFileDownloader from "../dowload/UseFileDownloader"
import ViewInform from "../form/ViewInform"
import GroupRadio_Btn from "../radiobutton/GroupRadio_Btn"
// import dowload
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


var myStr = "";
const Card_History = (props)=>{

  const {data,eventkey} = props
    //console.log("check card data: ",data)

    var majorT = ""; //get major
    var statusT = ""; //get statuse


    return (<>
            <Accordion.Item eventKey={eventkey}>
                <Accordion.Header>
                  <div style={{fontSize:"20px"}}>
                    <Stack direction="horizontal" gap={2} style={{ width: '35rem'}}>
                        <div className="illution"> {data.id_Std} </div>
                        {(()=>{
                        if ((data.major_Std) =="T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์") {
                              majorT = "T12";}
                        else if ((data.major_Std) =="T05 วิศวกรรมโยธา") {
                              majorT = "T05";}
                        else if ((data.major_Std) =="T13 วิศวกรรมเครื่องกลและการออกแบบ") {
                              majorT = "T13";}
                        else if ((data.major_Std) =="T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์") {
                              majorT = "T14";}
                        else if ((data.major_Std) =="T17 วิศวกรรมอุตสาหการและระบบ") {
                              majorT = "T17";}
                        else if ((data.major_Std) =="T18 วิศวกรรมเครื่องกลและระบบการผลิต") {
                              majorT = "T18";}
                        else if ((data.major_Std) =="T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ") {
                              majorT = "T19";}

                              
                        })()} 
                        {/* {data.id_Std}&nbsp;{data.fullName_Std}&nbsp;{majorT} */}

                        <div  style={{marginLeft:"200px",position:"absolute"}}>
                        <div className="illution">{majorT}</div>
                        </div>

                        <div  style={{marginLeft:"300px",position:"absolute"}}>
                        <div className="illution">{data.fullName_Std}</div>
                        </div>

                       
                        
                          {(()=>{
                            if(data.shcolarshiplist.length > 0){
                              return(<>
                                
                                <div  style={{marginLeft:"1040px",position:"absolute"}}>
                                    <Badge bg="success" text="white">{data.shcolarshiplist.length} ทุน</Badge>
                                </div>
                             </>)
                            }
                            else{
                              return(
                                <Badge bg="warning" text="black"> ยังไม่สมัครทุน</Badge>
                              )
                            }


                          })()}
                        
                      </Stack> 
                            {/* <img src={d.srcUpload}  style={{width: "300px", height: "200px"}}/> 
                            <div className="illution"  style={{fontSize:"30px"}}>{d.nameScholar}</div>
                            <div className="ms-auto" style={{display: "flex",flexDirection: "column",marginRight:"20px"}}>
                                <Badge bg="success">{diffDays(new Date((d.srcEndDate).toString()),curdate)}</Badge>
                                <Badge bg="warning" text="black">{d.amountScholar} ทุน</Badge>
                            </div> */}
                        


                        
                    </div>
                </Accordion.Header>
                  
                <Accordion.Body>
                    <Accordion>
                    

                        {data.shcolarshiplist.map((schorlar, index) => (<>
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                              <div style={{ width:'100%' ,
                                            backgroundColor:'',
                                            flexDirection:'row ',
                                            display:'flex',
                                            justifyContent:'space-between'}}>
                                <div style={{backgroundColor:'',fontSize:"20px"}}>
                                {index+1}.&nbsp; {schorlar.nameScholar}
                                </div>
                                
                               
                                <div style={{backgroundColor:'',fontSize:"20px"}}>
                                   {/*ส่วนสถานะ*/}

                                   {(()=>{
                                    if ((schorlar.statusCheck) == 1 && (schorlar.statusInterview) == 1 && (schorlar.statusReceipt) == 1 && (schorlar.statusTransfer) == 1) {
                                      return(
                                        <Badge bg="success" text="white">ผ่านการคัดเลือก</Badge>
                                      )}
                                    else if (schorlar.statusCheck == 3 || schorlar.statusInterview == 3 || schorlar.statusReceipt == 3 || schorlar.statusTransfer == 3){
                                      return(
                                        <Badge bg="danger" text="white"> ไม่ผ่านการคัดเลือก</Badge>
                                      )}  
                                      
                                    else {
                                      return(
                                        <Badge bg="warning" text="white">กำลังดำเนินการ</Badge>
                                      )}
                                        
                                    })()} 
                                    
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            <Stack direction="horizontal" gap={3}>
                              <div style={{ fontSize:"20px", 
                                            flexDirection:'column ',
                                            display:'flex',
                                            width:'100%',
                                            height:'100%'}}>
                                  <div style={{ 
                                                width:'100%' ,
                                                backgroundColor:'',
                                                flexDirection:'column',
                                                display:'flex',
                                                justifyContent:'space-around',
                                                }}>
                                                  
                                      <div style={{fontSize:"20px",fontWeight:'bold'}} >  
                                        รายละเอียดทุน:
                                      </div>   
                                  </div>
                                  <div style={{height:'100%', backgroundColor:'',color : 'black',fontSize:"20px"}}>
                                    <p>{schorlar.detailScolar}</p>
                                  </div>
                                  <div style={{fontSize:"20px",display:'flex',flexDirection:'row'}}>
                                        <p style={{fontSize:"20px",fontWeight:'bold'}}>จำนวนเงินที่ได้รับ:</p>&nbsp;{schorlar.costScholar} บาท
                                      </div>             

                              </div>
                            
                            {/* <div style={{fontSize:"20px"}}>รายละเอียดทุน</div>
                            <div style={{fontSize:"20px"}}>{schorlar.nameScholar}</div>
                            <div style={{marginLeft:"200px",fontSize:"20px"}}>จำนวนเงินที่ได้รับ :{schorlar.costScholar} บาท</div> */}
                            </Stack>
                            </Accordion.Body>

                        </Accordion.Item>
                        </>
                    ))}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
  </>);
}    
export default Card_History


