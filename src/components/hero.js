import React from 'react';
import Link from 'gatsby-link';


const Hero = (props) => {
  const title = props.title ? (
    <h1 className="header-large">
      { props.title }
    </h1>
  ) : null;

  const tagline = props.tagline ? (
    <h2 className="header-xlarge">
      { props.tagline }
    </h2>
  ) : null;

  let button = null;

  if (props.buttonText && props.buttonURL) {
    if (props.buttonURL.split('//')[1]) {
      button = (
        <a href={props.buttonURL} className="button large" target="_blank" rel="noopener noreferrer">
          { props.buttonText }
        </a>
      );
    } else {
      button = (
        <Link to={props.buttonURL} className="button large">
          { props.buttonText }
        </Link>
      );
    }
  }

  return (
    <div className="hero">
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
  );
};

export default Hero;
