import React from "react";
import { Card, Row, Col, Button } from 'antd';
import './Blogs.css';  // Add any additional styles you need
export default function Blog() {
  const blogPosts = [
    {
      title: "Website Design Trends for 2025",
      description:
        "Explore the latest website design trends shaping the future of web development.",
      link: "/blog/website-design-trends-2025",
    },
    {
      title: "API Development Best Practices",
      description:
        "A guide to building scalable, maintainable, and secure APIs for modern applications.",
      link: "/blog/api-development-best-practices",
    },
    {
      title: "SEO Strategies for 2025",
      description:
        "Learn about the most effective SEO strategies to increase traffic to your site.",
      link: "/blog/seo-strategies-2025",
    },
    {
      title: "Building Virtual Tours for Businesses",
      description:
        "How virtual tours are transforming the way businesses interact with customers online.",
      link: "/blog/building-virtual-tours-for-businesses",
    },
  ];
  return (
    <div className="blog-container">
      <h2>Our Blog</h2>
      <Row gutter={[16, 16]}>
        {blogPosts.map((post, index) => (
          <Col span={6} key={index}>
            <Card
              title={post.title}
              bordered={false}
              hoverable
              cover={
                <img alt={post.title} src="https://via.placeholder.com/300" />
              }
            >
              <p>{post.description}</p>
              <Button type="primary" href={post.link}>
                Read More
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
