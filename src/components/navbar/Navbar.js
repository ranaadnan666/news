import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
<div className='inner-nav'>
<div className='left-nav'>
<NavLink style={{textDecoration:"none"}} to="/">
<span className='text1'>The</span><br></br>
  <span className='text2'>Peaks</span>
</NavLink>
</div>
<div className='right-nav'>
<div className="container">
  <input placeholder='Search...' class='js-search' type="text"/>
  <i className="fa fa-search"></i>
</div>
</div>
</div>
    </div>
  )
}

export default Navbar