import './Login.css';
import { Routes,Route,BrowserRouter,Link } from 'react-router-dom'
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios, { Axios } from "axios";
const googleClientId = "1072084501987-odngubanuk23qvii0onj7lc84h4vg1ur.apps.googleusercontent.com";
const drfClientId = "NvUxZKg1zQjKBjJ1Ez1oGwljDySzr05C246EtkIO";
const drfClientSecret = "VGw6xUe4LhfFCnBuU6t5CzFk4SZgwIJOXg7EJczm65WOC99chRbN6RpLPD5kDwvmB5mM3cfLXY5fAsyoTGzNdEUSDb8fTejT5fbDfhQfET1j1busZolboU5T656Woftj";
const baseURL = process.env.REACT_APP_BACKEND_URL;

class Login_nisit extends Component {
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
                    <label for="account">Account@ku.th(นิสิต)</label>
                  </div>
                  <div class="login lg2">
                    <input type="text"></input>
                  </div>
                  <div class="login lg3">
                  <label  for="password">Password</label>
                  </div>
                  <div class="login lg4">
                    <input type="password"></input>
                  </div>
                  <div class="login lg5">
                    <Link to="/ListScholarship"><button className='buttonlogin'>Login</button></Link>
                  </div>

              </div>
            </div>
            
            <div class="area2next">
              <div class="box2next">
                  
                  <button class="cpage p1">
                    <img class="logo-house" src="https://cdn1.iconfinder.com/data/icons/household-14/100/home-blank-512.png"></img>
                    <p class="button_text">หน้าหลัก</p>
                    
                  </button>

                  <Link to="/Login_admin">
                    <button class="cpage p2">
                      <img class="logo-admin" src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-admin.png"></img>
                      <p class="button_text">ผู้ดูเเล</p>
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

export default Login_nisit;
