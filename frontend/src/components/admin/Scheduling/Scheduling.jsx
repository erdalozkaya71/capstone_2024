import { useState , useEffect } from "react";
import NavBar from "../Shared/Navbar";
import { Calendar } from "./Calendar";
import { Schedule } from "./Schedule";
import { getAllBooking } from "./apiBookingCalls";
import { Link } from "react-router-dom";

const Scheduling = () => {

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [daySchedule, setDaySchedule] = useState([]);
    // automatically  get today sechedule

    // This function is called when a day is clicked in the calendar
    const onDayClick = (day) => {
        setSelectedDay(day);
        fetchScheduleForDay(day);
    };

    useEffect(() => {
        fetchScheduleForDay(selectedDay);
    }, [selectedDay]);

    // You would fetch and store your schedule data here
    const fetchScheduleForDay = async (day) => {
        // setLoading(true);
        try {
            const bookings = await getAllBooking();
            const selectedDayBookings = bookings.filter((booking) => {
                const bookingDate = new Date(booking.dateOfService);
                const selectedDate = new Date(day);
                return (
                    bookingDate.getFullYear() === selectedDate.getFullYear() &&
                    bookingDate.getMonth() === selectedDate.getMonth() &&
                    bookingDate.getDate() === selectedDate.getDate()
                );
            });
            
            setDaySchedule(selectedDayBookings);
            // setLoading(false);
        } catch (error) {
            console.error("Error fetching schedule:", error);
            // setError("Error fetching schedule. Please try again later.");
            // setLoading(false);
        }
    };
    

    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />
            <div className="bg-gray-100">
                <div className="container mx-auto mt-8 w-full flex justify-start items-center ">
                    <Link to="/admin/schedule/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Schedule
                    </Link>
                </div>
            </div>
            <div className="flex items-center min-h-[calc(100vh-175px)] justify-center">
                <div className="container mx-auto px-4 py-0">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Calendar onDayClick={onDayClick} selectedDay={selectedDay} />
                        {daySchedule && <Schedule schedule={daySchedule} day={selectedDay} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Scheduling;