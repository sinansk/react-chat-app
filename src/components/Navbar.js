import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/13586038/pexels-photo-13586038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span></span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
