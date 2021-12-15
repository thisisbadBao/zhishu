import '../styles/Home.css'
import Welcome from '../components/Welcome/Welcome'
import BookGrid from '../components/BookGrid/BookGrid'
import { useState } from 'react'
const Home = ({ addToCart }) => {
  const [sRes, setSRes] = useState([])

  const showSearch = data => {
    setSRes(data)
  }
  return (
    <div className="container">
      <div className="main">
        <Welcome getSearch={showSearch} />
        <BookGrid res={sRes} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default Home
