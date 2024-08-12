import styled from "styled-components"
import { useBook } from "./stores/BookStore"
import { useInput } from "./stores/showInput"

const BookDiv = styled.div`

  gap: 20px;
  position: absolute;
  top: 50%;
  justify-content: center;
  div{
    background-color: red;
 
  }
`


const BookList = () => {
  const {books} = useBook()
  const inputCheck = useInput()
  return (
    <BookDiv background={inputCheck.input}>
      {books ? books.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
          <h2>{data.author}</h2>
        </div>
    
      )) : null}
    </BookDiv>
  )
}

export default BookList