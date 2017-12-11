import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'


const ContactPage = () => (
  <div className="main">
    <Hero
      tagline="Contact"
    />
     <div className="grid-container">
        <div className="grid-x grid-padding-x">
           <div className="cell large-8">
              <h2>Let’s work together to tackle your division’s urban planning technology&nbsp;problems.</h2>
              <p>Email us, or swing by our cubes in the IT Division at 120 Broadway, 30th floor. We'll coordinate to document and understand the problem you're trying to solve, and determine whether it is a good fit in scope and subject matter for a Labs project. </p>
           </div>
           <div className="cell large-4">
              <ul>
                 <li>
                    <p>Email us at <a href="mailto:labs_dl@planning.nyc.gov">labs_dl@planning.nyc.gov</a></p>
                 </li>
                 <li>
                    <p>Follow <a href="https://twitter.com/nycplanninglabs">@nycplanninglabs</a> on Twitter</p>
                 </li>
                 <li>
                    <p>Contribute to <a href="https://github.com/nycplanning">NYCPlanning on GitHub</a></p>
                 </li>
                 <li>
                    <p>Subscribe to our blogs <a href="/feed.xml">RSS feed</a></p>
                 </li>
              </ul>
           </div>
        </div>
     </div>
  </div>
)

export default ContactPage
