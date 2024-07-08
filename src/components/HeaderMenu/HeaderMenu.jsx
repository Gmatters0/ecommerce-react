import React from "react";
import "./index.scss";
import dncLogo from "../../assets/logo-dnc.png"
import cartShop from "../../assets/cartshop.png"

function HeaderMenu() {
  return (
    <div className="header-menu">
      <img src={dncLogo} alt="dncLogo" className="header-menu__logo"></img>
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu Carrinho</h1>
        <img src={cartShop}></img>
      </div>
    </div>
  );
}

export default HeaderMenu;
