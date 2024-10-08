import styled from "styled-components"
import MainDiv from "../styles/MainDiv"

import {  useInput } from "./stores/showInput"
import AddBooks from "./Input/AddBooks"
import BookList from "./BooksList"

const ButtonMain = styled.button`
  all: unset;
  background: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
  color: var(--color-text);
  border: 1px solid gray;
  position: relative;
  left: 45%;
  top: 100px;
  z-index: 2;
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
      <BookList   />
      </MainDiv>
      <ButtonMain background={inputSettings.input} type={inputSettings.input} onClick={() => inputSettings.showInput()} >+ Add Book</ButtonMain>
      {inputSettings.input ? (
          
          <AddBooks />
        ) : null}
      
    
     
       
        
      </>
  )
}

export default HomePage