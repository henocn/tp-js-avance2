import React from 'react'
import { colaborators } from '../data/colaborators'

const Welcone = () => {
  return (
    <div>
        <h2>Liste des collaborateurs</h2>
        <div className="colab-container">
          {colaborators.map((col, _) => (
              <div key={_} className='colab'>
                  <h4>{col.name}</h4>
                  <h5> {col.role} </h5>
              </div>
          ))}
        </div>

    </div>
  )
}

export default Welcone