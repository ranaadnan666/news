import React from 'react'
import "./Style.css"

import Data from './Data'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-section'>
<div className='inner-section'>
<div className='top-section'>
<div><h2>Top Stories</h2></div>
<div>
<div className="select">
   <select name="format" id="format">
      <option selected disabled>Choose a book format</option>
      <option value="pdf">Newest first</option>
      <option value="txt">View BookMark</option>
      <option value="epub">toppings</option>
     
   </select>
</div>
</div>
</div>
<div className="outer-card-content">
    <div className="card-main">
  {
    Data.map((data, i) =>{
      return(
<div key={i} className="card">
<NavLink style={{width:"100%",textDecoration:"none"}} to="article">
        <img src={data.img}/>
  
        <div className="price">
        <p>{data.text}</p>
        </div>
       
  </NavLink>
     </div>
      )
    })
  }
        </div>
</div>
</div>
    </div>
  )
}

export default Home