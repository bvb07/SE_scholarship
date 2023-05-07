import React, { Component, useState, useEffect, useContext } from "react";
import UI_Admin_StructureWebUI from './UI_Admin_StructureWebUI';
import {AuthContext} from "../Login/Authenticate";
import Card_Button from '../components/cardbutton/Card_Button';
import Card_Dash from '../components/cardbutton/Card_Dash';
import {Container,Row,Button,Accordion,ListGroup,Stack,Card} from 'react-bootstrap';
import Chart_Form from '../components/chart/Chart_Form';
import axios from "axios";
import { Link } from 'react-router-dom'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import Accor from '../components/accor/Accor';
import Button_Dashboard from '../components/button_dashboard/Button_Dashboard';
import Card_Form from '../components/cardbadge/Card_Form';
import SelectorTwoFactor from "../components/selector/SelectorTwoFactor";
import CheckBox from '../components/checkbox/CheckBox';

function Admin_Dashboard(){
  const {authState,user_ID,role} = useContext(AuthContext)
  const [scholar, setScholar] = useState([]);
  const [getYearScholarDB,setGetYearScholarDB] = useState([])//DB
  const [yearScholar,setYearScholar] = useState('')//for fliter scholar!
  const [cost, setCost] = useState([]);
  const scholarCollection = []
  const seeHiddenScholar = []
  const [studentReg,setStudentReg] = useState([]);
  const [studentRegAll,setStudentRegAll] = useState([]);
  const [seeClosedscholarName, setSeeClosedScholarName] = useState([]);
  var getStudentInformProfile = []
  var getProfileByNameWithSchoId = []
  //search control
  const [searchList,setSearchList] = useState('');

  const hiddenTag = [{list:"ทุนที่ปิด",parent:"ทุนที่ปิด"}]
  //checkbox
  const [usehiddenTag,setUsehiddenTag] = useState({ทุนที่ปิด:"ถูกเลือก"})
  const checkboxSubmitHidden = (name,value) => {
    setUsehiddenTag(usehiddenTag => ({
      ...usehiddenTag,
      [name]: (value?"":"ถูกเลือก")
    }));
  };
  const cx1 = []
  const cy1 = []
  const cy2 = []
  useEffect(function useSetCost(){ ////new!
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      setCost(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงรายชื่อทุนได้")
    }
    );
  },[])
  
  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
      setGetYearScholarDB(response.data);
    }
    ,(err)=>{
      alert("ไม่สามารถดึงปีการศึกษา")
    }
    );
  },[]) 

  useEffect(function useSetSetScholar(){ //
    axios.get("http://127.0.0.1:8000/Managescholarship/").then((response)=>{
      var schoFromDB = response.data
      if (yearScholar==='' || yearScholar==='เลือก'){
        for (let i = 0; i < schoFromDB.length; i++) {
          
            if(schoFromDB[i].statusScholar!='ปิดทุน'){
            scholarCollection.push({
              "srcUpload":schoFromDB[i].srcUpload,
              "srcYear":schoFromDB[i].yearScholar,
            "srcStartDate":schoFromDB[i].srcStartDate,
            "srcEndDate":schoFromDB[i].srcEndDate,
            "majorSelect":schoFromDB[i].majorSelect,
              "nameScholar":schoFromDB[i].nameScholar,
              "amountScholar":schoFromDB[i].amountScholar,
            "managescho_id":schoFromDB[i].managescho_id,
            "costScholar":schoFromDB[i].costScholar,
            "detailScholar":schoFromDB[i].detailScholar,
            "qualificationScholar":schoFromDB[i].qualificationScholar,
            "addOnScholar":schoFromDB[i].addOnScholar,
            "srcScholar":schoFromDB[i].srcScholar,
            "statusScholar":schoFromDB[i].statusScholar,
            "processStatus":schoFromDB[i].processStatus
          })}
          else if(schoFromDB[i].statusScholar=='ปิดทุน'){
            seeHiddenScholar.push({
             "srcUpload":schoFromDB[i].srcUpload,
             "srcYear":schoFromDB[i].yearScholar,
           "srcStartDate":schoFromDB[i].srcStartDate,
           "srcEndDate":schoFromDB[i].srcEndDate,
           "majorSelect":schoFromDB[i].majorSelect,
             "nameScholar":schoFromDB[i].nameScholar,
             "amountScholar":schoFromDB[i].amountScholar,
           "managescho_id":schoFromDB[i].managescho_id,
           "costScholar":schoFromDB[i].costScholar,
           "detailScholar":schoFromDB[i].detailScholar,
           "qualificationScholar":schoFromDB[i].qualificationScholar,
           "addOnScholar":schoFromDB[i].addOnScholar,
           "srcScholar":schoFromDB[i].srcScholar,
           "statusScholar":schoFromDB[i].statusScholar,
           "processStatus":schoFromDB[i].processStatus
         })}    
      } 
        setScholar(scholarCollection)
        setSeeClosedScholarName(seeHiddenScholar)
      }
      else{
        for (let i = 0; i < schoFromDB.length; i++) {
          if ( parseInt(yearScholar)  === (schoFromDB[i].srcYear)) {
            if(schoFromDB[i].statusScholar!='ปิดทุน'){
            scholarCollection.push({
              "srcUpload":schoFromDB[i].srcUpload,
              "srcYear":schoFromDB[i].yearScholar,
            "srcStartDate":schoFromDB[i].srcStartDate,
            "srcEndDate":schoFromDB[i].srcEndDate,
            "majorSelect":schoFromDB[i].majorSelect,
              "nameScholar":schoFromDB[i].nameScholar,
              "amountScholar":schoFromDB[i].amountScholar,
            "managescho_id":schoFromDB[i].managescho_id,
            "costScholar":schoFromDB[i].costScholar,
            "detailScholar":schoFromDB[i].detailScholar,
            "qualificationScholar":schoFromDB[i].qualificationScholar,
            "addOnScholar":schoFromDB[i].addOnScholar,
            "srcScholar":schoFromDB[i].srcScholar,
            "statusScholar":schoFromDB[i].statusScholar,
            "processStatus":schoFromDB[i].processStatus
          })}else if(schoFromDB[i].statusScholar=='ปิดทุน'){
            seeHiddenScholar.push({
             "srcUpload":schoFromDB[i].srcUpload,
             "srcYear":schoFromDB[i].yearScholar,
           "srcStartDate":schoFromDB[i].srcStartDate,
           "srcEndDate":schoFromDB[i].srcEndDate,
           "majorSelect":schoFromDB[i].majorSelect,
             "nameScholar":schoFromDB[i].nameScholar,
             "amountScholar":schoFromDB[i].amountScholar,
           "managescho_id":schoFromDB[i].managescho_id,
           "costScholar":schoFromDB[i].costScholar,
           "detailScholar":schoFromDB[i].detailScholar,
           "qualificationScholar":schoFromDB[i].qualificationScholar,
           "addOnScholar":schoFromDB[i].addOnScholar,
           "srcScholar":schoFromDB[i].srcScholar,
           "statusScholar":schoFromDB[i].statusScholar,
           "processStatus":schoFromDB[i].processStatus
         })}
          } 
      } 
      setScholar(scholarCollection)
      setSeeClosedScholarName(seeHiddenScholar)
      } 
    }
    ,(err)=>{
      alert("ไม่สามารถดึงรายชื่อทุนได้")
    }
    );
  },[yearScholar])
  const [page,setPage] = useState(0)
  if(page===0){
    return ( 
      <div><UI_Admin_StructureWebUI topic="รายงาน" iconic="fas fa-clipboard-list"/>
        <div className="containerNew">
        <div class="layout-1">
        <div className='header-l2' style={{marginTop:"-10px"}} >
        <div>รายชื่อทุนทั้งหมด</div>
            <div style={{marginLeft:"617px"}}> 
            <form style={{marginLeft:"-780px",marginTop:'40px',position:"absolute"}}>
              <input type="text" id="form1" placeholder={"🔍ค้นหาทุน"} style={{fontSize:'20px',width:'350px',height:"50px",marginLeft:"20px"}} value={searchList} onChange={(e)=>setSearchList(e.target.value)}/>
              <button type="button" class="btn" onClick={(e)=>setSearchList('')} style={{fontSize:'20px',marginLeft:"15px",background:'#43dea3'}}>ล้าง</button>
              </form>

            <div style={{marginLeft:"-170px"}}> 
            <span class="d-inline-block" data-bs-toggle="tooltip" title="สรุปผลเฉพาะทุนที่ปิดแล้ว">
             <CheckBox topic="ดูทุนที่ปิดแล้ว" data={hiddenTag} value={usehiddenTag} action={(e)=>checkboxSubmitHidden(e.target.name,e.target.value)} disabled={true} defaultChecked={true} />
             </span>
             {/*console.log(usehiddenTag)*/}
             </div>
             {/* <div style={{marginTop:"-65px"}}> 
             <span class="d-inline-block" data-bs-toggle="tooltip" title="เลือกปีการศึกษาสำหรับกรองทุน">
            <SelectorTwoFactor topic="ปีการศึกษา" 
                                  data={
                                    getYearScholarDB.map((getYearScholarDB) => (
                                      {list:getYearScholarDB.year,id:getYearScholarDB.acayear_id}
                                    ))
                                  } value={yearScholar} onChange={(e)=>setYearScholar(e.target.value)}
                                /> 
                        
               </span>           
              </div> */}
              </div>
            </div>
         
        <div class="scroller" style={{marginTop:"10px",height:"280px",overflow:"auto"}}>
        {(()=>{
                    if(usehiddenTag.ทุนที่ปิด=="ถูกเลือก"){
                        return (<>
                        {(()=>{
                          if((seeClosedscholarName.length)==0){
                            return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                              </div>
                              </>)
                          }
                          else{
                            return (<>
                            {(()=>{
                                      if((seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                        if (searchList==""){return seeClosedscholarNameMap}
                                        else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return seeClosedscholarNameMap}
                                      }).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษาที่ปิด</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<><Accordion> 
                                            {seeClosedscholarName.filter((seeClosedscholarNameMap)=>{
                                                if (searchList==""){
                                                  return seeClosedscholarNameMap
                                                }
                                                else if(seeClosedscholarNameMap.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                    return seeClosedscholarNameMap
                                                }
                                              }
                                            ).map((seeClosedscholarNameMap,index)=>{
                                              return(<>
                                              <Card_Dash ScholarId={seeClosedscholarNameMap.managescho_id} 
                                                        srcEndDate={seeClosedscholarNameMap.srcEndDate}
                                                        ScholarData={seeClosedscholarNameMap.nameScholar} 
                                                        eventKey={index} 
                                                        t1={seeClosedscholarNameMap.detailScholar} 
                                                        t2={seeClosedscholarNameMap.amountScholar} 
                                                        t3={seeClosedscholarNameMap.costScholar} 
                                                        t4={seeClosedscholarNameMap.costScholar}
                                                        t5={seeClosedscholarNameMap.costScholar*seeClosedscholarNameMap.amountScholar}
                                                        t6={seeClosedscholarNameMap.costScholar*seeClosedscholarNameMap.amountScholar}
                                                        // d1={seeClosedscholarNameMap.srcStartDate} 
                                                        // d2={seeClosedscholarNameMap.srcEndDate} 
                                                        // status={seeClosedscholarNameMap.statusScholar}
                                                        />
                                              </>)
                                                  }
                                                    )
                                                    }
                                               </Accordion>  </>)}
                                                })()}
                            {/* 
                            <Accordion>
                          {seeClosedscholarName.map((seeClosedscholarName,index) => 
                            (<Card_Dash ScholarId={seeClosedscholarName.managescho_id} 
                              srcEndDate={seeClosedscholarName.srcEndDate}
                              ScholarData={seeClosedscholarName.nameScholar} 
                              eventKey={index} 
                              t1={seeClosedscholarName.detailScholar} t2={seeClosedscholarName.amountScholar} t3={seeClosedscholarName.costScholar} t4={seeClosedscholarName.costScholar*seeClosedscholarName.amountScholar}
                              d1={seeClosedscholarName.srcStartDate} d2={seeClosedscholarName.srcEndDate} status={seeClosedscholarName.statusScholar}
                              />))}
                              </Accordion>  */}
                          </>)
                          }
                      })()} 
                        </>)
                    }
                    else{
                      return(<>
                       {(()=>{
                          if((scholar.length)==0){
                              return (<>
                              <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                              </div>
                              </>)
                          }
                          else{
                            return (<> <div>
                                {(()=>{
                                      if((scholar.filter((scholarName)=>{
                                        if (searchList==""){return scholarName}
                                        else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){return scholarName}
                                      }).length)==0){
                                          return (<>
                                          <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-info-circle" aria-hidden="true"></i> ไม่พบทุนการศึกษา</h4>
                                                <p class="fs-6">โปรดตรวจสอบการสะกดอีกครั้ง</p>
                                              </div>
                                          </>)
                                      }
                                      else{
                                        return (<><Accordion > 
                                            {scholar.filter((scholarName)=>{
                                                if (searchList==""){
                                                  return scholarName
                                                }
                                                else if(scholarName.nameScholar.toLowerCase().includes(searchList.toLowerCase())){
                                                    return scholarName
                                                }
                                              }
                                            ).map((scholarName,index)=>{
                                              return(<>
                                              <Card_Dash mode={1} 
                                              ScholarId={scholarName.managescho_id} 
                                              srcEndDate={scholarName.srcEndDate}
                                              ScholarData={scholarName.nameScholar} 
                                              eventKey={index} 
                                              t1={scholarName.detailScholar} 
                                              t2={scholarName.amountScholar} 
                                              t3={scholarName.costScholar} 
                                              t4={scholarName.costScholar*scholarName.amountScholar}
                                              d1={scholarName.srcStartDate} 
                                              d2={scholarName.srcEndDate} 
                                              status={scholarName.statusScholar}
                                              />
                                           
                                              </>)
                                                  }
                                                    )
                                                    }
                                               </Accordion>  </>)}
                                        })()}

                          {/* <Accordion>
                          {scholar.map((scholarName,index) => (<Card_Dash mode={1} ScholarId={scholarName.managescho_id} srcEndDate={scholarName.srcEndDate}
                            ScholarData={scholarName.nameScholar} eventKey={index} t1={scholarName.detailScholar} t2={scholarName.amountScholar} t3={scholarName.costScholar} t4={scholarName.costScholar*scholarName.amountScholar}
                            d1={scholarName.srcStartDate} d2={scholarName.srcEndDate} status={scholarName.statusScholar}
                            />))}
                        </Accordion> */}
                          
                          
                          </div>
                          </>)
                          }
                      })()}
                      </>)
                    }
                })()}
        </div>
        </div>

        {(()=>{
          let tt = 0;
          let tt2 = 0;
            for (let step1 = 0; step1 < getYearScholarDB.length; step1++) {
              cx1.push(getYearScholarDB[step1].year);
            }
          
            for (let step2 = 0; step2 < getYearScholarDB.length; step2++) {
              for (let step3 = 0; step3 < cost.length; step3++) {
                if((getYearScholarDB[step2].acayear_id)==(cost[step3].srcYear)){
                  tt = tt + parseInt(cost[step3].costScholar);
                  console.log(parseInt(cost[step3].costScholar))
                }else{
                  tt = tt+0;
                  tt2 = tt2+0;
                }
              }
              cy1.push(tt);
              cy2.push(tt2);
              tt=0;
            
            }
            console.log(cy1)
            return (<>
            <div >
            <Stack direction="horizontal" gap={2}>
                <div style={{ width: '40rem' }}> 
                  <Chart_Form chart_title="กราฟแสงข้อมูลจำนวนเงินทุนการศึกษาของมหาลัย"
                              chart_x={cx1}
                              chart_y1={cy1}
                              chart_y2={cy2} 
                              chart_detail1="จำนวนเงินทั้งหมด"
                              chart_detail2="จำนวนเงินที่มอบให้นิสิต"
                    />
                </div>
                <div>
                <div className="">ข้อมูลในกราฟ</div>
                    <Stack direction="horizontal" gap={2}>
                        <div>{cx1.map(dd => (<div style={{ fontSize: '16px' }}>ปี {dd}</div> ))} </div>
                        <div>{cy1.map(dd => (<div style={{ fontSize: '16px' }}>จำนวนเงิน {dd} บาท</div> ))}</div>
                    </Stack>
                </div>
            </Stack>  
            </div>
            </>)
        })()}
                         {/* <div className='mb-3 ml-3'>
                          <Container style={{ width: '35rem' }}>
                            <Row className="justify-content-md-center">
                            <Chart_Form chart_title="กราฟแสงข้อมูลจำนวนเงินทุนการศึกษา"
                              chart_x={cx}
                              chart_y={cy} 
                              chart_detail="จำนวนเงิน(บาท)"
                              />
                            </Row>
                          </Container>
                          </div> */}



        </div>
      </div>
    );
  }else if(page===1){
    const schship = {title:"ทุนการศึกษาต่อเนื่อง ปีการศึกษา 2564 ครั้งที่ 3 ",
                  tdetail:"ทุนนี้มีบุญคุณอัน ใหญ่หลวง ที่เฝ้าหวง ห่วงลูกแต่หลังเมื่อยังนอนเปล",
                  adetail:"-ไม่เคยถูกลงโทษทางวินัย , เกรด 2.50 ขึ้นไป",
                  date:"16/01/2565   ถึง   18/03/2565"}
            
    const mmoney = {n1:"51",
                    n2:"10",
                    n3:"20000",
                    allmoney:"200000",
                    total:"0"}
    return ( 
      <div><UI_Admin_StructureWebUI/>
        <div className="containerNew">
        <div >
          <Accor title={schship.title} tdetail={schship.tdetail} adetail={schship.adetail} date={schship.date}
                  n1={mmoney.n1} n2={mmoney.n2} n3={mmoney.n3} allmoney={mmoney.allmoney} total={mmoney.n1}
          />
          
          <div className="mt-2">
          <Link to="/Admin_Dashboard"><Button variant="warning" className='b1 mb-2 b' onClick={()=>setPage(0)}>
            ย้อนกลับ
          </Button></Link>
          <Button variant="success" className='b2 b' onClick={()=>setPage(2)}>
            กราฟข้อมูล
          </Button>
          </div>
        </div>
        </div>
      </div>
    );
  }else if(page===2){
    const chart1 =
        {chart_title:"กราฟแสดงจำนวนนิสิตแต่ละชั้นปีที่ได้รับทุน"}
    const chart_value =
        {chart_x:['1','2','3','4','5','6','7','8'],chart_y:[5, 3, 2, 8, 12, 0, 0, 1]}
    const chart_de = 
        {chart_detail:"จำนวนนิสิต"}
    return ( 
      <><UI_Admin_StructureWebUI/>
      <div className='Helpbox'>
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
              <Button variant="warning" className='b mb-2' onClick={()=>setPage(1)}>
                  ย้อนกลับ
              </Button>
          </Stack>
        </div>
      </div>
      </>
    );
  }
}
export default Admin_Dashboard;
