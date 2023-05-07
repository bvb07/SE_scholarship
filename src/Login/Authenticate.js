import React,{useState,useEffect} from "react";
import axios from 'axios';
import StructureWebUI from '../Nisit_UI/StructureWebUI';
import './loading.css'
import { Modal, Button } from "react-bootstrap";
const googleClientId = "1072084501987-odngubanuk23qvii0onj7lc84h4vg1ur.apps.googleusercontent.com";
const drfClientId = "xGM9uIAX7C3aNCu6poiGQY9VxmD2qnGCyyYeoAHv";
const drfClientSecret = "tSuWnBVQY8qk787Mjf2vgbioPLBOrqJ0tgl9SE2u3j1lsbqmiSYGG7Pb24hZaNgHKTbaq8nMPI7IbvbOyLsyGRnqwLgvpdjCjhr4rwgOoVlmlY279NFi309XB9EutPpE";
const baseURL = process.env.REACT_APP_BACKEND_URL;

export const AuthContext= React.createContext();
export const AuthProvider = ({children})=>{
    const [loading,setLoading] = useState(true);
    const [user_ID,setUser_ID] = useState("");
    const [email,setEmail] = useState("")
    const [fullname,setFullName] = useState("")
    
    //const [imgProfile,setImgProfile] = useState("")
    //const [userId,setUserId] = useState("")
    const [role,setRole] = useState("")
    //const [UserLogin, setUserLogin] = useState([])
    const [authState,setAuthState] = useState(false)

    //console.log(UserLogin);

    const GetUserLogin = () =>{
      axios.get("http://127.0.0.1:8000/UserLoginView/")
      .then((response) => {
        //console.log("Hello");
        //setUserLogin(response);
        //console.log("Store token");
        //console.log(response.data);
        //console.log("Get token");
        //console.log(localStorage.getItem("refresh_token"));
        //var obj = response.data.find(o => o.refresh_token == localStorage.getItem("refresh_token")? setAuthState(true):console.log(authState));
        var checkState = false
        for(var i=0; i<response.data.length; i++) {
          if(response.data[i].refresh_token === localStorage.getItem("refresh_token")) {
            //console.log("Found")
            checkState = true
            setAuthState(true)
            setUser_ID(response.data[i].user_id)
            setFullName(response.data[i].fullname)
            setEmail(response.data[i].email)
            setRole(response.data[i].role)
            //setImgProfile(response.data)  
            //console.log(response.data);
            break;
          }
        }
        if (!checkState){
          localStorage.removeItem("refresh_token")         
        }
        setLoading(false);
        //setAuthState(true)
      })
    //   console.log(typeof localStorage.getItem("refresh_token"));
    //   var checkState = false
    //   axios.post("http://127.0.0.1:8000/queryUserLoginRC/",[localStorage.getItem("refresh_token")])
    //   .then((response) => {
    //       console.log(response.data);
    //       //console.log(response.data[0].user_id);
    //       checkState = true
    //       setAuthState(true)
    //       setUser_ID(response.data[0].user_id)
    //       setFullName(response.data[0].fullname)
    //       setEmail(response.data[0].email)
    //       setRole(response.data[0].role)
    //       //setImgProfile(response.data)  
    //       if (!checkState){
    //         localStorage.removeItem("refresh_token")         
    //       }
    //       setLoading(false);
    //       //setAuthState(true)
    //   })
    }
    const AuthGoogleLogin = () => {
        
        //console.log(UserLogin);
    }
    
    useEffect(()=>{
      //AuthGoogleLogin();
      GetUserLogin()
      
      
      
    },[])
   if (loading) { 
     let pickLoad = Math.floor(Math.random() * 5)
      if(pickLoad==0){
          return(<>
          <div class="loadering">
           <img src="https://i.pinimg.com/originals/00/94/18/009418460183d05cbbff41179436b3eb.gif" style={{width:"600px",height:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
        </div>
        </>) 
      }
      else if(pickLoad==1){
        return(<>
        <div class="loadering">
         <img src="https://i.pinimg.com/originals/49/e9/d6/49e9d662d2f99e8d945c8b21bd2cde85.gif" style={{width:"600px",height:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
      </div>
      </>) 
    }
    else if(pickLoad==2){
      return(<>
      <div class="loadering">
       <img src="https://www.gillsc.com/themes/simple/images/gears-200.gif" style={{width:"600px",height:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
    </div>
    </>) 
    }else if(pickLoad==3){
      return(<>
        <div class="loadering">
        <img src="https://thumbs.gfycat.com/HappygoluckyOrneryJuliabutterfly-size_restricted.gif" style={{width:"600px",height:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
      </div>
      </>) 
    }
    else if(pickLoad==4){
      return(<>
        <div class="loadering">
        <img src="https://onlinegolfapp.com/assets/images/gear.gif" style={{width:"600px",height:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
      </div>
      </>) 
    }
      




        
   }
    //console.log(currentUser.email);
    return (
        <AuthContext.Provider value={{user_ID,fullname,email,role,authState}}>
            {children}
        </AuthContext.Provider>
    )
}