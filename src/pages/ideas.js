import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

const ProcessPage = () => (
  <div id="main" className="main">
    <Hero
      title="Project Ideas"
      tagline="Have an idea for a new Planning Labs project?"
      />
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell large-8">

          <p className="lead">We want to hear your ideas. Submit a clearly defined problem that needs solving, such as a real-world planning issue, a data mapping application, or a technical workflow improvement.</p>

          <form>
            <div className="grid-x grid-margin-x">
              <div className="cell large-6">

                <label>Your name:
                  <input type="text" required />
                </label>

              </div>
              <div className="cell large-6">

                <label>Your email:
                  <input type="text" pattern="email" required />
                </label>

              </div>
            </div>
            <div className="grid-x grid-margin-x align-middle">
              <div className="cell large-9">

                <label>Your idea:
                  <textarea rows="10" placeholder="As a [type of user], I want [some goal] so that [some reason]." />
                </label>

              </div>
              <div className="cell large-3">

                <p className="text-small"><em>Complete project ideas include a description of the problem, who the primary users will be, and the level of impact the project will have.</em></p>

              </div>
            </div>

            <input type="submit" className="button large" value="Submit" />
          </form>

        </div>
        <div className="cell large-4">

          <h5>Here are some useful tips, guidelines and info to keep in mind:</h5>

          <ul>
            <li><p>Does your idea align with DCP's mission and strategic objectives?</p></li>
            <li><p>Is the data open? <small>(Or can it be opened?)</small></p></li>
            <li><p>Can the subject matter be openly discussed?</p></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
)

export default ProcessPage
