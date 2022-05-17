import React, { useState } from "react";
import "./AppointmentBanner.css";
import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div className="hero min-h-screen bg-base-200 py-12"
        style={{
            background:`url(${chairBg})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl w-full lg:w-6/12 py2"
        />
        <div className="w-full lg:w-6/12 shadow-2xl py-2 p-4 rounded-lg">
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
