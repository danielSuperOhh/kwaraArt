import React from 'react'
import './ourProducts.css'

const OurProducts = () => {
  return (
    <div className='ourProducts'>
        <div className="productsheader">
            <h1>Our <span>Products</span></h1>

            <div className="productsText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam officia voluptatem dolorum ratione laudantium.</p>
            </div>
        </div>

        <div className="ourProductsBox">
            <div className="probox">
                <div className="mainprobox"></div>
                <p>Peace Child</p>
            </div>
            <div className="probox">
                <div className="mainprobox"></div>
                <p>Birds</p>
            </div>
            <div className="probox">
                <div className="mainprobox"></div>
                <p>Hidden Birds</p>
            </div>
        </div>

        <div className="view-more">
            <button>
                <p>VIEW MORE</p>
            </button>
        </div>
    </div>
  )
}

export default OurProducts