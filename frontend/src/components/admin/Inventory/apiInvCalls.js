const API_BASE_URL = "http://localhost:3000/api/v1";

// Function to get the current user token
const getUserToken = () => localStorage.getItem('token');

const addItem = async (inventoryData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getUserToken()}`, // Get the most current token
            },
            body: JSON.stringify(inventoryData),
        });

        return response;
    }
    catch (error) {
        console.error("There was an error creating the inventory:", error);
    }
};

const getAllInventory = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${getUserToken()}`, // Get the most current token
            }
        });
        
        if(response.ok){
            const data = await response.json();
            const inventoryData = data.data.data;
            return inventoryData;
        }

    } catch (error) {
        console.log(error);
    }
};

const getItem = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${getUserToken()}`, // Get the most current token
            }
        });
       
        if(response.ok){
            const data = await response.json();
            const inventoryData = data.data.data;
            return inventoryData;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const updateItem = async (id, inventoryData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getUserToken()}`, // Get the most current token
            },
            body: JSON.stringify(inventoryData),
        });

        return response;
    } catch (error) {
        console.error("There was an error updating the inventory:", error);
    }
};

const deleteItem = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${getUserToken()}`, // Get the most current token
            },
        });

        return response;
    } catch (error) {
        console.error("There was an error deleting the inventory:", error);
    }
};

module.exports = { addItem, getAllInventory, getItem, updateItem, deleteItem };
