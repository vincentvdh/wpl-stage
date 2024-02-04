import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  main,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  balk
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>

      <div className={balk}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <nav className={nav}>
          <header className={siteTitle}>
            <h1>{data.site.siteMetadata.title}</h1>
          </header>
          <ul className={navLinks}>
            <li>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/" activeStyle={{color:"dodgerblue"}}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about" activeStyle={{color:"dodgerblue"}}>
                Over de stage
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/berichten" activeStyle={{color: "dodgerblue"}}>
                Blogpagina
              </Link>
            </li>
            
          </ul>
        </nav>

      </div>
      <div className={main}>
        {children}
      </div>
    </div>
  )
}

export default Layout