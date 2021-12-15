import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import logoUrl from '../../assets/image/logo.svg'
import { message } from 'antd'
const Header = ({ user, logout }) => {
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
  function handleClickAdmin() {
    navigate('/admin')
  }
  function handleClickLogout() {
    logout({ userName: '', userAuth: '' })
    message.info(user.userName + '已登出')
    navigate('/')
    localStorage.removeItem('userName')
    localStorage.removeItem('userAuth')
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
        {user.userAuth ? (
          <div className="loginButton" onClick={handleClickLogout}>
            退出登录({user.userName})
          </div>
        ) : (
          <div className="loginButton" onClick={handleClickLogin}>
            登录
          </div>
        )}

        <div className="faq" onClick={handleClickFAQ}>
          关于
        </div>
        {user.userAuth === 'admin' && (
          <div className="admin" onClick={handleClickAdmin}>
            后台管理
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
