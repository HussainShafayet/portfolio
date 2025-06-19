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
    <meta property="og:url" content="https://shafayethussain.netlify.app/" />
    <meta property="og:title" content="Shafayet Hussain | JavaScript Developer" />
    <meta
      property="og:description"
      content="Portfolio of Shafayet Hussain, a passionate JavaScript developer specializing in React, Next.js, and Ember.js."
    />
    <meta property="og:image" content="https://shafayethussain.netlify.app/static/media/self.6866363a49d2d33be2ce.jpg" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://shafayethussain.netlify.app/" />
    <meta property="twitter:title" content="Shafayet Hussain | JavaScript Developer" />
    <meta
      property="twitter:description"
      content="Portfolio of Shafayet Hussain, a passionate JavaScript developer specializing in React, Next.js, and Ember.js."
    />
    <meta property="twitter:image" content="https://shafayethussain.netlify.app/static/media/self.6866363a49d2d33be2ce.jpg" />

    <link rel="canonical" href="https://shafayethussain.netlify.app/" />
  </Helmet>
);

export default SEO;
