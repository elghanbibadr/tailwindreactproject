import React from 'react';
import FeaturesDesc from './FeaturesDesc';
import { apple } from '../assets';
import { google } from '../assets';
function FeaturesGetAppBox(props) {
    return (
        <div className='featuresGetApp self-center'>
            <FeaturesDesc
                title={props.title}
                text={props.text}
            />
            <div className=' flex gap-4'>
                <img  src={apple} alt='apple icon image' />
                <img  src={google} alt='google icon image' />
            </div>
        </div>
    );
}

export default FeaturesGetAppBox;