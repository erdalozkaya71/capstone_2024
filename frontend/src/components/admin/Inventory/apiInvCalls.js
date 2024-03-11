const API_BASE_URL = "http://localhost:3000/api/v1";
const USER_TOKEN = localStorage.getItem('token');

const addItem = async (inventoryData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${USER_TOKEN}`, // Make sure to handle token storage securely
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
    // fetch current inventory with ID from the server
    try {
        const response = await fetch(`${API_BASE_URL}/inventory`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${USER_TOKEN}`, // Include the JWT token in the 'Authorization' header
            }
        });
        const data = await response.json();
        const inventoryData = data.data.data;

        return inventoryData;

    } catch (error) {
        console.log(error);
    }
};

const getItem = async (id) => {
    // fetch current inventory with ID from the server
    try {
        const response = await fetch(`http://localhost:3000/api/v1/inventory/${id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${USER_TOKEN}`,
            }
        });
        const data = await response.json();
        const inventoryData = data.data.data;
        // console.log(inventoryData);
        return inventoryData;
    } catch (error) {
        console.error('Error:', error);
    }
};

const updateItem = async (id, inventoryData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${USER_TOKEN}`,
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
                Authorization: `Bearer ${USER_TOKEN}`,
            },
        });

        return response;
    } catch (error) {
        console.error("There was an error deleting the inventory:", error);
    }
};

module.exports = { addItem, getAllInventory, getItem, updateItem, deleteItem };