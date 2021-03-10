import React from "react";
import logo from "../../../src/logo.svg";

const Header = (props) => (
  <div
    className="container-fluid shadow mb-2 p-2 position-fixed bg-info text-light"
    style={{ zIndex: "1" }}
  >
    <img src={logo} className="App-logo mr-auto" alt="logo" />
    Tracks by Artists
  </div>
);

export default Header;
