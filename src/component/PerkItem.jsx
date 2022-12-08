import React from 'react';
function PerkItem(props) {
 
    return (
        <div  className='perkItem m-2 flex  cursor-pointer hover:bg-stone-600 rounded-3xl'>
            <img className='self-center p-4 rounded-full' src={props.image}/>
            <div className='perkItemContent mb-2 mx-5 '>
                <h4 className='relative left-2 font-bold text-1xl '>{props.title}</h4>
                    <p >{props.text}</p>
            </div>
        </div>
    );
}

export default PerkItem;