const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({graphql, actions: {createPage}}) => {
  const bookTemplate = path.resolve('src/templates/bookTemplate.js')
  return graphql(`
    query {
      allBook {
        edges {
          node {
            summary
            title
            id
            imageUrl
            author {
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: book.node,
        imageUrl: book.imageUrl
      })
    })

  })


}
