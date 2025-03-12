import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Card, Input, Form } from "antd";
import webdevelopment from "../assests/webdevelopment.png";
import "../styles/Webdevelopment.css";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import custom from "../assests/custom.png";
import responsive from "../assests/responsive.png";
import scalable from "../assests/scalable.png";
import seo from "../assests/seo.png";
import delivery from "../assests/delivery.png";
import maintenance from "../assests/maintenance.png";
import mobile from "../assests/mobile.png";
import Testing from "../assests/Testing.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import project from "../assests/project.png";
import enquiry from "../assests/enquiry.png";
import support from "../assests/support.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import quote from "../assests/quote.png";
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
import img13 from "../assests/img13.png";
import img14 from "../assests/img14.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import works from "../assests/works.png";

export default function Webdevelopment() {
  const services = [
    {
      id: 1,
      image: custom,
      title: "Custom Solutions",
      description:
        "Every business is unique, and so are our websites. We craft tailor-made solutions to suit your goals.",
    },
    {
      id: 2,
      image: responsive,
      title: "Responsive Design",
      description:
        "We ensure your website looks and performs flawlessly on all devices—desktop, tablet, or mobile.",
    },
    {
      id: 3,
      image: scalable,
      title: "Scalable Architecture",
      description:
        "Our websites are built to grow with your business, ensuring flexibility and scalability.",
    },
    {
      id: 4,
      image: seo,
      title: "SEO-Optimized",
      description:
        "From day one, we incorporate search engine optimization practices to enhance your website’s visibility.",
    },
    {
      id: 5,
      image: delivery,
      title: "Timely Delivery",
      description:
        "We stick to deadlines and deliver projects on time without compromising quality.",
    },
    {
      id: 6,
      image: maintenance,
      title: "Ongoing Support & Maintenance",
      description:
        "Our relationship doesn’t end at launch. We provide continuous support to keep your website running smoothly.",
    },
  ];
  const webservices = [
    {
      id: 1,
      image: mobile,
      title: "Custom Website Development",
      description:
        "Tailored websites built to reflect your brand identity and captivate your audience.",
    },
    {
      id: 2,
      image: mobile,
      title: "CMS Development",
      description:
        "Easily manage your content with powerful platforms like WordPress, Drupal, and Joomla.",
    },
    {
      id: 3,
      image: mobile,
      title: "E-Commerce Solutions",
      description:
        "Create seamless online shopping experiences with secure, feature-rich e-commerce platforms.",
    },
    {
      id: 4,
      image: mobile,
      title: "Web Application Development",
      description:
        "Build dynamic, scalable web applications that drive efficiency and engagement.",
    },
    {
      id: 5,
      image: mobile,
      title: "API Integration & Development",
      description:
        "Enhance your website with custom APIs for seamless integration with third-party services.",
    },
    {
      id: 6,
      image: mobile,
      title: "Web Maintenance & Optimization",
      description:
        "Keep your website performing at its best with regular updates, security patches, and performance enhancements.",
    },
  ];
  const development = [
    {
      id: 1,
      image: Testing,
      title: "Discovery & Planning",
      description:
        "We start by understanding your goals, target audience, and competition to map out a strategy tailored to your business.",
    },
    {
      id: 2,
      image: Testing,
      title: "Design",
      description:
        "Our designers create wireframes and mockups to visualize your website’s structure and layout.",
    },
    {
      id: 3,
      image: Testing,
      title: "Development",
      description:
        "Our developers bring the designs to life using modern frameworks and technologies such as React, Angular, Laravel, and more.",
    },
    {
      id: 4,
      image: Testing,
      title: "Testing",
      description:
        "Every website undergoes rigorous testing for functionality, performance, and responsiveness across devices.",
    },
    {
      id: 5,
      image: Testing,
      title: "Deployment & Launch",
      description:
        "We deploy your website seamlessly and monitor its performance to ensure a smooth user experience.",
    },
    {
      id: 6,
      image: Testing,
      title: "Post-Launch Support",
      description:
        "Our team offers round-the-clock support to address any issues or updates you might need.",
    },
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
  const categories = [
    "UI/UX DESIGN",
    "WEB DESIGN",
    "WEB DEVELOPMENT",
    "MOBILE APP",
    "CMS",
    "E-COMMERCE",
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
          <p
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#7453AF",
              margin: 0,
            }}
          >
            Services . Web Develop Service
          </p>
          <p className="wd-title">
            Elevate Customer Engagement With{" "}
            <span className="highlight">Immersive Designs</span>
          </p>
          <p className="wd-description">
            We create user-centric designs that are contemporary, engaging, and
            functional.
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
        <div className="wdev-image">
          <img src={webdevelopment} alt="cus" />
        </div>
      </div>

      <div className="wd-brand-container">
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

      <div className="wdev-services-container">
        <p className="wd-services-heading">
          Why Choose <span className="highlight">BizCraft?</span>
        </p>
        <div className="whychoose-grid">
          {services.map((service) => (
            <Card key={service.id} className="whychoose-card">
              <img
                src={service.image}
                alt={service.title}
                className="whychoose-icon"
              />
              <p className="whychoose-card-title">{service.title}</p>
              <p className="whychoose-card-description">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="webdev-container">
        <div className="webdev-header">
          <p className="webdev-title">
            Our <span className="highlight">Web Development</span> Services
          </p>
          <p className="webdev-description">
            From small businesses to large enterprises, we offer web development
            services designed to elevate your brand and meet your unique goals.
          </p>
        </div>

        <div className="whychoose-grid">
          {webservices.map((webservice) => (
            <Card key={webservice.id} className="webservice-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="webservice-card-title">{webservice.title}</p>
                <img
                  src={webservice.image}
                  alt={webservice.title}
                  className="whychoose-icon"
                />
              </div>
              <p className="webservice-card-description">
                {webservice.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="wdev-services-container">
        <p className="wd-services-heading">
          Our <span className="highlight">Development</span> Process
        </p>
        <div className="whychoose-grid">
          {development.map((development) => (
            <Card key={development.id} className="development-card">
              <div className="development-number">{development.id}</div>
              <img
                src={development.image}
                alt={development.title}
                className="development-icon"
              />
              <p className="whychoose-card-title">{development.title}</p>
              <p className="whychoose-card-description">
                {development.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="technologies-container">
        <p className="technologies-title">TECHNOLOGIES</p>
        <p className="technologies-heading">Technologies We Work With</p>

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

        <div className="technologies-grid">
          {technologies[activeCategory].map((tech, index) => (
            <div
              className={`technology-card ${index % 2 === 0 ? "" : "odd-card"}`}
              key={index}
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
          Our Solutions Meet The Digital Requirements Of These Industries
        </p>
        <div className="industries-grid">
          {industries.map((indus, index) => (
            <div
              key={index}
              className={`industry-card scroll-animate ${
                index % 2 !== 0 ? "odd-industry" : ""
              }`}
            >
              <img
                src={indus.icon}
                alt={indus.name}
                className="industry-icon"
              />
              <p className="industry-name">{indus.name}</p>
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
