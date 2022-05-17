import React from 'react';
import './HomeLogin.css'

const HomeLogin = () => {
    return (
        <div className='grid items-center justify-center home-login p-12 my-5'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-success'>Contact Us</h3>
                <h2 className='text-5xl text-white mb-5'>Stay connected with us</h2>
            </div>
            <div className='grid items-center justify-center'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-96 max-w-xs" />
                <input type="text" placeholder="Subject" className="my-5 input input-bordered w-96 max-w-xs" />
                <textarea name="" placeholder='Your message' id="" className="input input-bordered w-96 max-w-xs h-24"></textarea>
                <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary mt-5">Get Started</button>
            </div>
        </div>
    );
};

export default HomeLogin;