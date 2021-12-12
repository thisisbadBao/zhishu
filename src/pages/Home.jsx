import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Welcome from '../components/Welcome/Welcome'
import BookGrid from '../components/BookGrid/BookGrid'
const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Welcome />
        <BookGrid />
      </div>
      <Footer />
    </div>
  )
}

export default Home
