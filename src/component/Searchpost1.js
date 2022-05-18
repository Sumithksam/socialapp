import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchpost1 = () => {
    var [name,setName]=useState("sumith")
    const viewName=()=>{
        setName(
            name="sam"
        )

    }
  return (
    <div>
        <Navbar/>
        {name}
        <button onClick={viewName} className="btn btn-success">CHANGE</button>
    </div>
  )
}

export default Searchpost1