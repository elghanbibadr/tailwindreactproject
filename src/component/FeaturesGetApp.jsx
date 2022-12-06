import React from 'react';

function FeaturesGetApp(props) {
    return (
        <div className='bg-black'>
            <img src={props.image} alt='app icon image' />
             <p>{props.text}</p>
             <h4>{props.title}</h4>
        </div>
    );
}

export default FeaturesGetApp;