import React from "react";
import { Row, Col, Button } from "antd";
import "./AboutMe.css"; // Import the external CSS file
export default function AboutMe() {
  return (
    <div className="about-me-container">
      <Row gutter={[16, 16]} align="middle">
        {/* Left Column - Image Section */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="about-me-image-container">
            <img
              src="https://via.placeholder.com/500"
              alt="About Me"
              className="about-me-image"
            />
          </div>
        </Col>

        {/* Right Column - Text Section */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="about-me-text-container">
            <h1 className="about-me-title">About Me</h1>
            <p className="about-me-description">
              I’m a passionate developer who loves building interactive and
              user-friendly web applications. With a strong foundation in
              frontend and backend technologies, I strive to create solutions
              that bring value to users and businesses alike.
            </p>
            <Button type="primary" size="large" className="about-me-button">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
