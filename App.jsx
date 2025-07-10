
import "./App.css"   
import Home from "./pages/Home"
import About from "./pages/About"
import Form from "./pages/Form"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/form" element={<Form/>} />
        </Routes>
        
    )
}

export default App