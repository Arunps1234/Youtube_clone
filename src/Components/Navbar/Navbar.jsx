import React from 'react'
import "./Navbar.css"
import Menu_icon from "../../assets/assets/menu.png"
import logo from "../../assets/assets/logo.png"
import search_icon from "../../assets/assets/search.png"
import upload_icon from "../../assets/assets/upload.png"
import more_icon from "../../assets/assets/more.png"
import notification_icon from "../../assets/assets/notification.png"
import profile_icon from "../../assets/assets/jack.png"
import { Link } from 'react-router-dom'

const Navbar = ({setCollapse, collapsesidebar}) => {
    return (
        <nav className='flex-div'>

            <div className='nav-left flex-div'>
                <img className="menu_icon" src={Menu_icon} alt="Menu_icon" onClick={()=>setCollapse(!collapsesidebar)}/>
               <Link to="/"> <img className="logo" src={logo} alt="logo_icon" /> </Link>
            </div>

            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                   <input type="text" placeholder='Search' />
                   <img src={search_icon} alt="Search_icon" />
                </div>
            </div> 

            <div className='nav-right flex-div'>
                <img src={upload_icon} alt="Upload_icon" className='upload_icon'/>
                <img src={more_icon} alt="more_icon" className='more_icon' />
                <img src={notification_icon} alt="Notification_icon" className='notification_icon'/>
                <img src={profile_icon} alt="Profile_icon" className='user_icon'/>
            </div>


        </nav>
    )
}

export default Navbar