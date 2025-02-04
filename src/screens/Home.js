import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Button } from "antd";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import img8 from "../assests/img8.png";
import img9 from "../assests/img9.png";
import img10 from "../assests/img10.png";
import img11 from "../assests/img11.png";
import figma from "../assests/figma.png";
import ps from "../assests/ps.png";
import xd from "../assests/xd.png";
import ai from "../assests/ai.png";
import pro from "../assests/pro.png";
import sketch from "../assests/sketch.png";
import invision from "../assests/in.png";
import bal from "../assests/bal.png";
import logistic from "../assests/logistic.png";
import sports from "../assests/sports.png";
import ecommerce from "../assests/ecommerce.png";
import media from "../assests/media.png";
import education from "../assests/education.png";
import banking from "../assests/banking.png";
import startup from "../assests/startup.png";
import travel from "../assests/travel.png";
import CountUp from "react-countup";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "../styles/Home.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeCategory, setActiveCategory] = useState("UI/UX DESIGN");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [startCountTop, setStartCountTop] = useState(false);
  const [startCountBottom, setStartCountBottom] = useState(false);
  const statsTopRef = useRef(null);
  const statsBottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCountTop(true);
          } else {
            setStartCountTop(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsTopRef.current) {
      observer.observe(statsTopRef.current);
    }

    return () => {
      if (statsTopRef.current) {
        observer.unobserve(statsTopRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCountBottom(true);
          } else {
            setStartCountBottom(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsBottomRef.current) {
      observer.observe(statsBottomRef.current);
    }

    return () => {
      if (statsBottomRef.current) {
        observer.unobserve(statsBottomRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "UI/UX Design",
      description: [
        "User Experience Design",
        "User Interface Design",
        "Interaction Design",
        "Digital Prototyping",
        "Illustrations And Iconography",
      ],
      image: img8,
    },
    {
      title: "Web Design",
      description: [
        "Corporate Web Design",
        "Web Design For Startup",
        "Web Redesigning",
        "Landing Page Design",
        "Website Maintenance",
      ],
      image: img9,
    },
    {
      title: "Web Development",
      description: [
        "Custom Web Development",
        "Dynamic Web Development",
        "PHP Development",
        "CodeIgniter Development",
        "MERN Stack",
      ],
      image: img10,
    },
  ];

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow custom-arrow-left" onClick={onClick}>
        <IoIosArrowRoundBack />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow custom-arrow-right" onClick={onClick}>
        <IoIosArrowRoundForward />
      </button>
    );
  };

  const categories = [
    "UI/UX DESIGN",
    "WEB DESIGN",
    "WEB DEVELOPMENT",
    "MOBILE APP",
    "CMS",
    "E-COMMERCE",
  ];

  const technologies = {
    "UI/UX DESIGN": [
      { name: "Figma", icon: figma },
      { name: "Photoshop", icon: ps },
      { name: "Adobe Xd", icon: xd },
      { name: "Illustrator", icon: ai },
      { name: "Protopie", icon: pro },
      { name: "Sketch", icon: sketch },
      { name: "Balsamiq", icon: bal },
      { name: "Invision", icon: invision },
    ],
    "WEB DESIGN": [
      { name: "Figma", icon: figma },
      { name: "Adobe Xd", icon: xd },
      { name: "Photoshop", icon: ps },
    ],
    "WEB DEVELOPMENT": [
      { name: "Illustrator", icon: ai },
      { name: "Protopie", icon: pro },
      { name: "Sketch", icon: sketch },
    ],
    "MOBILE APP": [
      { name: "Balsamiq", icon: bal },
      { name: "Invision", icon: invision },
    ],
    CMS: [{ name: "Figma", icon: figma }],
    "E-COMMERCE": [
      { name: "Adobe Xd", icon: xd },
      { name: "Sketch", icon: sketch },
    ],
  };
  const industries = [
    { name: "Media", icon: media },
    { name: "Banking", icon: banking },
    { name: "Education", icon: education },
    { name: "E-commerce", icon: ecommerce },
    { name: "Startup", icon: startup },
    { name: "Sport", icon: sports },
    { name: "Travel", icon: travel },
    { name: "Logistic", icon: logistic },
  ];
  return (
    <div>
      <Header />
      <div style={{ display: "flex", margin: "0 5%" }}>
        <div
          style={{
            marginTop: "4%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <p
            style={{
              fontSize: 52,
              fontWeight: 600,
              color: "#ffffff",
              width: "150%",
              marginBottom: 0,
              lineHeight: "72.8px",
            }}
          >
            Expand Your Creative Horizons with Smart{" "}
            <span style={{ color: "#7453AF" }}>Digital Agency</span>
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#ffffff",
              width: "100%",
              lineHeight: "28px",
            }}
          >
            Any successful approach starts with ideas and designs, and we
            collaborate with experts in this field.
          </p>
          <Button
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
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            ref={statsTopRef}
          >
            <div className="stat-item">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                WORKS DONE
              </p>
              <p
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                }}
              >
                <CountUp start={0} end={startCountTop ? 45 : 0} duration={2} />+
              </p>
            </div>
            <div className="stat-item">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                HAPPY CLIENTS
              </p>
              <p
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                }}
              >
                <CountUp start={0} end={startCountTop ? 30 : 0} duration={2} />+
              </p>
            </div>
            <div className="stat-item">
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                EXPERIENCE
              </p>
              <p
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                }}
              >
                <CountUp start={0} end={startCountTop ? 3 : 0} duration={2} />+
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={img1}
            alt="cus"
            style={{
              width: "850px",
              height: "813px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          margin: "-164px 5% 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 5%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <img src={img2} alt="" width="148px" height="100px" />
        <img src={img3} alt="" width="138px" height="93px" />
        <img src={img4} alt="" width="197px" height="133px" />
        <img src={img5} alt="" width="191px" height="121px" />
        <img src={img6} alt="" width="148px" height="100px" />
        <img src={img7} alt="" width="195px" height="132px" />
      </div>

      <div
        style={{
          background: `
          linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 30%, #FFFFFF12 100%),
          linear-gradient(-135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 20%, #FFFFFF12 100%)
        `,
          paddingTop: "10%",
          paddingBottom: "2%",
          marginTop: "-5%",
        }}
      >
        <p
          style={{
            color: "#7453AF",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 20,
          }}
        >
          SERVICES
        </p>
        <div
          style={{
            display: "flex",
            margin: "5%",
          }}
        >
          <p
            style={{
              color: "#FFFFFF",
              fontSize: 34,
              fontWeight: 600,
              lineHeight: "46.3px",
            }}
          >
            We Provide Wide Range Of Digital Services
          </p>
          <div style={{ width: "75%" }}>
            <Carousel
              dotListClass="custom-dots"
              showDots={!isDesktop}
              swipeable={true}
              customLeftArrow={isDesktop ? <CustomLeftArrow /> : null}
              customRightArrow={isDesktop ? <CustomRightArrow /> : null}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carousel-item-padding"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 768,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 768,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              sliderClass=""
              slidesToSlide={1}
            >
              {services.map((service, index) => (
                <div key={index} className="testimonial-card1">
                  <img
                    src={service.image}
                    width="81px"
                    height="81px"
                    alt={service.title}
                  />

                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </p>
                  <ul
                    style={{
                      color: "#FFFFFF",
                      listStyleType: "disc",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {service.description.map((desc, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "5%",
        }}
      >
        <p
          style={{
            color: "#7453AF",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 10,
          }}
        >
          TECHNOLOGIES
        </p>
        <p
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
          }}
        >
          Technologies We Work With
        </p>

        {/* Category Buttons */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
            width: "100%",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                backgroundColor:
                  activeCategory === category ? "#7453AF" : "#020331",
                borderRadius: "108px",
                width: "134px",
                height: "55px",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginTop: "5%",
          }}
        >
          {technologies[activeCategory].map((tech, index) => (
            <div
              className="technology-card"
              key={index}
              style={{
                backgroundColor: "#FFFFFF1F",
                borderRadius: "16px",
                padding: "1% 2.5%",
                textAlign: "center",
                marginTop: index % 2 === 0 ? "0px" : "4%",
                height: "fit-content",
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                style={{ width: "76px", height: "76px" }}
              />
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          //   background: `
          //   linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 30%, #FFFFFF12 100%),
          //   linear-gradient(-135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 20%, #FFFFFF12 100%)
          // `,
          backgroundColor: "#11123D",
          display: "flex",
          padding: "5%",
        }}
      >
        <div>
          <img
            src={img11}
            alt=""
            style={{
              width: "796px",
              height: "705px",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ marginTop: "5%" }}>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 15,
              color: "#7453AF",
            }}
          >
            ABOUT US
          </p>
          <p
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#ffffff",
              width: "80%",
              lineHeight: "56px",
            }}
          >
            <span style={{ color: "#7453AF" }}>Biz Craft</span> A Smart Creative
            Digital Agency
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#ffffff",
              width: "100%",
              opacity: "80%",
              lineHeight: "28px",
            }}
          >
            We are presenting to you an advanced range of digital solutions for
            businesses of all sizes. From branding to web development, we have
            the expertise and experience to help you achieve your business
            goals. Our team is dedicated to delivering innovative and effective
            ways that drive the online presence of your business.
          </p>
          <div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
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
              <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF" }}>
                Digital Creative Agency
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
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
              <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF" }}>
                Professional Problem Solutions
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
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
              <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF" }}>
                Web Design & Development
              </p>
            </div>
          </div>
          <Button
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

      <div
        style={{
          margin: "5%",
        }}
      >
        <p
          style={{
            color: "#7453AF",
            textAlign: "center",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 10,
          }}
        >
          INDUSTRIES
        </p>
        <p
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: "56px",
          }}
        >
          Our Solutions Meet
          <br /> The Digital Requirements Of These Industries
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginTop: "5%",
          }}
        >
          {industries.map((indus, index) => (
            <div
              className="technology-card"
              key={index}
              style={{
                backgroundColor: "#FFFFFF1F",
                borderRadius: "16px",
                padding: "20px 26px",
                textAlign: "center",
                marginTop: index % 2 === 0 ? "0px" : "8%",
                height: "fit-content",
              }}
            >
              <img
                src={indus.icon}
                alt={indus.name}
                style={{ width: "50%", height: "auto" }}
              />
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {indus.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "3%",
          background: `
            linear-gradient(90deg, 
              rgba(9, 5, 55, 1) 0%,   /* Blue on the left */
              rgba(255, 255, 255, 0.1) 50%, /* White in the center */
              rgba(9, 5, 55, 1) 100%  /* Blue on the right */
            )
          `,
        }}
        ref={statsBottomRef}
      >
        <div className="stat-item">
          <p
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            <CountUp start={0} end={startCountBottom ? 100 : 0} duration={2} />+
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Successful Projects
          </p>
        </div>
        <div className="stat-item">
          <p
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            <CountUp start={0} end={startCountBottom ? 8 : 0} duration={2} />+
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Countries Served
          </p>
        </div>
        <div className="stat-item">
          <p
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            <CountUp start={0} end={startCountBottom ? 10 : 0} duration={2} />+
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Years of Expertise
          </p>
        </div>
        <div className="stat-item">
          <p
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            <CountUp start={0} end={startCountBottom ? 95 : 0} duration={2} />%
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Client Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}
