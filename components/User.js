import React from "react";
import Post from "./Post";

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

      const { username, password, email } = props.userData;

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            email,
            password,
          },
        }),
      });
      const responseData = await response.json();
      props.setLoggedUserData(responseData);
      props.setUserLoggedIn(true);
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="user_create_container">
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
            name="password"
            placeholder="Password"
            value={props.userData.password_digest}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      {props.userLoggedIn ? (
        <Post loggedUserData={props.loggedUserData} />
      ) : (
        <></>
      )}
      {props.userLoggedIn ? <h1>User logged</h1> : <h1> User not logged</h1>}
    </>
  );
};

export default User;
