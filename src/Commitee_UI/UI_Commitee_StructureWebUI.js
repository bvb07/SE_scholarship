import '../Layout/StructureWebUI.css'
import React, {useState, useEffect, Component, useContext } from 'react'
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import {AuthContext} from "../Login/Authenticate"


function UI_Commitee_StructureWebUI(props){
    const {topic,iconic} = props
    const {fullname,role,email,authState} = useContext(AuthContext);
    if (!authState || (role != "Committee" && role != "Dev")) {
      window.location = "/"
    }
    function Logout() {
      //e.prevenDefault() 
      localStorage.removeItem("refresh_token")
      window.location.reload(false);
    };
    return (
      <body>
        <div classname="topbar">
          <div className="boxlogo">
            <img src= "https://www.eng.src.ku.ac.th/wp-content/uploads/2021/01/ENG_th-flat_transparent_1.png?x68278"class="logo" />
          </div>
          <div className="topwhitebar">
            <div className="box1">
              <p className="lessspace"> ระบบบริหารจัดการทุนนิสิต</p>
              <p className="lessspace"> คณะวิศวกรรมศาสตร์ศรีราชา</p>
              <p className="lessspace"> มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา </p>
            </div>
            <div className="box2">
              <p className="user">กรรมการ : {fullname} <br/> {email}</p>
              <div className="boxicon">
                <Link to="/"> <button onClick={(e) => Logout(e)}><i class="fas fa-door-open" style={{ fontSize:"40px"}}></i></button></Link>
              </div>
            </div>
          </div>
          <div className="topredbar">
            <div className="boxtopic" style={{marginTop:"10px"}}><i class={iconic}></i> 
              <p className="topic" style={{marginTop:"-10px"}}>{topic}</p> 
            </div>
          </div>
        </div>
        <div className="lowerbar">
          <div className="righttab">
            <div class="tab">
                <Link to="/Commitee_ListScholarship" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fas fa-list-alt"></i>ดูรายชื่อทุน</button></Link>
                <Link to="/Commitee_Score" style={{ textDecoration: 'none' }}><button class="tablinks" ><i class="fas fa-edit"></i> การลงคะเเนน</button></Link>
                <Link to="/Commitee_Schedule" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fas fa-user-circle"></i> กำหนดการ</button></Link>
                <Link to="/Commitee_History" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fa fa-history"></i> ประวัติผู้สมัครทุน</button></Link>
            </div>         
            <div class="tabfree"></div>
          </div>
        </div>
      </body>
    );
  }

export default UI_Commitee_StructureWebUI;
