import React from "react";
import "./index.scss";
import dncLogo from "../../assets/logo-dnc.png"

function Header() {
  return(
    <div className="header">
        <div>
            <img src={dncLogo} alt="dncLogo"></img>
        </div>
    </div>
  );
  
}

export default Header;
