import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const Products = ({data}) => {
  const {productId} = useParams();
  const selectedProduct = data.find(product => product.id == productId)

  return (
    <div>
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct}/>
    </div>
  );
};

export default Products;
