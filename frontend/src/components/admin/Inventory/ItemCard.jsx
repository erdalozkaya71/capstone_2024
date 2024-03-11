import React from 'react';
import { Link } from 'react-router-dom';
import { deleteItem } from './apiInvCalls';

const ItemCard = ({item}) => {
    
    const {
        _id,
        product,
        productFeatures,
        keyFeatures,
        description,
        image
    } = item;


    const detailsPath = `/admin/inventory/${_id}`;

    const handleUpdate = () => console.log("Update action for", product);

    const handleDelete = async (id) => {
        const response = await deleteItem(id);
        if (response.status === 200) {
            console.log("Item deleted successfully");
        } else {
            console.log("There was an error deleting the item");
        }
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-4 mb-4">
        <img
          src={image || "default-inventory-image.jpg"} // Fallback to a default image if `imageUrl` is null
          alt={product}
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg"
        />
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">Product Name: {product}</h3>
          <div className="mb-2">
            <h4 className="font-semibold">Product Features:</h4>
            <ul className="list-disc list-inside">
              {productFeatures.split(",").map((feature,index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <h4 className="font-semibold">Key Features:</h4>
            <li>{keyFeatures}</li>
          </div>
          <div>
            <h4 className="font-semibold">Description:</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Delete
          </button>
          <Link
            to={detailsPath}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    );
}

export default ItemCard;