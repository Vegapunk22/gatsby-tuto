import React from 'react'
import Layout from '../components/Layout'

export default ({ data }) => {
    const content = data.markdownRemark
    return (
    <Layout> 
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
    )
    
}

export const query = graphql`
    query PageQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`