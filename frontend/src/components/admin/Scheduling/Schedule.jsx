import { useState } from "react";
import { Link } from "react-router-dom";


// ScheduleItem
const ScheduleItem = ({bookingID, time, service, client }) => {

  const viewLink = `/admin/schedule/${bookingID}`;

  return (
    <div className="border-b pb-4 border-gray-400 border-dashed mt-5">
      <Link
        to={viewLink}
        className="flex flex-col justify-between items-center mt-5"
      >
        <p
          tabIndex="0"
          className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
        >
          {service}
        </p>
        <p className="text-sm pt-2 leading-none text-gray-600 dark:text-gray-300">
          {client}
        </p>
      </Link>
    </div>
  );
};

// Schedule.js
const Schedule = ({schedule ,day}) => {

  const [weekDays] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
  const [months] = useState([
    "January","February",
    "March","April","May",
    "June","July","August",
    "September","October",
    "November","December",
  ]);

  return (
    <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-blue-600 bg-gray-50 rounded-b">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Schedule for {weekDays[day.getDay()]}, {months[day.getMonth()]}{" "}
        {day.getDate()}
      </h2>
      <div className="">
        <div className="border-b-2 border-gray m-3"></div>

        {schedule.length > 0 ? (
          schedule.map((booking, index) => (
            <ScheduleItem
              key={index}
              bookingID = {booking._id}
              time={booking.dateOfService} // Assuming dateOfService contains time
              service={booking.serviceType}
              client={booking.name}
            />
          ))
        ) : (
          <p className="dark:text-gray-100">No bookings for today.</p>
        )}
      </div>
    </div>
  );
};

export { Schedule };
