import { createContext } from "react"
import Storage from "../hooks/Storage";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = Storage('books', []);

  const value = { books, setBooks }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider