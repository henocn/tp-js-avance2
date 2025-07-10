import React from "react"
import Article  from "./components/Article"
import { articles } from "./data/articles"

function App() {
    return (
        <div className="contacts">
            <Article articles={articles} />
        </div>
        
    )
}

export default App