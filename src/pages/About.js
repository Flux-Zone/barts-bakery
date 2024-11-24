import React from 'react'
import Bakery from "../assets/bakers.jpg"
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div 
         className="aboutTop" 
         style={{ backgroundImage: `url(${Bakery})` }}
        ></div>
        <div className="aboutBottom">
            <h1>About</h1>
            <p>Welcome to Bart's Bakery, your neighborhood haven for all things delicious and freshly baked! Founded on the love of baking and a passion for bringing smiles to faces, Bart's Bakery has been crafting mouthwatering treats since 1999.

               We take pride in using the finest ingredients to create a wide variety of baked goods, from classic breads and pastries to decadent cakes and cookies. Whether you're looking for a warm loaf of sourdough, a custom-designed celebration cake, or a cozy spot to enjoy your morning coffee, Bart’s Bakery has something for everyone.

               At Bart's Bakery, every bite tells a story—one of dedication, quality, and the joy of sharing. Come visit us and experience the magic of freshly baked happiness!

            </p>
        </div>
    </div>
  )
}

export default About