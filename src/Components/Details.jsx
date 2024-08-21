import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((prod) => prod.id == id);
      setProduct(foundProduct);
    }
  }, [products, id]);

  const handleDelete = () => {
    setProducts((prev) => prev.filter((elem) => elem.id != id));
    navigate(-1);
  };
  return product ? (
    <div className="w-full  flex gap-32 justify-center items-center">
      <img className="w-1/5 object-cover " src={product.image} alt="" />

      <div className="flex flex-col gap-2 w-3/12 items-start ">
        <span className="font-bold text-3xl">Title:{product.title}</span>
        <Link
          to={`/?category=${product.category}`}
          className="text-xl w-fit text-gray-400"
        >
          {product.category.toUpperCase()}
        </Link>
        <span className="text-xl ">Price: ${product.price}</span>
        <p>{product.description}</p>

        <div className="w-1/2 text-white flex gap-10 mt-10">
          <Link
            to={`/Edit/${product.id}`}
            className=" text-center w-1/2 p-2 border border-blue-400 text-blue-400"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className=" w-1/2 py-2 border border-red-400 text-red-400"
          >
            Delete
          </button>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="w-1/4 py-2 text-center border mt-4 border-purple-400 text-purple-400"
        >
          Go Back
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
