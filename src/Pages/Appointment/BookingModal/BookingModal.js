import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ setTreatment,treatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots } = treatment;

  const { user } = useContext(AuthContext);

  const date = format(selectedDate, "PP");


  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // console.log(date, slot, name, email, phone);
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patientName: name,
      slot,
      email,
      phone
    }

    fetch('http://localhost:5000/bookings', {
     
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking),
     
      
      
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          
          setTreatment(null);
          toast('Booking Confirmed');
          refetch();

        }
      
        
       
      });
    
  
    
    

  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid gap-6 grid-cols-1">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-accent my-5 w-full"
            />
            <select name="slot" className="select select-bordered w-full">
           

              {

                slots.map((slot,index) => <option value={slot} key={slot.index}>{slot}</option>)
              }
            
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered input-accent w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-accent w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="email"
              className="input input-bordered input-accent w-full"
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
