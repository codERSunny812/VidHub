import React from 'react'
import './_Header.scss'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications , MdApps} from "react-icons/md"
const Header = () => {
  return (
    <div className='border border-dark header'>
     <FaBars className='header_menu' size={120} />
     <div className="header_logo_png">
    <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='youtubeLogo' className='header_logo' /> <span>vidhub <sup>in</sup> </span>
    </div>
    <form>
    <input type="text" name="" id="" placeholder='Search' />
    <button type='submit'>
     <AiOutlineSearch size={120}/>
    </button>
    </form>

    <div className="header_icons">
      <MdNotifications size={120}/>
      <MdApps size={120}/>
      <img src='https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'/>
    </div>
    
    </div> 
  )
}

export default Header



