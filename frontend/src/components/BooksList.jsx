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
  margin-right: 10px;
  z-index: 2;

 @media (max-width: 950px) {
     grid-template-columns: repeat(2, 1fr);
  }

   @media (max-width: 650px) {
     grid-template-columns: repeat(1, 1fr);
  }
  div {
    background: ${(props) => (props.background ? "#787778" : "white")};
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    gap: 20px;

 

    button{
          all: unset;
          width: 70%;
          margin: auto;
          padding: 10px;
          border-radius: 10px;
          background: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
          cursor: pointer;
    }

    
  }
`
const DivH3 = styled.h4`
  background:  ${(props) => (props.background === true ? "#8FE58C" : "#E58C8C")};
  background-color: ${(props) => props.inputBackground ? "#787778" : null};
  width: 75%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
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
          <h3>{data.pages} Páginas</h3>
          <DivH3 background={data.lido} inputBackground={inputCheck.input} onClick={() => atualizar(data)}>{data.lido ? "Finalizado" : "Não Finalizado"}</DivH3>
         
          <button onClick={e => removeBook(data.id)}>Remover</button>
        </div>
    
      )) : null}
    </BookDiv>
    
  )
}

export default BookList