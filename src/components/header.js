import React from 'react'

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
          <nav role="navigation">
            <ul className="menu vertical large-horizontal">
              <li><a href="/about/">About</a></li>
              <li><a href="/projects/">Projects</a></li>
              <li><a href="/process/">Process</a></li>
              <li><a href="/blog/">Blog</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
