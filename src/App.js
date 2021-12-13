import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Help from './pages/Help'
import About from './pages/About'
import Contact from './pages/Contact'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/home"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Help />} path="/about/help"></Route>
          <Route element={<Faq />} path="/about/faq"></Route>
          <Route element={<Contact />} path="/about/contact"></Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
