import { Link } from 'react-router-dom'
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';
import axios from "axios";
import React, { Component, useState, useEffect } from "react";




const Card_Admin_Status = (props)=>{
  const {ScholarId,ScholarData,eventKey,link} = props
  //const {capname,idScholar,number} = props
  const [scholarReg,setScholarReg] = useState([]);
  //const [student_FileView,setStudent_FileView] = useState([]);
  const [fullName_Std,setFullName_Std] = useState([]);
  const [scholar_Data,setScholar_Data] = useState([]);
  //const [dataList,setDataList] =  useState();
  //const [list_Scholar,setList_Scholar] = useState([]);

  const [studentReg,setStudentReg] = useState([]);
  
  const [check_Start,setCheck_Start] = useState(false);
  const [check_Status,setCheck_Status] = useState(false);
  const [check_Interview,setCheck_Interview] = useState(false);
  const [check_Transfer,setCheck_Transfer] = useState(false);
  const [check_Receipt,setCheck_Receipt] = useState(false);

  const [check_End,setCheck_End] = useState(false);
  const [check_Continous,setCheck_Continous] = useState(false);
  const [round_Continous,setRound_Continous] = useState(false);

  var inform_temp = []
  var majorT = ""
  function fetchStatus(fetchData) {
    axios.get("http://localhost:8000/RegisterScholarship/").then((response)=>{
        var getDataReg = response.data
        //console.log("getDataReg",getDataReg)
        let allMember = 0
        let countCheck= 0 
        let countInterview= 0
        let countTransfer= 0
        let countReceipt = 0
        setScholarReg(getDataReg)
        //console.log(scholar_Data.nameScholar)
        //console.log("processStatus",typeof scholar_Data.processStatus);  

        //console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",ScholarData);
        if(ScholarData.normalOrcontinue == "ทุนต่อเนื่อง"){
          setCheck_Continous(true)
          setRound_Continous(ScholarData.Round)
        }
        if(ScholarData.statusScholar == "ปิดทุน"){
          setCheck_End(true)
        }

        if(fetchData.processStatus == '1'){setCheck_Start(true);setCheck_Status(false);setCheck_Interview(false);setCheck_Transfer(false);setCheck_Receipt(false);}
        else if(fetchData.processStatus == '2'){setCheck_Start(true);setCheck_Status(true);setCheck_Interview(false);setCheck_Transfer(false);setCheck_Receipt(false);}
        else if(fetchData.processStatus == '3'){setCheck_Start(true);setCheck_Status(true);setCheck_Interview(true);setCheck_Transfer(false);setCheck_Receipt(false);}
        else if(fetchData.processStatus == '4'){setCheck_Start(true);setCheck_Status(true);setCheck_Interview(true);setCheck_Transfer(true);setCheck_Receipt(false);}
        else if(fetchData.processStatus == '5'){setCheck_Start(true);setCheck_Status(true);setCheck_Interview(true);setCheck_Transfer(true);setCheck_Receipt(true);}
        
       
        for (let i = 0; i < getDataReg.length; i++) {
          if (fetchData.managescho_id == (getDataReg[i].namescholarregister)) {
            inform_temp.push(getDataReg[i].studentinform_profile)
          }
        }

      axios.post(`http://127.0.0.1:8000/queryAdminshowstudentstatusall`,inform_temp).then((response) =>{
        var getDataQuery = response.data
        setStudentReg(getDataQuery)
      })
      }
      ,(err)=>{
        alert("ไม่สามารถดึงสถานะได้")
      });

  }

  const handleFetchStatus = (e) => {
    e.preventDefault()
    axios.get("http://localhost:8000/Managescholarship/"+ScholarData.managescho_id+"/").then((response)=>{
      setScholar_Data(response.data)
      fetchStatus(response.data)
    })
  };

  useEffect(() => {
    setScholar_Data(ScholarData)
    fetchStatus(ScholarData)
  }, []);
  
  async function OnSendContinue(e){
    e.preventDefault()
    var scholarBuf = ""
    var answer = window.confirm("ยืนยันการเปลี่ยนสถานะหลักของทุนนี้?");
    await axios.get("http://localhost:8000/Managescholarship/"+ScholarData.managescho_id+"/").then((response)=>{
      setScholar_Data(response.data)
      scholarBuf= response.data
    })

    await axios.get("http://localhost:8000/RegisterScholarship/").then((response)=>{
      var getDataReg = response.data
      //console.log("check_Status",check_Status,"check_Interview",check_Interview,"check_Transfer",check_Transfer,"check_Receipt",check_Receipt)
      //console.log(scholar_Data.nameScholar)
      const uploadData1 = new FormData();
      const uploadData2 = new FormData();

      if(answer){
        for (let i = 0; i < getDataReg.length; i++) {
          if (scholar_Data.managescho_id == (getDataReg[i].namescholarregister)) {
            uploadData1.append('statusCheck',0)
            uploadData1.append('statusInterview',0)
            uploadData1.append('statusTransfer',0)
            uploadData1.append('statusReceipt',0)
            uploadData1.append('statusRound',parseInt(scholarBuf.Round)+1)
            axios.put("http://127.0.0.1:8000/RegisterScholarship/"+getDataReg[i].register_id+"/",uploadData1).then((response) =>{
              //console.log("put statusCheck สำเร็จ");
            })
          } 
      }
      
      uploadData2.append('srcStartDate',scholarBuf.srcStartDate)
      uploadData2.append('srcEndDate',scholarBuf.srcEndDate)
      uploadData2.append('srcScholar',scholarBuf.srcScholar)
      uploadData2.append('processStatus',0)
      uploadData2.append('Round',parseInt(scholarBuf.Round)+1)
      axios.put("http://127.0.0.1:8000/Managescholarship/"+ScholarData.managescho_id+"/",uploadData2).then((response) =>{
       //console.log("put processStatusสสำเร็จ");
        window.location.reload(false)
      })
    }  
    })

}

  const OnSendAx = (e,set,state) => {
    e.preventDefault()
    axios.get("http://localhost:8000/Managescholarship/"+ScholarData.managescho_id+"/").then((response)=>{
      setScholar_Data(response.data)
      //fetchStatus(response.data)
    })
    axios.get("http://localhost:8000/RegisterScholarship/").then((response)=>{
    var getDataReg = response.data
    //console.log("check_Status",check_Status,"check_Interview",check_Interview,"check_Transfer",check_Transfer,"check_Receipt",check_Receipt)
    let allMember = 0
    let countCheck= 0 
    let countInterview= 0
    let countTransfer= 0
    let countReceipt = 0
    //console.log(scholar_Data.nameScholar)
    for (let i = 0; i < getDataReg.length; i++) {
        if (scholar_Data.managescho_id == (getDataReg[i].namescholarregister)) {
          allMember += 1
          inform_temp.push(getDataReg[i].studentinform_profile)
          if (getDataReg[i].statusCheck == "1" || getDataReg[i].statusCheck == "3") {countCheck+=1}
          if (getDataReg[i].statusInterview == "1" || getDataReg[i].statusInterview == "3") {countInterview+=1}
          if (getDataReg[i].statusTransfer == "1" || getDataReg[i].statusTransfer == "3") {countTransfer+=1}
          if (getDataReg[i].statusReceipt == "1" || getDataReg[i].statusReceipt == "3") {countReceipt+=1}
        } 
    }
    //console.log("countCheck",countCheck);
    //console.log("countInterview",countInterview);
    //console.log("countTransfer",countTransfer);
    //console.log("countReceipt",countReceipt);
    //console.log("allMember",allMember);
    
    const uploadData = new FormData();
    var answer = window.confirm("ยืนยันการเปลี่ยนสถานะหลักของทุนนี้?");
    if(state==1){setCheck_Start(true);uploadData.append("processStatus",1)}
    else if(countCheck == allMember && allMember>0 && state==2 && answer){setCheck_Status(true);uploadData.append("processStatus",2)}
    else if(countInterview == allMember && allMember>0 && state==3 && answer){setCheck_Interview(true);uploadData.append("processStatus",3)}
    else if(countTransfer == allMember && allMember>0 && state==4 && answer){setCheck_Transfer(true);uploadData.append("processStatus",4)}
    else if(countReceipt == allMember && allMember>0 && state==5 && answer){setCheck_Receipt(true);uploadData.append("processStatus",5)}
    else if(!answer){}
    else{
      alert("ไม่สามารถกดได้กรุณาเคลียร์สถานะให้ครบ")
    }

    uploadData.append('srcStartDate',scholar_Data.srcStartDate)
    uploadData.append('srcEndDate',scholar_Data.srcEndDate)
    uploadData.append('srcScholar',scholar_Data.srcScholar)

    axios.put("http://127.0.0.1:8000/Managescholarship/"+scholar_Data.managescho_id+"/",uploadData).then((response) =>{
      //console.log("ส่งprocessStatusสำเร็จ");
      })
  })
}

    return (<>
        
        <div >
            <Accordion.Item eventKey= {eventKey}>
              <Accordion.Header>
                <Stack direction="horizontal" gap={3} style={{ width: '30rem' }}>
                  {(()=>{ 
                        if (scholar_Data.processStatus == "0"){ 
                            return(<div className="ms-3"><div className='circle-mini-crimson'>0</div></div>
                        )}
                        else if (scholar_Data.processStatus == "1"){
                            return(<div className="ms-3"><div className='circle-mini-crimson'>1</div></div>
                        )}
                        else if (scholar_Data.processStatus == "2"){
                          return(<div className="ms-3"><div className='circle-mini-crimson'>2</div></div>
                        )}
                          else if (scholar_Data.processStatus == "3"){
                            return(<div className="ms-3"><div className='circle-mini-crimson'>3</div></div>
                        )}
                          else if (scholar_Data.processStatus == "4"){
                            return(<div className="ms-3"><div className='circle-mini-crimson'>4</div></div>
                        )}
                        else if (scholar_Data.processStatus == "5"){
                            return(<div className="ms-3"><div className='circle-mini-green'>จบ</div></div>
                        )}
                  })()}
                  {(()=>{ 
                        if (studentReg.length != 0){ 
                            return(
                            <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                            <div className="illution">{scholar_Data.nameScholar}</div>
                            <div  style={{marginLeft:"950px",position:"absolute"}}>
                            <div className="ms-auto">
                                <Badge bg="info" text="black">{studentReg.length} คน</Badge>&nbsp;
                            </div>
                            </div>
                            </Stack>)}
                        else{
                            return(
                            <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                            <div className="illution">{scholar_Data.nameScholar}</div>
                            <div  style={{marginLeft:"950px",position:"absolute"}}>
                            <div className="ms-auto">
                                <Badge bg="info" text="black">ไม่มีผู้สมัคร</Badge>&nbsp;
                            </div>
                            </div>
                            </Stack>)}
                    })()}

                </Stack>
              </Accordion.Header>
              <Accordion.Body>

              <div className="topic_sc-col" >
                <div className="topic_sc-row" >
                  <div style={{width:"10px"}}></div>
                  <div className="ms-3 front-status" >
                  &nbsp;เริ่มทุน <div className="ms-3"><div className='circle-mini-crimson'>0</div></div></div>
                  {(()=>{ 
                    if (check_Start){ 
                      return(
                      <div className="ms-3 front-status" >
                        การตรวจเอกสาร <div className="ms-3"><div className='circle-crimson'>1</div></div></div>)}
                    else{
                      return(
                      <div className="ms-3 front-status" >
                        การตรวจเอกสาร <div className="ms-3"><div className='circle-gray'>1</div></div></div>)} 
                  })()}
                  {(()=>{ 
                    if (check_Status){ 
                      return(
                      <div className="ms-3 front-status" >
                        การสัมภาษณ์ <div className="ms-3"><div className='circle-crimson'>2</div></div></div>)}
                    else{
                      return(
                      <div className="ms-3 front-status" >
                        การสัมภาษณ์ <div className="ms-3"><div className='circle-gray'>2</div></div></div>)} 
                  })()}
                  {(()=>{ 
                    if (check_Interview && check_Status){ 
                      return(
                      <div className="ms-4 front-status" >
                        การมอบเงิน <div className="ms-3"><div className='circle-crimson'>3</div></div></div>)}
                    else{
                      return(
                      <div className="ms-4 front-status" >
                        การมอบเงิน <div className="ms-3"><div className='circle-gray'>3</div></div></div>)} 
                  })()}
                  {(()=>{ 
                    if (check_Transfer && check_Interview && check_Status){ 
                      return(
                      <div className="ms-4 front-status" >
                        ใบสำคัญรับเงิน <div className="ms-4"><div className='circle-crimson'>4</div></div></div>)}
                    else{
                      return(
                      <div className="ms-4 front-status" >
                        ใบสำคัญรับเงิน <div className="ms-4"><div className='circle-gray'>4</div></div></div>)} 
                  })()}
                  {(()=>{ 
                    if (check_Transfer && check_Interview && check_Status && check_Receipt){ 
                      return(
                      <div className="ms-4 front-status" >
                        &nbsp;&nbsp;จบทุน <div className="ms-4"><div className='circle-mini-green'>จบ</div></div></div>)}
                    else{
                      return(
                      <div className="ms-4 front-status" >
                        &nbsp;&nbsp;จบทุน <div className="ms-4"><div className='circle-mini-gray'>จบ</div></div></div>)} 
                  })()}
                  
                  
                </div>
                {(()=>{ 
                    if (check_Transfer && check_Interview && check_Status && check_Receipt && check_End){ 
                      return(
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"#F71C44",color:"white"}} type="button">
                        "ทุนนี้ถูกปิดเเล้ว"</button>
                    )}else if (check_Transfer && check_Interview && check_Status && check_Receipt && check_Continous){ 
                      return(<>
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px"
                        ,background:"#F71C44",color:"white"}} type="button" onClick={(e)=>{OnSendContinue(e)}}>
                          ไป "วนทุนรอบที่ {ScholarData.Round+1}"</button>
                          <Link to={"/Admin_Managescholarship"} target="popup"><button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"10px"
                        ,background:"#F71C44",color:"white"}} type="button">
                          ไป "ปิดทุน"</button></Link>
                          </>
                    )}else if (check_Transfer && check_Interview && check_Status && check_Receipt){ 
                      return(
                        <Link to={"/Admin_Managescholarship"} target="popup"><button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"#F71C44",color:"white"}} type="button">
                          ไป "ปิดทุน"</button></Link>
                    )}else if (check_Transfer && check_Interview && check_Status){ 
                      return(
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"#F71C44",color:"white"}} type="button" onClick={(e)=>{OnSendAx(e,setCheck_Status,5)}}>
                          ไป "จบทุน"</button>
                    )}else if (check_Interview ){
                      return(
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"#F71C44",color:"white"}} type="button" onClick={(e)=>{OnSendAx(e,setCheck_Status,4)}}>
                          ไป "ใบสำคัญรับเงิน"</button>
                    )}else if (check_Status){
                      return(<>
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"#F71C44",color:"white"}} type="button" onClick={(e)=>{OnSendAx(e,setCheck_Status,3)}}>
                          ไป "การมอบเงิน"</button>
                          <Link to={"/Admin_Ranking/"+ ScholarData.managescho_id} target="popup"><button className='btn' style={{marginLeft:"425px",marginBottom:"15px",width:"250px",height:"auto",color:"white",background:"#6F079F"}} 
                           type="button"><i class="fa fa-gavel" aria-hidden="true"></i> ดูผลการลงคะเเนน</button></Link>
                        </>
                          
                    )} else if (check_Start){
                      return(
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"#F71C44",color:"white"}} type="button" onClick={(e)=>{OnSendAx(e,setCheck_Status,2)}}>
                          ไป "การสัมภาษณ์"</button>
                    )} else{
                      return(
                        <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"rgb(20, 116, 87)",color:"white"}} type="button" onClick={(e)=>{OnSendAx(e,setCheck_Status,1)}}>
                          เริ่ม "การตรวจเอกสาร"</button>
                    )} 
                })()}
                <button className='btn btn-lg' style={{width:"300px",marginLeft:"400px",marginTop:"25px",marginBottom:"25px"
                        ,background:"black",color:"white"}} type="button" onClick={(e)=>{handleFetchStatus(e)}}>
                        <i class="fa fa-refresh" aria-hidden="true"></i> refresh</button>
                  
              </div>
                <div className="illution">
                  <Accordion defaultActiveKey="0" flush>
                  {studentReg.map((studentRegMap, index) => (
                  <Accordion.Item eventKey={index}>              
                    <Accordion.Header>
                    <Stack direction="horizontal" gap={4} style={{ width: '30rem'}}>
                        <div className="illution">{index+1}.</div> 
                        <div className="illution">{studentRegMap.id_Std}</div>  
                        <div style={{display: "flex",flexDirection:"row",width:"250px",justifyContent:"space-between",background:"null"}}>
                        {(()=>{ 
                          if(studentRegMap.statusCheck == 0){
                            return(
                              <div className="circle-mini-gray">1</div> 
                          )}else if(studentRegMap.statusCheck == 1){
                            return(
                              <div className="circle-mini-green">1</div> 
                          )}else if(studentRegMap.statusCheck == 2){
                            return(
                              <div className="circle-mini-yellow">1</div> 
                          )}else if(studentRegMap.statusCheck == 3){
                            return(
                              <div className="circle-mini-red">1</div> 
                          )}
                        })()}
                         {(()=>{ 
                          if(studentRegMap.statusInterview == 0){
                            return(
                              <div className="circle-mini-gray">2</div> 
                          )}else if(studentRegMap.statusInterview == 1){
                            return(
                              <div className="circle-mini-green">2</div> 
                          )}else if(studentRegMap.statusInterview == 2){
                            return(
                              <div className="circle-mini-yellow">2</div> 
                          )}else if(studentRegMap.statusInterview == 3){
                            return(
                              <div className="circle-mini-red">2</div> 
                          )}
                        })()}

                        {(()=>{ 
                          if(studentRegMap.statusTransfer == 0){
                            return(
                              <div className="circle-mini-gray">3</div> 
                          )}else if(studentRegMap.statusTransfer == 1){
                            return(
                              <div className="circle-mini-green">3</div> 
                          )}else if(studentRegMap.statusTransfer == 2){
                            return(
                              <div className="circle-mini-yellow">3</div> 
                          )}else if(studentRegMap.statusTransfer == 3){
                            return(
                              <div className="circle-mini-red">3</div> 
                          )}
                        })()}
                          {(()=>{ 
                          if(studentRegMap.statusReceipt == 0){
                            return(
                              <div className="circle-mini-gray">4</div> 
                          )}else if(studentRegMap.statusReceipt == 1){
                            return(
                              <div className="circle-mini-green">4</div> 
                          )}else if(studentRegMap.statusReceipt == 2){
                            return(
                              <div className="circle-mini-yellow">4</div> 
                          )}else if(studentRegMap.statusReceipt == 3){
                            return(
                              <div className="circle-mini-red">4</div> 
                          )}
                        })()}
                        </div>  
                        <div className="illution">{studentRegMap.fullName_Std_reg}</div>
                        <div className="ms-auto">
                        {(()=>{
                        if ((studentRegMap.major_Std_reg) =="T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์") {
                              majorT = "T12";}
                        else if ((studentRegMap.major_Std_reg) =="T05 วิศวกรรมโยธา") {
                              majorT = "T05";}
                        else if ((studentRegMap.major_Std_reg) =="T13 วิศวกรรมเครื่องกลและการออกแบบ") {
                              majorT = "T13";}
                        else if ((studentRegMap.major_Std_reg) =="T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์") {
                              majorT = "T14";}
                        else if ((studentRegMap.major_Std_reg) =="T17 วิศวกรรมอุตสาหการและระบบ") {
                              majorT = "T17";}
                        else if ((studentRegMap.major_Std_reg) =="T18 วิศวกรรมเครื่องกลและระบบการผลิต") {
                              majorT = "T18";}
                        else if ((studentRegMap.major_Std_reg) =="T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ") {
                              majorT = "T19";}

                              
                        })()} 
                        <div className="illution">{majorT}</div>
                        </div>
                      </Stack>
                     </Accordion.Header>
                     <Accordion.Body>
                      <Link to={"/Admin_StudentStatus/statuslook/"+studentRegMap.register_id} target="_blank"><button className='btn btn-success btn-lg' style={{width:"300px",marginLeft:"350px"}} type="button">ดูสถานะนิสิต</button></Link>
                     </Accordion.Body>   
                     </Accordion.Item>
                  ))}
                  
                  </Accordion>
                </div>
              </Accordion.Body>
            </Accordion.Item>
        </div>
        </> );
}    
export default Card_Admin_Status
