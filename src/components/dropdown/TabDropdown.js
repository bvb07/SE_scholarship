import {DropdownButton,Dropdown,Form} from 'react-bootstrap';
import React, { Component, useState } from "react";
import './TabDropdown.css'
const ListSelect = (props) => {
    const {Lists} = props
    return ( 
      <option value="1">{props.Lists}</option>
    );
  }


const TabDropdown = (props) => {
  const {data,topic} = props
    return(
      <div>
        <div className='dropdown_bar'>
          <h1 className='dropdown_selector'>{topic}</h1>
            <div className='dropdown_list'>
              <Form.Select className='dropdown_control' size="sm" aria-label="Default select example" >
                {data.map(({List})=><ListSelect Lists={List} />)}
              </Form.Select>       
            </div>
        </div>
      </div>
    );
}

export default TabDropdown;