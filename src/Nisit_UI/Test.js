import React, {Component, useState} from 'react';
import StructureWebUI from './StructureWebUI';
import '../Layout/Layout.css' 
import {Form} from 'react-bootstrap';
import GroupRadio from '../components/radiobutton/GroupRadio';
import CheckBox from '../components/checkbox/CheckBox';



function Test(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
        const [image,setImage] = useState("")
        const [year,setYear] = useState("")
        const [year1,setYear1] = useState("")
        //console.log(image);
        //console.log(year);
        //console.log(year1);
          return (
            <body>
              <StructureWebUI/>
              <div className='containerNew'>
                  <div className='layout-1'>
                    <div className='header-l1'>
                    <h1>header</h1>
                  

                    </div>
                    <div className='body-l1'>

                      <h1>body</h1>
                      <h1>body</h1>

                      <h1>body</h1>
                    </div>
                    <div className='footer-l1'>
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
 
export default Test;