import React from 'react';

function FeaturesDesc(props) {
    return (
        <div className='FeaturesDesc'>
            <h2 className='text-3xl w-3/4 leading-relaxed font-bold '>{props.title}</h2>
            <p className='my-4 md:w-3/4'>{props.text}</p>
        </div>
    );
}

export default FeaturesDesc;