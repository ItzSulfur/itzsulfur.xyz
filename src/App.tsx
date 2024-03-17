import Nav from "./components/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import More from "./pages/More"
import Technologies from "./pages/Technologies"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
      <div className="flex">
      <Nav />
      <div className="flex-grow pl-16">
          <div className="ml-15rem p-2rem w-full box-border text-base overflow-x-hidden pt-16 max-w-xl">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/technologies' element={<Technologies/>}/>
              <Route path='/more' element={<More/>}/>
            </Routes>
          </div>
      </div>
    </div>
  )
}

export default App
