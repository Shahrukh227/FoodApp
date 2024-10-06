import React, { useState } from 'react'
import img from "../assets/recipe.png"
import { Link } from 'react-router-dom'
import css from "../Style/Navbar.module.css"
import { RxCross1 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {

  const [visible , setVisible] = useState(false)

  const handleBar =()=>{
setVisible(!visible)
  }
  return (
 <nav className={css.nav}>
  <img src={img}/>

  <ul className={`${visible ? css.show : " "}`}>
  <RxCross1 className={css.icon} onClick={handleBar}/>
    <li>
     <Link to='/' className={css.link}>Home</Link>
    </li>

    <li>
     <Link to='/foodrecipe' className={css.link}>Food Recipe</Link>
    </li>

  </ul>
  <FaBarsStaggered className={css.icon} onClick={handleBar}/>
 </nav>
  )
}

export default Navbar
