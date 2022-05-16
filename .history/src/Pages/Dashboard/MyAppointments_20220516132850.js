import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth)
    console.log(appointment);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }, [user])
    return (

        <div>
            <h2>this my appointments page:{appointment.length}</h2>
        </div>
    );
};

export default MyAppointments;