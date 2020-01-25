import React from "react"
import styled from 'styled-components'

const StyledBookItem = styled.section`
  border: 1px solid lightgray;
  padding: 8px;
  margin-bottom: 16px;
  h2 {
    small {
      font-weight: normal;
      font-size: 20px;
      color: grey;
    }
  }
`

const BookItem = ({title, author, summary, children}) => {
  return (
    <StyledBookItem>
      <h2>{title} <small>{author}</small></h2>
      <p>{summary}</p>
      {children}
    </StyledBookItem>
  )
}

export default BookItem
