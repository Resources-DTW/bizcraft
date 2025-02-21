import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import "../styles/Header.css";
import headerlogo from "../assests/headerlogo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigate = useNavigate();

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
      path: "/about",
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
          <a onClick={(e) => e.preventDefault()} className="nav-link">
            <Space>
              Services
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
