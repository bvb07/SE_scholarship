import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import './ItemList.css';
const ListItem = (props) => {
    const {link,title} = props
    return(
            <Link to={props.link}>
                <button class="tablinks">
                <i class="fas fa-edit"></i> {props.title}</button> 
                </Link>
        );
}

const ItemList = (props) => {
    const {topic,data} = props
    return(
        <div className='itemlist'>
            <p className='itemlist-topic'>{topic} </p>
            {data.map(({link, title})=><ListItem link={link} title={title}/>)} 
        </div>
    );
 
}

export default ItemList;