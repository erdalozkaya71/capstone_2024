import { useState, useEffect} from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Calendar Navigation
const CalendarNav = ({ monthYear, onPrevClick, onNextClick }) => {
  return (
    <div className="px-4 flex items-center justify-between">
      <span
        tabIndex="0"
        className="focus:outline-none text-base font-bold"
      >
        {monthYear}
      </span>
      <div className="flex items-center">
        <button
          aria-label="calendar backward"
          className="..."
          onClick={onPrevClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          aria-label="calendar forward"
          className="..."
          onClick={onNextClick}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};


// CalendarDay Item
const CalendarDay = ({ day , month, year, onDayClick, isSelected}) => {
  
  // Get the current date
  const [currentDate,] = useState(new Date());

  // Check if this day is today
  const isToday = currentDate.getDate() === day && 
  currentDate.getMonth() === month && 
  currentDate.getFullYear() === year;

  const handleClick = (day) => {
    // Pass the day number to the onDayClick function
    onDayClick(new Date(year, month, day));
  };

  // current Day class
  const dayClass = isToday ? "bg-blue-500 text-white font-semibold" : "hover:bg-blue-200 hover:text-blue-800";

  return (
    <div className="pt-6">
      <div className={`px-2 py-2 cursor-pointer flex w-full justify-center ${dayClass}`} onClick={() => handleClick(day)}>
        <div className="text-center">
          {day}
        </div>
      </div>
    </div>
  );
};

// Calendar
const Calendar = ({onDayClick, selectedDay}) => {
  // calendar month, year, and days
  const [currentDay, setCurrentDay] = useState(new Date()); // will get month and year
  const [, setDaysInMonth] = useState(0); // 28, 30, 31
  const [, setFirstDayOfMonth] = useState(0); // 0 - 6
  const [weekDays] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
  const [months] = useState([
    "January","February",
    "March","April","May",
    "June","July","August",
    "September","October",
    "November","December",
  ]);
  const [calendarCells, setCalendarCells] = useState([]); // [1, 2, 3, ... 31

  // useEffect to update the calendar cells when the currentDay changes
  useEffect(() => {
    // Recalculate the days in the month and the first day of the month every time currentDay changes
    const updatedDaysInMonth = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 0).getDate();
    const updatedFirstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1).getDay();
    
    setDaysInMonth(updatedDaysInMonth);
    setFirstDayOfMonth(updatedFirstDayOfMonth);

    const updatedCalendarCells = [];

    // Fill in the blanks for days before the first day of the month
    for (let i = 0; i < updatedFirstDayOfMonth; i++) {
      updatedCalendarCells.push(<CalendarDay key={`blank-${i}`} day={''} month={currentDay.getMonth()} year={currentDay.getFullYear()}/>);
    }
    
    // Days of the month i.e., 1, 2, 3, ... 31
    for (let day = 1; day <= updatedDaysInMonth; day++) {
      updatedCalendarCells.push(<CalendarDay key={`day-${day}`} day={day} month={currentDay.getMonth()} year={currentDay.getFullYear()} onDayClick={onDayClick} isSelected={selectedDay && selectedDay.getDate() === day && selectedDay.getMonth() === currentDay.getMonth()}/>);
    }
    
    setCalendarCells(updatedCalendarCells);
    
  }, [currentDay]);
    

  
  const handlePrevClick = () => {
    setCurrentDay(
      new Date(
        currentDay.getFullYear(), // get the current year
        currentDay.getMonth() - 1, 1 // get the previous month
      )
    );
  }

  const handleNextClick = () => {
    setCurrentDay(
      new Date(
        currentDay.getFullYear(), // get the current year
        currentDay.getMonth() + 1, 1 // get the next month
      )
    );
  }

  return (
    <div className="max-w-xxl shadow-lg w-">
      <div className="md:p-8 p-5 ">
        
        {/* Calendar navigation */}
        <div className="mt-4 mb-4">
          <CalendarNav
            monthYear={`${months[currentDay.getMonth()]} ${currentDay.getFullYear()}`}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
        </div>

        <div className="border-b-2 border-black m-3"></div>
        
        {/* Days of the week */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs mt-2">
          {weekDays.map((dayName) => (
            <div key={dayName} className="text-black">
              {dayName}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-xs mt-2">
          {calendarCells}
        </div>
      </div>
    </div>
  );
};



export {Calendar};
