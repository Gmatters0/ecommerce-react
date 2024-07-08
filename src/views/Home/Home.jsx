import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";

const Home = ({ data }) => {
  return (
    <div className="home">
      <HeaderMenu />
      <Search />
    </div>
  );
};

export default Home;
