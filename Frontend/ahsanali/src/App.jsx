import { Route,Routes } from "react-router-dom"
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'

export default function App() {

return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>

    </>
  )
}