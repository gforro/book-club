import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data: {allBook: {edges: books}}}) => {
  return (
    <Layout>
      {books.map(({node: book}) => (
        <div key={book.id}>
          <p>{book.title} <small>{book.author.name}</small></p>
          <p>{book.summary}</p>
        </div>
      ))}
      <div>Test</div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allBook {
      edges {
        node {
          summary
          title
          id
          author {
            name
          }
        }
      }
    }
  }
`
