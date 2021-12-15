import { React, useState, useEffect } from 'react'
import './Welcome.css'
import bookImgUrl from '../../assets/image/book.svg'
import searchBg from '../../assets/image/searchBg.svg'
import searchIcon from '../../assets/image/searchIcon.svg'
import * as Api from '../../utils/api'
const Welcome = ({ getSearch }) => {
  const [searchRes, setSearchRes] = useState([])
  const [keyword, setKeyword] = useState('')
  const searchBookByName = async bookname => {
    if (keyword === '') {
      getSearch(['yes'])
      return
    }
    let res = await Api.searchBook(keyword)
    if (res.errCode === 5) {
      getSearch(['no'])
    }
    if (res.code === 200) {
      getSearch(res.data)
    }
  }
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
        <input
          className="searchInput"
          placeholder="输入你想查找的书"
          value={keyword}
          onChange={e => {
            setKeyword(e.target.value)
          }}
          onKeyDown={e => {
            if (e.code === 'Enter') {
              searchBookByName(keyword)
            }
          }}
        ></input>
      </div>
    </div>
  )
}

export default Welcome
