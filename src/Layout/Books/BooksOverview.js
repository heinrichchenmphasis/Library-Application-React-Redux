import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import BookList from "../../Cells/Lists/BookList";
import BookForm from "../../Cells/Forms/BookForm.js";
import { bookAdded } from "../../Store/Slices/booksSlice";

export const BooksOverview = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookReference, setBookReference] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleTitleChanged = (e) => setTitle(e.target.value);
  const handleAuthorChanged = (e) => setAuthor(e.target.value);
  const handleBookReferenceChanged = (e) => setBookReference(e.target.value);

  const handleAddBookClicked = () => {
    if (title && author && bookReference) {
      dispatch(bookAdded({ title, author, bookReference }));
      setTitle("");
      setAuthor("");
      setBookReference("");
    }
  };

  return (
    <div className="container py-3">
      <h2>Books</h2>
      <div className="row justify-content-between py-3">
        <div className="col-5">
          <BookList onClick={(id) => () => handleBookClick(id)} />
        </div>
        <div className="col-5">
          <BookForm
            title={title}
            author={author}
            bookReference={bookReference}
            onTitleChanged={handleTitleChanged}
            onAuthorChanged={handleAuthorChanged}
            onBookReferenceChanged={handleBookReferenceChanged}
            onSubmitClicked={handleAddBookClicked}
          />
        </div>
      </div>
    </div>
  );

  function handleBookClick(id) {
    history.push(`/books/${id}`);
  }
};

export default BooksOverview;
