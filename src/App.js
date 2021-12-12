import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
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
          <Route element={<FAQ />} path="/FAQ"></Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
