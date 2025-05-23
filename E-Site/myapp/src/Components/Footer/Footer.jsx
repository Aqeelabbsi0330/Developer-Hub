import React from 'react'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay}from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/public/logo-colored.svg'
import facebook from '../../assets/public/facebook.png'
import twitter from '../../assets/public/twitter.png'
import linkedin from '../../assets/public/linkedin.png'
import insta from '../../assets/public/instagram.png'
import youtube from '../../assets/public/youtube.png'
import australia  from'../../assets/public/flags/australia.png'
import germany  from'../../assets/public/flags/germany.png'
import china from'../../assets/public/flags/china.png'
import dubai from'../../assets/public/flags/dubai.png'
import england from'../../assets/public/flags/england.png'
import france from'../../assets/public/flags/france.png'
import itlay from'../../assets/public/flags/itlay.png'
import russia from'../../assets/public/flags/russia.png'
import usa from'../../assets/public/flags/usa.png'
import scoltland from'../../assets/public/flags/scotland.png'



export default function Footer() {
    const countryOptions = [
      { value: 'usa',  label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> English  <img src={usa} alt="" width="20" /></span> },
      { value: 'germany', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> German  <img src={germany} alt="" width="20" /></span> },
      { value: 'france', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> Franich  <img src={france} alt="" width="20" /></span> },
      { value: 'itlay', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> Itlay  <img src={itlay} alt="" width="20" /></span> },
      { value: 'russia', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> Russian  <img src={russia} alt="" width="20" /></span> },
      { value: 'australia', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> English Aust  <img src={australia} alt="" width="20" /></span> },
      { value: 'england', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> British  <img src={england} alt="" width="20" /></span> },
      { value: 'china', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> Chines  <img src={china} alt="" width="20" /></span> },
      { value: 'dubai', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> Arabi  <img src={dubai} alt="" width="20" /></span> },
      { value: 'scoltland', label: <span style={{ display: 'inline-flex',  alignItems: 'center' }}> Scotish  <img src={scoltland} alt="" width="20" /></span> },
    ]
      const customStyles=()=>({
          control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '2px solid black' : 'none',
        boxShadow: 'none',
        '&:hover': {
          border: '1px solid gray',
        },
        })
      } )
    
  return (
    <div className='bg-white p-4'>
      <div className="footer container flex justify-around gap-2.5 py-10 border-2 border-black flex-wrap items-center ">
        <div className="brand flex    item center flex-col max-[650px]:items-center">
            <img src={logo} alt="" className='w-[200px]  max-[1155px]:mx-auto max-[1155px]:block'  />
            <p className='w-[276px] my-3 max-[1155px]:text-center'>Best information about the company gies here but now lorem ipsum is</p>
            <ul className='flex gap-2 max-[1155px]:justify-center  '>
                <li><img src={facebook} alt="" /></li>
                <li><img src={twitter} alt="" /></li>
                <li><img src={linkedin} alt="" /></li>
                <li><img src={insta} alt="" /></li>
                <li><img src= {youtube} alt="" /></li>
            </ul>
        </div> 
        <div className="lists flex gap-10 text-[16px] text-center flex-wrap items-center justify-center max-[650px]:hidden">
            <ul className='px-1.5 text-[#8B96A5]'>
                <li className='font-bold text-black'>About</li>
                <li>About Us</li>
                <li>Find Store</li>
                <li>Categories</li>
                <li>Blogs</li>
            </ul>
            <ul className='px-1.5 text-[#8B96A5] text-center'>
                <li className='font-bold text-black'>Partnership</li>
                <li>About Us</li>
                <li>Find Store</li>
                <li>Categories</li>
                <li>Blogs</li>
            </ul>
            <ul className='px-1.5 text-[#8B96A5] text-center'>
                <li className='font-bold text-black'>Information</li>
                <li>Help Center</li>
                <li>Money Refund</li>
                <li>Shipping</li>
                <li>Contact Center</li>
            </ul>
            <ul className='px-1.5 text-[#8B96A5] text-center'>
                <li className='font-bold text-black'>For Users</li>
                <li>Login</li>
                <li>Register</li>
                <li>Settings</li>
                <li>My Orders</li>
            </ul>
            <ul className='px-1.5 text-[#8B96A5] text-center '>
                <li className='font-bold text-black'>Get App</li>
                <li>
                  <button className="flex items-center gap-3 bg-black text-white rounded-lg px-4 py-2 w-fit">
                        <FontAwesomeIcon icon={faApple} className="text-[30px]" />
                        <div className="flex flex-col items-start leading-tight">
                          <span className="text-[10px]">Download on the</span>
                          <span className="text-[18px] font-semibold">App Store</span>
                        </div>
                      </button>
              </li>
              <li>
                <button className="flex items-center gap-3 bg-black text-white rounded-lg px-4 py-2 w-fit mt-2">
                        <FontAwesomeIcon icon={faGooglePlay} className="text-[25px]" />
                        <div className="flex flex-col items-start leading-tight">
                          <span className="text-[10px]">GET IT ON</span>
                          <span className="text-[18px] font-semibold">App Store</span>
                        </div>
                      </button>
              </li>
            </ul>
        </div>
      </div>
      <div className="copy container flex justify-between items-center  text-[#8B96A5] px-[60px]  max-[480px]:flex-col   ">
        <p className='max-[480px]:mt-4 text-center'>© 2023 Ecommerce. </p>
        <Select styles={customStyles()} defaultValue={countryOptions[0]} options={countryOptions}  className='max-[480px]:mt-1'/>
      </div>
    </div>
  )
}
