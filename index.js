import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { ReactComponent as Bell } from "./icons/bell.svg";

import React, { useState } from "react";

function App() {
  return (
    <Navbar>
      <NavItem icon="😀" />
      <NavItem icon="😥" />
      <NavItem icon="😍" />

      <NavItem icon="🍕">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="item-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem>My profile</DropdownItem>
    </div>
  );
}

render(<App />, document.getElementById("root"));
