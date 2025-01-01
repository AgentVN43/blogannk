import React from "react";
import { Button } from "antd";
import "./CallToAction.css"; // External CSS file for styling
export default function CallToAction() {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Grow Your Business?</h2>
        <p className="cta-description">
          Get started with our expert web development and design services today.
          Our team is ready to help you succeed.
        </p>
        <Button type="primary" className="cta-button" href="/contact-us">
          Contact Us Now
        </Button>
      </div>
    </div>
  );
}
