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
    navigate('/About')
  }
  function handleClickOnLogo() {
    navigate('/')
  }
  function handleClickCart() {
    navigate('/shoppingCart')
  }
  return (
    <div className="header">
      <div className="logo" onClick={handleClickOnLogo}>
        <img src={logoUrl} alt="" style={{ width: '3vw', height: '5vh' }} />
        <div style={{ color: '#fff' }}>知书</div>
      </div>
      <div
        style={{
          display: 'flex',
          color: '#434343aa',
          height: '5vh',
          alignItems: 'center',
          fontWeight: '900',
          marginRight: '2vw',
        }}
      >
        <div className="cart" onClick={handleClickCart}>
          购物车
        </div>
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
