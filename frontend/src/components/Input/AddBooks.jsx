import styled from "styled-components"
import { useInput } from "../stores/showInput"

const FormsPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  width: 30%;
  margin: auto;
  padding: 20px;
  gap: 20px;
  h5,button, input{
    padding: 10px;
  }

  h5, button{
    margin:auto;
  }
  input{
    width:60%;
    margin: auto;
  }
`

const AddBooks = () => {
   const showInput = useInput()

   function noneInput(){
    showInput.noneInput()
   }
  return (
    <FormsPage>
      <h5>Adicionar Novos Pedidos</h5>
  
        <input type="text" name="title" id="" placeholder="Título" />
        <input type="text" name="author" id="" placeholder="Autor" />
        <input type="number" name="pages" id="" placeholder="Páginas" />
        <label htmlFor="read">
          <input type="checkbox" name="read" id=""/>
          Finalizado
        </label>
   
     
      <button onClick={noneInput}>Enviar</button>
    </FormsPage>
  )
}

export default AddBooks