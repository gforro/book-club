import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BookItem from "../components/BookItem"
import styled from 'styled-components'

const LinkButton = styled.div`
  text-align: right;
  padding-bottom: 4px;
  a {
    background-color: rebeccapurple;
    color: white;
    text-decoration: none;
    padding: 8px;
    border-radius: 4px;
    &:hover {
      background-color: darkblue;
    }
  }
`

const IndexPage = ({data: {allBook: {edges: books}}}) => {
  return (
    <Layout>
      {books.map(({node: book}) => (
        <BookItem title={book.title} author={book.author.name} summary={book.summary} key={book.id} imageUrl={book.imageUrl} fixed={book.localImage.childImageSharp.fixed}>
          <LinkButton>
            <Link to={`/book/${book.id}`}>Join conversation</Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query {
        allBook {
            edges {
                node {
                    title
                    author {
                        name
                    }
                    summary
                    id
                    imageUrl
                    localImage {
                        childImageSharp {
                            fixed(width: 200) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    }
`
