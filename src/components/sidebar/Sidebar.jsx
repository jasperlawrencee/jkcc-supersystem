import React from 'react'
import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import avatar from '../../assets/avatar.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <div className="item">
                <img src={avatar} alt='' className='avatar'/>
            </div>
            <span className="logo">jkccAdmin</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardRoundedIcon className='icon'/><span>Dashboard</span></li>
                <li><MessageRoundedIcon className='icon'/>
                <div className="counter"></div>
                <span>Messages</span>
                </li>
                <li><Inventory2RoundedIcon className='icon'/><span>Inventory</span></li>
                <li><PeopleAltRoundedIcon className='icon'/><span>Clients</span></li>
                <li><LocalShippingRoundedIcon className='icon'/><span>Supplier</span></li>
                <p className="title">ADMIN SERVICES</p>
                <li><NotificationsRoundedIcon className='icon'/><span>Sales Report</span></li>
                <li><LogoutRoundedIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar