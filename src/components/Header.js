import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import "../styles/Header.css";
import headerlogo from "../assests/headerlogo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import hamburger from "../assests/hamburger.png";
import text from "../assests/text.png";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const solutionsItems = [
    {
      key: "1",
      label: "UI/UX",
      onClick: () => navigate("/ui-ux-design"),
    },
    {
      key: "2",
      label: "Web Design",
      onClick: () => navigate("/web-design"),
    },
    {
      key: "3",
      label: "Web Development",
      onClick: () => navigate("/web-development"),
    },
    {
      key: "4",
      label: "E-Commerce",
      path: "/contact",
    },
    {
      key: "5",
      label: "Mobile App",
      path: "/contact",
    },
    {
      key: "6",
      label: "Digital Marketing",
      path: "/contact",
    },
  ];

  return (
    <div className="header">
      <div className="header-logo">
        <img src={headerlogo} alt="logo" />
      </div>

      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={30} />
          ) : (
            <img
              src={text}
              alt="hamburger"
              // style={{
              //   width: "30px",
              //   height: "30px",
              //   filter: "brightness(1) invert(1)",
              // }}
            />
          )}
        </div>
      )}

      <div className={`header-nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/about-us"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Dropdown
          menu={{
            items: solutionsItems,
          }}
          onOpenChange={(open) => setSolutionsOpen(open)}
        >
          <a onClick={(e) => e.preventDefault()} className="nav-link">
            <Space
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Services
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {solutionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </Space>
          </a>
        </Dropdown>

        <Link
          to="/blog"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="/contact-us"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
        {isMobile && menuOpen && (
          <div>
            <Button
              style={{
                fontSize: 14,
                fontWeight: 600,
                backgroundColor: "#FFFFFF1F",
                borderRadius: "108px",
                width: "134px",
                height: "44px",
                color: "#FFFFFF",
                borderStyle: "none",
              }}
            >
              <BiSolidPhoneCall style={{ width: "24px", height: "24px" }} />
              CALL US
            </Button>
          </div>
        )}
      </div>

      {!isMobile && (
        <div>
          <Button
            style={{
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: "#FFFFFF1F",
              borderRadius: "108px",
              width: "134px",
              height: "44px",
              color: "#FFFFFF",
              borderStyle: "none",
            }}
          >
            <BiSolidPhoneCall style={{ width: "24px", height: "24px" }} />
            CALL US
          </Button>
        </div>
      )}
    </div>
  );
}
