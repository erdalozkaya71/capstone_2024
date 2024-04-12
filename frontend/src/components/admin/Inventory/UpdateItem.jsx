import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem , updateItem } from './apiInvCalls'; // Uncomment and set the correct import path

const initialItemState = {
    product: "",
    productFeatures: "",
    keyFeatures: "",
    description: "",
    price: 0,
    availability: true,
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

const UpdateItem = () => {

    const { id } = useParams();
    const [item, setItem] = useState({ ...initialItemState });
    const navigate = useNavigate();

    function formatDateToYYYYMMDD(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-based
        const day = `${date.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    

    useEffect(() => {
        const fetchItem = async () => {
            try{
                const data = await getItem(id);
                data.purchaseDate = formatDateToYYYYMMDD(data.purchaseDate);
                setItem(data);
            }catch(error){
                console.error('Error:', error);
            }            
        }

        fetchItem();
    }, [id]);



  const handleChange = ({ target: { name, value } }) => {
    setItem((prevItem) => {
      // Create a deep copy of the state to maintain immutability
      const updatedItem = JSON.parse(JSON.stringify(prevItem));
  
      // Split the name by "." to access deep properties
      const keys = name.split(".");
      let current = updatedItem;
  
      // Iterate over the keys and update the correct nested property
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;  // Assign the value at the last key
        } else {
          if (!(key in current)) {
            current[key] = {};  // Initialize the nested object if it doesn't exist
          }
          current = current[key];  // Move deeper into the object
        }
      });
  
      return updatedItem;
    });
  };


    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setItem((prevItem) => ({
                ...prevItem,
                image: reader.result // store image data as base64 string
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await updateItem(id,item);
    const data = await response.json();

    if (response.ok) {
      alert('Inventory item Edited successfully');
      navigate('/admin/inventory'); // Redirect to inventory list or another appropriate route
    } else {
      console.error('Error creating inventory item:', data);
    }
  };

  const handleCancel = () => {
    setItem({ ...initialItemState });
    navigate('/admin/inventory'); // Redirect to inventory list or another appropriate route
  }

  return (
    <div className="container mx-auto p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6">Edit Inventory Item</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                  type="text"
                  name="product"
                  value={item.product}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="productFeatures"
                  value={item.productFeatures}
                  onChange={handleChange}
                  placeholder="Product Features"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="keyFeatures"
                  value={item.keyFeatures}
                  onChange={handleChange}
                  placeholder="Key Features"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <textarea
                  name="description"
                  value={item.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="form-textarea px-4 py-2 rounded"
                  rows="4"
                  required
              />
              <input
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <select
                  name="availability"
                  value={item.availability}
                  onChange={handleChange}
                  className="form-select px-4 py-2 rounded"
                  required
              >
                  <option value={true}>In Stock</option>
                  <option value={false}>Out of Stock</option>
              </select>
              <input
                  type="date"
                  name="purchaseDate"
                  value={item.purchaseDate}
                  onChange={handleChange}
                  placeholder="Purchase Date"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="file"
                  name="image"
                  onChange={handlePhotoChange}
                  className="form-input px-4 py-2 rounded"
              />
              <input
                  type="text"
                  name="supplierDetails.suppliers"
                  value={item.supplierDetails.suppliers}
                  onChange={handleChange}
                  placeholder="Suppliers"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="supplierDetails.contactPerson"
                  value={item.supplierDetails.contactPerson}
                  onChange={handleChange}
                  placeholder="Contact Person"
                  className="form-input px-4 py-2

            rounded"
                  required
              />
              <input
                  type="tel"
                  name="supplierDetails.phone"
                  value={item.supplierDetails.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="email"
                  name="supplierDetails.email"
                  value={item.supplierDetails.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="supplierDetails.address.street"
                  value={item.supplierDetails.address.street}
                  onChange={handleChange}
                  placeholder="Street"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="supplierDetails.address.city"
                  value={item.supplierDetails.address.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="supplierDetails.address.province"
                  value={item.supplierDetails.address.province}
                  onChange={handleChange}
                  placeholder="Province"
                  className="form-input px-4 py-2 rounded"
              />
              <input
                  type="text"
                  name="supplierDetails.address.country"
                  value={item.supplierDetails.address.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="text"
                  name="supplierDetails.address.zipCode"
                  value={item.supplierDetails.address.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  className="form-input px-4 py-2 rounded"
                  required
              />
              <input
                  type="file"
                  name="image"
                  onChange={handlePhotoChange}
                  className="form-input px-4 py-2 rounded"
              />
          </div>
          <div className="flex justify-end gap-4 mt-4">
              <button
                  onClick={handleCancel}
                  type="button"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Update new item
      </button>
    </div>
      </form>
    </div>
  );
};

export default UpdateItem;
