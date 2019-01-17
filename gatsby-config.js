module.exports = {

  siteMetadata: {
    title: 'Vegapunk Lab'
  },
   
    plugins: [
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: './src/utils/typography.js'
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-transformer-remark'
    ]
  }
  