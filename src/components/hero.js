import React from 'react'
import Link from 'gatsby-link'


class Hero extends React.Component {
 render() {
   const title = this.props.title ? <h1 className="header-large">{ this.props.title }</h1> : null;

   const tagline = this.props.tagline ? <h2 className="header-xlarge">{ this.props.tagline }</h2> : null;

   const button = this.props.buttonText && this.props.buttonURL ? <Link to={ this.props.buttonURL } className="button large">{ this.props.buttonText }</Link> : null;

   return <div className="hero">
     <div className="grid-container">
       <div className="grid-x grid-padding-x">
         <div className="cell">
          {title}
          {tagline}
          {button}
         </div>
       </div>
     </div>
   </div>
 }
}

export default Hero
