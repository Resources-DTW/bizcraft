import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Card, Form, Input } from "antd";
import "../styles/UiUxDesign.css";
import uiuxdesign from "../assests/uiuxdesign.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import bizcraft from "../assests/bizcraft.png";
import sound from "../assests/sound.png";
import agility from "../assests/agility.png";
import commitment from "../assests/commitment.png";
import analysis from "../assests/analysis.png";
import workshop from "../assests/workshop.png";
import search from "../assests/search.png";
import Faq from "../components/Faq";
import { BiSolidPhoneCall } from "react-icons/bi";
import project from "../assests/project.png";
import enquiry from "../assests/enquiry.png";
import support from "../assests/support.png";
import works from "../assests/works.png";
import discovery from "../assests/discovery.png";
import info from "../assests/info.png";
import ui from "../assests/ui.png";
import research from "../assests/research.png";
import prototype from "../assests/prototype.png";

export default function UiUxDesign() {
  const whyChooseData = [
    {
      id: 1,
      image: sound,
      title: "Sound Strategies, Based On Research",
      description:
        "We develop UX/UI strategies by analyzing your needs and challenges. Our designs benefit from an objective study of the product, users' aspirations, market segment, and the competition.",
    },
    {
      id: 2,
      image: agility,
      title: "Competence, Honed By Experience",
      description:
        "Our experience spans diverse industries and client needs. We constantly update our skills to master modern trends and design techniques to whip up distinctive and innovative ideas.",
    },
    {
      id: 3,
      image: commitment,
      title: "Agility And Commitment",
      description:
        "Our efforts are marked by diligence and commitment. Our agility and customer-oriented efforts turn client engagements into enduring relationships.",
    },
    {
      id: 4,
      image: agility,
      title: "Agility and Commitment",
      description:
        "Our efforts are marked by diligence and commitment. Our agility and customer-oriented efforts turn client engagements into enduring relationships.",
    },
  ];
  const uiuxSteps = [
    {
      id: 1,
      image: analysis,
      title: "Performance Analysis",
      description:
        "Our experts start the process with an analysis of the current website if you already have one. We evaluate how the content is presented and the effectiveness of the UI elements.",
    },
    {
      id: 2,
      image: workshop,
      title: "Discovery Workshop",
      description:
        "We help you establish user expectations and requirements. With this knowledge, we architect the website, aiming to address the needs holistically.",
    },
    {
      id: 3,
      image: search,
      title: "Research and Strategy",
      description:
        "We conduct exhaustive research to understand the target users, competitive strategies, and design trends in your industry. We strategize to create a robust and impactful website that is intelligible and credible.",
    },
  ];

  const timelineData = [
    {
      title: "DISCOVERY WORKSHOP",
      description:
        "With an in-depth study of the business goals, product positioning, end-user needs, and potential usability limitations, we define the scope of the project. This is followed by a detailed design plan.",
      image: discovery,
      position: "top",
    },
    {
      title: "INFORMATION ARCHITECTURE",
      description:
        "The information architecture evolves from the discovery workshop and research initiatives. We construct a design framework based on the data substantiated through research.",
      image: info,
      position: "top",
    },
    {
      title: "USER INTERFACE",
      description:
        "We blend aesthetically pleasing visual layouts with cleverly placed branding elements. We heighten the user experience while supplementing the marketing plans.",
      image: ui,
      position: "top",
    },
    {
      title: "RESEARCH AND EVALUATION",
      description:
        "We conduct a UX audit to evaluate the crucial components. With a detailed analysis of the user segment and competitive products, we formulate a well-grounded design strategy.",
      image: research,
      position: "bottom",
    },
    {
      title: "PROTOTYPING",
      description:
        "Precise and interactive prototypes make it easy for the client to evaluate the design. We prepare mockups for all core user-facing interfaces, offering both low-fidelity and high-fidelity options.",
      image: prototype,
      position: "bottom",
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
            Services . User Experience Design
          </p>
          <p className="wd-title">
            Elevate Customer Engagement With{" "}
            <span className="highlight">Immersive Designs</span>
          </p>
          <p className="wd-description">
            We create user-centric designs that are contemporary, engaging, and
            functional.
          </p>
          <div className="button-container">
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
        <div className="uiux-image">
          <img src={uiuxdesign} alt="cus" />
        </div>
      </div>

      <div className="uiux-brand-container">
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

      <div className="services-container">
        <p className="wd-services-heading">
          Why Choose <span className="highlight">BizCraft?</span>
        </p>
        <div className="uiux-services-content">
          <div>
            <img src={bizcraft} alt="" className="bizcraft-image" />
          </div>
          <div className="card-grid">
            {whyChooseData.map((item) => (
              <Card key={item.id} className="custom-card">
                <img src={item.image} alt={item.title} className="card-icon" />
                <p className="card-title">{item.title}</p>
                <p className="card-description">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="timeline-container">
        <h2 className="timeline-title">Our UX/UI Design Approach</h2>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${item.position}`}
                style={{ margin: "0 45px" }}
              >
                {item.position === "top" && (
                  <div className="timeline-circle top-circle">
                    <div className="circle"></div>
                  </div>
                )}
                <Card className="timeline-content">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-icon"
                  />
                  <p className="timeline-p">{item.title}</p>
                  <p className="timeline-description">{item.description}</p>
                </Card>
                {item.position === "bottom" && (
                  <div className="timeline-circle bottom-circle">
                    <div className="circle"></div>
                  </div>
                )}
                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="uiux-container">
        <p className="wd-services-heading">Our UX/UI Design Approach</p>
        <div className="uiux-card-container">
          {uiuxSteps.map((step) => (
            <Card key={step.id} className="uiux-card">
              <img src={step.image} alt={step.title} className="card-icon" />
              <p className="card-title">{step.title}</p>
              <p className="card-description">{step.description}</p>
            </Card>
          ))}
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

      {/* <div className="faq-container">
        <p className="faq-title">FAQ</p>
        <p className="faq-heading">
          Find Answers For Commonly Asked Questions, Here
        </p>
        <Faq />
      </div> */}

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
