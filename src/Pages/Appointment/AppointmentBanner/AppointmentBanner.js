import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setSeletedDate] = useState(new Date());
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" rounded-lg shadow-2xl lg:w-1/2"
            alt="dentist chair"
          />
          <div className="md:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSeletedDate}
            ></DayPicker>
            <p className=" font-bold">
              You have selected date : {format(selectedDate, "PP")}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
