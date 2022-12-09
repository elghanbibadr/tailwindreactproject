import React from 'react'

const CTA = () => {
  return (
    <section className='CTA flex  justify-between items-center gray-bg   max-w-6xl md:mx-auto grid-rows-2 grid-cols-3'>
        <div className='cta-content col-span-2'>
            <h2 className='text-3xl leading-relaxed font-bold  md:w-3/4  '>Let’s try our service now!</h2>
            <p className='md:w-3/4'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className='my-5  p-3 rounded capitalize text-black font-medium  bg-sky-500 '>get started</button>

    </section>
  )
}

export default CTA