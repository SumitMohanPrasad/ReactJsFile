import { useContext } from "react";
import './BookList.css';
import { BookContext } from "../context/BookContext";
import Book from "./Book";


const BookList = () => {
  const { books, setBooks } = useContext(BookContext);
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks)
  }

  return (
    <div className="list">
      {books.length ? books.map(book => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
      )) : (
        <p className="noData">No books are added yet</p>
      )}
    </div>
  )
}

export default BookList