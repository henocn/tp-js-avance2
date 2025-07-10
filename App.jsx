import React from "react"
import Article  from "./components/Article"
import { articles } from "./data/articles"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
        
    )
}

export default App