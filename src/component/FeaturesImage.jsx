import React from 'react';

function FeaturesImage(props) {
    return (
        <div className='featuresImage-box mb-8'>
            <img className='sm:w-3/4  mx-auto  md:w-4/5' src={props.image}/>
        </div>
    );
}

export default FeaturesImage;