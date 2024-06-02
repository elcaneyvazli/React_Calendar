import dayjs from "dayjs";
import "./App.css";
import { generateDate, months } from "./calendar";
import { useState } from "react";

function App() {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <div className="bg-white h-screen w-full flex items-center justify-center">
      <div className="bg-input-bg h-[340px] w-[416px] rounded-main border border-input-border grid grid-cols-7 grid-rows-7 gap-12 p-12">
        <div className="col-span-7 flex flex-row justify-between items-center p-12 row-span-1 text-lg border-b border-input-border">
          <div
            className="h-12 w-12 text-light cursor-pointer"
            onClick={() => {
              setToday(today.subtract(1, "month"));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-light text-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <h1
            className="text-lg text-light cursor-pointer"
            onClick={() => {
              setToday(currentDate);
            }}
          >
            {months[today.month()]}, {today.year()}
          </h1>
          <div
            className="h-12 w-12 text-light cursor-pointer"
            onClick={() => {
              setToday(today.add(1, "month"));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-light text-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        {days.map((day) => (
          <div
            className="col-span-1 text-light text-md flex items-center justify-center"
            key={day}
          >
            <h1>{day}</h1>
          </div>
        ))}
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }) => (
            <div
              className={`text-md ${
                currentMonth ? "text-dark" : "text-light"
              } flex items-center justify-center text-md cursor-pointer rounded-full`}
              key={date.toString()}
              onClick={() => setSelectedDate(date)}
            >
              <h1
                className={`h-32 w-32 flex items-center justify-center rounded-full hover:bg-primary hover:text-white ${
                  today ? "bg-primary text-white" : ""
                } ${
                  selectedDate.isSame(date, "day") ? "bg-black text-white" : ""
                }`}
              >
                {date.date()}
              </h1>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
