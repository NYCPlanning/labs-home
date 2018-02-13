import React from 'react'
import Link from 'gatsby-link'


class Hero extends React.Component {
 render() {
   const title = this.props.title ? <h1 className="header-large">{ this.props.title }</h1> : null;

   const tagline = this.props.tagline ? <h2 className="header-xlarge">{ this.props.tagline }</h2> : null;

   let button = null;

   if (this.props.buttonText && this.props.buttonURL) {
     if (this.props.buttonURL.split('//')[1]) {
       button = <a href={ this.props.buttonURL } className="button large" target="_blank">{ this.props.buttonText }</a>
     } else {
       button = <Link to={ this.props.buttonURL } className="button large">{ this.props.buttonText }</Link>
     }
   }

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
