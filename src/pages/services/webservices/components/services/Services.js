import React from "react";
import { Row, Col, Card, Button } from "antd";
import "./Services.css"; // External CSS file for styles
export default function Services() {
  const services = [
    {
      title: "Website Design",
      description:
        "Create beautiful and responsive websites that meet your business needs.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "API Design",
      description:
        "Develop robust and scalable APIs that help integrate different services.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Virtual Tours",
      description:
        "Provide immersive and interactive virtual tours to showcase your business.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "SEO Services",
      description:
        "Optimize your website to rank higher in search engines and drive more traffic.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              cover={<img alt={service.title} src={service.imageUrl} />}
              className="service-card"
            >
              <Card.Meta
                title={service.title}
                description={service.description}
              />
              <Button type="primary" className="service-button">
                Learn More
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
