import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment,setTreatment, date }) => {
    const { _id,name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const bookingAppointment = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        const booking = {
            treatmentId: _id,
            treatment:name,
            date:formattedDate,
            slot,
            patient:user.email,
            patientName: user.displayName,
            phone:event.target.phone.value

        }
        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                toast(`Appointment is set ${formattedDate} at ${slot}`)
            }
            else{
                
            }
            setTreatment(null);
        })

        
    }
    return (
        <div>
            {/* <p>check{format(date, 'PP')}</p> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-top sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-secondary btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Booking for:{name}</h3>
                    <form onSubmit={bookingAppointment} className='grid grid-cols-1 justify-items-center gap-2 '>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-info w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                            {/* <option disabled selected>Who shot first?</option> */}

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-info w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" className=" btn btn-secondary text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;