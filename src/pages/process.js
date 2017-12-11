import React from 'react'
import Link from 'gatsby-link'
import { StickyContainer, Sticky } from 'react-sticky';

import Hero from '../components/hero'

const ProcessPage = () => (
  <StickyContainer>
    <div id="main" className="main">
        <Hero
          title="Our Process"
          tagline="Planning Labs projects are chosen through an open process in collaboration with our customers."
        />
       <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <Sticky topOffset={0}>
              {
                ({
                  style,
                }) => {
                  return (
                    <div className="page-nav cell large-4 sticky-container" data-sticky-container="">
                       <div className="sticky is-anchored is-at-top" data-sticky="xytude-sticky" data-sticky-on="large" data-top-anchor="page-content:top" data-btm-anchor="page-content:bottom" data-resize="a4ro30-sticky" data-mutate="a4ro30-sticky" data-events="mutate">
                          <h4 className="page-nav--header header-small">From Idea to Pipeline</h4>
                          <ul className="menu vertical" data-magellan="w14txa-magellan" data-resize="3x612q-magellan" data-scroll="3x612q-magellan" id="3x612q-magellan" data-events="scroll">
                             <li><a href="#step-1" className="is-active">Step 1: Idea Submission</a></li>
                             <li><a href="#step-2" className="">Step 2: Idea Vetting</a></li>
                             <li><a href="#step-3" className="">Step 3: Idea Listing</a></li>
                             <li><a href="#step-4" className="">Step 4: Project Selection</a></li>
                             <li><a href="#step-5" className="">Step 5: Pipeline Posting</a></li>
                          </ul>
                       </div>
                    </div>
                  )
                }
              }
            </Sticky>
             <div className="cell large-8" id="page-content">
                <h2 id="step-1" data-magellan-target="step-1">Step 1: Idea Submission</h2>
                <h6>Customer</h6>
                <p>DCP staff submit a clearly defined problem that needs solving, such as a real-world planning issue, a minor technical workflow improvement, or something in between.</p>
                <p><a className="button" href="https://ideas.planninglabs.nyc/create">Submit an idea</a></p>
                <h2 id="step-2" data-magellan-target="step-2">Step 2: Idea Vetting</h2>
                <h6> Labs + Customer</h6>
                <p>When an idea is submitted, the Planning Labs team starts a dialogue with the customer to determine if it’s a good candidate for a Labs project.</p>
                <ul>
                   <li>Subject matter and data can be openly discussed</li>
                   <li>Minimum viable product is achievable in 4 to 6 weeks</li>
                   <li>Technical fit for the skillset of the Planning Labs team</li>
                   <li>Alignment with DCP mission and strategic objectives</li>
                </ul>
                <h2 id="step-3" data-magellan-target="step-3">Step 3: Idea Listing</h2>
                <h6> Everyone</h6>
                <p>Vetted ideas enter a public listing where stakeholders can promote their idea through open discussion. Although the ideas in this list may be a good fit, they’re not Labs projects yet.</p>
                <p><a className="button" href="https://ideas.planninglabs.nyc/">View the ideas list</a></p>
                <h2 id="step-4" data-magellan-target="step-4">Step 4: Project Selection</h2>
                <h6> Executive Office + Labs</h6>
                <p>Each time the Planning Labs team completes a project, the Chief Operating Officer selects a new project from the ideas list.</p>
                <h2 id="step-5" data-magellan-target="step-5">Step 5: Pipeline Posting</h2>
                <h6> Everyone</h6>
                <p>When a new project is selected, it’s added to the pipeline on our website, which contains three projects—our currently active project, and the next two on deck.</p>
                <p><a className="button" href="/projects/">View our pipeline</a></p>
             </div>
          </div>
       </div>
    </div>
  </StickyContainer>
)

export default ProcessPage
