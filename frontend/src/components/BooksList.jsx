import styled from "styled-components"
import { useBook } from "./stores/BookStore"
import { useInput } from "./stores/showInput"

const BookDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 106px;
  position: absolute;
  top: 40%;
  left: 17%;
  z-index: 2;

 @media (max-width: 1450px){
  left: 10%;
 }
  
  div {
    background: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;

    button{
          background: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
    }
  }
`


const BookList = () => {
  const {books} = useBook()
  const inputCheck = useInput()
  const {removeBook} = useBook()
  


  return (
  
    <BookDiv background={inputCheck.input}>
      {books ? books.map((data, index) => (
        <div background={inputCheck.input} key={index} onClick={() => inputCheck.noneInput()}>
          <h1>{data.title}</h1>
          <h2>{data.author}</h2>
          <button onClick={e => removeBook(data.id)}>Remover</button>
        </div>
    
      )) : null}
    </BookDiv>
    
  )
}

export default BookList