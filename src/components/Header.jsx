import React, { useState } from "react";

export default function Header({profileURL}) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header>
      <div className="logo-text">
        {" "}
        <img
          src="/assets/logo.png"
          className="logo-header"
          alt="noteWell-logo-img"
        />
        <h1 className="logo-header">noteWell</h1>
      </div>
      <div>
        <img
          src={profileURL}
          className="user-profile_img"
          alt="user"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="dropdown-menu-container">
            <h3 className="dropdown-menu-username">The Rocketman Show</h3>
            <hr />
            <button className="dropdown-menu-logout">Log Out</button>
          </div>
        )}
      </div>
    </header>
  );
}
