import React from 'react'
import Link from 'gatsby-link'
import mapboxgl from 'mapbox-gl'

import Hero from '../components/hero'


class CommunityBreakfastPage extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: '//raw.githubusercontent.com/NYCPlanning/labs-gl-style/master/data/style.json',
      center: [-73.9868, 40.724],
      zoom: 10
    });
  }

  render() {
    return (
      <div className="main">
        <Hero
          title="Community Breakfast"
          tagline="We do a monthly team breakfast in a new NYC Community District."
        />
        <div className="grid-container">
         <div className="grid-x grid-padding-x">
          <div className="cell large-8" id="page-content">
            <h2 id="what-is-planning-labs" data-magellan-target="what-is-planning-labs">Community Breakfast</h2>
            <p>We&apos;re on a five-year mission to hold a team breakfast in each of NYC's 59 community districts. We try to find a community ambassador who can show us around and comment on the neighborhood's character, history, and planning context.</p>
            <div id="map-container" style={{ height: '400px', width: '400px'}}/>
          </div>
        </div>
        </div>
      </div>
    )
  }
}


export default CommunityBreakfastPage
