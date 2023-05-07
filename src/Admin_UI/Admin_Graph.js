import React, {useContext} from 'react'
import {AuthContext} from "../Login/Authenticate";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import {Card,Button,Accordion,ListGroup,Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Chart_Form from '../components/chart/Chart_Form';

const chart1 =
        {chart_title:"กราฟแสดงจำนวนนิสิตแต่ละชั้นปีที่ได้รับทุน"}
    const chart_value =
        {chart_x:['1','2','3','4','5','6','7','8'],chart_y:[5, 3, 2, 8, 12, 0, 0, 1]}
    const chart_de = 
        {chart_detail:"จำนวนนิสิต"}
function Admin_Graph() {
    const {authState,user_ID,role} = useContext(AuthContext)




    
  return ( 
    <><UI_Admin_StructureWebUI topic="กราฟ" iconic="fas fa-clipboard-list"/>
    <div className="containerNew">
    
      <div class="mt-2"><Card body className='cc1 mx-auto'>ทุนการศึกษาต่อเนื่อง ปีการศึกษา 2564 ครั้งที่ 3 </Card></div>
      <div>
        <Chart_Form chart_title={chart1.chart_title} 
            chart_x={chart_value.chart_x} 
            chart_y={chart_value.chart_y} 
            chart_detail={chart_de.chart_detail}/>
      </div>
        <div class="mt-2"><Card body className='cc1 mx-auto'>
                          <Stack direction="horizontal" gap={3} className=''>
                            <div className="">จำนวนทุนที่มอบให้นิสิต</div>
                            <div className="ms-auto">10</div>
                            <div className="">คน</div>
                          </Stack></Card></div>
        <div class="mt-2"><Card body className='cc1 mx-auto'><Stack direction="horizontal" gap={3} className=''>
                            <div className="">จำนวนนิสิตที่ได้รับทุน</div>
                            <div className="ms-auto">10</div>
                            <div className="">คน</div>
                          </Stack></Card></div>
        <div class="mt-2"><Card body className='cc1 mx-auto'><Stack direction="horizontal" gap={3} className=''>
                            <div className="">จำนวนนิสิตที่ปฎิเสธการรับทุน</div>
                            <div className="ms-auto">0</div>
                            <div className="">คน</div>
                          </Stack></Card></div>
      <div >
        <Stack gap={2} className="col-md-3 mx-auto">
            <Link to="/Admin_Dashboard"><Button variant="warning" className='b mb-2'>
                ย้อนกลับ
            </Button></Link>
        </Stack>
        
      </div>
    </div>
    

    </>
  );
}

export default Admin_Graph;