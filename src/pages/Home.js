import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/bakery.jpg"
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Bart's Bakery</h1>
        <p>Bakers Baking Boldly</p>
        <Link to="menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home