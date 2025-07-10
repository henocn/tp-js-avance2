import React from 'react'
import { useState } from 'react';

const Compteur = () => {
    const [compteur, setCompteur] = useState(0);
  
    const incrementer = () => {
        setCompteur(compteur + 1)
    }

    const decrementer = () => {
        setCompteur(compteur + -1)
    }
    return (
    <>

        <button onClick={decrementer} className="btn">Decrementer</button>
        <span className="valeur">{compteur}</span>
        <button onClick={incrementer} className="btn" on>Incrementer</button>
    </>
  );
}

export default Compteur