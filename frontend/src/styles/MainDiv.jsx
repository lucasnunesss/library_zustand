import styled from "styled-components";

const MainDiv = styled.div`
  background-color: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
  position: absolute;
  height: auto;
  min-height: 100%;
  width: 100%;

  
  button{
    background-color: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
  }
`


export default MainDiv