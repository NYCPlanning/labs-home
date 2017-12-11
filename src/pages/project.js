import React from 'react'
import Link from 'gatsby-link'

class Project extends React.Component { 
  render() {
    const { project } = this.props;

    return (
      <div>
        { project &&
          <div>
            <h1>{ project.slug }</h1>
          </div> 
        }
      </div>
    )
  }
}

export default Project
