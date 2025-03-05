'use client'
import React, { useEffect, useState } from 'react'
const UnClick = () => {
    const [emoji,setEmoji] = useState(['🚈', '✨','🕔','🚍','🚈','🕔', '✨','👽','🦏','🦏','🚍','👽'])
    const [revealed, setRevealed] = useState(new Array(emoji.length).fill(false))
    const [selectedEmoji, setSelectedEmoji] = useState([])
    const handleClick =(clickedId)=>{
        if(selectedEmoji.length == 2) return;
        setSelectedEmoji(prevId=> [...prevId,clickedId])
        const tempRevealed = [...revealed]
        tempRevealed[clickedId] = true
        setRevealed(tempRevealed)
        // setRevealed(existingRevealedItems=> existingRevealedItems.map((item, id)=>id ==clickedId ? true : false ))
    }

    useEffect(()=>{
        if(selectedEmoji.length == 2) {
            const [first, second] = selectedEmoji
            if(emoji[first]== emoji[second]){
                setTimeout(() => {
                  setEmoji(prevEmoji => prevEmoji.map((item)=> (item == emoji[first] || item == emoji[second])  ? '' : item))
                }, 500);
            }else {
                setTimeout(() => {
                    setRevealed(new Array(emoji.length).fill(false))
                   
                },500)
            }
            setSelectedEmoji([])
        }
    },[selectedEmoji])
  return (
    <>
     <div>
        availalbe item is: {emoji.toString()}
        <br/>
        revealed item is: {revealed.toString()}
        <br/>
        selected emojis are: {selectedEmoji.toString()}
    </div>
    <br/>
    <div className="grid grid-cols-4">
        {emoji.map((item, id)=>{
            return (
            <div key={id} 
            onClick={()=>handleClick(id)}
            className='p-2 m-2 shadow-md w-16 h-16 bg-violet-800 text-4xl rounded-lg'>
                {revealed[id] && item}
            </div>
            )
        })}
    </div>
    </>
   
  )
}

export default UnClick




// // TO DO


// 3. remove both if both are same,  ['🚈', '✨','','🚍','🚈','', '✨','','','','🚍','']
// 4. hide both if both are different, give one second delay
// 5. reset 
// only 2 selections








// USEFFECT HOOK:
// -> functional component, handle side effects handle
// -> first/everytime page renders, it can run
// -> function 
// -> two argements: 
//     1. effect function
//     2. dependency array---> it can be state or props
// -> clean up function 



















