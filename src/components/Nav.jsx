import React from "react";
import { Link } from "react-router-dom";

export default props =>
    <nav>
        <Link to="/">/</Link> |
        <Link to={"/content"}> Content</Link> |
        <Link to={"/dashboard"}> Dashboard</Link> |
        <Link to={"/auth"}> Auth</Link> |
        <Link to={"/logout"}> Signout</Link>
    </nav>