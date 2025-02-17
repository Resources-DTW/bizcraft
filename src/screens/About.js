import React from "react";
import Header from "../components/Header";
import { Button, Card } from "antd";
import "../styles/About.css";
import Footer from "../components/Footer";
import gradient from "../assests/gradient.png";
import groupstar from "../assests/groupstar.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import img11 from "../assests/img11.png";
import cardA from "../assests/cardA.png";
import cardD from "../assests/cardD.png";
import cardB from "../assests/cardB.png";
import cardU from "../assests/cardU.png";
import cardW from "../assests/cardW.png";
import vector1 from "../assests/vector-about1.png";

export default function About() {
  return (
    <div>
      <Header />

      <div className="Container-a1">
        <img className="Employee-img-2" src={gradient} alt="cus" />
        {/* <img className="Employee-img-3" src={groupstar} alt="cus" /> */}

        <div className="Employee-img">
          <img className="Employee-img-1" src={groupstar} alt="cus" />
        </div>

        <div className="a1-content">
          <p className="a1-title">
            <span className="a1-highlight">Digital Partner </span>for Your Work
          </p>
          <p className="a1-description">
            Any successful approach starts with ideas and designs, and we
            collaborate with experts in this field.
          </p>
          <Button
            className="sparkle-text"
            style={{
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: "#7453AF",
              borderRadius: "108px",
              width: "134px",
              height: "55px",
              color: "#FFFFFF",
              borderStyle: "none",
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>

      <div className="brand-container-a2">
        <img src={img2} alt="" className="brand-logo small" />
        <img src={img3} alt="" className="brand-logo small" />
        <img src={img4} alt="" className="brand-logo large" />
        <img src={img5} alt="" className="brand-logo large" />
        <img src={img6} alt="" className="brand-logo small" />
        <img src={img7} alt="" className="brand-logo large" />
      </div>
      <div className="container-a2">
        <img src={vector1} alt="c" />
        <div className="a2-content">
          <p className="a2-title">Our primary focus is on technology</p>
        </div>
        <div className="a2-content-2">
          <p className="a2-subtitle">Take a closer look at our excellence</p>
          <p className="a2-description">
            In today's fast-paced and ever-evolving digital landscape, our
            commitment to innovation and progress stands as the foundation of
            our endeavors. We are dedicated to pushing the boundaries of
            technology and embracing the cutting edge of what is possible. With
            a relentless focus on technological advancements, we remain
            technological advancements, we remain
          </p>
        </div>
      </div>

      <div className="about-container-a3">
        <div className="layer2-a3">
          <svg
            width="263"
            height="163"
            viewBox="0 0 263 163"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.0698 153.125L21.2174 156.429L27.1384 140.056L39.0698 153.125Z"
              fill="#7453AF"
            />
            <path
              opacity="0.8"
              d="M36.1853 142.681C46.1165 135.684 50.1533 124.787 55.5355 114.936C62.7187 101.791 72.7994 89.9556 85.2917 79.9997C93.8113 73.207 107.058 67.1696 119.463 73.0345C131.55 78.7508 132.964 93.773 122.876 98.753C112.788 103.735 96.1673 98.9333 87.7881 89.8976C79.4088 80.8619 78.7031 69.1491 83.7578 60.5428C88.8096 51.9365 98.8112 46.1087 109.872 42.3012C130.218 35.3005 154.229 34.4628 176.352 30.3132C198.475 26.1613 220.295 17.3612 226.954 0.421551"
              stroke="white"
              stroke-miterlimit="10"
              stroke-dasharray="5 5"
            />
          </svg>
        </div>
        <div>
          <img src={img11} alt="" className="about-image-a3" />
        </div>
        <div className="about-content-a3">
          <p className="about-title-a3">ABOUT US</p>
          <p className="about-heading-a3">
            <span className="highlight-a3">Biz Craft</span> A Smart Creative
            Digital Agency
          </p>
          <p className="about-description-a3">
            We are presenting to you an advanced range of digital solutions for
            businesses of all sizes. From branding to web development, we have
            the expertise and experience to help you achieve your business
            goals. Our team is dedicated to delivering innovative and effective
            ways that drive the online presence of your business.
          </p>
          <div className="about-list-a3">
            <div className="about-item-a3">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2832 0.5C9.10761 0.5 6.98088 1.14514 5.17194 2.35383C3.36299 3.56253 1.9531 5.28049 1.12053 7.29048C0.287969 9.30047 0.0701326 11.5122 0.49457 13.646C0.919007 15.7798 1.96666 17.7398 3.50503 19.2782C5.04341 20.8166 7.00342 21.8642 9.13721 22.2886C11.271 22.7131 13.4827 22.4952 15.4927 21.6627C17.5027 20.8301 19.2207 19.4202 20.4294 17.6113C21.6381 15.8023 22.2832 13.6756 22.2832 11.5C22.2799 8.58363 21.1199 5.78765 19.0577 3.72546C16.9956 1.66328 14.1996 0.503295 11.2832 0.5ZM16.9341 9.25879L9.93409 15.2588C9.73419 15.4305 9.47456 15.5163 9.21172 15.4974C8.94888 15.4786 8.70413 15.3567 8.53077 15.1582L5.53077 11.7295C5.44393 11.6307 5.37742 11.5158 5.33506 11.3913C5.2927 11.2668 5.27532 11.1352 5.28392 11.004C5.29251 10.8728 5.32691 10.7445 5.38514 10.6266C5.44337 10.5087 5.5243 10.4035 5.62328 10.3169C5.72226 10.2303 5.83734 10.1641 5.96195 10.1221C6.08655 10.08 6.21823 10.063 6.34943 10.0719C6.48063 10.0809 6.60877 10.1156 6.72653 10.1741C6.84428 10.2327 6.94933 10.3139 7.03565 10.4131L9.3838 13.0967L15.6323 7.74121C15.732 7.65574 15.8475 7.59072 15.9722 7.54989C16.097 7.50905 16.2286 7.49319 16.3595 7.50321C16.4904 7.51323 16.6181 7.54894 16.7352 7.60829C16.8523 7.66764 16.9565 7.74947 17.042 7.84912C17.1275 7.94877 17.1925 8.06427 17.2333 8.18904C17.2742 8.31381 17.29 8.4454 17.28 8.5763C17.27 8.7072 17.2343 8.83485 17.1749 8.95195C17.1156 9.06905 17.0337 9.17332 16.9341 9.25879Z"
                  fill="#7453AF"
                />
              </svg>
              <p className="about-text-a3">Digital Creative Agency</p>
            </div>
            <div className="about-item-a3">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2832 0.5C9.10761 0.5 6.98088 1.14514 5.17194 2.35383C3.36299 3.56253 1.9531 5.28049 1.12053 7.29048C0.287969 9.30047 0.0701326 11.5122 0.49457 13.646C0.919007 15.7798 1.96666 17.7398 3.50503 19.2782C5.04341 20.8166 7.00342 21.8642 9.13721 22.2886C11.271 22.7131 13.4827 22.4952 15.4927 21.6627C17.5027 20.8301 19.2207 19.4202 20.4294 17.6113C21.6381 15.8023 22.2832 13.6756 22.2832 11.5C22.2799 8.58363 21.1199 5.78765 19.0577 3.72546C16.9956 1.66328 14.1996 0.503295 11.2832 0.5ZM16.9341 9.25879L9.93409 15.2588C9.73419 15.4305 9.47456 15.5163 9.21172 15.4974C8.94888 15.4786 8.70413 15.3567 8.53077 15.1582L5.53077 11.7295C5.44393 11.6307 5.37742 11.5158 5.33506 11.3913C5.2927 11.2668 5.27532 11.1352 5.28392 11.004C5.29251 10.8728 5.32691 10.7445 5.38514 10.6266C5.44337 10.5087 5.5243 10.4035 5.62328 10.3169C5.72226 10.2303 5.83734 10.1641 5.96195 10.1221C6.08655 10.08 6.21823 10.063 6.34943 10.0719C6.48063 10.0809 6.60877 10.1156 6.72653 10.1741C6.84428 10.2327 6.94933 10.3139 7.03565 10.4131L9.3838 13.0967L15.6323 7.74121C15.732 7.65574 15.8475 7.59072 15.9722 7.54989C16.097 7.50905 16.2286 7.49319 16.3595 7.50321C16.4904 7.51323 16.6181 7.54894 16.7352 7.60829C16.8523 7.66764 16.9565 7.74947 17.042 7.84912C17.1275 7.94877 17.1925 8.06427 17.2333 8.18904C17.2742 8.31381 17.29 8.4454 17.28 8.5763C17.27 8.7072 17.2343 8.83485 17.1749 8.95195C17.1156 9.06905 17.0337 9.17332 16.9341 9.25879Z"
                  fill="#7453AF"
                />
              </svg>
              <p className="about-text-a3">Professional Problem Solutions</p>
            </div>
            <div className="about-item-a3">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2832 0.5C9.10761 0.5 6.98088 1.14514 5.17194 2.35383C3.36299 3.56253 1.9531 5.28049 1.12053 7.29048C0.287969 9.30047 0.0701326 11.5122 0.49457 13.646C0.919007 15.7798 1.96666 17.7398 3.50503 19.2782C5.04341 20.8166 7.00342 21.8642 9.13721 22.2886C11.271 22.7131 13.4827 22.4952 15.4927 21.6627C17.5027 20.8301 19.2207 19.4202 20.4294 17.6113C21.6381 15.8023 22.2832 13.6756 22.2832 11.5C22.2799 8.58363 21.1199 5.78765 19.0577 3.72546C16.9956 1.66328 14.1996 0.503295 11.2832 0.5ZM16.9341 9.25879L9.93409 15.2588C9.73419 15.4305 9.47456 15.5163 9.21172 15.4974C8.94888 15.4786 8.70413 15.3567 8.53077 15.1582L5.53077 11.7295C5.44393 11.6307 5.37742 11.5158 5.33506 11.3913C5.2927 11.2668 5.27532 11.1352 5.28392 11.004C5.29251 10.8728 5.32691 10.7445 5.38514 10.6266C5.44337 10.5087 5.5243 10.4035 5.62328 10.3169C5.72226 10.2303 5.83734 10.1641 5.96195 10.1221C6.08655 10.08 6.21823 10.063 6.34943 10.0719C6.48063 10.0809 6.60877 10.1156 6.72653 10.1741C6.84428 10.2327 6.94933 10.3139 7.03565 10.4131L9.3838 13.0967L15.6323 7.74121C15.732 7.65574 15.8475 7.59072 15.9722 7.54989C16.097 7.50905 16.2286 7.49319 16.3595 7.50321C16.4904 7.51323 16.6181 7.54894 16.7352 7.60829C16.8523 7.66764 16.9565 7.74947 17.042 7.84912C17.1275 7.94877 17.1925 8.06427 17.2333 8.18904C17.2742 8.31381 17.29 8.4454 17.28 8.5763C17.27 8.7072 17.2343 8.83485 17.1749 8.95195C17.1156 9.06905 17.0337 9.17332 16.9341 9.25879Z"
                  fill="#7453AF"
                />
              </svg>
              <p className="about-text-a3">Web Design & Development</p>
            </div>
          </div>
          <Button
            className="sparkle-text"
            style={{
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: "#7453AF",
              borderRadius: "108px",
              width: "134px",
              height: "55px",
              color: "#FFFFFF",
              borderStyle: "none",
            }}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      <div>
        <img src={cardD} className="card-img" alt="d" />
        <p className="card-title">Creativity unique designers</p>
        <div>
          <p className="card-subtitle">
            Our team comprises exceptionally creative and diverse designers who
            infuse fresh perspectives into their work. This commitment to
            innovation and uniqueness drives our ability to bring clients'
            visions to life, setting us apart in the dynamic realm of design and
            digital innovation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
