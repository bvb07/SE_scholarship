<!-- ตัวอย่างการเรียก -->
import React, { Component } from "react"; 
import './Help.css' 
import ButtonGreen from "../Button/ButtonGreen"; 
import ButtonRed from "../Button/ButtonRed"; 
import ButtonPink from "../Button/ButtonPink"; 
import ButtonBrown from "../Button/ButtonBrown"; 
import ButtonWhite from "../Button/ButtonWhite"; 
import ButtonYellow from "../Button/ButtonYellow";
import Buttoniconwhite from "../Button/Buttoniconwhite"; 
import Buttonicongreen from "../Button/Buttonicongreen"; 
import Buttoniconred from "../Button/Buttoniconred"; 
import Buttoniconpink from "../Button/Buttoniconpink";

<!-- const ชื่อตัวฟังก์ชันแปร ={ชื่อตัวแปร:"textที่ต้องการใส่"}
const ชื่อตัวฟังก์ชันแปร ={ชื่อตัวแปร:"textที่ต้องการใส่",ICON:"ชื่อiconจากเว็บ"} -->
const buttongreen ={BTNG:"ยืนยัน"}; 
const buttonred ={BTNR:"ยกเลิก"}; 
const buttonpink ={BTNP:"pink"}; 
const buttonbrown ={BTNB:"brown"}; 
const buttonwhite ={BTNW:"white"}; 
const buttonyellow ={BTNY:"yellow"}; 
const buttoniconwhite ={BTNIW:" HOME",ICON:"fas fa-phone-alt"} 
const buttonicongreen ={BTNIG:" HOME",ICON:"fas fa-phone-alt"} 
const buttoniconred ={BTNIR:" HOME",ICON:"fas fa-phone-alt"} 
const buttoniconpink ={BTNIP:" HOME",ICON:"fas fa-phone-alt"} 

class Help extends Component{ 
    render() { 
        return (
<!-- 
<ชื่อไฟล์ ชื่อตัวแปร={ชื่อตัวฟังก์ชันแปร.ชื่อตัวแปร} />
<ชื่อไฟล์ ชื่อตัวแปร={ชื่อตัวฟังก์ชันแปร.ชื่อตัวแปร} ชื่อตัวแปร={ชื่อตัวฟังก์ชันแปร.ชื่อตัวแปร} /> -->

            <ButtonGreen BTNG={buttongreen.BTNG} />
            <ButtonRed BTNR={buttonred.BTNR} />
            <ButtonPink BTNP={buttonpink.BTNP} />
            <ButtonBrown BTNB={buttonbrown.BTNB} />
            <ButtonWhite BTNW={buttonwhite.BTNW} />
            <ButtonYellow BTNY={buttonyellow.BTNY} />
            <Buttoniconwhite ICON={buttoniconwhite.ICON} BTNIW={buttoniconwhite.BTNIW} />
            <Buttonicongreen ICON={buttonicongreen.ICON} BTNIG={buttonicongreen.BTNIG} />
            <Buttoniconred ICON={buttoniconred.ICON} BTNIR={buttoniconred.BTNIR} />
            <Buttoniconpink ICON={buttoniconpink.ICON} BTNIP={buttoniconpink.BTNIP}/>
        </div>
        );
    } 
}
<!-- "ใช้ตอนLinkButton"
กดแล้วต้องมีข้อมูลครบ
<button type="submit" class="btn btn-dark" >ถัดไป</button>
กดแล้วเปลี่ยนหน้า
 <button onClick={()=>setPage(2)} type="button" class="btn btn-dark">ถัดไป SKIP </button> 
 เพิ่มตัวแปล TYPE ใน Buttonสีที่จะใช้(ตรงBTN..)
 EXส่วน js button
     <div><Button type={TYPE} className="BCG" variant="white">{BTNG}</Button></div> 
 EXส่วนconst 
    const buttongreen ={BTNG:"ยืนยัน",TYPE:"submit"}; -->
