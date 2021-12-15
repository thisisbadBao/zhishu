import './BookGrid.css'
import BookItem from '../BookItem/BookItem'
import { useState, useEffect } from 'react'
import * as Api from '../../utils/api'
const BookGrid = ({ res, addToCart }) => {
  const [bookArray, setBookArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let response = await Api.getAllBook()
      setBookArray(response.data)
    }
    fetchData()
  }, [])
  return (
    <div className="bookGrid">
      {res.length === 0 ? (
        bookArray.map((item, index) => (
          <BookItem
            bookImg={item.bookpic}
            bookName={item.bookname}
            bookAuthor={item.bookauthor}
            bookPrice={item.bookprice}
            bookNote={item.booknote}
            bookRelease={item.bookrelease.split('T')[0]}
            bookRemain={item.bookremain}
            addToCart={addToCart}
            key={index}
          />
        ))
      ) : res[0] === 'yes' ? (
        bookArray.map((item, index) => (
          <BookItem
            bookImg={item.bookpic}
            bookName={item.bookname}
            bookAuthor={item.bookauthor}
            bookPrice={item.bookprice}
            bookNote={item.booknote}
            bookRelease={item.bookrelease.split('T')[0]}
            bookRemain={item.bookremain}
            addToCart={addToCart}
            key={index}
          />
        ))
      ) : res[0] === 'no' ? (
        <div style={{ fontSize: '3vh' }}>Oops,没有找到你想要的书</div>
      ) : (
        res.map((item, index) => (
          <BookItem
            bookImg={item.bookpic}
            bookName={item.bookname}
            bookAuthor={item.bookauthor}
            bookPrice={item.bookprice}
            bookNote={item.booknote}
            bookRelease={item.bookrelease.split('T')[0]}
            bookRemain={item.bookremain}
            addToCart={addToCart}
            key={index}
          />
        ))
      )}
    </div>
  )
}

export default BookGrid
