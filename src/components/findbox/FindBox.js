import './FindBox.css'
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';

/*วิธีใช้ import หน้านี้
import FindBox from path

เรียก
ตำแหน่ง header-l1
<FindBox topic =ในกล่อง placeholder data="ค้นหา" sourcefile=แหล่งที่จะให้ค้นหา c1=,c2=,c3=,c4=,srcC1=,srcC2=,srcC3=,srcC4=/>
data อย่าแก้
รูปแบบตาราง
   c1|c2|c3|c4|c5|c6
r1|i1|i2|i3|i4|i5|i6
r2|i1|i2|i3|i4|i5|i6
  




*/
import React from 'react'
import { useState, Fragment ,useEffect} from "react";
const FindBox = (props) => {

    const {topic,data,sourcefile,c1,c2,c3,c4,c5,c6} = props
    const [searchList,setSearchList] = useState('');
    var cannotfind= true;

   
    
    



      return(
        <div className='containerNew'>
          <div className='layout-1'>
              <div >
               
                    <div className='header-l2' style={{marginTop:"-10px"}}>
                        <input type="search" id="form1" placeholder={data} style={{width:'auto',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
                        <h1 >{topic}</h1>
                        
                    </div>
                    <div className='body-l1'>
                        <br/>
                          <div  style={{marginTop:"50px",width:"1150px",height:"600px",overflow:"auto"}}>   
                                  {sourcefile.filter((val)=>{
                                    if (searchList==""){
                                      return val
                                    }
                                    else if(val.first_name.toLowerCase().includes(searchList.toLowerCase())){
                                        return val
                                    }
                                    else if(val.last_name.toLowerCase().includes(searchList.toLowerCase())){
                                      return val
                                    }
                                    else if(val.email.toLowerCase().includes(searchList.toLowerCase())){
                                      return val
                                    }
                                    else if(val.gender.toLowerCase().includes(searchList.toLowerCase())){
                                      return val
                                    }
                                    else if(val.ip_address.toLowerCase().includes(searchList.toLowerCase())){
                                      return val
                                    }
                                  }
                                 ).map((val)=>{
                                   
                                          return(<>
                                                  <Accordion defaultActiveKey="0">
                                                    <Accordion.Item >
                                                      <Accordion.Header>{val.first_name}</Accordion.Header>
                                                      <Accordion.Body>
                                                        <div>Email:{val.email}</div>
                                                        <div>Gender:{val.gender}</div>
                                                        <div>IP:{val.ip_address}</div>
                                                      </Accordion.Body>
                                                    </Accordion.Item>
                                                  </Accordion>
                                                </>)
                                                }
                                      )
                                   }
                        </div>
                    </div>
                </div>
          </div>
        </div>
      );
  }
  
  export default  FindBox;