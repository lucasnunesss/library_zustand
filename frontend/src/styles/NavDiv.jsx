import styled from "styled-components";

const NavDiv = styled.div`
    width: 100%;
    background: ${(props) => props.background ?  "#787778" : "white" };
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 100px 100px;
  
    button, h1{
     background: ${(props) => props.background ?  "#787778" : "white" };
    }
`


export default NavDiv