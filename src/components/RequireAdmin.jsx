import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { setUser } from "../store/userSlice";

export default function RequireAuth(props) {
  let user = useSelector((state) => state.user.value);
  let location = useLocation();
  if (!user.is_admin) {
    return <Navigate to={"/content"} state={{ from: location }} replace />;
  }
  return <React.Fragment>{props.children}</React.Fragment>;
}
