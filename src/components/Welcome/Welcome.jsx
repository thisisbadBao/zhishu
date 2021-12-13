import React from 'react'
import './Welcome.css'
import bookImgUrl from '../../assets/image/book.svg'
const Welcome = () => {
  return (
    <div className="welcome">
      <div>
        <img src={bookImgUrl} alt="" />
      </div>
      <div className="serchBar">search</div>
    </div>
  )
}

export default Welcome
