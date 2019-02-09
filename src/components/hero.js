import React from 'react';
import Link from 'gatsby-link';

const Hero = (props) => {
  const {
    title,
    tagline,
    buttonText,
    buttonURL,

  } = props;
  const renderedTitle = title ? (
    <h1 className="header-large">{title}</h1>
  ) : null;

  const renderedTagline = tagline ? (
    <h2 className="header-xlarge">{tagline}</h2>
  ) : null;

  let button = null;

  if (buttonText && buttonText) {
    if (buttonURL.split('//')[1]) {
      button = (
        <a
          href={buttonURL}
          className="button large"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      );
    } else {
      button = (
        <Link to={buttonURL} className="button large">
          {buttonText}
        </Link>
      );
    }
  }

  return (
    <div className="hero">
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            {renderedTitle}
            {renderedTagline}
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
