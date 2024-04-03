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

// get schedule with id
const getBooking = async (id) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
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

// update
const updateBooking = async (id, updatedBooking) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${USER_TOKEN}`,
        },
        body: JSON.stringify(updatedBooking),
    });

    if (response.ok) {
        return "Booking updated successfully";
    }
}


// delete
const deleteBooking = async (id) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${USER_TOKEN}`,
        },
    });

    if (response.ok) {
        return "Booking deleted successfully";
    }
}


    
module.exports = { getAllBooking, getBooking, updateBooking, deleteBooking};

