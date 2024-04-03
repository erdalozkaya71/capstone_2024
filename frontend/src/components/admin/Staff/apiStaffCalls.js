const API_BASE_URL = "http://localhost:3000/api/v1";

const getToken = () => localStorage.getItem('token');

const createStaff = async (staffData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/staff`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`, // Retrieve token at the time of API call
      },
      body: JSON.stringify(staffData),
    });

    return response;
  } catch (error) {
    console.error("There was an error creating the staff member:", error);
  }
};

const getAllStaff = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/staff`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${getToken()}`, // Retrieve token at the time of API call
      },
    });
    
    if(response.ok) {
      const data = await response.json();
      const staffData = data.data.data;
      return staffData;
    }
  } catch(error) {
    console.log(error);
  }
};

const getStaff = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/staff/${id}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${getToken()}`, // Retrieve token at the time of API call
      },
    });
    
    if(response.ok) {
      const data = await response.json();
      const staffData = data.data.data;
      return staffData;
    }
  } catch(error) {
    console.error('Error:', error);
  }
};

const updateStaff = async (id, staffData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/staff/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`, // Retrieve token at the time of API call
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
        Authorization: `Bearer ${getToken()}`, // Retrieve token at the time of API call
      },
    });

    return response;
  } catch (error) {
    console.error("There was an error deleting the staff member:", error);
  }
}

module.exports = { createStaff, getAllStaff, getStaff, updateStaff, deleteStaff };
