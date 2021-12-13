import React from 'react'
import './BookItem.css'
const BookItem = ({ bookImg, bookName, author }) => {
  return (
    <div className="bookItem">
      <div className="bookImg">
        <img src={bookImg} alt="" style={{ width: '100%' }} />
      </div>
      <div className="bookInfo">
        <div>《{bookName}》</div>
        <div>作者：{author}</div>
      </div>
    </div>
  )
}

export default BookItem
