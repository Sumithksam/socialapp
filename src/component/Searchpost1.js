import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchpost1 = () => {
    var [title,setTitle]=useState("")
    const viewName=()=>{
      const data={"title":title}
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
                <button onClick={viewName} className="btn btn-success">CHANGE</button>
                </div>
            </div>
         </div>
    </div>
</div>
    </div>
  )
}

export default Searchpost1