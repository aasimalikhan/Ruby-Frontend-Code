import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import User from "./components/User";

const App = () => {
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    email: "",
    password_digest: "",
  });

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
      <User
        userData={userData}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLogged}
      />
      <div>App</div>
    </>
  );
};

export default App;