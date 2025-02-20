import React from "react";
import Header from "../components/Header";
import "../styles/Contact Us.css";
import location from "../assests/location.png";
import mail from "../assests/mail.png";
import phone from "../assests/phone.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Button, Form, Input } from "antd";
import project from "../assests/project.png";
import enquiry from "../assests/enquiry.png";
import support from "../assests/support.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div>
      <Header />

      <div
        style={{
          margin: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: "#FFFFFF",
          }}
        >
          Contact Us
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "27px",
            color: "#FFFFFF",
            opacity: "80%",
            width: "80%",
          }}
        >
          Reach out to BizCraft for expert solutions and collaborations. Contact
          us today to discuss your unique requirements and discover how our
          innovative team can help propel your business forward.
        </p>
      </div>

      <div style={{ margin: "10% 5%", display: "flex", gap: "30px" }}>
        <div
          style={{
            width: "100%",
            border: "1px dashed #FFFFFF80",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
            padding: "3%",
            gap: "10px",
          }}
        >
          <img src={location} alt="location" width="60px" height="60px" />
          <p style={{ fontSize: 18, fontWeight: 600 }}>Location Address:</p>
          <Link
            to="/"
            style={{
              fontSize: 16,
              fontWeight: 400,
              opacity: "80%",
              width: "75%",
              textAlign: "center",
              lineHeight: "32px",
            }}
          >
            #31/13, 2nd Floor, Burkit Rd, Near CANARA BANK, CIT Nagar East,
            Chennai, Tamil Nadu 600017.
          </Link>
        </div>
        <div
          style={{
            width: "100%",
            border: "1px dashed #FFFFFF80",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
            padding: "3%",
            gap: "10px",
          }}
        >
          <img src={mail} alt="mail" width="60px" height="60px" />
          <p style={{ fontSize: 18, fontWeight: 600 }}>Email Address:</p>
          <Link
            to="/"
            style={{ fontSize: 16, fontWeight: 400, opacity: "80%", margin: 0 }}
          >
            info@bizcraft.in
          </Link>
          <Link
            to="/"
            style={{ fontSize: 16, fontWeight: 400, opacity: "80%" }}
          >
            info@bizcraft.in
          </Link>
        </div>
        <div
          style={{
            width: "100%",
            border: "1px dashed #FFFFFF80",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
            padding: "3%",
            gap: "10px",
          }}
        >
          <img src={phone} alt="phone" width="60px" height="60px" />
          <p style={{ fontSize: 18, fontWeight: 600 }}>Phone Number</p>
          <Link
            to="/"
            style={{ fontSize: 16, fontWeight: 400, opacity: "80%", margin: 0 }}
          >
            +91 9790782986
          </Link>
          <Link
            to="/"
            style={{ fontSize: 16, fontWeight: 400, opacity: "80%" }}
          >
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
          <div
            style={{
              width: "100%",
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "10%",
            }}
          >
            <p className="contactus-heading">Get In Touch</p>
            <p
              style={{
                fontSize: 34,
                fontWeight: 600,
                lineHeight: "48px",
                color: " #FFFFFF",
                textTransform: "capitalize",
                width: "60%",
              }}
            >
              Feel Free to reach out and Connect us!
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "22px",
                color: " #FFFFFF",
                opacity: "80%",
                width: "80%",
                textTransform: "capitalize",
              }}
            >
              Unlock the potential of your digital presence by reaching out to
              us! For more information on our tailored digital solutions or to
              discuss your project, don't hesitate to contact Biz Craft. Whether
              through phone, email, or our convenient contact form, our team is
              ready to assist you.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                lineHeight: "21px",
                color: " #FFFFFF",
              }}
            >
              Follow US On Social Media:
            </p>
            <div className="contactus-nav">
              <div
                style={{
                  backgroundColor: "#7453AF",
                  width: "46px",
                  height: "46px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link>
                  <FaFacebook className="contactus-icon" />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#7453AF",
                  width: "46px",
                  height: "46px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link>
                  <FaLinkedin className="contactus-icon" />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#7453AF",
                  width: "46px",
                  height: "46px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link>
                  <IoLogoYoutube className="contactus-icon" />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#7453AF",
                  width: "46px",
                  height: "46px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link>
                  <LuInstagram className="contactus-icon" />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#7453AF",
                  width: "46px",
                  height: "46px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link>
                  <FaXTwitter className="contactus-icon" />
                </Link>
              </div>
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
