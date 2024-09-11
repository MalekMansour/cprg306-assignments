const Item = ({ name, quantity, category }) => {
    return (
      <li className="bg-gray-100 border border-gray-300 rounded p-4 mb-2">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-600">Quantity: {quantity}</div>
        <div className="text-gray-600">Category: {category}</div>
      </li>
    );
  };
  
  export default Item;