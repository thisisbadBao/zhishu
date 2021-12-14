import React from 'react'
import './BookGrid.css'
import BookItem from '../BookItem/BookItem'

const BookGrid = () => {
  const bookArr = [
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
    {
      bookImg:
        'https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7',
      bookName: '局外人',
      author: '加缪',
    },
  ]
  return (
    <div className="bookGrid">
      {bookArr.map((item, index) => (
        <BookItem
          bookImg={item.bookImg}
          bookName={item.bookName}
          bookAuthor={item.author}
          bookPrice={77}
          key={index}
        />
      ))}
    </div>
  )
}

export default BookGrid
