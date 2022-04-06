import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { setUser } from "../store/userSlice";

export default function Auth() {
  const [user, SetUser] = useState({ name: "", is_admin: false });
  const [display, SetDisplay] = useState("none");
  const [authStatus, SetAuthStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authStatus) navigate("/content");
  });

  const login = () => {
    if (user.name === "andre") {
      SetDisplay("none");
      user.is_admin = true;
      dispatch(setUser(user));
      SetAuthStatus(true);
    } else if (user.name === "filipe") {
      SetDisplay("none");
      dispatch(setUser(user));
      SetAuthStatus(true);
    } else {
      SetDisplay("block");
    }
  };

  return (
    <h3>
      <label>Nome </label>
      <input
        name="name"
        value={user.name}
        onChange={(e) =>
          SetUser((prev) => ({
            ...prev,
            name: e.target.value,
            is_admin: user.is_admin,
          }))
        }
      ></input>
      <button onClick={() => login()}>Login</button>
      <p style={{ color: "red", display: display }}>login fail!</p>
    </h3>
  );
}

/*
{
    authStatus ? <Navigate to={"/content"} state={{ from: location }} replace /> : ''
}
*/
