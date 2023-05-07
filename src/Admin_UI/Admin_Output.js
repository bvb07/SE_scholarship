import React, { Component,useContext } from "react";
import {AuthContext} from "../Login/Authenticate";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import Card_Button from '../components/cardbutton/Card_Button';
import {Container,Row} from 'react-bootstrap';
import Chart_Form from '../components/chart/Chart_Form';
const data2 =[
  {title:"ทุนการศึกษาต่อเนื่อง ปีการศึกษา 2564 ครั้งที่ 5632" ,link:"/Admin_Dashboard2"},
  {title:"ทุนรัฐบาลฯ ประจำปี 2564 (ทุนบุคคลทั่วไประดับปริญญา)" ,link:"/Admin_Dashboard2"},
  {title:"ทุนรัฐบาลฯ ประจำปี 2564 (ทุนบุคคลพิเศษ)" ,link:"/Admin_Dashboard2"},
  {title:"ทุนรัฐบาลฯ ทุนทุ่นทุ้นทุ๊นทุ๋น" ,link:"/Admin_Dashboard2"}
]
function Admin_Output() {
  const {authState,user_ID,role} = useContext(AuthContext)




  
    return ( 
      <div><UI_Admin_StructureWebUI topic="Output" iconic="fas fa-clipboard-list"/>
        <div className='Helpbox mb-3'>
        <div class="mb-3">
        {data2.map(aa => ( <Card_Button title={aa.title} link={aa.link} />))}
        </div>
        </div>
      </div>
    );
}
export default Admin_Output;