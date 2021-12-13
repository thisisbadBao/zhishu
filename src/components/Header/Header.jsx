import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import logoUrl from '../../assets/image/logo.svg'
import cartUrl from '../../assets/image/cart.svg'
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
      <div className="logo">
        <img src={logoUrl} alt="" style={{ width: '3vw', height: '5vh' }} />
        <div>知书</div>
      </div>
      <div
        style={{
          display: 'flex',
          color: '#434343aa',
          height: '5vh',
          alignItems: 'center',
          fontWeight: '900',
        }}
      >
        <div className="cart">购物车</div>
        <div className="login" onClick={handleClickLogin}>
          登录
        </div>
        <div className="faq" onClick={handleClickFAQ}>
          帮助
        </div>
      </div>
    </div>
  )
}

export default Header
