import React from 'react'
import Service1 from '../assets/service1.svg'
import Service2 from '../assets/service2.svg'
import Service3 from '../assets/service3.svg'


const Services = () => {
  return (
    <section className="services">
        <div className="service">
            <div className="content">
                <h1 className="title">
                Automated Reports & Widget Alerts
                </h1>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
            </div>
            <div className="image">
                <img src={Service2} alt="" />
            </div>
        </div>
        <div className="service">
            <div className="image">
                <img src={Service1} alt="" />
            </div>
            <div className="content">
                <h1 className="title">
                Fully customizable to address your needs
                </h1>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
            </div>
        </div>
        <div className="service">
            <div className="content">
                <h1 className="title">
                Pre-built Dashboard Templates
                </h1>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
            </div>
            <div className="image">
                <img src={Service3} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Services