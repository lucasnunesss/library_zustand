import styled from "styled-components"
import { useInput } from "../stores/showInput"
import { useBook } from "../stores/BookStore"
import { useState } from "react"

const FormsPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  width: 350px;
  top: 150px;
  margin: auto;
  padding: 15px;
  gap: 20px;
  border-radius: 10px;
  z-index: 2000;
  h5, input{
  padding: 10px 30px 10px 10px;
  outline: none;
    
  }

  h3, button{
    margin:auto;
  }


  input[type=text], input[type="number"]{
    border: 1px solid gray;
    border-radius: 10px;
  }
  
 div{
  position: relative;
  font-size: 1em;
  left: 20%;

 }
  
 div > input{
  height: 18px;
  width: 18px;
 }
 
  div > span{
  position: absolute;
  left: 20px;
  font-weight: 600;
  width: 100%;
  }

  button{
    all: unset;
    background-color: #8FE58C;
    width:90%;
    margin: auto;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
  }
`

const AddBooks = () => {
    const [localBook, setLocalBook] = useState({title: "", author: "", pages: "", lido: false})
   const showInput = useInput()
  const {books, addBook} = useBook()
   function noneInput(){

  
    if(books.length > 0){
      for (let i = 0; i < books.length; i++){
        if(books[i].title === localBook.title){
          return alert('mesmo titulo')
        }
      }
    }
    addBook(localBook.title, localBook.author, localBook.pages, localBook.lido)

    showInput.noneInput()
   
   }
  return (
    <FormsPage>
      <h3>Adicionar Novos Pedidos</h3>
  
        <input type="text" name="title" id="" placeholder="Título" onChange={e => setLocalBook({...localBook, title: e.target.value})} />
        <input type="text" name="author" id="" placeholder="Autor" onChange={e => setLocalBook({...localBook, author: e.target.value})} />
        <input type="number" name="pages" id="" placeholder="Páginas" onChange={e => setLocalBook({...localBook, pages: e.target.value})} />
       
          <div>
            <span> Livro Finalizado </span>
            <input type="checkbox" name="read" id="" onChange={e => setLocalBook({...localBook, lido: e.target.checked})}/> 
          
          </div>
      
   
     
      <button onClick={noneInput}>Enviar</button>
    </FormsPage>
  )
}

export default AddBooks