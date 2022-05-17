import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treetment, setTreetment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-6'>
            <h2 className='text-xl text-success text-center'>Available Appointment on  {format(date, 'PP')}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 px-12'>
                {
                    services.map(service => <Service key={service._id} setTreetment = {setTreetment} service = {service}></Service>)
                }
            </div>
            {treetment && <BookingModal treetment = {treetment} date = {date} setTreetment = {setTreetment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;