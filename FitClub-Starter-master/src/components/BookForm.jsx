import { useState } from "react";
import './BookForm.css';

const BookForm = ({ book, handleSubmit }) => {
  const [bookState, setBookState] = useState({
    name: book ? book.name : '',
    author: book ? book.author : '',
    ISBN: book ? book.ISBN : '',
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setBookState({ name: '', author: '', ISBN: ''})
  }

  const Input = (label, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value={bookState[name]} onChange={handleChange} name={name} type="text"  />
    </div>
  );

  const disabledSubmit = !bookState.name || !bookState.author || !bookState.ISBN;

  return (
    <form onSubmit={onSubmit} className="form">
      {Input('Title', 'name')}
      {Input('Author', 'author')}
      {Input('ISBN#',  'ISBN')}
      <button type="submit" className="btn" disabled={disabledSubmit}>{book ? 'Update' : 'Submit'}</button>
    </form>
  )
}

export default BookForm