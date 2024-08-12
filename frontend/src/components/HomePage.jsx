import styled from "styled-components"
import MainDiv from "../styles/MainDiv"

import {  useInput } from "./stores/showInput"
import AddBooks from "./Input/AddBooks"
import BookList from "./BooksList"

const ButtonMain = styled.button`
  all: unset;
  background-color: var(--background-main);
  color: var(--color-text);
  border: 1px solid gray;
  position: relative;
  left: 45%;
  top: 200px;
  z-index: 2;
  bottom: 10%;
  padding: 5px 20px 5px 20px;
  font-weight: bold; 
  font-size: 1.3em;
  cursor: pointer;
  border-radius: 10px;
  display: ${(props) => (props.type ? "none" : "block")};
  &:hover{
  background-color: gray;
  }
`

const HomePage = () => {

  const inputSettings = useInput()


  function showInput(){
      inputSettings.noneInput()
  
  }
  return (
    <>

  
      <MainDiv background={inputSettings.input} onClick={showInput}>
     
      </MainDiv>
      <ButtonMain  onClick={() => inputSettings.showInput()} >+ Add Book</ButtonMain>
      {inputSettings.input ? (
          
          <AddBooks />
        ) : null}
      
      <BookList   />
     
       
        
      </>
  )
}

export default HomePage