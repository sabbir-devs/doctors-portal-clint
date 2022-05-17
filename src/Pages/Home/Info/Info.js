import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle = 'Opening Hours' cardDiscription = 'Lorem Ipsum is simply dummy text of the pri' img={clock} bgClass = 'bg-gradient-to-r from-secondary to-primary px-3'></InfoCard>
            
            <InfoCard cardTitle = 'Visit our location' cardDiscription = 'Brooklyn, NY 10036, United States' img={marker} bgClass = 'bg-accent px-3'></InfoCard>

            <InfoCard cardTitle = 'Contact us now' cardDiscription = '+000 123 456789' img={phone} bgClass = 'bg-gradient-to-r from-secondary to-primary px-3'></InfoCard>
        </div>
    );
};

export default Info;