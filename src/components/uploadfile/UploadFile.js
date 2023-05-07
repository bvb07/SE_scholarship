import React from "react";

const UploadFile = (props) => {
    const {topic,accept,onchange} = props
    return(
        <div>
            <label for="formFile" class="form-label">{topic}</label>
            <input class="form-control" type="file" accept={accept} onChange={onchange} style={{fontSize:"20px",width:"450px"}} required/>
        </div>
    )
}

export default UploadFile;
