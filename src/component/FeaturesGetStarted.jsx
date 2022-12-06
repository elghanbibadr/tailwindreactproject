import React from 'react';
import FeaturesDesc from './FeaturesDesc';
function FeaturesGetStarted(props) {
    return (
        <div className='featuresGetStarted'>
            <FeaturesDesc
             title={props.title}
             text={props.text}
             />
            <div className='featuresGetStartedBtn-box'>
                <button className='featuresGetStartedBtn p-3 rounded capitalize text-black font-medium  bg-sky-500'>get started</button>
            </div>
        </div>
    );
}

export default FeaturesGetStarted;