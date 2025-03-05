import React, { useEffect, useState } from "react";
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
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

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
              <p style={{ width: "max-content" }}>
                <MdLocationOn className="footer-icon" />
                Biz Craft Creative Services
              </p>
              <p style={{ width: "max-content" }}>
                (Unit Of United Technology Corporation)
              </p>
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
            <p className="footer-title">
              Quick Links
              {isMobile && (
                <span
                  className="footer-toggle-icon"
                  onClick={() => isMobile && toggleSection("quickLinks")}
                >
                  {openSection === "quickLinks" ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </span>
              )}
            </p>
            <div
              className={`footer-content-dropdown ${
                openSection === "quickLinks" || !isMobile ? "active" : ""
              }`}
            >
              <Link to="/" className="footer-address">
                Home
              </Link>
              <Link to="/about-us" className="footer-address">
                About Us{" "}
              </Link>
              <Link to="/blog" className="footer-address">
                Blog
              </Link>
              <Link to="/contact-us" className="footer-address">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-title">
              Services
              {isMobile && (
                <span
                  className="footer-toggle-icon"
                  onClick={() => isMobile && toggleSection("services")}
                >
                  {openSection === "services" ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </span>
              )}
            </p>
            <div
              className={`footer-content-dropdown ${
                openSection === "services" || !isMobile ? "active" : ""
              }`}
            >
              <Link to="/ui-ux-design" className="footer-address">
                UI/UX
              </Link>
              <Link to="/web-design" className="footer-address">
                Web Design
              </Link>
              <Link to="/web-development" className="footer-address">
                Web Development
              </Link>
              <Link to="/contact" className="footer-address">
                E-Commerce
              </Link>
              <Link to="/contact" className="footer-address">
                Mobile App
              </Link>{" "}
              <Link to="/contact" className="footer-address">
                Digital Marketing
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-title">
              Contact Us{" "}
              {isMobile && (
                <span
                  className="footer-toggle-icon"
                  onClick={() => isMobile && toggleSection("contactus")}
                >
                  {openSection === "contactus" ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </span>
              )}
            </p>
            <div
              className={`footer-content-dropdown ${
                openSection === "contactus" || !isMobile ? "active" : ""
              }`}
            >
              <Link to="/" className="footer-phone">
                <FaPhone className="phone-icon" />
                +91 9790782986
              </Link>
              <Link to="/" className="footer-phone">
                <FaPhone className="phone-icon" />
                +91 6381659676
              </Link>
              <Link to="/" className="footer-phone">
                <IoMailSharp className="phone-icon" />
                info@bizcraft.in
              </Link>
            </div>
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
