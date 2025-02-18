import React from "react";
import "../styles/Header.css";
import "../styles/Footer.css";
import headerlogo from "../assests/headerlogo.png";
import { Button, Input } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-header">
          <div className="header-logo">
            <img src={headerlogo} alt="logo" />
          </div>
          <div>
            <p className="footer-subscribe-text">Subscribe on</p>
            <div className="footer-subscribe-box">
              <Input
                placeholder="E-mail to get latest news..."
                // style={{
                //   flex: 1,
                //   width: "300px",
                //   height: "50px",
                //   borderRadius: "24px",
                //   border: "0.8px solid #FFFFFF",
                //   color: "#FFFFFF",
                //   backgroundColor: "transparent",
                // }}
                className="footer-email-input"
              />
              <Button
                type="primary"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={<FaArrowRight className="footer-arrow-icon" />}
              />
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <Link to="/services" className="footer-address">
              <p>
                <MdLocationOn className="footer-icon" />
                Biz Craft Creative Services
              </p>
              <p>(Unit Of United Technology Corporation)</p>
              <p className="footer-address-text">
                #31/13, 2nd Floor, Burkit Rd, Near CANARA BANK, CIT Nagar East,
                Chennai, Tamil Nadu 600017.
              </p>
            </Link>
            <div className="footer-nav">
              <Link>
                <FaFacebook className="footer-icon" />
              </Link>
              <Link>
                <FaLinkedin className="footer-icon" />
              </Link>
              <Link>
                <LuInstagram className="footer-icon" />
              </Link>
              <Link>
                <IoLogoYoutube className="footer-icon" />
              </Link>
              <Link>
                <FaXTwitter className="footer-icon" />
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-title">Quick Links</p>

            <Link to="/" className="footer-nav">
              Home
            </Link>
            <Link to="/about-us" className="footer-nav">
              About Us{" "}
            </Link>
            <Link to="/blog" className="footer-nav">
              Blog
            </Link>
            <Link to="/contact-us" className="footer-nav">
              Contact Us
            </Link>
          </div>

          <div className="footer-column">
            <p className="footer-title">Services</p>
            <Link to="/services" className="footer-nav">
              UI/UX
            </Link>
            <Link to="/education" className="footer-nav">
              Web Design
            </Link>
            <Link to="/about" className="footer-nav">
              Web Development
            </Link>
            <Link to="/contact" className="footer-nav">
              E-Commerce
            </Link>
            <Link to="/contact" className="footer-nav">
              Mobile App
            </Link>{" "}
            <Link to="/contact" className="footer-nav">
              Digital Marketing
            </Link>
          </div>

          <div className="footer-column">
            <p className="footer-title">Contact Us</p>
            <Link to="/" className="footer-nav">
              <FaPhone className="phone-icon" />
              +91 9790782986
            </Link>
            <Link to="/" className="footer-nav">
              <FaPhone className="phone-icon" />
              +91 6381659676
            </Link>
            <Link to="/" className="footer-nav">
              <IoMailSharp className="phone-icon" />
              info@bizcraft.in
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copy Right 2025 &copy; Bizcraft. All Rights Reserved. 
        </p>
      </div>
    </>
  );
}
