import React from "react"
import BookItem from "../components/BookItem"
import Layout from "../components/layout"

const BookTemplate = ({pageContext: {title, author, summary}}) => {
  return (
    <Layout>
      <BookItem title={title} author={author.name} summary={summary} />
    </Layout>
  )
}

export default BookTemplate
