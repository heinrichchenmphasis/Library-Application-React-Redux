import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userUpdated, getUser } from "../../Store/Slices/usersSlice";
import { useHistory } from "react-router-dom";
import { UserForm } from "../../Cells/Forms/UserForm";

export const UserEdit = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector(getUser(userId));

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFirstNameChanged = (e) => setFirstName(e.target.value);
  const handleLastNameChanged = (e) => setLastName(e.target.value);

  const handleEditUserClicked = () => {
    if (firstName && lastName) {
      dispatch(userUpdated({ id: userId, firstName, lastName }));
      setFirstName("");
      setLastName("");
      history.push(`/users/${userId}`);
    }
  };

  return (
    <div className="container col-4">
      <UserForm
        firstName={firstName}
        lastName={lastName}
        onFirstnameChanged={handleFirstNameChanged}
        onLastNameChanged={handleLastNameChanged}
        onSubmitClicked={handleEditUserClicked}
      />
    </div>
  );
};

export default UserEdit;
