import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Card } from "antd";
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
        <div className="wdev-image">
          <img src={webdevelopment} alt="cus" />
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

      <div style={{ backgroundColor: "#FFFFFF0A", padding: "5%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              fontSize: 34,
              fontWeight: 600,
              lineHeight: "46px",
              color: "#ffffff",
              width: "30%",
            }}
          >
            Our <span className="highlight">Web Development</span> Services
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              lineHeight: "25px",
              color: "#ffffff",
              width: "45%",
              opacity: "80%",
            }}
          >
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
      <Footer />
    </div>
  );
}
