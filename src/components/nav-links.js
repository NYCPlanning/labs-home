import React from 'react'
import Link from 'gatsby-link'

const links = [
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Projects',
    url: '/projects',
  },
  {
    text: 'Process',
    url: '/process',
  },
  {
    text: 'Blog',
    url: 'https://medium.com/nycplanninglabs',
  },
  {
    text: 'Contact',
    url: '/contact',
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
  <nav role="navigation">
    <ul className={props.ulClasses}>
      {linksList}
    </ul>
  </nav>
)

export default NavLinks
