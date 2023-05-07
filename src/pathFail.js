import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => (<div>
  {localStorage.removeItem("refresh_token")}
    <div style={{marginTop:"100px",width:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}>
     <h1 style={{color:'#661B13'}}>404 - Not Found!</h1>
    
    </div>
    <img src="https://i.pinimg.com/originals/1c/28/43/1c284399a50505ca9cb7642a71645bd1.gif" style={{width:"600px",height:"500px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
    <div style={{width:"600px",display:"block",marginLeft:"600px",marginRight:"auto"}}>
    <i class="fa fa-home" aria-hidden="true"></i>  <Link to="/">Go Home</Link> 
    </div>      

   
</div>);

export default NotFound;