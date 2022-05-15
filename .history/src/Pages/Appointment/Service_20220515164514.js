import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg text-center shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-primary ">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span> {slots[0]}</span>
                        : <span className='text-red-500'>Try Another Date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
                <div className="card-actions justify-center">

                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;