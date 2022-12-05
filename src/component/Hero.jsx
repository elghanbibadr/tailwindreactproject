import React from 'react';
import { robot, discount, arrowUp } from '../assets';
function Hero() {
    return (
        <section className='hero lg:px-14 mt-16 md:grid   grid-cols-2 gap-7 p-4 justify-center '>

            <div className='hero__content md:w-full  row-start-1  place-self-center'>
                <div className='hero__discountBar flex  justify-between items-center px-4 py-1 max-w-fit'>
                    <img src={discount} alt="discount icon" />
                    <p className='ml-5'>20% Discount for 1 month account</p>
                </div>
                <h1 className='hero__title my-5 capitalize	 leading-normal   text-4xl md:text-7xl	'>
                    the next <strong>genereation</strong> payment methode
                </h1>
                <p className='hero__desc '>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>
            </div>
            <div className='hero__img-box md:relative my-6 col-start-2 col-end-3'>
                <img className='hero__img 	 w-full md: col-start-2 col-end-4' src={robot} alt="robott image" />
            </div>
            <div className='hero__getStarted  mx-auto    border-sky-500	border-2 w-36 h-36 flex flex-col justify-center items-center cursor-pointer md:absolute right-10 left-0 lg:right-20 bottom-20  '>
                <h3 className='hero__getStarted-title capitalize  font-bold'>get <br/> Started</h3>
                <img className='hero__getStarted-icon relative left-3 bottom-11' src={arrowUp} />
            </div>
        </section>
    );
}

export default Hero;