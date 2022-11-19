import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../Appointment/BookingModal/BookingModal";
import Loading from "../shared/Loading/Loading";

import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const {data:appointmentOptions= [], refetch, isLoading } = useQuery({
    
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
      const data = await res.json();
      return data;
    }

  })

  if (isLoading) {
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="mt-16">
      <p className="text-center font-bold text-secondary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
