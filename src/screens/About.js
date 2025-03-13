import React, { useEffect, useRef, useState } from "react";
import { Button } from "antd";
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
import Header from "../components/Header";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import img13 from "../assests/img13.png";
import img14 from "../assests/img14.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import works from "../assests/works.png";
import { Form, Input } from "antd";
import project from "../assests/project.png";
import enquiry from "../assests/enquiry.png";
import support from "../assests/support.png";
import quote from "../assests/quote.png";

const expertFields = [
  {
    id: 1,
    title: "Creativity Unique Designers",
    description:
      "Our team comprises exceptionally creative and diverse designers who infuse fresh perspectives into their work. This commitment to innovation and uniqueness drives our ability to bring clients' visions to life, setting us apart in the dynamic realm of design and digital innovation.",
    image: cardD,
  },
  {
    id: 2,
    title: "UI/UX Crafters",
    description:
      "Our best graphic designing team design UI/UX easy-to-navigate with exceptional user experience considering the visual elements of a digital product, including layout, color schemes, typography, icons, and graphic elements.",
    image: cardU,
  },
  {
    id: 3,
    title: "Technology Coding Experts",
    description:
      "Our team of developers works closely with the customers to analyze, code, and execute. Our developers are known to build an application with outstanding technical expertise and profound knowledge.",
    image: cardD,
  },
  {
    id: 4,
    title: "Web Genius Whiz",
    description:
      "We have a dedicated and certified team for website development that focuses on every requirement of clients. We work on modules to deliver what is expected of the project to help build their business in the competitive world.",
    image: cardW,
  },
  {
    id: 5,
    title: "App Inventors",
    description:
      "Our application developers are proficient and professional in bringing your app ideas to life with precision and expertise. With our app developers, we design and develop intuitive applications that captivate users.",
    image: cardA,
  },
  {
    id: 6,
    title: "Branding Connoisseurs",
    description:
      "At BizCeaft, we have skilled digital marketers to take care of your website for you. From social media to content marketing, our talented team looks out for you and makes your business/product rank top in any SERP.",
    image: cardB,
  },
];

export default function About() {
  const statsBottomRef = useRef(null);
  const [startCountBottom, setStartCountBottom] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
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
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div>
      <Header />
      <div className="Container-a1">
        <img className="Employee-img-2" src={gradient} alt="cus" />

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
              backgroundColor: "#7453AF",
              borderRadius: "108px",
              color: "#FFFFFF",
              borderStyle: "none",
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>

      <div className="brand-container-a2">
        <div className="brand-marquee">
          <div className="brand-track">
            <img src={img2} alt="" className="brand-logo small" />
            <img src={img3} alt="" className="brand-logo small" />
            <img src={img4} alt="" className="brand-logo large" />
            <img src={img5} alt="" className="brand-logo large" />
            <img src={img6} alt="" className="brand-logo small" />
            <img src={img7} alt="" className="brand-logo large" />

            <img src={img2} alt="" className="brand-logo small" />
            <img src={img3} alt="" className="brand-logo small" />
            <img src={img4} alt="" className="brand-logo large" />
            <img src={img5} alt="" className="brand-logo large" />
            <img src={img6} alt="" className="brand-logo small" />
            <img src={img7} alt="" className="brand-logo large" />
          </div>
        </div>
      </div>

      <div className="container-a2">
        <img src={vector1} alt="vector" />
        <div className="a2-content">
          <p className="a2-title">Our Primary Focus Is On Technology</p>
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
              backgroundColor: "#7453AF",
              borderRadius: "108px",
              color: "#FFFFFF",
              borderStyle: "none",
            }}
          >
            LEARN MORE
          </Button>
        </div>
      </div>

      <div>
        <p className="expert-heading">We Are Expert In The Field</p>
        <div className="grid-container">
          {expertFields.map((expert) => (
            <div key={expert.id} className="card">
              <div className="card-header">
                <img
                  src={expert.image}
                  className="card-img"
                  alt={expert.title}
                />
                <p className="about-card-title">{expert.title}</p>
              </div>
              <p className="card-desc">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-container" ref={statsBottomRef}>
        <div className="stat-item">
          <p className="stats-number">
            <CountUp start={0} end={startCountBottom ? 100 : 0} duration={2} />+
          </p>
          <p className="stats-title">Successful Projects</p>
        </div>
        <div className="stat-item">
          <p className="stats-number">
            <CountUp start={0} end={startCountBottom ? 8 : 0} duration={2} />+
          </p>
          <p className="stats-title">Countries Served</p>
        </div>
        <div className="stat-item">
          <p className="stats-number">
            <CountUp start={0} end={startCountBottom ? 10 : 0} duration={2} />+
          </p>
          <p className="stats-title">Years of Expertise</p>
        </div>
        <div className="stat-item">
          <p className="stats-number">
            <CountUp start={0} end={startCountBottom ? 95 : 0} duration={2} />%
          </p>
          <p className="stats-title">Client Satisfaction</p>
        </div>
      </div>

      <div>
        <div className="technologies-container">
          <p className="testimonials-title">TESTIMONIALS</p>
          <p className="testimonials-heading">
            What’s Our Client Opinion About{" "}
            <span className="highlight">Biz Craft</span>
          </p>
          <p className="testimonials-client">
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
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="testimonial-user">
                  <img
                    src={testimonial.image}
                    className="testimonial-avatar"
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="testimonial-review">{testimonial.name}</p>
                    <p className="testimonial-designation">
                      {testimonial.designation}
                    </p>
                  </div>
                  <img src={quote} alt="quote" className="quote" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="work-section">
        <p className="faq-title">OUR WORKS</p>
        <div className="works-image-container">
          <img src={works} className="works-image" alt="" />

          <Button
            className="explore-portfolio-btn"
            style={{
              backgroundColor: "transparent",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            Explore Our Portfolio
          </Button>
        </div>
      </div>

      <div className="contact-container">
        <p className="faq-title">CONTACT US</p>
        <div className="contact-box">
          <p className="contact-heading">Get In Touch</p>
          <p className="contact-subtext">
            Call us today to Grow your business, products and boost your
            <br /> brand recognition.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <img src={project} alt="" className="contact-icon" />
                <div>
                  <p className="contact-label">Project Offers</p>
                  <p className="contact-detail">info@bizcraft.in</p>
                </div>
              </div>
              <div className="contact-item">
                <img src={enquiry} alt="" className="contact-icon" />
                <div>
                  <p className="contact-label">For Any Enquiry</p>
                  <p className="contact-detail">+91 9790782986</p>
                </div>
              </div>
              <div className="contact-item">
                <img src={support} alt="" className="contact-icon" />

                <div>
                  <p className="contact-label">For Technical Support</p>
                  <p className="contact-detail">+91 6381659676</p>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <Form
                layout="vertical"
                onFinish={onFinish}
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
                    <Input
                      placeholder="Contact Number"
                      className="form-input"
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
