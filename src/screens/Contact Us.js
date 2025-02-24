import React from "react";
import Header from "../components/Header";
import "../styles/Contact Us.css";
import location from "../assests/location.png";
import mail from "../assests/mail.png";
import phone from "../assests/phone.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Button, Form, Input } from "antd";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  const socialMediaLinks = [
    { name: "Facebook", icon: <FaFacebook />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
    { name: "YouTube", icon: <IoLogoYoutube />, link: "#" },
    { name: "Instagram", icon: <LuInstagram />, link: "#" },
    { name: "Twitter", icon: <FaXTwitter />, link: "#" },
  ];

  return (
    <div>
      <Header />

      <div className="contact-header">
        <p className="contact-title">Contact Us</p>
        <p className="contact-description">
          Reach out to BizCraft for expert solutions and collaborations. Contact
          us today to discuss your unique requirements and discover how our
          innovative team can help propel your business forward.
        </p>
      </div>

      <div className="contact-details">
        <div className="contact-card">
          <img src={location} alt="location" className="contact-icon" />
          <p className="contact-label">Location Address:</p>
          <Link to="/" className="contact-link">
            #31/13, 2nd Floor, Burkit Rd, Near CANARA BANK, CIT Nagar East,
            Chennai, Tamil Nadu 600017.
          </Link>
        </div>
        <div className="contact-card">
          <img src={mail} alt="mail" className="contact-icon" />
          <p className="contact-label">Email Address:</p>
          <Link to="/" className="contact-link">
            info@bizcraft.in
          </Link>
          <Link to="/" className="contact-link">
            info@bizcraft.in
          </Link>
        </div>
        <div className="contact-card">
          <img src={phone} alt="phone" className="contact-icon" />
          <p className="contact-label">Phone Number</p>
          <Link to="/" className="contact-link">
            +91 9790782986
          </Link>
          <Link to="/" className="contact-link">
            +91 6381659676
          </Link>
        </div>
      </div>

      <div className="contact-container">
        <div className="contactus-box">
          <div className="contactus-form-container">
            <Form
              layout="vertical"
              // onFinish={onFinish}
              className="contact-form"
            >
              <div className="form-row">
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your first name!",
                    },
                  ]}
                  className="form-item"
                >
                  <Input placeholder="First Name" className="form-input" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your last name!",
                    },
                  ]}
                  className="form-item"
                >
                  <Input placeholder="Last Name" className="form-input" />
                </Form.Item>
              </div>
              <div className="form-row">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                  className="form-item"
                >
                  <Input placeholder="E-mail" className="form-input" />
                </Form.Item>
                <Form.Item
                  name="contactNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your contact number!",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Only numeric values are allowed!",
                    },
                  ]}
                  className="form-item"
                >
                  <Input placeholder="Contact Number" className="form-input" />
                </Form.Item>
              </div>
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Message..."
                  className="form-textarea"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "24px",
                    backgroundColor: "#7453AF",
                    border: "none",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  SUBMIT
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="contactus-info">
            <p className="contactus-heading">Get In Touch</p>
            <p className="contactus-subtitle">
              Feel Free to reach out and Connect us!
            </p>
            <p className="contactus-text">
              Unlock the potential of your digital presence by reaching out to
              us! For more information on our tailored digital solutions or to
              discuss your project, don't hesitate to contact Biz Craft. Whether
              through phone, email, or our convenient contact form, our team is
              ready to assist you.
            </p>
            <p className="social-label">Follow US On Social Media:</p>
            <div className="contactus-nav">
              {socialMediaLinks.map((item, index) => (
                <div key={index} className="social-icons">
                  <Link
                    to={item.link}
                    className="contactus-icon"
                    title={item.name}
                  >
                    {item.icon}
                  </Link>
                </div>
              ))}
              {/* <div className="social-icons">
                <Link>
                  <FaFacebook className="contactus-icon" />
                </Link>
              </div>
              <div className="social-icons">
                <Link>
                  <FaLinkedin className="contactus-icon" />
                </Link>
              </div>
              <div className="social-icons">
                <Link>
                  <IoLogoYoutube className="contactus-icon" />
                </Link>
              </div>
              <div className="social-icons">
                <Link>
                  <LuInstagram className="contactus-icon" />
                </Link>
              </div>
              <div className="social-icons">
                <Link>
                  <FaXTwitter className="contactus-icon" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.042003263787!2d80.2253517508507!3d13.034334527370943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675c20776c0d%3A0x1cb53c7de4f2091d!2sBiz%20Craft%20Creative%20Services!5e0!3m2!1sen!2sin!4v1740036116064!5m2!1sen!2sin"
        width="100%"
        height="400px"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer />
    </div>
  );
}
