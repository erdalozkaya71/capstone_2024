const API_BASE_URL = "http://localhost:3000/api/v1";

// Function to get the current user token
const getUserToken = () => localStorage.getItem('token');

// Get all schedules
const getAllBooking = async () => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserToken()}`, // Get the most current token
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.data;
    }
    // Consider handling non-ok responses as well
};

// Get schedule with id
const getBooking = async (id) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserToken()}`, // Get the most current token
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.data;
    }
    // Consider handling non-ok responses as well
};

// Update booking
const updateBooking = async (id, updatedBooking) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserToken()}`, // Get the most current token
        },
        body: JSON.stringify(updatedBooking),
    });

    if (response.ok) {
        return "Booking updated successfully";
    }
    // Consider handling non-ok responses as well
};

// Delete booking
const deleteBooking = async (id) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserToken()}`, // Get the most current token
        },
    });

    if (response.ok) {
        return "Booking deleted successfully";
    }
    // Consider handling non-ok responses as well
};

module.exports = { getAllBooking, getBooking, updateBooking, deleteBooking };
