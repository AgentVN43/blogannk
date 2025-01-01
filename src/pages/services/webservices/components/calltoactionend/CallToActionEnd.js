import React from "react";
import { Button, Row, Col } from "antd";
import "./CallToActionEnd.css"; // Add any additional styles you need
export default function CallToActionEnd() {
  return (
    <div className="cta-end-container">
      <Row justify="center">
        <Col span={16}>
          <div className="cta-end-content">
            <h2>Ready to Take the Next Step?</h2>
            <p>
              Don't wait any longer—take your business to the next level with
              our expert services. Contact us now or explore more to get
              started!
            </p>
            <Button type="primary" href="/contact">
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
