import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from "gatsby"

export default ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      
          <div style={{margin: 'auto', maxWidth: 760}}>
      <center>
        <ul style={{ listStyleType: "none",display: 'inline-block' }}>
          <li style={{display: 'inline-block', padding: '10px 20px'}}><Link to="/">Home</Link></li>
          <li style={{display: 'inline-block', padding: '10px 20px'}}><Link to="/about/">About</Link></li>
          <li style={{display: 'inline-block', padding: '10px 20px'}}><Link to="/tableDeMultiplication/">Table de Multiplication</Link></li>
        </ul>

      <h2> {data.site.siteMetadata.title} </h2>
        </center>
        {children}

        <footer style={{fontWeight:'bold', position:'relative',
        bottom:0,
        left:'50%',
        marginTop:'3%',
        marginLeft:'-5%',}}>
          © Vegapunk
        </footer>
      </div>
    )}
  />
)
  

