import React, { Component, useState } from "react";
import StructureWebUI from './StructureWebUI';
import '../Layout/Layout.css'
import {Form} from 'react-bootstrap';
import GroupRadio from '../components/radiobutton/GroupRadio';


function Test2(){
   

    const [listOption,setListOption] = useState("")
    const [sextOption,setSexOption] = useState("")
    //console.log(listOption,sextOption);

        return (
          <body>
             <StructureWebUI/>
             <div className='containerNew'>
                <div className='layout-2'>
                  <div className='header-l2'>
                  <h1>header</h1>
                  </div>
                  <div className='body-l2'>
                    <div className="body-l2-left"><h1>left</h1><h1>left</h1><h1>left</h1></div>
                    <div className="body-l2-right"><h1>right</h1><h1>right</h1><h1>right</h1></div>
                  </div>
                  <div className='footer-l2'>
                    <h1>footer</h1>
                  </div>
                  <div className='footer-l2-center'>
                    <h1>center</h1>
                  </div>

                  <div className='footer-l2-right'>
                    <h1>right</h1>
                  </div>
                  <div>
                   
                  </div>
                </div>
             </div>
          </body>  
        );
}
 
export default Test2;