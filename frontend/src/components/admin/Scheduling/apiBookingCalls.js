const API_BASE_URL = "http://localhost:3000/api/v1";
const USER_TOKEN = localStorage.getItem('token');

//get all schedules
const getAllBooking = async () => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${USER_TOKEN}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.data;
    }
    
};

    
module.exports = { getAllBooking };

