import React from 'react';
import { Route, Switch } from "react-router-dom";
import Link from 'gatsby-link';

import Project from './project';

const projectsUri = 'https://api.planninglabs.nyc/projects';

const ProjectCard = ({ project }) => {
  const { image: [ { thumbnails: { large: { url } } } ] } = project;

  return (
    <Link to={`/projects/${project.slug}`}>
      <div key={project.name}>
        {project.name}
        <img src={url}/>
      </div>
    </Link>
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
                <div>
                  { length ? projectCards() : 'Loading...' }
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
