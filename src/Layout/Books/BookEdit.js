import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bookUpdated, getBook } from "../../Store/Slices/booksSlice";
import { useHistory } from "react-router-dom";
import { BookForm } from "../../Cells/Forms/BookForm";

export const BookEdit = ({ match }) => {
  const { bookId } = match.params;
  const book = useSelector(getBook(bookId));

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [bookReference, setBookReference] = useState(book.bookReference);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleTitleChanged = (e) => setTitle(e.target.value);
  const handleAuthorChanged = (e) => setAuthor(e.target.value);
  const handleBookReferenceChanged = (e) => setBookReference(e.target.value);

  const handleEditBookClicked = () => {
    if (title && author && bookReference) {
      dispatch(bookUpdated({ id: bookId, title, author, bookReference }));
      history.push(`/books/${bookId}`);
    }
  };

  return (
    <div className="container col-4">
      <BookForm
        title={title}
        author={author}
        bookReference={bookReference}
        onTitleChanged={handleTitleChanged}
        onAuthorChanged={handleAuthorChanged}
        onBookReferenceChanged={handleBookReferenceChanged}
        onSubmitClicked={handleEditBookClicked}
      />
    </div>
  );
};

export default BookEdit;
