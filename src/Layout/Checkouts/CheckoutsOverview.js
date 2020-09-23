import React, { useState } from "react";
import BookList from "../../Cells/Lists/BookList";
import UserList from "../../Cells/Lists/UserList";
import CheckoutList from "../../Cells/Lists/CheckoutList";
import CheckoutForm from "../../Cells/Forms/CheckoutForm.js";
import { useDispatch } from "react-redux";
import { checkoutAdded } from "../../Store/Slices/checkoutsSlice";

export const CheckoutsOverview = () => {
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");
  const [period, setPeriod] = useState("");

  const dispatch = useDispatch();

  const handleBookIdChanged = (e) => setBookId(e.target.value);
  const handleUserIdChanged = (e) => setUserId(e.target.value);
  const handlePeriodChanged = (e) => setPeriod(e.target.value);

  const handleAddCheckoutClicked = () => {
    if (bookId && userId && period) {
      dispatch(checkoutAdded({ bookId, userId, period }));
      setBookId("");
      setUserId("");
      setPeriod("");
    }
  };

  return (
    <div className="container py-3">
      <h2>Checkouts</h2>
      <div className="row justify-content-between py-3">
        <div className="col-4">
          <BookList onClick={(id) => () => handleBookClick(id)} />
        </div>
        <div className="col-4">
          <UserList onClick={(id) => () => handleUserClick(id)} />
        </div>
        <div className="col-4">
          <CheckoutForm
            bookId={bookId}
            userId={userId}
            period={period}
            onBookIdChanged={handleBookIdChanged}
            onUserIdChanged={handleUserIdChanged}
            onPeriodChanged={handlePeriodChanged}
            onSubmitClicked={handleAddCheckoutClicked}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <CheckoutList />
        </div>
      </div>
    </div>
  );

  function handleBookClick(id) {
    setBookId(id);
  }

  function handleUserClick(id) {
    setUserId(id);
  }
};

export default CheckoutsOverview;
