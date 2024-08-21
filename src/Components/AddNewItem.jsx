import { useContext, useState } from "react";
import Input from "./Input";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddNewItem = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: nanoid(),
      title,
      price: parseFloat(price),
      description,
      image,
      category,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);

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
            value="Add Product"
          />
        
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
