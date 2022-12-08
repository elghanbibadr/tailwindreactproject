import React from 'react'

const CTA = () => {
  return (
    <section className='CTA flex flex-col m-8 p-20 justify-between items-center gray-bg   max-w-6xl md:mx-auto '>
        <div className='cta-content'>
            <h2 className='text-3xl leading-relaxed font-bold  md:w-3/4  '>Let’s try our service now!</h2>
            <p className='md:w-3/4'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className='my-5 w-1/2 p-3 rounded capitalize text-black font-medium  bg-sky-500 w-auto'>get started</button>

    </section>
  )
}

export default CTA