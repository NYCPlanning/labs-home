import React from 'react';
import { Route, Switch } from "react-router-dom";
import Link from 'gatsby-link';

import Hero from '../components/hero'
import Project from './project';

const projectsUri = 'https://api.planninglabs.nyc/projects';

const ProjectCard = ({ project }) => {

  const url = project.thumbnail ? project.thumbnail[0].thumbnails.large.url : null;

  return (

    <div className="cell" key={project.name}>
      <Link to={`/projects/${project.slug}`} className="card-link">
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
        console.log(projects)
        this.setState({ projects });
      });
  }

  render() {
    const { projects } = this.state;
    const projectCards = () => projects
      .map((project, i) => <ProjectCard key={i} project={project}/>);

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
                    <div className="grid-x grid-padding-x grid-padding-y">
                      <div className="cell large-9">
                        <p className="lead">We take on a single project at a time, working closely with our customers from concept to delivery in a matter of weeks. Our work is open by default, so you can get involved in these projects.</p>
                      </div>
                      <div className="cell large-3">
                        <Link to="/process" className="button large">More about our&nbsp;process&hellip;</Link>
                      </div>
                    </div>
                  </div>
                  <div className="grid-container">
                    <div className="grid-x grid-margin-x grid-margin-y medium-up-2 large-up-3">
                      { length ? projectCards() : 'Loading...' }
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
                console.log(project);
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
