import React from "react";
import { useHistory } from "react-router-dom";
import { userDeleted, getUser } from "../../Store/Slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export const UserPage = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector(getUser(userId));

  const history = useHistory();
  const dispatch = useDispatch();

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <button class="btn btn-primary mx-1" onClick={editUser}>
        Edit
      </button>
      <button class="btn btn-danger mx-1" onClick={deleteUser}>
        Delete
      </button>
    </div>
  );

  function editUser() {
    history.push(`/editUser/${user.id}`);
  }

  function deleteUser() {
    dispatch(userDeleted({ id: userId }));
    history.push(`/users`);
  }
};
