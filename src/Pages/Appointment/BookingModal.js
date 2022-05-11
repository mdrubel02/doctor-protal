import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    console.log(date);
    console.log(treatment);
    return (
        <div>
            {/* <p>check{format(date, 'PP')}</p> */}
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">Booking for:{name}</h3>
                    <form className='grid grid-cols-1 justify-items-center gap-2 '>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-info w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                            {/* <option disabled selected>Who shot first?</option> */}
                            
                        </select>
                        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" class=" btn btn-secondary text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;