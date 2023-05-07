import './Login.css';
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import React, { Component } from "react";

class Login_admin extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="area zone1">
            <div className="area1text">
                <h1>ระบบจัดการบริหารทุนนิสิต</h1>
                <h2>คณะวิศวกรรมศาสตร์</h2>
                <h2>มหาวิทยาลัยเกษตรศาสตร์ ศรีราชา</h2>
            </div>

            <div className="area1img">
              <img class="logo-picture" src="https://cdn.discordapp.com/attachments/921283125324177408/937019262948757504/PikPng.com_gears-png_1811776.png" alt="Logo"/>
            </div>
        </div>

        <div className="area zone2">
            <div class="area2logo">
              <div class="box2logo">
                <img class="logo-ku" src="https://www.eng.src.ku.ac.th/wp-content/uploads/2021/01/ENG_th-flat_transparent_1.png?x68278%22%3E" alt="Logo Ku"/>
              </div>
            </div>

            <div class="area2login">
              <div class="box2login">

                  <div class="login lg1">
                    <label for="account">Account@ku.th(ผู้ดูเเล)</label>
                  </div>
                  <div class="login lg2">
                    <input type="text"></input>
                  </div>
                  <div class="login lg3">
                  <label for="password">Password</label>
                  </div>
                  <div class="login lg4">
                    <input type="password"></input>
                  </div>
                  <div class="login lg5">
                    <Link to="/Admin_Managescholarship"><button className='buttonlogin'>Login</button></Link>
                  </div>
              </div>
            </div>
            
            <div class="area2next">
              <div class="box2next">

                  <button class="cpage p1">
                    <img class="logo-house" src="https://cdn1.iconfinder.com/data/icons/household-14/100/home-blank-512.png"></img>
                    <p class="button_text">หน้าหลัก</p>
                    
                  </button>

                  <Link to="/Login_nisit">
                    <button class="cpage p2">
                      <img class="logo-admin" src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-male-student-icon-png-image_326762.jpg"></img>
                      <p class="button_text">นิสิต</p>
                    </button> 
                  </Link>

                  <Link to="/Login_commitee">
                    <button class="cpage p3">
                      <img class="logo-kummakarn" src="https://icons.veryicon.com/png/o/education-technology/education-cloud/teach.png"></img>
                      <p class="button_text">กรรมการ</p>
                    </button>
                  </Link>

              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Login_admin;
