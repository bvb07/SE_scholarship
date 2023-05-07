import React, {useState, useEffect} from 'react';
import Axios from 'axios';


import './index.css';
//import {paintings} from './paintings';

function TestAxios(){
  const [test, setTest] = useState([{id:"",fullName:"",address:""}]); //
    const getTest = ()=>{ //function gettest
      Axios.get("http://127.0.0.1:8000/UserLoginView/").then((response)=>{
        setTest(response.data);
      });
    }

    useEffect(() => {
      getTest();
    }, []); //useEffect request web ทำงาน 1 ครั้ง ครั้งเดียว
  return (<>
    {test.map((data)=>{
      return(<>
      <h1>{data.id}</h1>
      <h1>{data.fullName}</h1>
      <h1>{data.address}</h1>
      </>)
      

    })}
    </>
  )
}
export default TestAxios;