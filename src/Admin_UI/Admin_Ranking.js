import {Container,Row,Accordion,Stack,Badge,Card} from 'react-bootstrap';
import axios from "axios";
import React, { Component, useState, useContext, useEffect } from "react";
import {AuthContext} from "../Login/Authenticate"
import GroupRadio_Btn from "../components/radiobutton/GroupRadio_Btn"
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
// import GroupRadio_Btn from "../components/cardbadge/Card_Ranking"





function Admin_Ranking  (){
    var myStr = "";
    const {scholar_id} = useParams()
    const {authState,user_ID,role} = useContext(AuthContext)
    const [ranking, setRanking] = useState([])
    const [scholar, setScholar] = useState("")



    
    
    useEffect(() =>{   
        axios.get("http://127.0.0.1:8000/Managescholarship/"+scholar_id+"/").then((response)=>{
          setScholar(response.data)
        })
        
        axios.post("http://127.0.0.1:8000/queryRanking",[parseInt (scholar_id)]).then((response) =>{
         setRanking(response.data)
     })
    },[]);


    var majorStr = ""; //get major
    return (
    <div><UI_Admin_StructureWebUI topic="คะแนนของนิสิต" iconic="fas fa-user-circle" />
    
        {/*console.log("Rankingggggggggggggggggg:",ranking)*/}
            <div className='containerNew'>
              <label class="form-label" style={{fontSize:'30px'}}>อันดับคะเเนนที่ได้จากการลงคะเเนนจากกรรมการทั้งหมด  &nbsp;</label>
              <label class="form-label" style={{fontSize:'25px'}}>ชื่อทุน: {scholar.nameScholar}</label>
              <label class="form-label">กรรมการได้ทำการลงคะเเนนให้นิสิตในทุนนี้เเล้ว ทั้งหมด {ranking.length} คน</label>

                {ranking.map((rankingMap, index) => (
                        <Card className="card2" style={{ width: '50rem' }}>
                        <Stack direction="horizontal" gap={4} style={{ width: '50rem'}}  > 
                            <div className="illution ms-4" style={{marginLeft:"auto",color:"white",marginTop:"30px"}}>{index+1}.</div> 
                            <div className="illution" style={{marginRight:"auto",color:"white",marginTop:"30px"}}>{rankingMap.id_Std}</div>  
                            <div className="illution" style={{marginLeft:"auto",color:"white",marginTop:"30px"}}>{rankingMap.fullName_std}</div>              
                          {(()=>{
                              if (rankingMap.major_Std=="T05 วิศวกรรมโยธา") {
                                majorStr = "T05"
                              }else if(rankingMap.major_Std=="T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์"){
                                majorStr = "T12"
                              }else if(rankingMap.major_Std=="T13 วิศวกรรมเครื่องกลและการออกแบบ"){
                                majorStr = "T13"
                              }else if(rankingMap.major_Std=="T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์"){
                                majorStr = "T14"
                              }else if(rankingMap.major_Std=="T17 วิศวกรรมอุตสาหการและระบบ"){
                                majorStr = "T17"
                              }else if(rankingMap.major_Std=="T18 วิศวกรรมเครื่องกลและระบบการผลิต"){
                                majorStr = "T18"
                              }else if(rankingMap.major_Std=="T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ"){
                                majorStr = "T19"
                              }
                          })()}
                            <div className="illution" style={{marginLeft:"auto",width:"auto",color:"white",marginTop:"30px"}}>{majorStr}</div>
                            <div className="illution" style={{marginLeft:"auto",color:"white",marginTop:"30px"}}>{rankingMap.totalScore}/100&nbsp;&nbsp;&nbsp;&nbsp;</div>


                        </Stack>
                        </Card>

                        
                        
                    ))}

            </div>
           
    </div>
    )
}    
export default Admin_Ranking
