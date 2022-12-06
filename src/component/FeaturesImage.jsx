import React from 'react';

function FeaturesImage(props) {
    return (
        <div className='featuresImage-box'>
            <img src={props.image}/>
        </div>
    );
}

export default FeaturesImage;