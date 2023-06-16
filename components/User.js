import React from "react";

const User = (props) => {
  const handleInputChange = (event) => {
    props.setUserData({
      ...props.userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserDataSubmit = async (event) => {
    try {
      event.preventDefault();

      const { username, password_digest, email } = props.userData;

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            email,
            password_digest,
          },
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleUserDataSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={props.userData.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password_digest"
          placeholder="Password"
          value={props.userData.password_digest}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
      {props.userLoggedIn ? <h1>User logged</h1> : <h1> User not logged</h1>}
    </>
  );
};

export default User;
