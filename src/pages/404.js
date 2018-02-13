import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

const NotFoundPage = () => (
  <div className="main">
    <Hero
      title="404"
      tagline="Not Found"
    />
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell large-9">
          <h1>Sorry, but the page you are looking for has not been found. </h1>
          <p className="lead">Try checking the URL for errors or return to the <Link to="/">homepage</Link>.</p>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
