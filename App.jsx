
import "./App.css"   
import Home from "./pages/Home"
import About from "./pages/About"
import Form from "./components/Form"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"
import Etudiant from "./pages/Etudiants"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/students" element={<Etudiant/>} />
        </Routes>
        
    )
}

export default App