import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from "../assets/logo.svg"
import toogle from '../assets/toggle.svg'
const Navbar = () => {
    const [active,setActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll' , () => {
            setActive(false)
        })
        return () => window.removeEventListener("scroll" , () => {
            setActive(false)
        })
    })
  return (
    <nav className='nav'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <img src={toogle} className="toggle" alt="" onClick={() => setActive(!active)} />
            <ul className={`link-container-ul ${active ? 'active' : ""}`}>
                <li><a href="">Products</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        <div className="sign-buttons">
            <button className="btn">Sing In</button>
            <button className="btn">Sing up</button>
        </div>
    </nav>
  )
}

export default Navbar