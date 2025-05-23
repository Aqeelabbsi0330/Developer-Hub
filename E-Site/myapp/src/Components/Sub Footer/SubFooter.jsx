import React from 'react'
import Button from '../../Components/Button/Button'

export default function SubFooter() {
  return (
    <div className='flex flex-col justify-center items-center px-3 py-7 text-center'>
      <h2 className='font-bold size-5 w-full outfit max-[650px]:text-[18px]'>Subscribe on our newsletter</h2>
      <p className='size-4 w-full outfit mt-2 text-[#606060] max-[650px]:text-[14px]'>Get daily news on upcoming offers from many suppliers all over the world</p>
      <div className='flex items-center justify-center gap-4 mt-5 mx-2 flex-wrap max-[480px]:mt-8 max-[480px]:gap-2'>
        <input type="text" className='border-2 border-blue-300  px-3 py-0.5 w-[250px]  rounded-[5px] bg-white' placeholder='Email' /> <Button text="Subscribe"/>
    </div>
    </div>
  )
}
