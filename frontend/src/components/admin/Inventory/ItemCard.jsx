import React from 'react';
import { Link } from 'react-router-dom';
import { deleteItem } from './apiInvCalls';

const ItemCard = ({item, onDelete}) => {
    
    const {
        _id,
        product,
        productFeatures,
        keyFeatures,
        description,
        image
    } = item;


    const detailsPath = `/admin/inventory/${_id}`;
    const updatePath = `/admin/inventory/${_id}/update`;


    const handleDelete = async () => {
      try{
        const response = await deleteItem(_id);
        if (response.ok) {
          console.log(`Calling onDelete for ${_id}`);
          onDelete(_id);
        }else{
          console.error("There was an error deleting the item");
        }
      }catch(error){
          console.error("There was an error deleting the item", error);
      }
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-4 mb-9 my-4">
        <div className="border-2">
          <img
            src={image || "default-inventory-image.jpg"} // Fallback to a default image if `imageUrl` is null
            alt={product}
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-5">Product Name: {product}</h3>
          <div className="mb-5">
            <h4 className="font-semibold">Product Features:</h4>
            <ul className="list-disc list-inside">
              {productFeatures.split(",").map((feature,index) => (
                <li key={index} className='list-none'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold">Key Features:</h4>
            <li className='list-none'>{keyFeatures}</li>
          </div>
          <div>
            <h4 className="font-semibold">Description:</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col p-4 gap-2">
          <Link
            to={updatePath}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Update
          </Link>
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