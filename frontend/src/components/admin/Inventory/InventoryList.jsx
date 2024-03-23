import React from 'react';
import ItemCard from './ItemCard';
import { useState , useEffect} from 'react';
import { getAllInventory } from './apiInvCalls' // swap for inventory api calls
import { HashLoader } from 'react-spinners';

const InventoryList = () => {

const [loading, setLoading] = useState(false);
const [inventory, setInventoryList] = useState([]);

useEffect(() => {
  const fetchInventory = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = await getAllInventory();
      setInventoryList(data);
    } catch (error) {
      console.error("Error fetching inventory", error);
    }finally{
      setLoading(false);
    }
  };
  fetchInventory();
}, []);

const handleDelete = (id) => {
  console.log("Attempting to delete item with ID:", id); // This should log the ID
  setInventoryList((currInv) => currInv.filter((item) => item._id !== id));
};


  return (
    // check if the inventory is empty
    <div className="">
      { loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen"> {/* Adjust the height as needed */}
          <HashLoader color="#123abc" loading={loading} size={75} />
          <h1>Fetching Inventory</h1>
        </div>
      
      ): inventory.length === 0 ? (
        <div className="text-center text-2xl font-bold text-red-600">
          No inventory found
        </div>
      ) : (
        <>
          {inventory.map((item) => (
            <ItemCard key={item._id} item={item} onDelete={handleDelete}/>
          ))}
          <div className="h-16"></div>
        </>
      )}
    </div>
  );
};

export default InventoryList;
