import React from 'react';
import ItemCard from './ItemCard';
import { useState , useEffect} from 'react';
import { getAllInventory } from './apiInvCalls' // swap for inventory api calls

const StaffList = () => {
  
const [inventory, setInventoryList] = useState([]);

useEffect(() => {
  getAllInventory().then((data) => {
    setInventoryList(data);
  });
}, []);


  return (
    <div className="gap-4">
      {inventory.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default StaffList;
