import React from 'react';



function Records() {
    let recordsName=[
        {number:"3800+",name:"user active"},
        {number:"230+",name:"trusted by company"},
        {number:"$230M+",name:"transaction"},
    ]
    return (
        <section className='recordsContainer my-8 flex flex-col justify-center p-6 md:flex-row justify-around'>
            {recordsName.map(({number,name})=>{
               return(
                <div className='record-item mb-6 flex items-center '>
                    <h3 className='record-item-number mr-2 text-3xl font-bold'>{number}</h3>
                    <p className='record-item-name  uppercase'>{name}</p>
                </div>
               )
            })}
        </section>
    );
}

export default Records;