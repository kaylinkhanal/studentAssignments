'use client'
import React, {useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#0000ff");

    const changeColor = (e)=>{
        setColor(e.target.value)
    }

    return(
        <div className={`h-screen w-screen`}>
            <input type="color" value={color} onChange={changeColor}/>
            <div className={`w-80 h-80 `} style={{backgroundColor: color}}>{color}</div>

        </div>
    );
}
export default ColorPicker