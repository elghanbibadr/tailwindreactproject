import React from 'react';
import FeaturesGetStarted from './FeaturesGetStarted';
import FeaturesImage from './FeaturesImage';
import { bill } from '../assets';
import { card } from '../assets';
import FeaturesGetApp from './FeaturesGetApp';
import PerksList from './PerksList';
function Features(props) {
    return (
        <div className='features-container  grid grid-cols-1 grid-rows-6    justify-items-center  items-center p-6 max-w-6xl md:grid-cols-2 grid-rows-3 gap-16 mx-auto '>
            <FeaturesGetStarted 
            title="You do the business, we’ll handle the money."
             text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."/>
              <PerksList/>
              <FeaturesImage image={bill}/>
            <FeaturesGetApp
            title="Easily control your billing & invoicing."
            text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
            />
            <FeaturesImage image={card}/>
            <FeaturesGetStarted 
            title="Easily control your billing & invoicing."
             text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."/>
        </div>
    );
}

export default Features;


// <FeaturesGetStarted 
// title="Easily control your billing & invoicing."
//  text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."/>