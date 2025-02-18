import React from "react";
import Header from "../components/Header";
import "../styles/Contact Us.css";
import location from "../assests/location.png";
import mail from "../assests/mail.png";
import phone from "../assests/phone.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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

      <Footer />
    </div>
  );
}
