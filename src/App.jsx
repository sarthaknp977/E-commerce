import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import AddNewItem from "./Components/AddNewItem";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";

const App = () => {
  return (
    <div className="w-full select-none h-screen flex">
      <Routes>
        <Route path="/AddNewItem" element={<AddNewItem />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Cart" element={<Cart />} />

        <Route path="/CheckOut" element={<CheckOut />} />
      </Routes>
    </div>
  );
};

export default App;
