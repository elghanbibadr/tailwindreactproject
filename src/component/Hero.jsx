import React from 'react';
import { robot } from '../assets';
function Hero(props) {
    return (
        <section className='hero md:grid  grid-cols-2 gap-7 p-4 justify-center '>
            <div className='hero__img-box my-6'>
                <img className='hero__img w-full md:w-9/12 col-start-2 col-end-4' src={robot} alt="robott image" />
            </div>
            <div className='hero__content  place-self-center '>
                <div className='hero__discountBar'>
                    <p>20% Discount for 1 month account</p>
                </div>
                <h1 className='hero__title my-5 capitalize	 leading-normal   text-4xl md:text-7xl	'>
                    the next <strong>genereation</strong> payment methode
                </h1>
                <p className='hero__desc'>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>
            </div>

        </section>
    );
}

export default Hero;