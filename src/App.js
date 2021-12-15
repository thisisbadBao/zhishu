import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Help from './pages/Help'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header/Header'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer'
function App() {
  var name = localStorage.getItem('userName')
  var auth = localStorage.getItem('userAuth')
  const [user, setUser] = useState({
    userName: name ? name : '',
    userAuth: name ? auth : '',
  })

  const [cartItem, setcartItem] = useState([])
  const addToCart = item => {
    let _cart = cartItem
    _cart.push(item)
    setcartItem(_cart)
  }
  const setCartEmpty = () => {
    setcartItem([])
  }
  return (
    <Router>
      <div className="App">
        <Header user={user} logout={setUser} />
        <div className="content">
          <Routes>
            <Route
              element={<Home addToCart={addToCart} />}
              path="/home"
            ></Route>
            <Route element={<Login getLogin={setUser} />} path="/login"></Route>
            <Route element={<About />} path="/about"></Route>
            <Route element={<Help />} path="/about/help"></Route>
            <Route element={<Faq />} path="/about/faq"></Route>
            <Route element={<Contact />} path="/about/contact"></Route>
            <Route
              element={<Cart cartItem={cartItem} setCartEmpty={setCartEmpty} />}
              path="/shoppingCart"
            ></Route>
            <Route element={<Admin />} path="/admin"></Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}
export default App
