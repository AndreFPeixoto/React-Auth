import React from "react";
import { useSelector } from "react-redux";

export default function Private() {
    let user = useSelector((state) => state.user.value);
    return <h3>{user.name}</h3>;
}