// 'use client'
// import React, { useState } from 'react'

// const Calculator = () => {
//     const keys = [['AC','C','%','/'],
//                   ['7','8', '9', '*'],
//                   ['4', '5', '6', '-'],
//                   ['1', '2','3','+'],
//                   ['0', '.', '=']];
    
//     const [input, setInput] = useState('')
//   return (
//     <div> {input}
//         {keys.map((item)=>{
//             return( <button onClick={()=> setInput(input+item)} className='bg-black text-white m-2 p-2 rounded-lg' key={item}>
//                 {item}
//                 </button>)
//         })}
//         // <button onClick={()=> setInput('')}>AC</button>
//         <button onClick={()=> setInput(eval(input))}>=</button>
//     </div>
//   )
// }

// export default Calculator 




'use client'
import React, { useState } from 'react'

const Calculator = () => {
    const keys = [
        ['AC', 'C', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === 'AC') {
            setInput('');
        } else if (value === 'C') {
            setInput(input.slice(0, -1)); // Remove last character
        } else if (value === '=') {
            try {
                setInput(eval(input).toString()); // Evaluate expression
            } catch {
                setInput('Error'); // Prevent crashes
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-lg w-72 shadow-lg">
                <div className="text-right text-2xl bg-black p-3 w-full rounded-lg mb-3">{input || '0'}</div>
                <div className="grid grid-cols-4 gap-2 w-full">
                    {keys.flat().map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className="bg-black text-white p-4 rounded-lg text-xl hover:bg-gray-700"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
