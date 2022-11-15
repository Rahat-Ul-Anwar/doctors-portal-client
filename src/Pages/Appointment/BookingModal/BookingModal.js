import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;

  const date = format(selectedDate, "PP");
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
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid gap-6 grid-cols-1">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-accent my-5 w-full"
            />
            <select className="select select-bordered w-full">
           

              {

                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
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
