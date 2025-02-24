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
        <div className="uiux-image">
          <img src={uiuxdesign} alt="cus" />
        </div>
      </div>

      <div className="uiux-brand-container">
        <img src={img2} alt="" className="brand-logo small" />
        <img src={img3} alt="" className="brand-logo small" />
        <img src={img4} alt="" className="brand-logo large" />
        <img src={img5} alt="" className="brand-logo large" />
        <img src={img6} alt="" className="brand-logo small" />
        <img src={img7} alt="" className="brand-logo large" />
      </div>

      <div className="services-container">
        <p className="wd-services-heading">
          Why Choose <span className="highlight">BizCraft?</span>
        </p>
        <div className="uiux-services-content">
          <div>
            <img src={bizcraft} alt="" className="bizcraft-image" />
          </div>
          {/* <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
            <div style={{ display: "flex", gap: 30 }}>
              <Card
                style={{
                  backgroundColor: "#FFFFFF14",
                  borderRadius: "16px",
                  width: "80%",
                  height: "260px",
                  borderStyle: "none",
                }}
              >
                <img
                  src={sound}
                  width="60px"
                  height="60px"
                  alt=""
                  style={{ marginTop: "-20%" }}
                />
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: " #FFFFFF",
                    width: "70%",
                  }}
                >
                  Sound Strategies, Based On Research
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: " #FFFFFF",
                    opacity: "80%",
                    textTransform: "capitalize",
                    lineHeight: "25px",
                  }}
                >
                  We develop UX/UI strategies by analyzing your needs and
                  challenges. Our designs benefit from an objective study of the
                  product, users' aspirations, market segment, and the
                  competition.
                </p>
              </Card>
              <Card
                style={{
                  backgroundColor: "#FFFFFF14",
                  borderRadius: "16px",
                  width: "80%",
                  height: "260px",
                  borderStyle: "none",
                }}
              >
                <img
                  src={agility}
                  width="60px"
                  height="60px"
                  alt=""
                  style={{ marginTop: "-20%" }}
                />
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: " #FFFFFF",
                    width: "70%",
                  }}
                >
                  Competence, Honed By Experience{" "}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: " #FFFFFF",
                    opacity: "80%",
                    textTransform: "capitalize",
                    lineHeight: "25px",
                  }}
                >
                  Our experience spans diverse industries and client needs. We
                  constantly update our skills to master modern trends and
                  design techniques to whip up distinctive and innovative ideas.
                </p>
              </Card>
            </div>
            <div style={{ display: "flex", gap: 30 }}>
              <Card
                style={{
                  backgroundColor: "#FFFFFF14",
                  borderRadius: "16px",
                  width: "80%",
                  height: "260px",
                  borderStyle: "none",
                }}
              >
                <img
                  src={commitment}
                  width="60px"
                  height="60px"
                  alt=""
                  style={{ marginTop: "-20%" }}
                />
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: " #FFFFFF",
                    width: "70%",
                  }}
                >
                  Agility And Commitment
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: " #FFFFFF",
                    opacity: "80%",
                    textTransform: "capitalize",
                    lineHeight: "25px",
                  }}
                >
                  Our efforts are marked by diligence and commitment. Our
                  agility and customer-oriented efforts turn client engagements
                  into enduring relationships.
                </p>
              </Card>
              <Card
                style={{
                  backgroundColor: "#FFFFFF14",
                  borderRadius: "16px",
                  width: "80%",
                  height: "260px",
                  borderStyle: "none",
                }}
              >
                <img
                  src={agility}
                  width="60px"
                  height="60px"
                  alt=""
                  style={{ marginTop: "-20%" }}
                />
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: " #FFFFFF",
                    width: "70%",
                  }}
                >
                  Agility and Commitment
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: " #FFFFFF",
                    opacity: "80%",
                    textTransform: "capitalize",
                    lineHeight: "25px",
                  }}
                >
                  Our efforts are marked by diligence and commitment. Our
                  agility and customer-oriented efforts turn client engagements
                  into enduring relationships.
                </p>
              </Card>
            </div>
          </div> */}
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

      <div className="uiux-container">
        <p className="wd-services-heading">Our UX/UI Design Approach</p>
        {/* <div style={{ display: "flex", gap: 60, marginTop: "5%" }}>
          <Card
            style={{
              backgroundColor: "#FFFFFF14",
              borderRadius: "16px",
              width: "80%",
              // height: "230px",
              borderStyle: "none",
            }}
          >
            <img
              src={analysis}
              width="60px"
              height="60px"
              alt=""
              style={{ marginTop: "-20%" }}
            />
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: " #FFFFFF",
                width: "70%",
              }}
            >
              Performance Analysis
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: " #FFFFFF",
                opacity: "80%",
                textTransform: "capitalize",
                lineHeight: "25px",
              }}
            >
              Our experts start the process with an analysis of the current
              website if you already have one. We evaluate how the content is
              presented and the effectiveness of the UI elements.
            </p>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFFFFF14",
              borderRadius: "16px",
              width: "80%",
              // height: "230px",
              borderStyle: "none",
            }}
          >
            <img
              src={workshop}
              width="60px"
              height="60px"
              alt=""
              style={{ marginTop: "-20%" }}
            />
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: " #FFFFFF",
                width: "70%",
              }}
            >
              Discovery Workshop
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: " #FFFFFF",
                opacity: "80%",
                textTransform: "capitalize",
                lineHeight: "25px",
              }}
            >
              We help you establish user expectations and requirements. With
              this knowledge, we architect the website, aiming to address the
              needs holistically.
            </p>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFFFFF14",
              borderRadius: "16px",
              width: "80%",
              // height: "230px",
              borderStyle: "none",
            }}
          >
            <img
              src={search}
              width="60px"
              height="60px"
              alt=""
              style={{ marginTop: "-20%" }}
            />
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: " #FFFFFF",
                width: "70%",
              }}
            >
              Research and Strategy
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: " #FFFFFF",
                opacity: "80%",
                textTransform: "capitalize",
                lineHeight: "25px",
              }}
            >
              We conduct exhaustive research to understand the target users,
              competitive strategies, and design trends in your industry. We
              strategize to create a robust and impactful website that is
              intelligible and credible.
            </p>
          </Card>
        </div> */}
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

      <div className="faq-container">
        <p className="faq-title">FAQ</p>
        <p className="faq-heading">
          Find Answers For Commonly Asked Questions, Here
        </p>
        <Faq />
      </div>

      <div>
        <p className="faq-title">OUR WORKS</p>
        <div className="works-image-container">
          <img src={works} className="works-image" alt="" />

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
