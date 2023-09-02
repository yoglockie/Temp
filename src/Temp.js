import React, { useState } from 'react'

const Temp = () => {
    const [cdata,setcdata]=useState("")
    const [fdata,setfdata]=useState("")
    
    const HandleCelsius=(e)=>{
        
        const f = ((e.target.value)*1.8)+32
        setcdata(e.target.value)
        setfdata(f)
        
    }
    const HandleFarenheit=(e)=>{
        const c = ((e.target.value)-32)*5/9
        setfdata(e.target.value)
        setcdata(c)
        
    }
  return (
    <div>
        <div>Temperature Converter</div>
        <div>
            <label htmlFor="">Celcius : </label>
            <input type="text" value={cdata} onChange={HandleCelsius}/>
            
        </div>
        <div>
            <label htmlFor="">Farenheit : </label>
            <input type="text" value={fdata} onChange={HandleFarenheit} />
        </div>
    </div>
  )
}

export default Temp;

