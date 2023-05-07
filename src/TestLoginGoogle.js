import GoogleLogin from "react-google-login";
import React, { Component ,useState } from "react";
import axios, { Axios } from "axios";
// get env vars
const googleClientId = "1072084501987-odngubanuk23qvii0onj7lc84h4vg1ur.apps.googleusercontent.com";
const drfClientId = "xGM9uIAX7C3aNCu6poiGQY9VxmD2qnGCyyYeoAHv";
const drfClientSecret = "tSuWnBVQY8qk787Mjf2vgbioPLBOrqJ0tgl9SE2u3j1lsbqmiSYGG7Pb24hZaNgHKTbaq8nMPI7IbvbOyLsyGRnqwLgvpdjCjhr4rwgOoVlmlY279NFi309XB9EutPpE";
const baseURL = process.env.REACT_APP_BACKEND_URL;

const handleGoogleLogin = (response) => {
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
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      if (email.split('@')[1] == 'ku.th'){
        //console.log("OK")
        axios.post(`${baseURL}/UserLoginList/`, {
          role : 'User',
          email : response.profileObj.email,
          access_token : access_token,
          refresh_token : refresh_token,
        })
        .then((res) => {
            //console.log(typeof res.data);
            if (res.data == ['User']) {
                //console.log("send role "+res.data);
            } else if (res.data == ['Admin']){
                //console.log("send role "+res.data);
            } else if (res.data == ['Committee']){
                //console.log("send role "+res.data);
            } else {
              //console.log("New User");
              axios.post(`${baseURL}/UserLoginList/`, {
                role : 'User',
                email : response.profileObj.email,
              })
              .then((res) => {
                  //console.log(typeof res.data);
                  if (res.data == ['User']) {
                     //console.log("send role useSSSSSSSS: "+res.data);
                      //window.location="/ListScholarship"                        
                  } else if (res.data == ['Admin']){
                      //console.log("send role Admin: "+res.data); 
                  } else if (res.data == ['Committee']){
                      //console.log("send role "+res.data);
                  } else {
                      //console.log("Didn't send role or Error from Backend");
                  }
              })
            }
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

const TestLoginGoogle = () => {
  return (
    <div className="App">
      <GoogleLogin
        clientId={googleClientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={(response) => handleGoogleLogin(response)}
        render={(renderProps) => (<>
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            type="button"
            class="login-with-google-btn"
          >
            Sign in with Google
          </button>
          </>
        )}
        /*onFailure={(err) => 
          console.log("Google Login failed", err)
        }*/
      />
    </div>
  );
};

export default TestLoginGoogle;