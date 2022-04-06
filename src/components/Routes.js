import React from "react";
import { Route, Routes } from "react-router";
import Public from "./Public";
import NoMatch from "./NoMatch";
import Private from "./Private";
import Auth from "./Auth";
import RequireAuth from "./RequireAuth";
import RequireAdmin from "./RequireAdmin";
import { useDispatch } from "react-redux";
import Signout from "./Signout";

export default function MyRoutes() {
  const dispatch = useDispatch();
  return (
    <Routes>
      <Route exact path="/" element={<Public />}></Route>
      <Route
        path="/content"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <RequireAdmin>
              <Private />
            </RequireAdmin>
          </RequireAuth>
        }
      ></Route>
      <Route path="/auth" element={<Auth dispatch={dispatch} />}></Route>
      <Route path="/logout" element={<Signout />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  );
}
