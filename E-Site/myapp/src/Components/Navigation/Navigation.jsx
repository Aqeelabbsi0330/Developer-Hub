import React from 'react'
import right from '../../assets/public/right button.png'

export default function Navigation() {
  return (
    <div className='container bg-[#f7fafc] outfit py-5 px-5'>
      <ul className='flex gap-1'>
        <li className='flex items-center gap-0.5'>Home <img src={right} alt="" /></li>
        <li className='flex items-center gap-0.5'>Clothings <img src={right} alt="" /></li>
        <li className='flex items-center gap-0.5'>Men's wear <img src={right} alt="" /></li>
        <li className='flex items-center gap-0.5'>Summer Clothing <img src={right} alt="" /></li>
      </ul>
    </div>
  )
}
