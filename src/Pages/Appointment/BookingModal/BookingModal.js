import { format } from "date-fns";
import React from "react";

const BookingModal = ({treetment, date, setTreetment}) => {
    const {name, slots} = treetment;
    const handleBooking = event => {
        event.preventDefault();
        const time = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(time)
        // to close the modal
        setTreetment(null)
    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-success">{name}</h3>
          <form onSubmit={handleBooking}>
          <input type="text" value={format(date, 'PP')} className="input input-bordered w-full mt-4" disabled />
            <select name="slot" className="select select-bordered w-full mt-2">
                {
                    slots.map(slot => <option value={slot}>{slot}</option>)
                }
            </select>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full mt-2" />
          <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full mt-2" />
          <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full mt-2" />
          <input htmlFor="booking-modal" type="submit" value="submit" className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary w-full mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
