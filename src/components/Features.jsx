import React from 'react'
import Feature1 from "../assets/features1.svg"
import Feature2 from "../assets/features2.svg"
import Feature3 from "../assets/features3.svg"

const Features = () => {
  return (
    <section className="feature">
        <div className="title-container">
            <h1 className="title">Main Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
        </div>
        <div className="contents">
            <div className="content">
                <img src={Feature1} alt="" />
                <h3>Monitoring 24/7</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.</p>
            </div>
            <div className="content">
                <img src={Feature2} alt="" />
                <h3>Monitoring 24/7</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.</p>
            </div>
            <div className="content">
                <img src={Feature3} alt="" />
                <h3>Monitoring 24/7</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.</p>
            </div>
        </div>
    </section>
  )
}

export default Features