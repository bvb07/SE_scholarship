import React, { Component , useContext, useState, useEffect} from 'react'
import axios from "axios";
import UI_Admin_StructureWebUI from '../../Admin_UI/UI_Admin_StructureWebUI';
import '../../Layout/Layout.css';
import StudentInform from './StudentInform';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Login/Authenticate'

export default function ViewInform(props){
    const {authState,user_ID} = useContext(AuthContext)
    const {mode,scholar,viewData} = props
    //console.log(scholar);
    //console.log(user_ID);
    if (!authState) {window.location = "/Login_All"}

    if (mode===0){
    return( 
        <>
            {StudentInform(user_ID,scholar,1,true,1)}
        </>         
    );
    }
    else if (mode===1){
        return( 
            <>
                {StudentInform(user_ID,scholar,1,true,2,viewData)}
            </>             
        );
    }
}





