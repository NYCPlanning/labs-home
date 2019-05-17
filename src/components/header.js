import React from 'react';
import Link from 'gatsby-link';
import NavLinks from './nav-links';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  toggleMenu() {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    });
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.closeMenu();
    }
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <header role="banner" className="site-header">
        <a className="show-on-focus" href="#main">
          Skip to main content
        </a>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell shrink large-auto">
              <Link to="/" className="site-logo montserrat">
                <img
                  src="/img/labs-logo.png"
                  alt="NYC Planning"
                />
              </Link>
            </div>
            <div className="cell auto hide-for-large text-right">
              <button
                className="responsive-nav-toggler"
                onClick={() => {
                  this.toggleMenu();
                }}
                type="button"
              >
                Menu
              </button>
            </div>
            <div
              id="responsive-menu"
              onClick={() => {
                this.closeMenu();
              }}
              onKeyDown={this.handleKeyDown}
              className={`cell large-shrink ${
                menuOpen ? '' : 'show-for-large'
              }`}
              role="button"
              tabIndex={0}
            >
              <nav role="navigation" className="header-nav">
                <NavLinks ulClasses="menu vertical large-horizontal" />
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
