import { useState , useEffect } from "react";
import NavBar from "../Shared/Navbar";
import { Calendar } from "./Calendar";
import { Schedule } from "./Schedule";

const Scheduling = () => {

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [daySchedule, setDaySchedule] = useState(null);
    // automatically  get today sechedule

    // This function is called when a day is clicked in the calendar
    const onDayClick = (day) => {
        // Assuming you store your schedule in a state or come from a database/API
        const selectedDaySchedule = fetchScheduleForDay(day); // Replace with your actual logic
        console.log(daySchedule);
        setSelectedDay(day);
        setDaySchedule(selectedDaySchedule);
    };

    useEffect(() => {
        setDaySchedule(fetchScheduleForDay(new Date()));
    }, []);

    // You would fetch and store your schedule data here
    const fetchScheduleForDay = (day) => {
        // Logic to fetch schedule for the selected day
        return {
            time: "09:00 AM",
            title: "Example meeting",
            description: "Example description",
            };
    };

    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />
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