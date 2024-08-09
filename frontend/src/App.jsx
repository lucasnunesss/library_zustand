import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
        <Route path="/" element={<NavBar />}>
        <Route path="/home" element={<HomePage />} />

        </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
