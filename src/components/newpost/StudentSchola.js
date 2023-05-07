import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function StudentScholar(){
    const [pic_Topic,setpic_Topic] = useState("");
    const [name_Topic,setname_Topic] = useState("");

    const [test, setTest] = useState([{id:"",fullName:"",address:""}]); //
    const getTest = ()=>{ //function gettest
      Axios.get("http://localhost:8000/topic/").then((response)=>{
        setTest(response.data);
      });
    }

    useEffect(() => {
      getTest();
    }, []); //useEffect request web ทำงาน 1 ครั้ง ครั้งเดียว
    
    return(
        <div className="Newbox">
        {test.map((data)=>{
            return(<>
        
                <div className='news_container'>
                    
                    <Link to="/StudentSchola2" style={{ textDecoration: 'none' }}><button className='nzonecontain'>
                        <div className='nboxsize_img'>
                            <img src="https://petkeen.com/wp-content/uploads/2020/06/shutterstock_722595979.jpg" class="img-fluid rounded-start" alt="cat"></img>
                        </div>

                        <div class="card">
                            <div class="card-headers">
                            ทุนการศึกษาต่อเนื่อง ประจำปี 2564
                            </div>
                            <div class="card-body">
                            <h6 class="card-title">สำหรับสาขา ME / MME / EEที่ขาดแคลนทุนทรัพย์การศึกษาเล่าเรียนมูลค่าทุน 55,00 บาท ต่อปี จนจบการศึกษา จำนวน 1 ทุน เท่านั้น</h6>
                            <p class="card-text">เพิ่ม 12/09/20 โดยพี่ทราย หัวข้อ ทุนการศึกษา</p>
                            </div>
                        </div>
                        </button>
                    </Link>
                </div>
            
            </>)
            

        })}
        </div>
    );

}