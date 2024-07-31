import React, { useState } from "react";
import useStore from "../store";

const AddItem = () => {
  const [name, setName] = useState("");
  const addItem = useStore((state) => state.addItem);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addItem({ id: Date.now(), name });
      setName("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="item-name"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Item Name
          </label>
          <input
            id="item-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
