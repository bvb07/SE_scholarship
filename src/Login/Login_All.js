import './Login.css';
import '../components/button/ButtonIconRed';
import GoogleLogin from "react-google-login";
import {Link, useNavigate } from "react-router-dom";
import React, { Component ,useState, useContext }from "react";
import axios, { Axios } from "axios";
import {Button} from 'react-bootstrap';
import {AuthContext} from "../Login/Authenticate"


const googleClientId = "1072084501987-odngubanuk23qvii0onj7lc84h4vg1ur.apps.googleusercontent.com";
const drfClientId = "xGM9uIAX7C3aNCu6poiGQY9VxmD2qnGCyyYeoAHv";
const drfClientSecret = "tSuWnBVQY8qk787Mjf2vgbioPLBOrqJ0tgl9SE2u3j1lsbqmiSYGG7Pb24hZaNgHKTbaq8nMPI7IbvbOyLsyGRnqwLgvpdjCjhr4rwgOoVlmlY279NFi309XB9EutPpE";
const baseURL = process.env.REACT_APP_BACKEND_URL;

//const [email,setemail] = useState("")

function Login_All(){

    const handleGoogleLogin = (response) => {
      //localStorage.setItem("Default", response.accessToken);
      //console.log(response);
      //console.log(response.profileObj.email);
      //console.log(response.profileObj.name); 
      //console.log(baseURL);
      axios.post(`${baseURL}/auth/convert-token`, {
          token: response.accessToken,
          backend: "google-oauth2",
          grant_type: "convert_token",
          client_id: drfClientId,
          client_secret: drfClientSecret,
        })
        .then((res) => {
          let email = response.profileObj.email;
          const { access_token, refresh_token } = res.data;
          //console.log({ access_token, refresh_token });
          //localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          //localStorage.setItem("email", email);
          if (email.split('@')[1] == 'ku.th'){
            //console.log("OK")
            axios.post(`${baseURL}/UserLoginList/`, {
              user_ID : response.profileObj.user_ID,
              fullname : response.profileObj.name,
              role : 'User',
              email : response.profileObj.email,
              access_token : access_token,
              refresh_token : refresh_token,
            })
            .then((res) => {
                axios.post(`${baseURL}/UserLoginList/`, {
                  role : 'User',
                  email : response.profileObj.email,
                })
                .then((res) => {
                  axios.put(`${baseURL}/UserLoginView/`+res.data.id+`/`,{
                    url : `${baseURL}/UserLoginView/`+res.data.id+`/`,
                    access_token : access_token,
                    refresh_token : refresh_token,
                  })
                  //console.log(res.data.role);
                    if (res.data.role == 'User') {
                        //console.log("send role user: "+res.data);
                        window.location = "/RegisterScholarship"
                        //window.location="/ListScholarship"                        
                    } else if (res.data.role == 'Admin'){
                        //console.log("send role Admin: "+res.data);
                        window.location = "/Admin_Managescholarship"
                    } else if (res.data.role == 'Committee'){
                        //console.log("send role "+res.data);
                        window.location = "/Commitee_ListScholarship"
                    } else if (res.data.role == 'Dev'){
                        //console.log("send role "+res.data);
                        window.location = "/RegisterScholarship"
                    } else {
                        //console.log("Didn't send role or Error from Backend");
                    }
                })/*
                console.log(res.data);
                if (res.data == ['User']) {
                    console.log("send role "+res.data);
                    //window.location = "/ListScholarship"
                    //navigate(`/ListScholarship`);
                } else if (res.data == ['Admin']){
                    console.log("send role "+res.data);
                    window.location = "/Admin_Managescholarship"
                    //navigate(`/Admin_Managescholarship`);
                } else if (res.data == ['Committee']){
                    console.log("send role "+res.data);
                    window.location = "/Login_commitee"
                    //navigate(`/Login_commitee`);
                } else {
                    console.log("New User");
                    axios.post(`${baseURL}/UserLoginList/`, {
                      role : 'User',
                      email : response.profileObj.email,
                    })
                    .then((res) => {
                        console.log(typeof res.data);
                        /*res.data.map((test) => (
                          {
                            test.email
                          }
                        ))
                        console.log(test.email);
                        console.log(res.data.role);
                        if (res.data.role == 'User') {
                            console.log("send role user: "+res.data);
                            //window.location = "/ListScholarship"
                            //window.location="/ListScholarship"                        
                        } else if (res.data == 'Admin'){
                            console.log("send role Admin: "+res.data);
                            window.location = "/Admin_Managescholarship"
                        } else if (res.data == 'Committee'){
                            console.log("send role "+res.data);
                            window.location = "/Login_commitee"
                        } else {
                            console.log("Didn't send role or Error from Backend");
                        }
                    })
                }*/
            })
            
            .catch((err) => {
                //console.log("Response from API failed ",err);
            })
          } else {
            //console.log("Not OK")
            alert("กรุณาใช้ @ku.th ในการ Login")
          }
        })
        .catch((err) => {
          //console.log("Error Google login", err);
        });
    };
    //const {role,authState} = useContext(AuthContext)
    //console.log(authState);
    /*if (authState) {
      if(role=="User"){
        window.location = "/Login_All"
      }else if(role=="Admin"){
        window.location = "/Admin_Managescholarship"
      }else if(role=="Commitee"){
        window.location = "/Login_commitee"
      }
    }*/
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
                    <label for="account">Login ด้วย Account@ku.th</label>
                  </div>
                    <GoogleLogin
                        clientId={googleClientId}
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={(response) => handleGoogleLogin(response)}
                        render={(renderProps) => (<>
                            <Button className="BCIR" variant="white"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                type="button"
                                class="login-with-google-btn"
                                >
                                <img class="logo-house" src="https://freesvg.org/img/1534129544.png"></img>
                                Login with Google
                            </Button></>)}
                        onFailure={(err) => console.log("Google Login failed", err)}
                    />
                
              </div>
            </div>
        
            <div class="area2next">
                  {/*
              <div class="box2next">

                  <button class="cpage p1">
                    <img class="logo-house" src="https://cdn1.iconfinder.com/data/icons/household-14/100/home-blank-512.png"></img>
                    <p class="button_text">หน้าหลัก</p>
                    
                  </button>

                  <Link to="/Commitee_Score">
                    <button class="cpage p2">
                      <img class="logo-admin" src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-male-student-icon-png-image_326762.jpg"></img>
                      <p class="button_text">นิสิต</p>
                    </button> 
                  </Link>

                  <Link to="/Commitee_Score">
                    <button class="cpage p3">
                      <img class="logo-kummakarn" src="https://icons.veryicon.com/png/o/education-technology/education-cloud/teach.png"></img>
                      <p class="button_text">กรรมการ</p>
                    </button>
                  </Link>
              </div>
              */}
            </div>
                        
        </div>
      </div>
    );
  } 


export default Login_All;
