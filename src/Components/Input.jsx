const Input = ({ elem, value, handleEdit }) => {
  return (
    <div className="flex w-full gap-12">
      <label className="font-bold text-2xl w-1/4 py-2" htmlFor={elem}>
        {elem.toUpperCase()}:
      </label>
      {elem === "description" ? (
        <textarea
          rows={7}
          value={value}
          onChange={handleEdit}
          className="px-4 resize-none w-2/3 py-3 placeholder:text-black outline-none"
          type="text"
          name={elem}
          id={elem}
          placeholder={`Enter ${elem}`}
          required
        />
      ) : (
        <input
          value={value}
          onChange={handleEdit}
          className="px-4 w-2/3 py-3 placeholder:text-black outline-none"
          type={elem === "url" ? "url" : "text"}
          name={elem}
          id={elem}
          placeholder={`Enter ${elem}`}
          required
        />
      )}
    </div>
  );
};

export default Input;
