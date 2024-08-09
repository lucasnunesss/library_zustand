import { useInput } from "../stores/showInput"

const AddBooks = () => {
   const showInput = useInput()

   function noneInput(){
    showInput.noneInput()
   }
  return (
    <>
      <h1>oi</h1>
      <button onClick={noneInput}>A</button>
    </>
  )
}

export default AddBooks