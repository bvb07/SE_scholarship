import '../Layout/StructureWebUI.css'
import React, {useState, useEffect, Component, useContext } from 'react'
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import {AuthContext} from "../Login/Authenticate"


function StructureWebUI(props){
    const {topic,iconic} = props
    const {fullname,role,email,authState} = useContext(AuthContext)
    //console.log(fullname);
    //console.log(authState);
    if (!authState || (role != "User" && role != "Dev")){
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
              <p className="user">นิสิต : {fullname} <br/> {email}</p>
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
                  {/*<Link to="/ListScholarship" style={{ textDecoration: 'none' }}><button class="tablinks" ><i class="fas fa-list-alt"></i> ดูรายชื่อทุน</button></Link>*/}
                  <Link to="/RegisterScholarship" style={{ textDecoration: 'none' }}><button class="tablinks" ><i class="fas fa-edit"></i> สมัครทุนการศึกษา</button></Link>
                  <Link to="/StudentInform" style={{ textDecoration: 'none' }}><button class="tablinks" ><i class="fas fa-user-circle"></i> ข้อมูลนิสิต</button></Link>
                  <Link to="/StudentStatus" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fas fa-clipboard-list"></i> สถานะ</button></Link>
                  <Link to="/StudentSchedule" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fas fa-calendar-alt"></i> กำหนดการ</button></Link>
                  <Link to="/Contact" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fas fa-phone-alt"></i> การติดต่อ</button></Link>
                  <Link to="/Help" style={{ textDecoration: 'none' }}><button class="tablinks"><i class="fas fa-question-circle"></i> คู่มือการสมัคร</button></Link>
            </div>
            <div class="tabfree"></div>
          </div>
        </div>
      </body>
    );
  }

export default StructureWebUI;
