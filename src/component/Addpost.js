import React, { useState } from 'react'
import Navbar from './Navbar'

const Addpost = () => {
    var [title,setTitle]=useState("")
    var [message,setMessage]=useState("")
    const subData=()=>{
const data={"title":title,"message":message}
console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">TITLE:</label>
                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">MESSAGE:</label>
                <input onChange={(e)=>{setMessage(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subData} className="btn btn-success">SUBMIT</button>
            </div>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addpost