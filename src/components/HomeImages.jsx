import React from 'react'
import Image1 from "../assets/home1.svg";
import Image2 from "../assets/home2.svg"

const HomeImages = () => {
  return (
    <section className="home__imgaes">
        <div className="container">
            <img src={Image1} alt="" className='image1' />
            <img src={Image2} alt="" className='image2' />
        </div>
    </section>
  )
}

export default HomeImages