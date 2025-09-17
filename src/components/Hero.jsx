import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero container">
        <div className="left">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="buttons">
                <button>Shop Now</button>
                <button className="category-btn">Category</button>
            </div>
            <div className="available">
                <p>Also Available On</p>
                <div className="shop-icon">
                    <img src="public/images/flipkart.png" alt="" />
                    <img src="public/images/amazon.png" alt="" />
                </div>
            </div>
        </div>
        <div className="right">
            <img src="public/images/shoe_image.png" alt="" />
        </div>
    </section>
  )
}

export default Hero