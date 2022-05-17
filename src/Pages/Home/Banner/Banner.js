import React from "react";
import './Banner.css'
import banner from '../../../assets/images/chair.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl w-full lg:w-6/12" />
          <div className="w-full lg:w-6/12">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
