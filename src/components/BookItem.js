import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'

const BookItemStyledWrapper = styled.section`
  border: 1px solid lightgray;
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  h2 {
    small {
      font-weight: normal;
      font-size: 20px;
      color: grey;
    }
  }
`

const BookItemImageStyledWrapper = styled.div`
  flex: 1;
  margin-right: 16px;
  img {
    margin: 0;
    
  }
`
const BookItemContentStyledWrapper = styled.div`
  flex: 6;
`

const BookItem = ({title, author, summary, imageUrl, fixed, children}) => {
  return (
    <BookItemStyledWrapper>
      <BookItemImageStyledWrapper>
        {/*<img src={imageUrl} alt={`Cover for $title`}/>*/}
        <Img fixed={fixed}/>
      </BookItemImageStyledWrapper>
      <BookItemContentStyledWrapper>
        <h2>{title} <small>{author}</small></h2>
        <p>{summary}</p>
        {children}
      </BookItemContentStyledWrapper>
    </BookItemStyledWrapper>
  )
}

export default BookItem
