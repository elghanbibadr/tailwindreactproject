import React from 'react';
import PerkItem from './PerkItem';
import { star,shield,send } from '../assets';
function PerksList(props) {
    return (
        <div className='features-perksList'>
            <PerkItem src={star} title='Rewards' text='The best credit cards offer some tantalizing combinations of promotions and prizes' />
            <PerkItem src={star} title='Rewards' text='The best credit cards offer some tantalizing combinations of promotions and prizes' />
            <PerkItem src={star} title='Rewards' text='The best credit cards offer some tantalizing combinations of promotions and prizes' />
            
        </div>
    );
}

export default PerksList;