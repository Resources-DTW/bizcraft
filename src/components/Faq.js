import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import "../styles/Faq.css";

export default function Faq() {
  const [activeKey, setActiveKey] = useState("0");

  const handleSelect = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const buttonStyle = {
    position: "relative",
    fontSize: "20px",
  };

  const getIconStyle = (key) => ({
    fontSize: "20px",
    position: "absolute",
    right: "0px",
    top: "0px",
    transition: "transform 0.3s ease",
    transform: activeKey === key ? "rotate(0deg)" : "rotate(0deg)",
    // backgroundColor: activeKey === key ? "#ffffff" : "#0780FD",
    backgroundColor: "#7453AF",
    color: "#FFFFFF",
    // color: activeKey === key ? "#0780FD" : "#fff",
    // borderRadius: "50%",
    borderRadius: "0px 13px",
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div className="faq-content">
      <section className="section faq_section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-6">
              <Accordion
                defaultActiveKey="0"
                activeKey={activeKey}
                onSelect={handleSelect}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={buttonStyle}>
                    <span style={getIconStyle("0")}>
                      {activeKey === "0" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    What make Biz Craft unique?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Biz Craft, we provide solutions and strategies that
                    actually work for your business. Being a design & digital
                    marketing company, we believe that innovation &
                    differentiating strategy is the key, so we consistently
                    focus and deliver the entrusted web-presence for you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header style={buttonStyle}>
                    <span style={getIconStyle("1")}>
                      {activeKey === "1" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    Why do you need Biz Craft’s support?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Biz Craft, we provide solutions and strategies that
                    actually work for your business. Being a design & digital
                    marketing company, we believe that innovation &
                    differentiating strategy is the key, so we consistently
                    focus and deliver the entrusted web-presence for you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span style={getIconStyle("2")}>
                      {activeKey === "2" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    How long does it take to make your business visible online?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Biz Craft, we provide solutions and strategies that
                    actually work for your business. Being a design & digital
                    marketing company, we believe that innovation &
                    differentiating strategy is the key, so we consistently
                    focus and deliver the entrusted web-presence for you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span style={getIconStyle("3")}>
                      {activeKey === "3" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    What type of business do Biz craft work with?
                  </Accordion.Header>
                  <Accordion.Body>
                    At Biz Craft, we provide solutions and strategies that
                    actually work for your business. Being a design & digital
                    marketing company, we believe that innovation &
                    differentiating strategy is the key, so we consistently
                    focus and deliver the entrusted web-presence for you.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
