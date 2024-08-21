import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Nav = () => {
  const [products, setProducts, cart, setCart] = useContext(ProductContext);
  let categories = new Set();

  products.forEach((element) => {
    categories.add(element.category);
  });

  categories = Array.from(categories); // This + Line 29 is same as line 21

  return categories ? (
    <nav className="h-full border-r-black border flex flex-col gap-12">
      <div className="w-fit  px-4 py-2 flex flex-col gap-10">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <Link
              className=" text-black p-3 rounded-full flex gap-5 w-fit "
              to="/"
            >
              <span>Home</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
            <Link to="/Cart" className="relative  flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className=" absolute z-20 -top-1 left-[40%] border text-center rounded-full bg-black border-black  h-[15px] w-[15px] ">
                <h1 className=" text-[10px] w-full flex items-center justify-center h-full rounded-full text-white">
                  <span>{cart.length}</span>
                </h1>
              </div>
            </Link>
          </div>
          {/* <Link
            className=" px-3 py-1  border-green-400 border text-green-500 "
            to="/AddNewItem"
          >
            Add New Item
          </Link> */}
        </div>
        <h1>Category</h1>
        <ul className="flex flex-col list-disc pl-3 text-xl">
          {/* {Array.from(
          categories.map((e) => (
            <li key={e} className=" mb-1 px-3 py-2 ">
              <Link to={`/${e}`}>{e}</Link>
            </li>
          ))
        )} */}

          {categories.map((e) => (
            <li key={e} className=" mb-1 px-3 py-2 ">
              <Link to={`/?category=${e}`}>{e}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  ) : (
    <Loading />
  );
};

export default Nav;
