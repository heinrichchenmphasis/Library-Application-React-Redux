import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  checkoutUpdated,
  getCheckout,
} from "../../Store/Slices/checkoutsSlice";
import { CheckoutForm } from "../../Cells/Forms/CheckoutForm";

export const CheckoutEdit = ({ match }) => {
  const { checkoutId } = match.params;
  const checkout = useSelector(getCheckout(checkoutId));

  const [bookId, setBookId] = useState(checkout.bookId);
  const [userId, setUserId] = useState(checkout.userId);
  const [period, setPeriod] = useState(checkout.period);

  const dispatch = useDispatch();

  const handleBookIdChanged = (e) => setBookId(e.target.value);
  const handleUserIdChanged = (e) => setUserId(e.target.value);
  const handlePeriodChanged = (e) => setPeriod(e.target.value);

  const handleUpdateCheckoutClicked = () => {
    if (bookId && userId && period) {
      dispatch(checkoutUpdated({ id: checkoutId, bookId, userId, period }));
      setBookId("");
      setUserId("");
      setPeriod("");
    }
  };

  return (
    <div className="container col-4">
      <CheckoutForm
        bookId={bookId}
        userId={userId}
        period={period}
        onBookIdChanged={handleBookIdChanged}
        onUserIdChanged={handleUserIdChanged}
        onPeriodChanged={handlePeriodChanged}
        onSubmitClicked={handleUpdateCheckoutClicked}
      />
    </div>
  );
};

export default CheckoutEdit;
