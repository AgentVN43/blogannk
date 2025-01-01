import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";

export default function Cybersecurity() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <Head>
        <meta property="og:image" content="image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Meta Open Source",
            url: "https://opensource.fb.com/",
            logo: "https://opensource.fb.com/img/logos/Meta-Open-Source.svg",
          })}
        </script>
      </Head>
      <p>asdasddsad</p>
    </Layout>
  );
}
