import { Helmet } from "react-helmet";

const SEO = () => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>Shafayet Hussain | JavaScript Developer</title>
    <meta name="title" content="Shafayet Hussain | JavaScript Developer" />
    <meta
      name="description"
      content="Portfolio of Shafayet Hussain, a passionate JavaScript developer specializing in React, Next.js, and Ember.js."
    />
    <meta name="keywords" content="JavaScript, React, Frontend, Web Developer, Portfolio, Next.js, Ember.js" />
    <meta name="author" content="Shafayet Hussain" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com/" />
    <meta property="og:title" content="Shafayet Hussain | JavaScript Developer" />
    <meta
      property="og:description"
      content="Portfolio of Shafayet Hussain, a passionate JavaScript developer specializing in React, Next.js, and Ember.js."
    />
    <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://yourdomain.com/" />
    <meta property="twitter:title" content="Shafayet Hussain | JavaScript Developer" />
    <meta
      property="twitter:description"
      content="Portfolio of Shafayet Hussain, a passionate JavaScript developer specializing in React, Next.js, and Ember.js."
    />
    <meta property="twitter:image" content="https://yourdomain.com/og-image.jpg" />

    <link rel="canonical" href="https://yourdomain.com/" />
  </Helmet>
);

export default SEO;
