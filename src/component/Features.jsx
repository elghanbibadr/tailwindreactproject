import React from 'react';
import FeaturesGetStarted from './FeaturesGetStarted';
import FeaturesImage from './FeaturesImage';
import { bill } from '../assets';
function Features(props) {
    return (
        <div className='features-container grid grid-cols-1 gap-8 grid-rows-6 p-6 max-w-6xl md:grid-cols-2 grid-rows-3 gap-16 content-center mx-auto '>
            <FeaturesGetStarted 
            title="You do the business, we’ll handle the money."
             text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."/>
            <FeaturesGetStarted 
            title="Easily control your billing & invoicing."
             text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."/>
              <FeaturesImage image={bill}/>
            {/* <FeaturesGetStarted/>
            <FeaturesGetStarted/>
            <FeaturesGetStarted/>
            <FeaturesGetStarted/>  */}
             {/* <FeaturesOffers/>
             <FeaturesImage1/>
             <FeaturesApps/>
             <FeaturesGetStarted/>
             <FeaturesImage2/> */}

        </div>
    );
}

export default Features;