import React from 'react';

function PerkItem(props) {
    return (
        <div className='perkItem'>
            <img src={props.image}/>
            <div className='perkItemContent'>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default PerkItem;