import { Route,Routes } from "react-router-dom"
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import NotFound from './Pages/NotFoundPage.jsx'
import AuthPage from "./Pages/admin/AuthPage/Auth.jsx"

export default function App() {

return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/admin" element={<AuthPage/>}/>
    </Routes>

    </>
  )
}