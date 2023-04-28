import React from "react"
import "./footer.css"
import BuildNShip from "/BuildNShip.png"
import { FaInstagram, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa"

const Footer = () => {
  
  return (
        <div className="footer">
          <a href="https://buildnship.in/">
            <img src={BuildNShip} alt="logo" />
          </a>
          <div className="social_container">
            <a href="https://twitter.com/buildnship/">
              <FaTwitter size={25} />
            </a>
            <a href="https://instagram.com/buildnship?igshid=YmMyMTA2M2Y=">
              <FaInstagram size={25} />
            </a>
            <a href="https://github.com/BuildNShip">
              <FaGithub size={25} />
            </a>
            <a href="https://t.me/buildnship">
              <FaTelegram size={25} />
            </a>
          </div>
        </div>
  )
}

export default Footer