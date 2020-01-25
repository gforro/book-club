import React from "react"
import styled from 'styled-components'

const StyledBookItem = styled.section`
  border: 1px solid lightgray;
  padding: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  h2 {
    small {
      font-weight: normal;
      font-size: 20px;
      color: grey;
    }
  }
  img {
    float: left;
    width: 20%;
    margin: 0 8px 0 0;
  }
`

const BookItem = ({title, author, summary, imageUrl, children}) => {
  return (
    <StyledBookItem>
      <img src={imageUrl} alt={`Cover for $title`}/>
      <h2>{title} <small>{author}</small></h2>
      <p>{summary}</p>
      {children}
    </StyledBookItem>
  )
}

export default BookItem
