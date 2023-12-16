import React from 'react'
import './list.css'
import Ava from '../../assets/ava.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { PiCoffee } from "react-icons/pi";
import Catalog from './catalog/Catalog';
import Header from '../../bookmark/Bookmark';


const List = () => {
  return (

    <div className='list'>
<div className='location'>
<img src={Ava } alt=""  className='ava'/>
<h1 className='location'>   <FaMapMarkerAlt className='green'/>Jakarta, Indonesia</h1>
<h1 className='notification'><IoMdNotificationsOutline/> </h1>
</div>
<h1 className='yudi'>Good morning, Yudi</h1>

<div className='search'>
   <CiSearch className='icon'/><input type="text" placeholder='Search Coffee ...' style={{color:'#80a896'}} className='find' /><LuSettings2  className='icon'/>
</div>
<h1>Categories</h1>
<div  className='list'>
  <ul>
    <li><PiCoffee />Cappuccino</li>
    <li><PiCoffee />Coffee</li>
    <li><PiCoffee />Expresso</li>
    <li><PiCoffee />Latte</li>
    <li><PiCoffee />Americano</li>
  </ul>
<Header/>
  </div>
<Catalog/>


    </div>
  )
}

export default List