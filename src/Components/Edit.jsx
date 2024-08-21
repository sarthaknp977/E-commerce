import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const product = products.find((prod) => prod.id.toString() === id);

    if (product) {
      setTitle(product.title);
      setPrice(product.price);
      setDescription(product.description);
      setImage(product.image);
      setCategory(product.category);
    } else {
      console.log("Product not found");
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id,
      title,
      price: parseFloat(price),
      description,
      image,
      category,
    };

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id.toString() === id ? updatedProduct : product
      )
    );

    navigate(-1);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="h-2/3 w-3/4 bg-blue-100 border shadow-2xl flex flex-col rounded-2xl py-10 gap-4 px-32"
      >
        <Input
          elem="title"
          value={title}
          handleEdit={(e) => setTitle(e.target.value)}
        />
        <Input
          elem="price"
          value={price}
          handleEdit={(e) => setPrice(e.target.value)}
        />
        <Input
          elem="category"
          value={category}
          handleEdit={(e) => setCategory(e.target.value)}
        />
        <Input
          elem="description"
          value={description}
          handleEdit={(e) => setDescription(e.target.value)}
        />
        <Input
          elem="url"
          value={image}
          handleEdit={(e) => setImage(e.target.value)}
        />

        <div className="w-full flex items-end h-full gap-12">
          <input
            type="submit"
            className="border-green-800 px-4 py-2 h-fit text-green-800 border-2 font-bold"
            value="Update Product"
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
