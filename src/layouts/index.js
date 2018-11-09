import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';

import '../scss/app.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="NYC Planning Labs"
      meta={[
        { name: 'description', content: 'NYC Planning Labs builds open, impactful, modern technology tools for urban planners' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css" rel="stylesheet" />

      <script type="text/javascript" src="js/track.js" />
      <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js" />
    </Helmet>

    <Header />
    {children()}
    <Footer />
  </div>
);

export default TemplateWrapper;
