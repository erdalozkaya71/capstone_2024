import React from 'react';
import {useParams, useNavigate, Link } from 'react-router-dom';
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
    const navigate = useNavigate();
    const { id } = useParams(); // get the id from the URL
    const [item, setItem] = useState(initialItemState);

    const updatePath = `/admin/inventory/${id}/update`;

    useEffect(() => {
        getItem(id).then((data) => {
            setItem(data);
        });
    }, [id]); // will depend on the id from the URL

    const handleDelete = async () => {
        try{
          const response = await deleteItem(id);
          if (response.ok) {
            console.log("Item deleted successfully");
            navigate('/admin/inventory');
          }
        }catch(error){
            console.error('Error:', error);
        }
    }

    const formattedPurchaseDate = new Date(item.purchaseDate).toLocaleDateString();

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-6/12  mx-auto bg-white m-6 p-6 rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-none lg:w-1/4">
              <img
                src={item.image || "default-product-image.jpg"} // Fallback to a default image if `image` is null
                alt={item.product}
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3">{item.product}</h3>
              <p className="text-base mb-3">
                <strong>Features:</strong> {item.productFeatures}
              </p>
              <p className="text-base mb-3">
                <strong>Key Features:</strong> {item.keyFeatures}
              </p>
              <p className="text-base mb-3">{item.description}</p>
              <p className="text-base mb-3">
                <strong>Price:</strong> ${item.price.toFixed(2)}
              </p>
              <p className="text-base mb-3">
                <strong>Availability:</strong>{" "}
                {item.availability ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
              <p className="text-base mb-3">
                <strong>Purchase Date:</strong> {formattedPurchaseDate}
              </p>
              <div className="text-base mb-3">
                <h4 className="font-semibold">Supplier Details:</h4>
                <p>{item.supplierDetails.suppliers}</p>
                <p>{item.supplierDetails.contactPerson}</p>
                <p>{item.supplierDetails.phone}</p>
                <p>{item.supplierDetails.email}</p>
                <p>{`${item.supplierDetails.address.street}, ${item.supplierDetails.address.city}, ${item.supplierDetails.address.province}, ${item.supplierDetails.address.zipCode}, ${item.supplierDetails.address.country}`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-9 mt-9">
            <Link
              to="/admin/inventory"
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Back
            </Link>
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
          </div>
        </div>
      </div>
    );
}

export default ItemDetail;


