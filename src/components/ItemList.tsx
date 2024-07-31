import useStore from "../store";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";

const ItemList = () => {
  const { items, updateItem, deleteItem } = useStore((state) => state);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <span className="text-lg font-medium text-gray-900">
              {item.name}
            </span>
            <div className="space-x-3">
              <button
                onClick={() =>
                  updateItem(
                    item.id,
                    prompt("New name", item.name) || item.name
                  )
                }
                className="text-sky-800"
              >
                <RiEdit2Fill size={24} />
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-red-600"
              >
                <FaDeleteLeft size={24} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
