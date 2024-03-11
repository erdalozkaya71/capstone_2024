import React from 'react';
import {useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { getItem,deleteItem } from './apiInvCalls'

const initialItemState = {
    product: "",
    productFeatures: "",
    keyFeatures: "",
    description: "",
    price: 0,
    availability: false,
    purchaseDate: "",
    image: "",
    supplierDetails: {
        suppliers: "",
        contactPerson: "",
        phone: "",
        email: "",
        address: {
        street: "",
        city: "",
        province: "",
        country: "",
        zipCode: "",
        },
    },
};

const ItemDetail = () => {
    const { id } = useParams(); // get the id from the URL

    const [item, setItem] = useState(initialItemState);

    useEffect(() => {
        getItem(id).then((data) => {
            setItem(data);
        });
    }, [id]); // will depend on the id from the URL

    const handleDelete = async (id) => {
        console.log("Delete action for item" + id);
        try{
            await deleteItem(id);
        }catch(error){
            console.error('Error:', error);
        }
    }

    const formattedPurchaseDate = new Date(item.purchaseDate).toLocaleDateString();

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-4 mb-4">
      <img
        src={item.image || 'default-product-image.jpg'} // Fallback to a default image if `image` is null
        alt={item.product}
        className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg"
      />
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2">{item.product}</h3>
        <p className="text-sm mb-2"><strong>Features:</strong> {item.productFeatures}</p>
        <p className="text-sm mb-2"><strong>Key Features:</strong> {item.keyFeatures}</p>
        <p className="text-sm mb-2">{item.description}</p>
        <p className="text-sm mb-2"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
        <p className="text-sm mb-2"><strong>Availability:</strong> {item.availability ? 'In Stock' : 'Out of Stock'}</p>
        <p className="text-sm mb-2"><strong>Purchase Date:</strong> {formattedPurchaseDate}</p>
        <div className="text-sm mb-2">
          <h4 className="font-semibold">Supplier Details:</h4>
          <p>{item.supplierDetails.suppliers}</p>
          <p>{item.supplierDetails.contactPerson}</p>
          <p>{item.supplierDetails.phone}</p>
          <p>{item.supplierDetails.email}</p>
          <p>{`${item.supplierDetails.address.street}, ${item.supplierDetails.address.city}, ${item.supplierDetails.address.province}, ${item.supplierDetails.address.zipCode}, ${item.supplierDetails.address.country}`}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <button onClick={() => console.log("Update")} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300">
          Update
        </button>
        <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300">
          Delete
        </button>
      </div>
    </div>
    );
}

export default ItemDetail;