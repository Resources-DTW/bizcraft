import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Card, Form, Input } from "antd";
import serviceimg from "../assests/Serviceimg.png";
import "../styles/Webdesign.css";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import img8 from "../assests/img8.png";
import img9 from "../assests/img9.png";
import img10 from "../assests/img10.png";
import store from "../assests/store.png";
import app from "../assests/app.png";
import marketing from "../assests/marketing.png";
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
import { BiSolidPhoneCall } from "react-icons/bi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import img13 from "../assests/img13.png";
import img14 from "../assests/img14.png";
import quote from "../assests/quote.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import project from "../assests/project.png";
import enquiry from "../assests/enquiry.png";
import support from "../assests/support.png";

export default function WebDesign() {
  const services = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    {
      id: 4,
      title: "E-Commerce",
      description: [
        "Online store setup",
        "Payment gateway integration",
        "Inventory and order management",
        "Product Management",
        "Digital Marketing",
      ],
      image: store,
    },
    {
      id: 5,
      title: "Mobile App",
      description: [
        "Conceptualization and Planning",
        "Design and User Interface",
        "Development",
        "Testing and Quality",
        "Maintenance",
      ],
      image: app,
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: [
        "Search engine marketing (SEM)",
        "Google Ads",
        "Online advertising",
        "Content Marketing",
        "Email Marketing",
      ],
      image: marketing,
    },
  ];
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
  const [activeCard, setActiveCard] = useState(services[0].id);
  const [activeCategory, setActiveCategory] = useState("UI/UX DESIGN");
  const [isDesktop, setIsDesktop] = useState(true);

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
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Header />
      <div className="hero-container">
        <div className="hero-content">
          <p className="wd-title">
            Crafting Solutions for a Digital World with{" "}
            <span className="highlight">Digital Agency</span>
          </p>
          <p className="wd-description">
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
        <div className="service-image">
          <img src={serviceimg} alt="cus" />
        </div>
      </div>

      <div className="wd-brand-container">
        <img src={img2} alt="" className="brand-logo small" />
        <img src={img3} alt="" className="brand-logo small" />
        <img src={img4} alt="" className="brand-logo large" />
        <img src={img5} alt="" className="brand-logo large" />
        <img src={img6} alt="" className="brand-logo small" />
        <img src={img7} alt="" className="brand-logo large" />
      </div>

      <div className="services-container">
        <p className="services-title">SERVICES</p>
        <p className="wd-services-heading">
          We Provide Wide Range Of Digital Services
        </p>
        <div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`wd-testimonial-card1 ${
                  activeCard === service.id ? "active" : ""
                }`}
                onClick={() => setActiveCard(service.id)}
              >
                <img
                  src={service.image}
                  className="service-icon"
                  alt={service.title}
                />

                <p className="service-title">{service.title}</p>
                <ul className="service-list">
                  {service.description.map((desc, idx) => (
                    <li key={idx} className="service-item">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="technologies-container">
        <p className="technologies-title">TECHNOLOGIES</p>
        <p className="technologies-heading">Technologies We Work With</p>

        {/* Category Buttons */}
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="technologies-grid">
          {technologies[activeCategory].map((tech, index) => (
            <div
              className="technology-card"
              key={index}
              style={{ marginTop: index % 2 === 0 ? "0px" : "4%" }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="technology-icon"
              />
              <p className="technology-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="industries-container">
        <p className="technologies-title">INDUSTRIES</p>
        <p className="industries-heading">
          Our Solutions Meet
          <br /> The Digital Requirements Of These Industries
        </p>
        <div className="industries-grid">
          {industries.map((indus, index) => (
            <div
              key={index}
              className="industry-card scroll-animate"
              style={{
                marginTop: index % 2 === 0 ? "0px" : "8%",
              }}
            >
              <img
                src={indus.icon}
                alt={indus.name}
                className="industry-icon"
                style={{ width: "50%", height: "auto" }}
              />
              <p
                className="industry-name"
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

      <div>
        <div className="technologies-container">
          <p className="testimonials-title">TESTIMONIALS</p>
          <p className="testimonials-heading">
            What’s Our Client Opinion About{" "}
            <span className="highlight">Biz Craft</span>
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
                  <img src={quote} alt="quote" width="45px" height="40px" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="cta-container">
        <p className="cta-heading">Still Looking For Digital Agency Company?</p>
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
          <BiSolidPhoneCall className="cta-icon" />
          CALL US
        </Button>
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
