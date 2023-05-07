import React from "react";

const CheckBoxEdit = (props) => {
    const {topic,data,value,action} = props

    
    return(
        <div className='inputlb01'>
            <label for="explicit-label-name" className='labelinput'>{topic} </label>
                {data.map(({list,parent})=>
                <div class="form-check">
                    {(()=>{
                    if(value[parent]=="ถูกเลือก"){
                        return (<>
                         <div class="form-check">
                        <input class="form-check-input" type="checkbox" name={list}   value={value[parent]} onChange={action} checked/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">{list}</label>
                        </div >


                        </>)
                    }
                    else{
                        return (<>
                         <div class="form-check">
                        <input class="form-check-input" type="checkbox" name={list}   value={value[parent]} onChange={action}/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">{list}</label>
                        </div >
                        
                        </>)
                    }
                })()}
                       
                      
                    
                    
                </div>)}
        </div>      
    )
}

export default CheckBoxEdit;
