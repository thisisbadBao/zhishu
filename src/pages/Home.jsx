import '../styles/Home.css'
import Welcome from '../components/Welcome/Welcome'
import BookGrid from '../components/BookGrid/BookGrid'
const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Welcome />
        <BookGrid />
      </div>
    </div>
  )
}

export default Home
