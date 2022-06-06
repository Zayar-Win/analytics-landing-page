import React from 'react'
import background1 from '../assets/background.svg'
import background2 from '../assets/background2.svg'
import Navbar from './Navbar'
import HomePng from "../assets/home1.svg"

const Home = () => {
  return (
    <section className="home">
        <div className="container">
            <div className="backgrounds">
                <img src={background1} alt="" className='background1' />
                <img src={background2} alt="" className='background2' />
            </div>
            <Navbar />
            .<div class="home-container">
            <div class="content">
              <div class="title-container">
                <img
                  src={HomePng}
                  alt="home"
                  class="home-title-image"
                />

                <h1 class="title">
                  Monitor your business on real-time dashboard
                </h1>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nisi aliquet volutpat pellentesque volutpat est.
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                </p>
              </div>
              <button>Try for free</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Home