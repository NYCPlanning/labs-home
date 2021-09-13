import React from 'react';
import Layout from '../components/layout';

import Hero from '../components/hero';

import {
  BookSVG,
  HandshakeSVG,
  DocumentSVG,
  AgileSVG,
} from '../components/svg-icons';

const AboutPage = () => (
  <Layout>
    <div className="main">
      <Hero
        title="About Planning Labs"
        tagline="We build open, impactful technology products at the NYC Department of City Planning."
      />
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell large-10">
            <h2
              id="what-is-planning-labs"
              data-magellan-target="what-is-planning-labs"
            >
              What is Planning Labs?
            </h2>
            <p className="lead">
              Planning Labs is a division of the
              {' '}
              <a href="https://www1.nyc.gov/site/planning/index.page">
                NYC Department of City Planning
              </a>
              {' '}
              (DCP) that embraces open technology, agile development, and
              user-centered design to build impactful products with NYC’s Urban
              Planners.
            </p>
            <p>
              We are inspired by the mission and successes of
              {' '}
              <a href="https://18f.gsa.gov/">18F</a>
              , and are applying a similar
              philosophy at a much smaller scale within our agency.
            </p>
          </div>
        </div>

        <hr />

        <h2 id="our-core-values" data-magellan-target="our-core-values">
          Our Core Values
        </h2>
        <div className="grid-x grid-padding-x">
          <div className="cell large-11">
            <p className="lead" style={{ marginBottom: '2rem' }}>
              We strive to work in a modern way and use best practices on all
              our projects. Here’s what that means to us:
            </p>
          </div>
          <div className="cell large-6">
            <div className="media-object">
              <div className="media-object-section">
                <BookSVG />
              </div>
              <div className="media-object-section">
                <h4>Open by Default</h4>
                <p>
                  Planning Labs is committed to openness and transparency, and
                  all activities will be open by default. We will adopt the open
                  source policy of 18F as a foundational set of principles to
                  build upon.
                </p>
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
                <p>
                  Planning Labs is a design partner, working closely with our
                  colleagues in visioning and agile development. Collaborators
                  are expected to provide resources for the duration of a
                  product build, and will be heavily involved in sprint
                  planning, testing and acceptance.
                </p>
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
                <p>
                  Planning Labs’ preferred projects will yield a minimum viable
                  product in 4-6 weeks, providing a rapid cadence and the
                  opportunity to work on diverse projects and problems across
                  the agency.
                </p>
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
                <p>
                  Planning Labs will place a high priority on documentation and
                  outward messaging in support of its mission to promote modern
                  technology best practices, and will manage its own content to
                  include general information about the team’s mission and work
                  program, blogging, docs, and social media engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">
          Read the full text of
          {' '}
          <strong>
            <a href="https://github.com/NYCPlanning/labs-charter">
              our charter
            </a>
          </strong>
          {' '}
          on GitHub.
        </p>
        <hr />

        <h2 id="our-team" data-magellan-target="our-team">
          Our Team
        </h2>
        <div className="grid-x grid-padding-x">
          <div className="cell large-6">
            <h3 className="team-member--name" id="godfrey-yeung">
              Godfrey Yeung
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/godfrey.jpg"
                  alt="Godfrey Yeung"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Godfrey joined labs in May 2019. Previously he delivered
                  spatial web applications for Oregon Metro&apos;s various
                  departments like Parks, Property &amp; Environmental Services,
                  and Planning, and also for the City of Salem. For the past
                  decade he has had an interest in urban planning and creating
                  software to help improve the built environment.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="david-hochbaum">
              David &quot;The Hawk&quot; Hochbaum
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/david.jpg"
                  alt='David "The Hawk" Hochbaum'
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  David joined Planning Labs in 2020. Previously he planned and
                  executed digital marketing campaigns for some of the
                  world&apos;s most recognizable brands.
                </p>
              </div>
            </div>
          </div>

          <div className="cell large-6">
            <h3 className="team-member--name" id="godfrey-yeung">
              Natasha Toal
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/natasha.jpg"
                  alt="Godfrey Yeung"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  <!-- Insert bio here -->
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="david-hochbaum">
              Tyler Matteo
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/tyler.jpg"
                  alt='David "The Hawk" Hochbaum'
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  <!-- Insert bio here -->
                </p>
              </div>
            </div>
          </div>
        </div>

        <input type="checkbox" id="past-team-members-input" />

        <p className="text-center">
          <label
            htmlFor="past-team-members-input"
            className="button small secondary"
          >
            View Past Team Members
          </label>
        </p>

        <div id="past-team-members" className="grid-x grid-padding-x">
          <div className="cell large-6">
            <h3 className="team-member--name" id="chris-whong">
              Chris Whong
            </h3>
            <h4 className="team-member--title">
              Director
              <small className="nowrap"> (July 2017–April 2019)</small>
            </h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  alt="Chris Whong"
                  src="/img/chris-whong.jpg"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Chris developed the concept for Planning Labs in 2017, after
                  leading the development of modern, open mapping applications
                  in DCP’s Capital Planning Division. He is an urbanist, open
                  data advocate, civic technologist, and a former Code for
                  America Brigade leader.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="andy-cochran">
              Andy Cochran
            </h3>
            <h4 className="team-member--title">Interim Director | Designer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  alt="Andy Cochran"
                  src="/img/andy-cochran.jpg"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Andy joined the founding team of Planning Labs in July, 2017
                  after implementing New York City Council’s plan for digital
                  inclusion and open government. As Design &amp; Creative
                  Director at
                  {' '}
                  <a href="http://openplans.org/">OpenPlans</a>
                  {', '}
                  he built collaborative mapping services and other civic
                  engagement tools.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="julia-hogan">
              Julia Hogan
            </h3>
            <h4 className="team-member--title">
              Developer
              <small className="nowrap"> (January 2019–August 2019)</small>
            </h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/julia-hogan.jpg"
                  alt="Julia Hogan"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Julia joined Planning Labs in January 2019, after over three
                  years working in internet advertising. She&apos;s passionate
                  about civic tech, and looks forward to learning from the team
                  and building open solutions to empower New Yorkers.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="hannah-kates">
              Hannah Kates
            </h3>
            <h4 className="team-member--title">
              Product Manager
              <small className="nowrap"> (Sept 2018–August 2020)</small>
            </h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  alt="Hannah Kates"
                  src="/img/hannah-kates.jpg"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Hannah joined Labs in Sept 2018, after working for two years
                  in NYC Planning’s Capital Planning division where she led
                  planning/process reforms focused on siting City facilities.
                  She also developed core NYC Planning databases and product
                  managed the creation of the
                  {' '}
                  <a
                    href="http://capitalplanning.nyc.gov/facilities"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NYC Facilities Explorer
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="taylor-mcginnis">
              Taylor McGinnis
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  alt="Taylor McGinnis"
                  src="/img/taylor-mcginnis.jpg"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Taylor joined Planning Labs in June 2018, after creating data
                  visualizations as a Fellow for the Pratt Center for Community
                  Development. Originally introduced to mapping as an
                  environmental geologist, she now works as a developer and web
                  mapper focused on open data and city planning issues.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="rahul-alexander">
              Rahul Alexander
            </h3>
            <h4 className="team-member--title">
              User Experience Designer
              <small className="nowrap"> (April 2019–November 2019)</small>
            </h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/rahul.jpg"
                  alt="Rahul Alexander"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Rahul Alexander joined Labs in April 2019 after work as a
                  design and UX Consultant for various non-profits and startups.
                  He has a background in education and has collaborated on
                  numerous projects at the intersection of public space, design,
                  and technology.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="jonathan-pichot">
              Jonathan Pichot
            </h3>
            <h4 className="team-member--title">Product Manager</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/pichot.jpg"
                  alt="Jonathan Pichot"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Jonathan joined Planning Labs in Oct 2018. He began his career
                  as a developer in a number of agencies. In 2012, he founded
                  the Code for America brigade in Grand Rapids, Michigan and had
                  his first taste of public service with the city&apos;s
                  Downtown Development Authority. He believes in bold and
                  transformative public servants.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="kate-chanba">
              Kate Chanba
            </h3>
            <h4 className="team-member--title">Interaction Designer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/kate-chanba.jpg"
                  alt="Kate Chanba"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Kate joined Labs in August 2019. She previously built
                  transportation and wayfinding tools with Conveyal and her own
                  consultancy, Route. She is passionate about proactive
                  government and multimodal cities. Kate teaches design and
                  cartography at Pratt&apos;s Spatial Analysis and Visualization
                  Initiative.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="brandyn-friedly">
              Brandyn Friedly
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/brandyn-friedly.jpg"
                  alt="Brandyn Friedly"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Brandyn joined Labs in November 2019, after working as a
                  developer for the City of St. Paul. He previously helped
                  co-organize MaptimeNYC, where he fell in love with web mapping
                  and open source communities. Brandyn teaches data literacy and
                  visualization at the School of Visual Arts.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="matt-gardner">
              Matt Gardner
            </h3>
            <h4 className="team-member--title">Developer</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  alt="Matt Gardner"
                  src="/img/matt-gardner.jpg"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Matt joined Planning Labs as a founding member in July, 2017
                  after creating digital solutions for the City of Boston’s
                  Summer Youth Employment Program. He also helped establish the
                  Metropolitan Area Planning Council’s
                  {' '}
                  <a
                    href="http://data.mapc.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Digital Services
                  </a>
                  {' '}
                  division, the first of its kind in regional planning.
                </p>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <h3 className="team-member--name" id="nneka-sobers">
              Nneka Sobers
            </h3>
            <h4 className="team-member--title">Product Manager</h4>
            <div className="media-object">
              <div className="media-object-section">
                {' '}
                <img
                  className="thumbnail avatar"
                  src="/img/NnekaSobers_Headshotsq.jpg"
                  alt="Nneka Sobers"
                />
                {' '}
              </div>
              <div className="media-object-section">
                <p>
                  Nneka joined Planning Labs in March 2020. Her previous work
                  includes conducting user research to understand how building
                  environments influence social behavior and developing new
                  tools to help communities develop/manage self-organized
                  infrastructure systems. Nneka is passionate about increasing
                  social impact through civic technology and empathetic design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="grid-x grid-padding-x">
          <div className="cell large-9">
            <h2 id="history" data-magellan-target="history">
              History
            </h2>
            <p>
              Planning Labs was established in June 2017 by DCP civic
              technologist Chris Whong, with planning and guidance from Danny
              Fuchs, Director of Capital Planning, Hassan Adekoya, CIO, and Jon
              Kaufman, COO. After a year of experimentation and success building
              the
              {' '}
              <a
                href="https://capitalplanning.nyc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Capital Planning Platform
              </a>
              {' '}
              using a 100% open source stack, a pitch was made to
              institutionalize modern development practices in the agency by
              establishing a service delivery unit within the Information
              Technology Division. Planning Labs’ mission would be to build
              lightweight impactful tools with the agency’s divisions as
              collaborators, and to be open, vocal, and inclusive about the
              modern technologies and processes used.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
