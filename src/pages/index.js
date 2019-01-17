import React from "react"
import Link from 'gatsby-link'
import styles from './index.module.css'
import Layout from '../components/Layout'
export default ({data}) =>
 <Layout>
    <h1 className={styles.titre}>Hello gatsby!</h1>
{data.allMarkdownRemark.edges.map(({ node }, index)=> {
    return <h2 key={index}><Link to={node.fields.slug}>
    {node.frontmatter.title}
    </Link></h2>
  })
}    
</Layout>

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

