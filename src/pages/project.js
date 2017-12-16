import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

import { GitHubSVG } from '../components/svg-icons'
import Hero from '../components/hero'

class Project extends React.Component {
  render() {
    const { project } = this.props;

    if (project) {
      const url = project.thumbnail ? project.thumbnail[0].thumbnails.large.url : null;

      let customer = null;
      if (project.customer) {
      customer = (
        <div>
          <hr />
          <h6>Customer</h6>
          { project.customer }
          </div>
        )
      }


      let github = null;
      if (project.github) {
        github = (
          <div>
            <hr />
            <h6>GitHub Repository</h6>
            <a href={ project.github } target="_blank"><GitHubSVG /> { project.github.split('//')[1] }</a>
          </div>
        )
      }

      return (
        <div>
            <div className="main">
              <Hero
                title={project.name}
                tagline={project.tagline}
                buttonText={project.url.split('//')[1]}
                buttonURL={`${project.url}/`}
              />
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="cell medium-7">
                    <p style={{whiteSpace:'pre-line'}}>{ project.description }</p>
                  </div>
                  <div className="cell medium-5">
                    <a href={project.url}>{ url && <img src={url} alt={project.name} className="project-image" /> }</a>
                    {customer}
                    {github}
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }

    return (
      <div className="main text-center" style={{
          padding: '20vh 0',
          color: '#888',
        }}>
        <FontAwesome name='refresh' size='3x' spin/>
      </div>
    )
  }
}

export default Project
