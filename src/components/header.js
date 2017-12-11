import React from 'react'
import NavLinks from './nav-links'

const Header = () => (
  <header role="banner" className="site-header">
   <a className="show-on-focus" href="#main">Skip to main content</a>
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell shrink large-auto">
          <a className="site-logo montserrat" href="{{ site.baseurl }}/">
            <img src="https://raw.githubusercontent.com/NYCPlanning/logo/master/dcp_logo_772.png" alt="NYC Planning" />
            <span className="site-logo--l">L</span>
            <span className="site-logo--a">a</span>
            <span className="site-logo--b">b</span>
            <span className="site-logo--s">s</span>
          </a>
        </div>
        <div className="cell auto hide-for-large text-right">
          <button className="responsive-nav-toggler" data-toggle="responsive-menu">Menu</button>
        </div>
        <div id="responsive-menu" className="cell large-shrink show-for-large" data-toggler=".show-for-large">
          <NavLinks />
        </div>
      </div>
    </div>
  </header>
)

export default Header
