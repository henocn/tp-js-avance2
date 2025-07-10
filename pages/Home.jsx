import React from 'react'
import {articles} from '../data/articles'
import Compteur from '../components/Compteur'
import Article from '../components/Article'

const Home = () => {
  return (
  <>
    <h1>Bienvenu</h1>
    <Compteur />
    <Article articles={articles} />
  </>)
}

export default Home