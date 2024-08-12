import styled from "styled-components"
import { useBook } from "./stores/BookStore"
import { useInput } from "./stores/showInput"
import { v4 as uuidv4 } from 'uuid';
const BookDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 106px;

  margin-top: 200px;
  margin-left: 10px;
  z-index: 2;


  
  div {
    background: ${(props) => (props.background ? "#787778" : "white")};
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  

    button{
          background: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
    }
  }
`


const BookList = () => {
  const {books} = useBook()
  const inputCheck = useInput()
  const {removeBook, updateReader} = useBook()
  
  const atualizar = (data) => {
    const novosValores = {
      id: uuidv4(),
      title: data.title,
      author: data.author,
      pages: data.pages,
      lido: data.lido ? false : true
    }
    updateReader(data.id, novosValores)
  }

  return (
  
    <BookDiv background={inputCheck.input}>
      {books ? books.map((data, index) => (
        <div background={inputCheck.input} key={index} onClick={() => inputCheck.noneInput()}>
          <h1>{data.title}</h1>
          <h2>{data.author}</h2>
          <h3 onClick={() => atualizar(data)}>{data.lido ? "Finalizado" : "Não Finalizado"}</h3>
         
          <button onClick={e => removeBook(data.id)}>Remover</button>
        </div>
    
      )) : null}
    </BookDiv>
    
  )
}

export default BookList