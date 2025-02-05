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
import img13 from "../assests/img13.png";
import img14 from "../assests/img14.png";
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
import project from "../assests/project.png";
import enquiry from "../assests/enquiry.png";
import support from "../assests/support.png";
import works from "../assests/works.png";
import CountUp from "react-countup";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "../styles/Home.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { BiSolidPhoneCall } from "react-icons/bi";
import Faq from "../components/Faq";
import { Form, Input } from "antd";
import Footer from "../components/Footer";

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

  const TestimonialLeftArrow = ({ onClick }) => {
    return (
      <button
        className=" testimonial-arrow testimonial-arrow-left"
        onClick={onClick}
      >
        <IoIosArrowRoundBack />
      </button>
    );
  };

  const TestimonialRightArrow = ({ onClick }) => {
    return (
      <button
        className="testimonial-arrow testimonial-arrow-right"
        onClick={onClick}
      >
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
  const testimonials = [
    {
      review:
        "I can't thank Biz Craft enough for their outstanding service. They transformed my small business into a digital powerhouse with a beautiful website, effective SEO, and a tailored social media strategy. My online sales have never been better!",
      image: img14,
      name: "Emily W.",
      designation: "Marketing Director at ABC Corporation",
    },
    {
      review:
        "Working with Biz Craft has been a game-changer for our business. Their digital solutions have increased our online presence, improved user engagement, and ultimately boosted our revenue. I highly recommend their expertise!",
      image: img13,
      name: "Sarah L.",
      designation: "Marketing Director at ABC Corporation",
    },
    {
      review:
        "Our collaboration with Biz Craft has been nothing short of exceptional. Their team's creativity and technical prowess have elevated our digital marketing efforts to new heights. They consistently deliver results beyond our expectations.",
      image: img14,
      name: "Dr. James R.",
      designation: "Marketing Director at ABC Corporation",
    },
  ];

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  return (
    <div>
      <Header />
      <div style={{ display: "flex", margin: "0 5%" }}>
        <div className="layer1">
          <svg
            width="214"
            height="109"
            viewBox="0 0 214 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M1.00014 1.02337C11.6992 6.77818 23.251 5.51691 34.4685 5.92684C49.4381 6.47464 64.5323 10.1996 79.023 16.9223C88.9082 21.5058 100.231 30.655 100.532 44.3737C100.823 57.7412 88.0184 65.7227 79.0532 58.9255C70.0861 52.1299 66.95 35.1158 71.2858 23.5807C75.6215 12.0457 85.7828 6.1775 95.741 6.85082C105.698 7.52156 115.383 13.862 123.734 22.0533C139.093 37.1221 150.578 58.2246 164.181 76.1582C177.786 94.0902 195.414 109.673 213.543 108.055"
              stroke="white"
              stroke-miterlimit="10"
              stroke-dasharray="5 5"
            />
          </svg>
        </div>
        <div
          style={{
            marginTop: "4%",
            display: "flex",
            flexDirection: "column",
            gap: 30,
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
          <div style={{ width: "75%" }} className="carousel-hidden">
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
          position: "relative",
        }}
      >
        <div className="layer2">
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                display: "flex",
                gap: 10,
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
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginTop: "none",
                }}
              >
                Digital Creative Agency
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
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
          margin: "7% 0%",
          background: `
            linear-gradient(90deg, 
              rgba(9, 5, 55, 1) 0%, 
              rgba(255, 255, 255, 0.1) 50%,
              rgba(9, 5, 55, 1) 100%  
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

      <div>
        <div style={{ margin: "5%" }}>
          <p
            style={{
              color: "#7453AF",
              fontSize: 24,
              fontWeight: 600,
              lineHeight: "32px",
              letterSpacing: 10,
            }}
          >
            TESTIMONIALS
          </p>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: 34,
              fontWeight: 600,
              lineHeight: "46.3px",
            }}
          >
            What’s Our Client Opinion About{" "}
            <span
              style={{
                color: "#7453AF",
              }}
            >
              Biz Craft
            </span>
          </p>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              fontWeight: 500,
              opacity: "80%",
              marginBottom: "-10%",
            }}
          >
            Over 450<sup>+</sup> Satisfied Clients And Growing
          </p>
        </div>
        <div style={{ position: "relative" }} className="carousel-hidden">
          <Carousel
            dotListClass="custom-dots"
            showDots={!isDesktop}
            swipeable={true}
            customLeftArrow={isDesktop ? <TestimonialLeftArrow /> : null}
            customRightArrow={isDesktop ? <TestimonialRightArrow /> : null}
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card2">
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#FFFFFF",
                  }}
                >
                  {testimonial.review}
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                  <img
                    src={testimonial.image}
                    width="70px"
                    height="70px"
                    alt={testimonial.name}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#FFFFFF",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#ffffff",
                      }}
                    >
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div
        style={{
          margin: "10% 5%",
          padding: "5%",
          borderRadius: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "#43355D",
          // background: `
          //   linear-gradient(
          //     90deg,
          //     rgba(9, 5, 55, 1) -3%,
          //     rgba(150, 119, 202, 0.5) 30%,
          //     rgba(255, 255, 255, 0.20) 40%,
          //     rgba(116, 83, 175, 0.5) 60%,
          //     rgba(9, 5, 55, 1) 92%
          //   )
          // `,
          background: `
          linear-gradient(
            135deg, 
            rgba(116, 83, 175, 0.2) 0%, /* Purple at 70% opacity */
            rgba(116, 83, 175, 0.4) 40%, /* Lighter Purple */
            rgba(255, 255, 255, 0.1) 60%, /* Light transparency */
            rgba(9, 5, 55, 1) 100% /* Deep Blue */
          )
        `,
        }}
      >
        <p style={{ fontSize: 34, fontWeight: 600, color: "#FFFFFF" }}>
          Still Looking For Digital Agency Company?
        </p>
        <Button
          style={{
            fontSize: 14,
            fontWeight: 600,
            backgroundColor: "#FFFFFF",
            borderRadius: "108px",
            width: "134px",
            height: "44px",
            color: "#020331",
            borderStyle: "none",
          }}
        >
          <BiSolidPhoneCall style={{ width: "24px", height: "24px" }} />
          CALL US
        </Button>
      </div>

      <div
        style={{
          margin: "10% 0%",
        }}
      >
        <p
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#7453AF",
            letterSpacing: 10,
            textAlign: "center",
          }}
        >
          FAQ
        </p>
        <p
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Find Answers For Commonly Asked Questions, Here
        </p>
        <Faq />
      </div>

      <div>
        <p
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#7453AF",
            letterSpacing: 10,
            textAlign: "center",
          }}
        >
          OUR WORKS
        </p>
        <div
          style={{
            margin: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={works} width="100%" height="100%" alt="" />

          <Button
            style={{
              position: "absolute",
              zIndex: 1,
              fontSize: 22,
              fontWeight: 400,
              backgroundColor: "transparent",
              borderRadius: "8px",
              width: "377px",
              height: "70px",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
            }}
          >
            Explore Our Portfolio
          </Button>
        </div>
      </div>

      <div style={{ margin: "10% 0%" }}>
        <p
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#7453AF",
            letterSpacing: 10,
            textAlign: "center",
          }}
        >
          CONTACT US
        </p>
        <div
          style={{
            margin: "5%",
            padding: "5% 0%",
            borderRadius: "40px",
            backgroundColor: "#11123d",
          }}
        >
          <p
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Get In Touch
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: "28px",
              textAlign: "center",
            }}
          >
            Call us today to Grow your business, products and boost your
            <br /> brand recognition.
          </p>
          <div style={{ display: "flex", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                margin: "5%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <img src={project} alt="" width="44px" height="44px" />
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Project Offers
                  </p>
                  <p
                    style={{ fontSize: 16, fontWeight: 400, color: "#FFFFFF" }}
                  >
                    info@bizcraft.in
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <img src={enquiry} alt="" width="44px" height="44px" />
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    For Any Enquiry
                  </p>
                  <p
                    style={{ fontSize: 16, fontWeight: 400, color: "#FFFFFF" }}
                  >
                    +91 9790782986
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <img src={support} alt="" width="44px" height="44px" />

                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    For Technical Support
                  </p>
                  <p
                    style={{ fontSize: 16, fontWeight: 400, color: "#FFFFFF" }}
                  >
                    +91 6381659676
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF1F",
                padding: "3%",
                borderRadius: "24px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                width: "60%",
                margin: "0 auto",
              }}
            >
              <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ width: "100%", color: "#FFFFFF" }}
              >
                <div style={{ display: "flex", gap: "16px" }}>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your first name!",
                      },
                    ]}
                    style={{ flex: 1 }}
                  >
                    <Input
                      placeholder="First Name"
                      style={{ height: "45px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name!",
                      },
                    ]}
                    style={{ flex: 1 }}
                  >
                    <Input placeholder="Last Name" style={{ height: "45px" }} />
                  </Form.Item>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                      { type: "email", message: "Please enter a valid email!" },
                    ]}
                    style={{ flex: 1 }}
                  >
                    <Input placeholder="E-mail" style={{ height: "45px" }} />
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
                    style={{ flex: 1 }}
                  >
                    <Input
                      placeholder="Contact Number"
                      style={{ height: "45px" }}
                    />
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
                    style={{ resize: "none" }}
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
