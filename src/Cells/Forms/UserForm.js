import React from "react";

export const UserForm = (props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;

  const canAdd = Boolean(firstName) && Boolean(lastName);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="Enter first name"
          value={firstName}
          onChange={props.onFirstNameChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Enter last name"
          value={lastName}
          onChange={props.onLastNameChanged}
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

export default UserForm;
