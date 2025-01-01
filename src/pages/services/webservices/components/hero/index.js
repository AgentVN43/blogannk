import React from "react";
import Slide1 from "../../assets/images/slider/right-img.png";
import { Button, Col, Row } from "antd";

export default function Hero() {
  return (
    <div className="hero-container">
      <Row align="middle" justify="center" gutter={[16, 16]}>
        {/* Text Section */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="hero-text-container">
            <h1 className="hero-title">Welcome to Our Platform</h1>
            <p className="hero-description">
              Discover the best solutions for your business. We provide
              high-quality services that ensure your success in the digital
              world. Let's work together to create amazing things!
            </p>
            <Button type="primary" size="large" className="hero-button">
              Get Started
            </Button>
          </div>
        </Col>

        {/* Image Section */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="hero-image-container">
            <img
              src={Slide1}
              alt="Hero"
              className="hero-image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
