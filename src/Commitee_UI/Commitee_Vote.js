 import React, { Component, useState, useContext, useEffect} from "react";
import { Routes,Route,BrowserRouter,Link,useParams } from 'react-router-dom'
import '../Layout/Layout.css';
import UI_Commitee_StructureWebUI from "./UI_Commitee_StructureWebUI";
import {Container,Row,Accordion,Stack,Badge} from 'react-bootstrap';

import StudentInform from "../components/form/StudentInform";
// /frontend/se_project_group_5/src/Commitee_UI/UI_Commitee_StructureWebUI.js
import GroupRadioForScore from "../components/radiobutton/GroupRadioForScore";
import axios from "axios";
import {AuthContext} from "../Login/Authenticate"






// const [scholar, setScholar] = useState([]);
// useEffect(function useSetSetScholar(){ //
//     axios.get("http://localhost:8000/Weightcriteriapoint/").then((response)=>{
//       setScholar(response.data);
//     }
//     ,(err)=>{
//       alert("GET ไม่ได้4")
//     }
//     );
//   },[])


function Commitee_Vote() {
  const {authState,user_ID,role} = useContext(AuthContext) //


//  if (!authState || role != "Committee") {    
//       window.location = "/Login_All"
//     }

  const [sumPoint, setSumPoint] = useState('');// neww check status button
  const [calPoint, setCalPoint] = useState('');//  new check status button2
  
  const [check_Submited, setCheck_Submited] = useState(false);

  const {register_id} = useParams() //
  

  const {Managescholarship,setManagescholarship} = useState([]);    //use this

  // const {findCommitee,set_F} = useState([]) 

  const [findCommitee,set_FindCommitee] = useState([])

  const [realCommitee,setRealCommitee]= useState('')
  const [nameSchoId, setNameSchoId] = useState('');  //new

  
  const  [getregister,set_register]=useState([])

  const [term_Std,setTerm_Std] = useState("")

  const [showimg_Std,setShowimg_Std] = useState("")

  const termRadio = [{list:"ภาคปกติ"},{list:"ภาคพิเศษ"},]


  const [userIDCommitee, setuserIDCommitee] = useState([]); //new n
  const [weight, setWeight] = useState();
  const [weightList, setWeightList] = useState();
  const [score_Std,setScore_Std] = useState([])
  const [score_Total,setScore_Total] = useState(0)
  const [scoreByWxP,setScoreByWxP] = useState(0)

  const [regAndAvg,setRegAndAvg] = useState([])
  
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  } 
  const [processStatus,setProcessStatus] = useState('')

  useEffect(function useSetGetYearScholarDB(){ ////new!
    axios.get("http://localhost:8000/UserLoginView/").then((response)=>{
      var buffer = response.data
      var getarr = []
      
      for (let index = 0; index < buffer.length; index++) {
        const element = buffer[index].role;

        if(element === "Committee"){
          getarr.push(buffer[index].user_id);
        }
      }

      
     // console.log("getarr: ",getarr)
      let getUserIsCom = getarr.indexOf(user_ID)
     // console.log("getUserIsCom:",getUserIsCom)
      setRealCommitee(getUserIsCom)     
      set_FindCommitee(response.data);     
    }
    ,(err)=>{
      alert("ไม่สามารถตรวจสอบผู้ใช้")
    }
    );
  },[]) 

 
  
  useEffect(() =>{
    axios.post("http://127.0.0.1:8000/queryWeightcriteriapointToCommittee",[parseInt  (register_id)]).then((response) =>{
     var getNamescholarregister  = response.data[0]
     //console.log(getNamescholarregister);


     setNameSchoId(getNamescholarregister.namescholarregister)

     setProcessStatus(getNamescholarregister.processStatus)
      
     setWeight(response.data[0]);


      const buffer = response.data
      var score_arr = []


      if (buffer[0].weightpointlist!==null && buffer[0].weightpointlist!==undefined ) {
        setWeightList(buffer[0].weightpointlist)
     

        for (let i = 0; i < buffer[0].weightpointlist.length; i++) {
          //console.log("push");
          score_arr.push({
            "weight":buffer[0].weightpointlist[i].weightpoint,
            "point":0
          })
        
        }

        setScore_Std(score_arr) 
     
      }
      else{
        setWeightList(null)
        setScore_Std(null)
      }
    
    }
    )


    

    //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
    axios.post("http://127.0.0.1:8000/queryCommitteeWhoAlreadyVoted",[parseInt  (register_id)]).then((response) =>{
      var getUserIDCommitee  = response.data
      
      setuserIDCommitee(getUserIDCommitee.user_id)

      // setfile(getUserIDCommitee.user_id);
      
      var arr3 =[]
      
      let buffer = response.data;
      //console.log("buffer:",buffer)
      setuserIDCommitee(buffer)
      for (let index = 0; index < buffer.length; index++) {
          if(user_ID === buffer[index].user_id && user_ID >=0){
            //console.log("come forrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

            alert('คุณลงคะเเนนของนิสิตคนนี้เเล้ว')
            
            setCheck_Submited(true)
            

            setCalPoint(buffer[index].pointbycommitee)
            
            setSumPoint(buffer[index].sumpoint)

            break;

          }else{

            //console.log("คุณไม่ใช่กรรมการ");

          }
      //   const element = array[index];
        
       }

      arr3.push(getUserIDCommitee.user_id)
      setuserIDCommitee(arr3)
     
     }
     )
  
    // prepareScore()
  },[]);



  const totalScore = () => {
    var tmp = score_Std
    //var max_sc = 0
    var sumPxW = 0
    var sumWeight = 0
    var maxPoint = 0
    var maxWeight = 5 // start from 1 to 5
    var resultPoint = 0
    var resultPointWithout100percent = 0
    for (let index = 0; index < tmp.length; index++) {
      const element = tmp[index];
      maxPoint += maxWeight * element["weight"]
      sumWeight +=  element["weight"]
      sumPxW += element["point"] * element["weight"]
      //console.log(maxPoint)
    }
    resultPoint = parseInt(((sumPxW/sumWeight)/(maxPoint/sumWeight))*100)
    resultPointWithout100percent =(sumPxW/sumWeight).toFixed(2)
    //console.log("sum : ",resultPoint);
    setScore_Total(resultPoint)
    setScoreByWxP(resultPointWithout100percent)
  }

  const selectScore = (index,point) => {
    var tmp = score_Std
    //score_arr = score_Std 
    tmp[index]["point"] = parseInt(point)
    setScore_Std(tmp)
    totalScore()
    //console.log("score_arr111",tmp,index);


  }

  const check = (list,value) =>{
    if (value === list) 
        return true
  }

  const [toggle,setToggle]= useState(false)

  useEffect(function commiteePut(){ //
    if(toggle){
        //console.log(register_id)
        axios.post("http://localhost:8000/queryAverage",[parseInt(register_id)]).then((response)=>{
              var getRegandAvg = response.data
              setRegAndAvg(getRegandAvg)
              //console.log(getRegandAvg[0].average)
              if((getRegandAvg.length)!=0){
                //console.log('putttttttttttttttttttttttt');
                const uploadFile = new FormData();
                uploadFile.append('totalScore',getRegandAvg[0].average)
                axios.put(`http://localhost:8000/RegisterScholarship/${register_id}/`,uploadFile).then((response)=>{
                alert('บันทึกสำเร็จ')
                window.location.reload(false)
                })
              }
            });
            
    }
  },[toggle])

  const voteSubmit = (e) => {
    e.preventDefault()
    
    var anwser = window.confirm('คุณเเน่ใจที่จะบันทึกคะเเนนใช่หรือไม่ หากกด "OK" จะไม่สามารถเเก้ไขได้อีก?')

    if(anwser ){
      //realCommitee===-1
      if(realCommitee===-1){
        alert('คุณไม่ใช่กรรมการ') 
      }
      else if(parseInt(processStatus)!=2){
        alert('ไม่อยู่ในช่วงเวลาสัมภาษณ์ หรือ พ้นช่วงสัมภาษณ์แล้ว') 
      }
      else{
      const uploadFile = new FormData();
      uploadFile.append('user_id',user_ID)
      uploadFile.append('registerscholarship_id',register_id)
      uploadFile.append('pointbycommitee',score_Total)
      uploadFile.append('managescholarship_id',nameSchoId)
      uploadFile.append('sumpoint',scoreByWxP)



     

        axios.post("http://localhost:8000/Commiteevote/",uploadFile,config).then((response)=>{
          setToggle(true)
          //setToggle(false)
          // alert('Upload เสร็จสิ้น') 
          //console.log("Upload Vote สำเร็จ");
        }

        ,(err)=>{
          alert("ดึงไม่ได้ 555")
        });

      


      }
    }
  }



   


  const scorevotes = [{list:'5 คะเเนน',state:5},
                      {list:'4 คะเเนน',state:4},
                      {list:'3 คะเเนน',state:3},
                      {list:'2 คะเเนน',state:2},
                      {list:'1 คะเเนน',state:1}];
  
  //console.log("score_arr",score_arr);
  return ( 



    <div><UI_Commitee_StructureWebUI topic={"การลงคะเเนน"} iconic="fas fa-user-circle"/>


   {/*console.log(regAndAvg)*/}
{/* {console.log("rr : ",nameSchoId)} ผลงาน */}

{ /*console.log(processStatus)*/}
{/*console.log('uid'+user_ID)*/}

{/*console.log("score_Total: ",score_Total)*/}

{/* {console.log("sunPoint: ",sumPoint)} */}
{/* 
{console.log("nameSchoId: ",nameSchoId)}

{console.log("file: ",file)} */}


{/* { console.log("buffer commiteeeeeee:",buffer)} */}

 
      <div className='containerNew'>
        <div className='body-l1'>
        {(()=>{
          if (weightList === null){
            return(<>
              <label class="form-label" style={{marginTop:"15px",color:"red"}}>ทุนนี้ยังไม่มีเกณฑ์คะเเนน </label>
              </>
            )
          }else if(weightList !== undefined){
            //console.log(weightpp[0].criterianame)
            return(<>
              <div className="topic_sc-row" style={{marginTop:"15px"  ,color:"white",backgroundColor:"#A83B3B",height:"150px",fontSize:"30px"
                ,paddingLeft:"20px", justifyContent:"space-between"}}>
                <div className="topic_sc-col" style={{backgroundColor:"#A83B3B"}}>
                  <label class="form-label" style={{color:"white",fontSize:"30px"}}>{weight.nameScholar}</label>
                  <label class="form-label" style={{color:"white"}}><i class="fa fa-user" aria-hidden="true"></i> {weight.id_Std_reg+" "+weight.fullName_Std_reg} </label>
                  <label class="form-label" style={{color:"white"}}><i class="fa fa-graduation-cap" aria-hidden="true"></i> {weight.major_Std_reg} </label>
                </div>
                <div className="topic_sc-col" style={{backgroundColor:"#A83B3B"}}>
                
                {(()=>{
                    if(check_Submited === false){
                       
                        return (<>
                        <Badge bg="warning" text="black"> คะเเนนปัจจุบัน : {scoreByWxP}/5</Badge>&nbsp;
                        {/* scoreByWxP */}
                        <Badge bg="success">คะเเนนรวม (คำนวณเเล้ว) : {score_Total}/100</Badge>&nbsp;
                        {/* score_Total */}
                        
                        </>)
                    }else{
                      return (<>
                        <Badge bg="warning" text="black"> คะเเนนปัจจุบัน : {sumPoint}/5</Badge>&nbsp;
                        {/* scoreByWxP */}
                        <Badge bg="success">คะเเนนรวม (คำนวณเเล้ว) : {calPoint}/100</Badge>&nbsp;
                        {/* score_Total */}
                        
                        </>)
                    }
                })()}

                </div>
              </div>
              <form onSubmit= {(e) => voteSubmit(e)} class="was-validated">
              {weightList.map((weight_list, index) => (<>
                <label className='labelinput'>{(index+1)+". "+weight_list.criterianame+" น้ำหนัก: "+weight_list.weightpoint} </label>
                <div className="topic_sc-row" style={{marginTop:"20px",marginBottom:"20px"}}>
                {scorevotes.map((list,i)=>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name={weight_list.criterianame} value={list.state} onChange={(e) => selectScore(index,e.target.value)} required disabled={check_Submited}/>
                  <label class="form-check-label" for="flexRadioDefault1">{list.list}</label>
                </div>)} 
                </div>
                </>
              ))}
              <button type="submit" className='btn btn-success btn-lg' style={{width:"300px"}} disabled={check_Submited} >บันทึก </button>


              </form>
              </>
            )
          }else{
            return(<>
              <label class="form-label" style={{marginTop:"20px",color:"red"}}>ทุนนี้ยังไม่มีเกณฑ์คะเเนน </label>
              </>
            )
          }       
        })()}
          
        </div>
      </div>
    </div>
  );
}
export default Commitee_Vote;
