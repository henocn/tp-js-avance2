import React from 'react'
import Compteur from '../components/Compteur'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Bienvenu</h1>
        <Compteur />
      </div>
    </>
  )
}

export default Home