import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { setUser } from "../store/userSlice";

export default function RequireAuth(props) {
  const dispatch = useDispatch();
  let location = useLocation();
  dispatch(setUser(null));
  return <Navigate to={"/auth"} state={{ from: location }} replace />;
}
