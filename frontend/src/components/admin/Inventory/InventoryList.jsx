import React from 'react';
import ItemCard from './ItemCard';
import { useState , useEffect} from 'react';
import { getAllInventory } from './apiInvCalls' // swap for inventory api calls

const InventoryList = () => {
  
const [inventory, setInventoryList] = useState([]);

useEffect(() => {
  const fetchInventory = async () => {
    try {
      const data = await getAllInventory();
      setInventoryList(data);
    } catch (error) {
      console.error("Error fetching inventory", error);
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
    <div className="gap-4">
      {inventory.length === 0 ? (
        <div className="text-center text-2xl font-bold text-red-600">
          No inventory found
        </div>
      ) : (
        <>
          {inventory.map((item) => (
            <ItemCard key={item._id} item={item} onDelete={handleDelete}/>
          ))}
        </>
      )}
    </div>
  );
};

export default InventoryList;
