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
        setUserData={setUserData}
        setUserLoggedIn={setUserLoggedIn}
      />
      <div>App</div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
