import React from "react";
import Service from "../Service/Service";
import floruid from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className="my-20 px-12">
      <div className="text-center">
        <h1 className="text-xl text-secondary font-bold">OUR SERVICES</h1>
        <p className="text-4xl font-semibold mt-4">Services We Provide</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
        <Service
          cardTitle="Fluoride Treatment"
          cardDiscription="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={floruid}
        ></Service>
        <Service
          cardTitle="Cavity Filling"
          cardDiscription="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={cavity}
        ></Service>
        <Service
          cardTitle="Teeth Whitening"
          cardDiscription="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={whitening}
        ></Service>
      </div>
    </div>
  );
};

export default Services;
