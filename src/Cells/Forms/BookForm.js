import React from "react";

export const BookForm = (props) => {
  const title = props.title;
  const author = props.author;
  const bookReference = props.bookReference;

  const canAdd = Boolean(title) && Boolean(author) && Boolean(bookReference);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter book title"
          value={title}
          onChange={props.onTitleChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Enter book author"
          value={author}
          onChange={props.onAuthorChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bookReference">Book Reference</label>
        <input
          type="text"
          className="form-control"
          id="bookReference"
          placeholder="Enter book reference number"
          value={bookReference}
          onChange={props.onBookReferenceChanged}
        />
      </div>
      <button
        type="button"
        onClick={props.onSubmitClicked}
        disabled={!canAdd}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;
