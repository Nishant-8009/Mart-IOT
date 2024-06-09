import {React,useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

import './header.css';
import '../../assets/themes/theme.css'
//import logo
import logo from '../../assets/images/logo.png';

//import data
import  {navlinks} from '../../assets/data/Data';

//import menu icons
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


function Header() {
     // const [userdata, setUserdata]  = useState();
  const [active, setActive] = useState(window.location.pathname);
  const [isnavshow, setIsnavshow] = useState(false); 
  // const [userExists, setUserExists] = useState(false);
  const handleActive = (path) => {
    setActive(path);
  };
  return (
    <div>
        <>
      <nav>
      <div className="container nav-container">
          {/* {....LOGO......} */}
          <Link to='/Mart-IOT/home' className='logo' style={{backgroundImage: `url(${logo})`}}>
</Link>
          {/* {....Nav-left......} */}
          <ul className= {`nav-links ${isnavshow? 'navshow':'navhide'}`} >
            {
              navlinks.map(({name,path},index)=>{
                return(
                  <li key={index} className={active === path? 'active':''} onClick={() => handleActive(path)}>
                    <NavLink to={path}>{name}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          {/* {....Nav-right......} */}
          <button className='menu-button btn btn-border' onClick={()=>{
            setIsnavshow(!isnavshow);
           }}>{
            !isnavshow ? <RiMenu3Line/>:  <IoMdClose />
             }
              
            </button>
      </div>
    </nav>
            </>
    </div>
  )
}

export default Header
