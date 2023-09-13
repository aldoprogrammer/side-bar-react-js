import React, { useState } from 'react';
import '../App.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar, 
    FaCommentAlt,
    FaShoppingBag, 
    FaThList
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const SideBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaTh/>
        },
        {
            path:'/about',
            name:'About',
            icon:<FaUserAlt/>
        },
        {
            path:'/analytics',
            name:'Analytics',
            icon:<FaRegChartBar/>
        },
        {
            path:'/comment',
            name:'Comment',
            icon:<FaCommentAlt/>
        },
        {
            path:'/product',
            name:'Product',
            icon:<FaShoppingBag/>
        },
        {
            path:'/productList',
            name:'Product List',
            icon:<FaThList/>
        }
    ]
  return (
    <div className='container'>
    <div className='sidebar' style={{ width: isOpen? "300px" : "50px"}}>
    <div className="top_section">
    <h1 style={{ display: isOpen? "block" : "none"}} className='logo'>Logo</h1>
    <div style={{ marginLeft: isOpen? "50px" : "0px"}} className='bars'>
        <FaBars onClick={toggle}/>
    </div>
      </div>
      {
        menuItem.map((item, index)=> (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className='icon'>{item.icon}</div>
                <div className='link_text' style={{ display: isOpen? "block" : "none"}} >{item.name}</div>
            </NavLink>
        ))
      }
    </div>
    <main>{children}</main>
    </div>
    
  )
}

export default SideBar
