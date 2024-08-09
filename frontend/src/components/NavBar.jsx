import { Outlet } from "react-router-dom"
import NavDiv from "../styles/NavDiv"
import styled from "styled-components"
import { useInput } from "./stores/showInput"

const LibraryH1 = styled.h1`
  color: var(--color-text);
  font-weight: bold;

  width: 200px;
  margin-top: 10px;
  text-align: center;
`

const NavBtn = styled.button`
  all: unset;
  background-color: var(--background-main);
  color: var(--color-text);
  margin: 10px;
  padding: 8px;
  text-align: center;
  border-radius: 10px;
    font-weight: semi-bold; 
`

const NavBar = () => {
  const showInput = useInput()
  return (
    <>
      <NavDiv background={showInput.input}>
        <LibraryH1>Library</LibraryH1>
        <NavBtn>Request</NavBtn>
        <NavBtn>Login</NavBtn>
      </NavDiv>
      <Outlet />
    </>
  )
}

export default NavBar