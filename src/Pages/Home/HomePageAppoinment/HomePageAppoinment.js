import React from 'react';
import './HomePageAppoinment.css'
import doctor from '../../../assets/images/doctor.png';

const HomePageAppoinment = () => {
    return (
        <section className='flex items-center justify-center home-page-appoinment mt-[150px]'>
            <div className=' w-full lg:w-6/12 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className=' w-full lg:w-6/12 text-white p-6 lg:py-0'>
                <h2 className='text-xl text-success font-bold'>Appointment</h2>
                <h4 className='text-4xl font-semibold my-5'>Make an appointment Today</h4>
                <p className='text-sm mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default HomePageAppoinment;