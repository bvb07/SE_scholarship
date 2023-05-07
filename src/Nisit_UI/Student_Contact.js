import React, { Component,useContext } from "react";
import {AuthContext} from "../Login/Authenticate";
import StructureWebUI from './StructureWebUI';
import '../Layout/Layout.css';
function Student_Contact(){
  const {authState,user_ID} = useContext(AuthContext)
  //console.log(user_ID);
  if (!authState) {window.location = "/Login_All"}
  return(
    <div><StructureWebUI topic="การติดต่อ" iconic="fas fa-phone-alt"/>
        <div className='containerNew'>
          <div className='layout-2'>
            <div className='body-l2'>
              <div className='body-l2-left'>
                <div className='imglb-row'>
                  <img src= "https://thesecsi.net/SECSICMU/img/phoneicon.png"className="imglb-row-img"/>
                  <div className="imglb-row-lb">0955555555 (พี่ทราย)</div>
                </div>
                <div className='imglb-row'>
                  <img src= "https://brandeps.com/icon-download/M/Mail-icon-vector-14.svg"className="imglb-row-img"/>
                  <div className="imglb-row-lb">Email@ku.th</div>
                </div>
              </div>
              <div className='body-l2-right'>
                <div className='imglb-row'>
                  <img src= "https://i.pinimg.com/originals/5f/0c/25/5f0c255d69fa5c24701c547d35ceb5ae.png"className="imglb-row-img"/>
                  <div className="imglb-row-lb">นิสิตคณะวิศวกรรมศาสตร์</div>
                </div>
                <div className='imglb-row'>
                  <img src= "http://www.tcservicesandsupply.com/wp-content/uploads/2021/08/line_logo_icon_145104.png"className="imglb-row-img"/>
                  <div className="imglb-row-lb">@Admin_P'sai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Student_Contact
