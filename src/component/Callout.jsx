import React from 'react'
import CalloutItem from './CalloutItem'
import calloutData from './pageData/Data'
import { quotes } from '../assets'
const Callout = () => {
  return (
    <section className='callout mt-20 grid grid-cols-1 grid-rows-5   items-center p-6 max-w-6xl md:grid-cols-3 mt-0 grid-rows-2  gap-x-8 mx-auto  '>
        <h2 className='text-3xl w-3/4  leading-relaxed font-semiBold md:md:col-span-2 text-4xl'>What people are saying about us</h2>
        <p className=' leading-loose'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
         {calloutData.map(user=>{
            return(
                <CalloutItem
                 key={user.id}
                 image={quotes} 
                 desc={user.desc}
                 customerImage={user.customerImage}
                 customerName={user.customerName}
                 customerrole={user.customerrole}
                 />
            )
         })}
        </section>

  )
}

export default Callout