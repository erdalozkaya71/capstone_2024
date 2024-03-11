// api/staff.js
const API_BASE_URL = "http://localhost:3000/api/v1";
const USER_TOKEN = localStorage.getItem('token');

const createStaff = async (staffData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/staff`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${USER_TOKEN}`, // Make sure to handle token storage securely
      },
      body: JSON.stringify(staffData),
    });

    return response;
  } catch (error) {
    console.error("There was an error creating the staff member:", error);
  }
};

const getAllStaff = async () => {
  // fetch current staff with ID from the server
  try{
    const response = await fetch(`${API_BASE_URL}/staff`,{
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${USER_TOKEN}`, // Include the JWT token in the 'Authorization' header
      }
    });
    const data = await response.json();
    const staffData = data.data.data;

    return staffData;

  }catch(error){
    console.log(error);
  }
};

const getStaff = async (id) => {
    // fetch current staff with ID from the server
    try{
        const response = await fetch(`http://localhost:3000/api/v1/staff/${id}`,{
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${USER_TOKEN}`, 
          }
        });
        const data = await response.json();
        const staffData = data.data.data;
        // console.log(staffData);
        return staffData;
      }catch(error){
        console.error('Error:', error);
    }
};

const updateStaff = async (id, staffData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/staff/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${USER_TOKEN}`,
        },
        body: JSON.stringify(staffData),
        });
    
        return response;
    } catch (error) {
        console.error("There was an error updating the staff member:", error);
    }
};

const deleteStaff = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/staff/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${USER_TOKEN}`,
        },
        });
    
        return response;
    } catch (error) {
        console.error("There was an error deleting the staff member:", error);
    }
}



module.exports = { createStaff, getAllStaff, getStaff, updateStaff, deleteStaff};
