import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  let navigate = useNavigate()
  function handleClickLogin() {
    navigate('/login')
  }
  function handleClickFAQ() {
    navigate('/FAQ')
  }
  return (
    <div className="header">
      <div>知书</div>
      <div style={{ display: 'flex' }}>
        <div className="login" onClick={handleClickLogin}>
          Sign In
        </div>
        <div className="faq" onClick={handleClickFAQ}>
          FAQ
        </div>
      </div>
    </div>
  )
}

export default Header
