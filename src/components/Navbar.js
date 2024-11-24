import React from 'react'
import Symbol from "../assets/bakev2.jpg"
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';


function Navbar() {
  return (
    <div className= "navbar">
        <div className= "leftSide">
            <img src={Symbol} alt="Logo of Bart's Bakery" />
        </div>
        <div className="rightSide">
            <Link to={"/"}> Home </Link>
            <Link to={"/menu"}> Menu </Link>
            <Link to={"/about"}> About </Link>
            <Link to={"/contact"}> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar