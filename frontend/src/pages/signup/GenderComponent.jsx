import React from 'react'

const GenderComponent = ({onCheckboxChange,selectedGender}) => {//this first parameter is the funtion handlecheckboxchange in signup.jsax
  return (
    <div>
     <div className="form-control">
  <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected":""}`}>
    <span className="label-text">Male</span>
    <input type="checkbox"  className="checkbox checkbox-info" checked={selectedGender==='male'}
     onChange={() => onCheckboxChange("male")} />
  </label>
</div>
<div className="form-control">
<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected":""}`}>   
    <span className="label-text">Female</span>
    <input type="checkbox"  className="checkbox checkbox-info" checked={selectedGender==="female"}
     onChange={()=>onCheckboxChange("female")} />
  </label>
</div>
    </div>
  )
}

export default GenderComponent
