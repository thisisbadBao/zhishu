import React from 'react'
import './Welcome.css'
import bookImgUrl from '../../assets/image/book.svg'
import searchBg from '../../assets/image/searchBg.svg'
import searchIcon from '../../assets/image/searchIcon.svg'
const Welcome = () => {
  const style = {
    bgd: {
      backgroundImage: `url(${searchBg})`,
      backgroundSize: '100%,100%',
    },
  }
  return (
    <div className="welcome" style={style.bgd}>
      <div className="searchLogo">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'default',
          }}
        >
          知书
        </div>
        <img src={bookImgUrl} alt="" style={{ opacity: '0.36' }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'default',
          }}
        >
          达理
        </div>
      </div>
      <div className="searchBar">
        <img src={searchIcon} alt="" style={{ width: '3.5vh' }} />
        <input className="searchInput" placeholder="输入你想查找的书"></input>
      </div>
    </div>
  )
}

export default Welcome
