import React from 'react'

const AboutCard = ({heading,info}) => {
  return (
    <div className='flex flex-col p-4 w-96 h-48 bg-white rounded-xl gap-4 flex-shrink-0 mb-6 hover:bg-[#fcfbff] hover:text-white duration-300'>
      <h2 className='text-black text-lg font-bold  '>{heading}</h2>
      <p className='text-[#363636] text-sm font-semibold  '>{info}</p>
      
    </div>
  )
}

export default AboutCard
