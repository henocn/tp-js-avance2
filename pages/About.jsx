import React from 'react'
import Navbar from '../components/Navbar'
import Welcone from '../components/Welcone'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h2 className='about-title'>Qui sommes-nous</h2>
        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis provident sed quo aut quibusdam modi harum, debitis nihil dolor velit eius molestiae laudantium quaerat, veritatis est vitae quis odio amet.</p>
        <Welcone />
      </div>
    </>
  )
}

export default About