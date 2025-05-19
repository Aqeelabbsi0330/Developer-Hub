import React from 'react'
import Button from '../Button/Button'
import logo from '../../assets/public/logo-colored.svg'
import profile from '../../assets/public/Profile.png'
import message from '../../assets/public/Message.png'
import order from '../../assets/public/Order 2.png'
import cart from '../../assets/public/Cart 2.png'
import menu from '../../assets/public/menu.png'
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
export default function Header() {
  return (
    <div className="container">
      <div className="header flex justify-between items-center bg-white">
        <div className="brand">
           <img src={logo} alt="" />
        </div>
        <div className="search flex">
            <input type="text" placeholder='Search' className='border-2 rounded-l-[5px] border-blue-500 w-[300px] focus:border-2 focus:border-red-500-500' />
            <select  className='category border-2 border-blue-500 border-l-0'>
                <option value="All category" defaultValue="All Category">All Category</option>
                <option value="All category" >Mobile Accessories</option>
                <option value="All category" >Clothes</option>
            </select>
            <Button text="Search" className="rounded-l-[0px] rounded-r-[10px]"/>
             </div>
            <div className="list">
              <ul className='flex gap-5 items-center'>
                 <li><img src={profile} alt="" /></li>
                 <li><img src={message} alt="" /></li>
                 <li><img src={order} alt="" /></li>
                 <li><img src={cart} alt="" /></li>
              </ul>
            </div>
      </div>
       <div className="bottom-header flex justify-between bg-white my-2.5 py-2">
              <ul className='navigation flex gap-6'>
                <li className='flex'>
                  <img src={menu} alt="" />
                  All Category
                </li>
                <li>Hot Offer</li>
                <li>Gift Boxes</li>
                <li>Projects</li>
                <li>Menu Item</li>
                <li>Help</li>
              </ul>
              <ul className="country flex font-inter">
                <li>
                <select name="" id="">
                  <option value="" >English , USD</option>
                  <option value="">Urdu , Pak</option>
                  <option value="">Franch , FRANICH</option>
                </select>
                </li>
                <li>
                  <select name="" id="">
                    <option value=""> Ship to <img src={usa} alt="" /></option>
                    <option value=""> Ship to <img src={germany} alt="" /></option>
                    <option value=""> Ship to <img src={scoltland} alt="" /></option>
                    <option value=""> Ship to <img src={russia} alt="" /></option>
                    <option value=""> Ship to <img src={england} alt="" /></option>
                    <option value=""> Ship to <img src={itlay} alt="" /></option>
                    <option value=""> Ship to <img src={dubai} alt="" /></option>
                    <option value=""> Ship to <img src={china} alt="" /></option>
                    <option value=""> Ship to <img src={france} alt="" /></option>
                    <option value=""> Ship to <img src={australia} alt="" /></option>
                  </select>
                </li>
              </ul>
            </div>
    </div>
  )
}
