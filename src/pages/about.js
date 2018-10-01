import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

import {
    BookSVG,
    HandshakeSVG,
    DocumentSVG,
    AgileSVG
  } from '../components/svg-icons'

const AboutPage = () => (
<div className="main">
  <Hero
    title="About Planning Labs"
    tagline="We build open, impactful technology products at the NYC Department of City Planning."
  />
  <div className="grid-container">

    <div className="grid-x grid-padding-x">
      <div className="cell large-10">
        <h2 id="what-is-planning-labs" data-magellan-target="what-is-planning-labs">What is Planning Labs?</h2>
        <p className="lead">Planning Labs is a division of the <a href="http://www1.nyc.gov/site/planning/">NYC Department of City Planning</a> (DCP) that embraces open technology, agile development, and user-centered design to build impactful products with NYC’s Urban Planners.</p>
        <p>We are inspired by the mission and successes of <a href="https://18f.gsa.gov/">18F</a>, and are applying a similar philosophy at a much smaller scale within our agency.</p>
      </div>
    </div>

    <hr/>

    <h2 id="our-core-values" data-magellan-target="our-core-values">Our Core Values</h2>
    <div className="grid-x grid-padding-x">
      <div className="cell large-11">
        <p className="lead" style={{marginBottom:"2rem"}}>We strive to work in a modern way and use best practices on all our projects. Here’s what that means to us:</p>
      </div>
      <div className="cell large-6">
        <div className="media-object">
          <div className="media-object-section">
            <BookSVG />
          </div>
          <div className="media-object-section">
             <h4>Open by Default</h4>
             <p>Planning Labs is committed to openness and transparency, and all activities will be open by default. We will adopt the open source policy of 18F as a foundational set of principles to build upon.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <div className="media-object">
          <div className="media-object-section">
            <HandshakeSVG />
          </div>
          <div className="media-object-section">
             <h4>Build With, Not For</h4>
             <p>Planning Labs is a design partner, working closely with its customers in visioning and agile development. Customers are expected to provide resources for the duration of a product build, and will be heavily involved in sprint planning, testing and acceptance.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <div className="media-object">
          <div className="media-object-section">
            <AgileSVG />
          </div>
          <div className="media-object-section">
             <h4>Ship Early, Ship Often</h4>
             <p>Planning Labs’ preferred projects will yield a minimum viable product in 4-6 weeks, providing a rapid cadence and the opportunity to work on diverse projects and problems across the agency.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <div className="media-object">
          <div className="media-object-section">
            <DocumentSVG />
          </div>
          <div className="media-object-section">
             <h4>Document and Disseminate</h4>
             <p>Planning Labs will place a high priority on documentation and outward messaging in support of its mission to promote modern technology best practices, and will manage its own content to include general information about the team’s mission and work program, blogging, docs, and social media engagement.</p>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center">Read the full text of <strong><a href="https://github.com/NYCPlanning/labs-charter">our charter</a></strong> on GitHub.</p>
    <hr/>

    <h2 id="our-team" data-magellan-target="our-team">Our Team</h2>
    <div className="grid-x grid-padding-x">
      <div className="cell large-6">
        <h3 id="chris-whong-director">Chris Whong: Director</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://pbs.twimg.com/profile_images/3057855429/49cff02ea1ea88993d7edadd8b027982_400x400.jpeg"/> </div>
          <div className="media-object-section">
             <p>Chris developed the concept for Planning Labs in 2017, after leading the development of modern, open mapping applications in DCP’s Capital Planning Division. He is an urbanist, open data advocate, civic technologist, and a former Code for America Brigade leader. </p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <h3 id="andy-cochran-designer">Andy Cochran: Designer</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://pbs.twimg.com/profile_images/486195376077029377/U1cXHuNZ_400x400.jpeg"/> </div>
          <div className="media-object-section">
             <p>Andy joined the founding team of Planning Labs in July, 2017 after implementing New York City Council’s plan for digital inclusion and open government. As Design &amp; Creative Director at <a href="http://openplans.org/">OpenPlans</a>, he built collaborative mapping services and other civic engagement tools.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <h3 id="matt-gardner-developer">Matt Gardner: Developer</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://pbs.twimg.com/profile_images/598597497141997568/zR8hc1fd_400x400.jpg"/> </div>
          <div className="media-object-section">
             <p>Matt joined Planning Labs as a founding member in July, 2017 after creating digital solutions for the City of Boston’s Summer Youth Employment Program. He also helped establish the Metropolitan Area Planning Council’s <a href="http://data.mapc.org" target="_blank">Digital Services</a> division, the first of its kind in regional planning.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <h3 id="hannah-kates-product-manager">Hannah Kates: Product Manager</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://raw.githubusercontent.com/hannahkates/hannahkates.github.io/master/img/headshot.jpg"/> </div>
          <div className="media-object-section">
             <p>Hannah joined Labs in Sept 2018, after working for two years in NYC Planning’s Capital Planning division where she led planning/process reforms focused on siting City facilities. She also developed core NYC Planning databases and product managed the creation of the <a href="http://capitalplanning.nyc.gov/facilities" target="_blank">NYC Facilities Explorer</a>.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <h3 id="hannah-kates-product-manager">Jonathan Pichot: Product Manager & Developer</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="/img/pichot.jpg"/> </div>
          <div className="media-object-section">
             <p>Jonathan joined Planning Labs in Oct 2018. He began his career as a developer in a number of agencies. In 2012, he founded the Code for America brigade in Grand Rapids, Michigan and had his first taste of public service with the city's Downtown Development Authority. He believes in bold and transformative public servants.</p>
          </div>
        </div>
      </div>
      <div className="cell large-6">
        <h3 id="taylor-mcginnis-intern">Taylor McGinnis: Developer Intern</h3>
        <div className="media-object">
          <div className="media-object-section"> <img className="thumbnail avatar" src="https://pbs.twimg.com/profile_images/993272123614429186/vVtomJdU_400x400.jpg"/> </div>
          <div className="media-object-section">
             <p>Taylor is a GIS analyst currently acquiring a Certificate degree in GIS and Design from Pratt Institute. Originally an environmental geologist focused on urban sustainability, she is now expanding her mapping and data analysis skillsets to contribute to City planning projects.</p>
          </div>
        </div>
      </div>
    </div>

    <hr/>

    <div className="grid-x grid-padding-x">
      <div className="cell large-9">
        <h2 id="history" data-magellan-target="history">History</h2>
        <p>Planning Labs was established in June 2017 by DCP civic technologist Chris Whong, with planning and guidance from Danny Fuchs, Director of Capital Planning, Hassan Adekoya, CIO, and Jon Kaufman, COO. After a year of experimentation and success building the <a href="https://capitalplanning.nyc" target="_blank">Capital Planning Platform</a> using a 100% open source stack, a pitch was made to institutionalize modern development practices in the agency by establishing a service delivery unit within the Information Technology Division. Planning Labs’ mission would be to build lightweight impactful tools with the agency’s divisions as clients, and to be open, vocal, and inclusive about the modern technologies and processes used.</p>
      </div>
    </div>

  </div>
</div>
)

export default AboutPage
