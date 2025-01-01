import React from "react";
import Layout from "@theme/Layout";
import Hero from "./webservices/components/hero";
import AboutMe from "./webservices/components/about/AboutMe";
import Services from "./webservices/components/services/Services";
import CallToAction from "./webservices/components/calltoaction/CallToAction";
import Blog from "./webservices/components/blogs/Blog";
import CallToActionEnd from "./webservices/components/calltoactionend/CallToActionEnd";

export default function WebDevelopment() {
  return (
    <Layout
      title="Web Development"
      description="Learn about our web development services."
    >
      <div style={{ padding: "20px" }}>
        <Hero />
        <AboutMe />
        <Services />
        <CallToAction />
        <Blog />
        <CallToActionEnd />
      </div>
    </Layout>
  );
}
