import React from 'react';
import { useState } from 'react';
function PerkItem(props) {
const [isActive,setIsActive]=useState(false);
 const handleClick=(e)=>{
  e.currentTarget.classList.toggle('gray-bg')
 }
    return (
        <div onClick={handleClick} className={`perkItem m-2 flex ${isActive ?'gray-bg':'bg-transparent'} cursor-pointer`}>
            <img className='self-center p-4 rounded-full' src={props.image}/>
            <div className='perkItemContent mb-2 mx-5 '>
                <h4 className='relative left-2 font-bold text-1xl '>{props.title}</h4>
                    <p >{props.text}</p>
            </div>
        </div>
    );
}

export default PerkItem;