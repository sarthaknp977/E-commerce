import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Product from "./Product";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [products] = useContext(ProductContext);
  let { search } = useLocation();

  search = search.split("=")[1];
  const category = decodeURIComponent(search);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    products
      ? setFilteredProducts(
          products.filter((elem) => {
            return elem.category === category;
          })
        )
      : "";
  }, [products, category]);

  return products ? (
    <>
      <Nav />
      <div className="w-full min-h-screen flex gap-4 flex-wrap  overflow-y-scroll p-10">
        {filteredProducts.length !== 0
          ? filteredProducts.map((elem) => {
              return <Product key={elem.id} elem={elem} />;
            })
          : products.map((elem) => {
              return <Product key={elem.id} elem={elem} />;
            })}{" "}
        {filteredProducts.length !== 0
          ? filteredProducts.map((elem) => {
              return <Product key={elem.id} elem={elem} />;
            })
          : products.map((elem) => {
              return <Product key={elem.id} elem={elem} />;
            })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
