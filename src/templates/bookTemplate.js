import React from "react"
import BookItem from "../components/BookItem"
import Layout from "../components/layout"

const BookTemplate = ({pageContext: {title, author, summary, localImage}}) => {
  console.log(localImage)
  return (
    <Layout>
      <BookItem title={title} author={author.name} summary={summary} fixed={localImage.childImageSharp.fixed}/>
    </Layout>
  )
}

export default BookTemplate
