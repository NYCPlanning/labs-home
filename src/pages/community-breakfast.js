import React from 'react';
import mapboxgl from 'mapbox-gl';

import Hero from '../components/hero';


class CommunityBreakfastPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visited: null };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: '//raw.githubusercontent.com/NYCPlanning/labs-gl-style/master/data/style.json',
      center: [-73.9868, 40.724],
      zoom: 9,
    });

    map.on('load', () => {
      window.map = map;  // eslint-disable-line

      const fetches = [
        fetch('data/nycd.json'), // eslint-disable-line
        fetch('data/community-breakfast.json'), // eslint-disable-line
      ];

      Promise.all(fetches)
        .then(([districts, meta]) => Promise.all([districts.json(), meta.json()]))
        .then(([districts, meta]) => {
          // join breakfast meta properties to districts geojson
          districts.features = districts.features.map((feature) => { // eslint-disable-line
            // check to see if meta for this BoroCD exists
            const match = meta.find(d => d.BoroCD === feature.properties.BoroCD);

            if (match) {
              feature.properties = { // eslint-disable-line
                visited: true,
                ...match,
                ...feature.properties,
              };
            } else {
              feature.properties = { // eslint-disable-line
                visited: false,
                ...feature.properties,
              };
            }

            return feature;
          });

          map.addSource('community-districts', {
            type: 'geojson',
            data: districts,
          });

          map.addLayer({
            id: 'community-districts-fill',
            type: 'fill',
            source: 'community-districts',
            paint: {
              'fill-color': {
                property: 'visited',
                type: 'categorical',
                stops: [[true, 'rgba(234, 155, 69, 0.44)'], [false, 'rgba(168, 168, 168, 0.44)']],
              },
            },
          }, 'place_other');

          map.addLayer({
            id: 'community-districts-line',
            type: 'line',
            source: 'community-districts',
          }, 'place_other');

          this.setState({
            visited: districts.features
              .filter(d => d.properties.visited === true)
              .sort((a, b) => a.properties.id - b.properties.id),
          });
        });
    });
  }

  render() {
    const { visited } = this.state;
    let visitedListItems;

    if (visited) {
      visitedListItems = visited.map(({
        properties: {
          BoroCD, date, venue, host,
        },
      }) => (
        <div key={BoroCD}>
          {date}
          {venue}
          {host}
        </div>
      ));
    }

    return (
      <div className="main">
        <Hero
          title="Community Breakfast"
          tagline="We do a monthly team breakfast in a new NYC Community District."
        />

        <div className="grid-container">
          <h2 id="what-is-planning-labs" data-magellan-target="what-is-planning-labs">
Community Breakfast
          </h2>
          <p>
We&apos;re on a five-year mission to hold a team breakfast in each of NYC&apos;s 59 community districts. We try to find a community ambassador who can show us around and comment on the neighborhood&apos;s character, history, and planning context.
          </p>
          <div className="grid-x grid-padding-x">
            <div className="cell large-8" id="page-content">

              <div id="map-container" style={{ height: '500px', width: '100%' }} />
            </div>
            <div className="cell large-4" id="sidebar">
              {visitedListItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CommunityBreakfastPage;
