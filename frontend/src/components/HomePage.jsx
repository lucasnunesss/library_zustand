import styled from "styled-components"
import MainDiv from "../styles/MainDiv"
import About from "./About"
import { useState } from "react"

const ButtonMain = styled.button`
  all: unset;
  background-color: var(--background-main);
  color: var(--color-text);
  border: 1px solid gray;
  position: relative;
  left: 45%;
  top: 10%;
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
  const [openAddBook, setOpenAddBook] = useState(false)
  return (
   
      <MainDiv>
        <ButtonMain type={openAddBook} onClick={() => setOpenAddBook(true)} >+ Add Book</ButtonMain>
 
        {openAddBook ? (
          <About />
        ) : null}
      </MainDiv>
   
  )
}

export default HomePage