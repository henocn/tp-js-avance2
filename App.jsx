
import "./App.css"
import "./components/styles/bootstrap.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"
import Students from "./pages/Students"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/students" element={<Students/>} />
        </Routes>
        
    )
}

export default App