import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import "../styles/Header.css";
import headerlogo from "../assests/headerlogo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const solutionsItems = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        1st menu item
      </a>
    ),
  },
];

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-logo">
        <img src={headerlogo} alt="logo" />
      </div>
      <div className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
        <Dropdown
          menu={{
            items: solutionsItems,
          }}
          onOpenChange={(open) => setSolutionsOpen(open)}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="nav-link">
              Solutions
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                {solutionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </Space>
          </a>
        </Dropdown>
        {/* <Link to="/services" className="nav-link">
          Services
        </Link> */}
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/contact-us" className="nav-link">
          Contact Us
        </Link>
      </div>
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
    </div>
  );
}
