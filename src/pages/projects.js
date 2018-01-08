import React from 'react';
import { Route, Switch } from "react-router-dom";
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome'


import Hero from '../components/hero'
import Project from './project';

const projectsUri = 'https://api.planninglabs.nyc/projects';

const ProjectCard = ({ project }) => {

  const url = project.thumbnail ? project.thumbnail[0].thumbnails.large.url : null;

  return (

    <div className="cell medium-6" key={project.name}>
      <Link to={`/projects/${project.slug}/`} className="card-link">
        <div className="card no-margin text-center">
          { url && <img src={url} alt={project.name} /> }
          <div className="card-section">
            <h3>{project.name}</h3>
            <p>{project.tagline}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const DevCard = ({ project }) => {

  const url = project.thumbnail ? project.thumbnail[0].thumbnails.large.url : null;

  return (
      <div className="media-object">
      <div className="media-object-section" style={{paddingRight:'1rem',opacity: '0.7'}}>
        <a href={project.github} target="_blank"><FontAwesome name='github ' size='2x' /></a>
      </div>
      <div className="media-object-section">
        <h4 className="header-small" style={{marginBottom:'0.5rem'}}>
          <a href={project.github} target="_blank">
            {project.name}
            <br/><small>{project.github.split('github.com/')[1]}</small>
          </a>
        </h4>
         <p className="text-small">
           {project.tagline}
         </p>
      </div>
    </div>
  )
}

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.fetchProjectsData();
  }

  fetchProjectsData() {
    return fetch(projectsUri)
      .then(response => response.json())
      .then((projects) => {
        this.setState({ projects });
      });
  }

  render() {
    const { projects } = this.state;

    const projectCards = () => {
      const featuredProjects = projects.filter(d => d.type === 'feature')
      const cards = featuredProjects
        .map((project, i) => <ProjectCard key={i} project={project}/>);

      return (
        <div className="grid-x grid-margin-x grid-margin-y">
          {cards}
        </div>
      )
    }

    const devCards = () => {
      const devProjects = projects.filter(d => d.type === 'resource')
      const cards = devProjects
        .map((project, i) => <DevCard key={i} project={project}/>);

      return (
        <div>
          {cards}
        </div>
      )
    }


    const currentCards = () => {
      const currentProjects = projects.filter(d => d.type === 'current')
      const cards = currentProjects
        .map((project, i) => <DevCard key={i} project={project}/>);

      return (
        <div>
          {cards}
        </div>
      )
    }


    const spinner = () => (
      <div className="main text-center" style={{
          padding: '20vh 0',
          color: '#888',
        }}>
        <FontAwesome name='refresh' size='3x' spin/>
      </div>
    )

    const { length } = projects;

    return (
      <Switch>
        <Route
          path='/projects'
          exact
          render={
            (transition) => {

              return (
                <div className="main">
                  <Hero
                    title="Projects"
                    tagline="We design, prototype, and build lightweight & open technology tools for planners."
                  />
                  <div className="grid-container">
                    <div className="grid-x grid-margin-x grid-padding-y">
                      <div className="cell large-9">
                        <p className="lead">We take on a single project at a time, working closely with our customers from concept to delivery in a matter of weeks. Our work is open by default, so you can get involved in these projects.</p>
                      </div>
                      <div className="cell large-3">
                        <Link to="/process/" className="button large">More about our&nbsp;process&hellip;</Link>
                      </div>
                    </div>
                    <div className="grid-x grid-margin-x">
                      <div className="cell large-8">
                        { length ? projectCards() : spinner() }
                      </div>
                      <div className="cell large-4">
                        <h3>In the Works</h3>
                        { length ? currentCards() : spinner() }

                        <h3>Developer Resources</h3>
                        { length ? devCards() : spinner() }
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          }/>

        <Route
          path='/projects/:id'
          render={
            transition => {
              const { match: { params: { id } } } = transition;
              const project = projects.find(project => {
                const { slug } = project;
                return slug === id;
              });
              return (
                <Project project={ project } {...transition}/>
              )
            }
          }
        />
      </Switch>
    )
  }
}

export default ProjectsPage
