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
      <div style={{ padding: "5%", borderTop: "1px solid #FFFFFF4D" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="header-logo">
            <img src={headerlogo} alt="logo" />
          </div>
          <div>
            <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF" }}>
              Subscribe on
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <Input
                placeholder="E-mail to get latest news..."
                style={{
                  flex: 1,
                  width: "300px",
                  height: "50px",
                  borderRadius: "24px",
                  border: "0.8px solid #FFFFFF",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                }}
                className="email-input"
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
                icon={
                  <FaArrowRight
                    style={{ fontSize: "20px", color: "#7453AF" }}
                  />
                }
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <div style={{ width: "30%" }}>
            <Link to="/services" className="footer-address">
              <p>
                <MdLocationOn style={{ width: "30px", height: "30px" }} />
                Biz Craft Creative Services
              </p>
              <p>(Unit Of United Technology Corporation)</p>
              <p style={{ width: "70%", lineHeight: "32px" }}>
                #31/13, 2nd Floor, Burkit Rd, Near CANARA BANK, CIT Nagar East,
                Chennai, Tamil Nadu 600017.
              </p>
            </Link>
            <div className="footer-nav">
              <Link>
                <FaFacebook
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
              </Link>
              <Link>
                <FaLinkedin
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
              </Link>
              <Link>
                <LuInstagram
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
              </Link>
              <Link>
                <IoLogoYoutube
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
              </Link>
              <Link>
                <FaXTwitter
                  style={{ width: "30px", height: "30px", color: "#ffffff" }}
                />
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-title">Quick Links</p>

            <Link to="/services" className="footer-nav">
              Home
            </Link>
            <Link to="/education" className="footer-nav">
              About Us{" "}
            </Link>
            <Link to="/about" className="footer-nav">
              Blog
            </Link>
            <Link to="/contact" className="footer-nav">
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
            <Link to="/services" className="footer-nav">
              <FaPhone style={{ width: "20px", height: "20px" }} />
              +91 9790782986
            </Link>
            <Link to="/education" className="footer-nav">
              <FaPhone style={{ width: "20px", height: "20px" }} />
              +91 6381659676
            </Link>
            <Link to="/about" className="footer-nav">
              <IoMailSharp style={{ width: "20px", height: "20px" }} />
              info@bizcraft.in
            </Link>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#FFFFFF0F", padding: "1% 0%" }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Copy Right 2025 &copy; ceumed. All Rights Reserved. 
        </p>
      </div>
    </>
  );
}
