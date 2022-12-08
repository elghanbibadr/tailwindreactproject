import React from 'react'
import sponsorImageSrc from './pageData/SponsorsImagesSrc'
const Sponsors = () => {

  return (
    <section className='sponsors m-5 justify-items-center items-center gap-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4'>
         {sponsorImageSrc.map(({id,src})=>{
       return(
        <img className='w-1/2 md:w-3/4 ' key={id} src={src} alt='company sponsor logo'/>
    )
   })
   }
        </section>
  )
}

export default Sponsors