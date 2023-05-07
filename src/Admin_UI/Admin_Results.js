import React, { Component , useContext } from "react";
import {AuthContext} from "../Login/Authenticate";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import TabDropdown from '../components/dropdown/TabDropdown';
import {Container,Row,Accordion,Stack,Badge,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import Table_Results from "../components/cardbadge/Table_Results";
const yearlist = [{List:"เลือกปี"},
              {List:"2560"},
              {List:"2561"},
              {List:"2562"},
              {List:"2563"},
              {List:"2566"},
              {List:"2565"}]
const scholarlist = [{List:"เลือกทุน"},
              {List:"ทุนรัฐบาลฯ ประจำปี 2564 (ทุนบุคคลทั่วไประดับปริญญา)"},
              {List:"ทุนการศึกษาต่อเนื่อง ปีการศึกษา 2564 ครั้งที่ 1จากการสนับสนุนของสมาคมศิษย์เก่าวิศวกรรมศาสตร์ มก."},
              {List:"ทุนการศึกษาช่วยเหลือนิสิตสาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติที่ได้รับผลกระทบจากการระบาดของเชื้อไวรัส โคโรนา 2019 (COVID-19) ระลอกใหม่"},
              {List:"รับทุนฉลองสมโภชพระเจ้าหลานเธอ พระองค์เจ้าทีปังกรรัศมีโชติ"}]   


const dataN = [
                {order:"1.",nisitname:"นายชลสิทธิ์ สุธรรมา",nisitid:"6230300249",score:"99/100",status:"fas fa-check"},
                {order:"2.",nisitname:"นายทิวัตถ์ สู้เสงี่ยม",nisitid:"6230300397",score:"95/100",status:"fas fa-check"},
                {order:"3.",nisitname:"นายกฤษณพล จุ้ยประเสริฐ",nisitid:"6230300028",score:"85/100",status:"fas fa-check"},
                {order:"4.",nisitname:"นายคุณภัทร มีเจริญ",nisitid:"6230300141",score:"0/100",status:"fas fa-xmark"},
                {order:"5.",nisitname:"นายสพล มหาวงศ์",nisitid:"6230300940",score:"0/100",status:"fa-xmark"},
                {order:"6.",nisitname:"นายชลทัศน์ เจริญยิ่ง",nisitid:"6230300222",score:"0/100",status:"fa-xmark"}]

function Admin_Results() {
  const {authState,user_ID,role} = useContext(AuthContext)




  
        return ( 
          <div><UI_Admin_StructureWebUI topic="คะแนน" iconic="fas fa-list-alt"/>
            <div className='containerNew'>
                <Stack direction="horizontal">
                  <div><Link to="/Admin_StudentInform" className="fff" style={{ textDecoration: 'none' }}>ข้อมูลนิสิต&nbsp;</Link></div>
                  <div>  </div>
                  <div>&nbsp;ผลการลงคะแนน</div>
                </Stack>
            <div className='header-l1'>
                <TabDropdown topic="เลือกปี:" data={yearlist}/>
                <TabDropdown topic="เลือกทุน:" data={scholarlist}/>
            </div>
            <div className="mb-3 mt-3">
            <Table >
            <thead className="taco">
                <tr >
                    <th className='tt'>ลำดับ</th>
                    <th className='tt'>รหัสนิสิต</th>
                    <th className='tt'>ชื่อ-นามสกุล</th>
                    <th className='tt'>ผลคะแนนรวม</th>
                    <th className='tt'>สถานะการประเมิน</th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td>{dataN.map(tbo => ( <h4 className="hh">{tbo.order}</h4> ))}</td>
            <td>{dataN.map(tbo => ( <h4 className="hh">{tbo.nisitid}</h4> ))}</td>
            <td>{dataN.map(tbo => ( <h4 className="hh">{tbo.nisitname}</h4> ))}</td>
            <td>{dataN.map(tbo => ( <h4 className="hh">{tbo.score}</h4> ))}</td>
          
            <td>{dataN.map(tbo => ( <h4 className="hh ms-4" ><i class={tbo.status}></i></h4> ))}</td>
            </tr>
            </tbody>
            </Table>
            </div>
            </div>
          </div>
        );
    }
export default Admin_Results;