import React from 'react'
import Link from 'gatsby-link'
import { StickyContainer, Sticky } from 'react-sticky';
import Scrollspy from 'react-scrollspy'
import ScrollableAnchor from 'react-scrollable-anchor'

import Hero from '../components/hero'

const ProcessPage = () => (
  <div id="main" className="main">
    <Hero
      title="Our Process"
      tagline="Planning Labs projects are chosen through an open process in collaboration with our customers."
      />
    <div className="grid-container">
      <StickyContainer className="grid-x grid-padding-x">

        <div className="page-nav cell large-4 show-for-large">

          <Sticky>
            {
              ({ style }) => {
                return (
                  <div className="sticky" style={style}>
                    <h4 className="page-nav--header header-small" style={{paddingTop: '1rem'}}>From Idea to Pipeline</h4>
                    <Scrollspy className="menu vertical" items={ ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'] } currentClassName="is-active">
                      <li><Link to="/process/#step-1" className="">Step 1: Idea Submission</Link></li>
                      <li><Link to="/process/#step-2" className="">Step 2: Idea Vetting</Link></li>
                      <li><Link to="/process/#step-3" className="">Step 3: Project Selection</Link></li>
                      <li><Link to="/process/#step-4" className="">Step 4: Pipeline Posting</Link></li>
                    </Scrollspy>
                  </div>
                )
              }
            }
          </Sticky>
        </div>
        <div className="cell large-8" id="page-content">
          <h2 id="step-1">Step 1: Idea Submission</h2>
          <h6>Customer</h6>
          <p>DCP staff submit a clearly defined problem that needs solving, such as a real-world planning issue, a minor technical workflow improvement, or something in between.</p>
          <a className="button no-margin" href="/submit-idea/">Submit an idea</a>

          <hr />

          <h2 id="step-2">Step 2: Idea Vetting</h2>
          <h6> Labs + Customer</h6>
          <p>When an idea is submitted, the Planning Labs team starts a dialogue with the customer to determine if it’s a good candidate for a Labs project.</p>
          <ul>
            <li>Subject matter and data can be openly discussed</li>
            <li>Minimum viable product is achievable in 4 to 6 weeks</li>
            <li>Technical fit for the skillset of the Planning Labs team</li>
            <li>Alignment with DCP mission and strategic objectives</li>
          </ul>

          <hr />

          <h2 id="step-3">Step 3: Project Selection</h2>
          <h6> Executive Office + Labs</h6>
          <p>The Chief Operating Officer is presented with vetted project ideas, and makes a selection to add to the Labs pipeline based on feasibility, timing, and overall impact.</p>

          <hr />

          <h2 id="step-4">Step 4: Pipeline Posting</h2>
          <h6> Everyone</h6>
          <p>When a project is selected, it’s added to the pipeline on our website.  We try to identify at least 3 pipeline projects: The one we are currently building, and the next two that are on-deck.</p>
          <a className="button no-margin" href="/projects/">View our pipeline</a>
        </div>
      </StickyContainer>

    </div>
  </div>
)

export default ProcessPage
