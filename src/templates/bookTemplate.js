import React from "react"
import BookItem from "../components/BookItem"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BookTemplate = ({data: {book: {title, author, summary, localImage}}}) => {
  return (
    <Layout>
      <BookItem title={title} author={author.name} summary={summary} fixed={localImage.childImageSharp.fixed}/>
    </Layout>
  )
}

export default BookTemplate

export const query = graphql`
    query BookQuery($bookId: String!) {
        book(id: {eq: $bookId}) {
            title
            author {
                name
            }
            summary
            id
            localImage {
                childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`
