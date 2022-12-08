import React from 'react'

const CalloutItem = (props) => {
  return (
    <article className='calloutItem w-3/4 mx-auto md:w-full mb-6 p-4 cursor-pointer gray-bg rounded-3xl'>
       <img src={props.image}/>
       <p className='py-8'>{props.desc}</p>
       <div className='calloutItem-footer'>
       <img className='float-left w-20 h-20 mt-4 mr-4' src={props.customerImage}/>
        <div className='pt-5'>
            <h4>{props.customerName}</h4>
            <p>{props.customerrole}</p>
        </div>
       </div>
     </article>
  )
}

export default CalloutItem