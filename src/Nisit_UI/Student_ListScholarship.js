import axios from "axios";
import React, { Component, useState, useEffect, useContext } from "react";
import StructureWebUI from './StructureWebUI';
import { useParams, Link  } from "react-router-dom";
import {AuthContext} from "../Login/Authenticate";
import Student_ScholarBadget from "../components/scholarbadget/Student_ScholarBadget";
import {Form, Carousel} from 'react-bootstrap';

function Student_ListScholarship(){
  const {user_ID,authState} = useContext(AuthContext)

  const [scholarName, setScholarName] = useState([]);//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [pic_Topic,setpic_Topic] = useState("");
  const [name_Topic,setname_Topic] = useState("");
  //console.log(user_ID);
  if (!authState) {window.location = "/Login_All"}

  useEffect(function useGetScholarName(){ //function gettest
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      setScholarName(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงรายชื่อทุน")
    }
    );
  },[]) 
  
  //console.log(email);
  //console.log(checkLogout);
  //console.log(studentID)
    return (<>
      <div><StructureWebUI topic="ดูรายชื่อทุน" iconic="fas fa-list-alt"/> </div>
          <div className="containerNew">
            <div className="layout-l1">
              <div className="body-l1">
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{height:"400px"}}
      src="https://img.soccersuck.com/images/2020/07/01/105833555_154538152847363_9205908320390959159_o.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{height:"400px"}}
      src="https://pbs.twimg.com/media/EViAOm2U4AgEsNx.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{height:"400px"}}
      src="https://us-fbcloud.net/wb/data/1234/1234511-img.ueup1y.7c9tx.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                <div className='studentScholar'style={{height:"ึ500px",overflow:"auto",backgroundColor : "rgb(190, 190, 190)"}} > 
                      {scholarName.map((scholarName) => (

                            <Student_ScholarBadget topic = {scholarName.nameScholar} 
                            detail1={scholarName.srcUpload}
                            detail2={scholarName.detailScholar}
                            detail3={scholarName.qualificationScholar}
                            detail4={scholarName.srcYear_id}
                            />))

                      }
                    
                </div>
              </div>
            </div>
        
        </div>
     
    </>);
  
}

export default Student_ListScholarship;
