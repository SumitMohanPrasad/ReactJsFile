
const Book = ({ book, handleRemoveBook }) => {
  const { id,name, author, ISBN} = book;

  return (
    <div className="book">
      <h2>{name}</h2>
      <div className="bookDetail">
        <p>Author: {author}</p>
        <p>ISBN#: {ISBN}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleRemoveBook(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Book