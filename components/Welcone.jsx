import React from 'react'
import { colaborators } from '../data/colaborators'
import {articles} from '../data/articles'
import Article from '../components/Article'
const Welcone = () => {
  return (
    <div>
        <h2>Liste des collaborateurs</h2>
        <div className="container">
          {colaborators.map((col, _) => (
              <div key={_} className='colaborator'>
                  <h4>{col.name}</h4>
                  <h5> {col.role} </h5>
              </div>
          ))}
        </div>
        <Article articles={articles} />

    </div>
  )
}

export default Welcone