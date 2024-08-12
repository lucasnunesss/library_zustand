import styled from "styled-components";

const MainDiv = styled.div`
  background-color: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
  position: absolute;
  height: 90%;
  width: 100%;
  overflow: hidden;
  
  button{
    background-color: ${(props) => (props.background ? "#787778" : "var(--background-main)")};
  }
`


export default MainDiv