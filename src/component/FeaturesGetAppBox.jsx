import React from 'react';
import FeaturesDesc from './FeaturesDesc';

function FeaturesGetAppBox(props) {
    return (
        <div className='featuresGetApp'>
            <FeaturesDesc
             title={props.title}
             text={props.text}
             />
             <FeaturesGetApp/>
        </div>
    );
}

export default FeaturesGetAppBox;