import React from "react";

const CheckBox = (props) => {
    const {topic,data,value,action,disabled,defaultChecked,checked} = props
    return(<>

        <div className='inputlb01'>
        <label for="explicit-label-name" className='labelinput'>{topic} </label>
            {data.map(({list,parent})=>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name={list} value={value[parent]} onChange={action} disabled={disabled} defaultChecked={defaultChecked}  ></input>
                <label class="form-check-label" for="Robot">{list}</label>
            </div>)}

    </div>
                                    
                 


        
         
   </> )
}

export default CheckBox;
