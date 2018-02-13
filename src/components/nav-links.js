import React from 'react'
import Link from 'gatsby-link'

import { TwitterSVG, GitHubSVG, RssSVG } from '../components/svg-icons'

const links = [
  {
    text: 'About',
    url: '/about/',
  },
  {
    text: 'Projects',
    url: '/projects/',
  },
  {
    text: 'Process',
    url: '/process/',
  },
  {
    text: 'Contact',
    url: '/contact/',
  },
];

const linksList = links.map((link) => {
  if (link.text === 'Blog') return (<li key={link.text}><a href={link.url}>{link.text}</a></li>)
  return (
    <li key={link.text}>
      <Link
          to={link.url}
          activeClassName="is-active"
        >
        {link.text}
      </Link>
    </li>
  )
})

const NavLinks = (props) => (
  <ul className={`no-bullet ${props.ulClasses}`}>
    {linksList}
    <li className="external-nav-item"><a title="GitHub" href="https://github.com/NYCPlanning/"><GitHubSVG /><span className="hide-for-large"> &nbsp; GitHub</span></a></li>
    <li className="external-nav-item"><a title="Twitter" href="https://twitter.com/nycplanninglabs"><TwitterSVG /><span className="hide-for-large"> &nbsp; Twitter</span></a></li>
    <li className="external-nav-item"><a title="Blog" href="https://medium.com/nycplanninglabs"><RssSVG /><span className="hide-for-large"> &nbsp; Blog</span></a></li>
  </ul>
)

export default NavLinks
