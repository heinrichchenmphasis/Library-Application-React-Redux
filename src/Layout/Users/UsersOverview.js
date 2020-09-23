import React, { useState } from "react";
import UserList from "../../Cells/Lists/UserList";
import UserForm from "../../Cells/Forms/UserForm.js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAdded } from "../../Store/Slices/usersSlice";

export const UsersOverview = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFirstNameChanged = (e) => setFirstName(e.target.value);
  const handleLastNameChanged = (e) => setLastName(e.target.value);

  const handleAddUserClicked = () => {
    if (firstName && lastName) {
      dispatch(userAdded({ firstName, lastName }));
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className="container py-3">
      <h2>Users</h2>
      <div className="row justify-content-between py-3">
        <div className="col-5">
          <UserList onClick={(id) => () => handleUserClick(id)} />
        </div>
        <div className="col-5">
          <UserForm
            firstName={firstName}
            lastName={lastName}
            onFirstNameChanged={handleFirstNameChanged}
            onLastNameChanged={handleLastNameChanged}
            onSubmitClicked={handleAddUserClicked}
          />
        </div>
      </div>
    </div>
  );

  function handleUserClick(id) {
    history.push(`/users/${id}`);
  }
};

export default UsersOverview;
