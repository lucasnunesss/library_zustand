import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import About from "./components/About"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
