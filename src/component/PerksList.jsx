import React from 'react';
import PerkItem from './PerkItem';
import { star,shield,send } from '../assets';
function PerksList(props) {
    return (
        <div className='features-perksList'>
            <PerkItem image={star} title='Rewards' text='The best credit cards offer some tantalizing combinations of promotions and prizes' />
            <PerkItem image={shield} title='100% Secured' text='We take proactive steps make sure your information and transactions are secure.' />
            <PerkItem image={send} title='Balance Transfer' text='A balance transfer credit card can save you a lot of money in interest charges.' />
            
        </div>
    );
}

export default PerksList;