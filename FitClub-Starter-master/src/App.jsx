import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddBook from './components/AddBook'
import Header from './components/Header'
import BookProvider from './context/BookContext'
import BookList from './components/BookList'

function App() {

  return (
    <div className="container">
      <BookProvider>
        <Header />
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/add' element={<AddBook />} />
        </Routes>
      </BookProvider>
    </div>
  )
}

export default App
