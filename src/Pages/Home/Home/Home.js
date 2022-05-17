import React from 'react';
import Banner from '../Banner/Banner';
import Expection from '../Expection/Expection';
import HomeLogin from '../HomeLogin/HomeLogin';
import HomePageAppoinment from '../HomePageAppoinment/HomePageAppoinment';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Info/>
            <Services/>
            <Expection/>
            <HomePageAppoinment/>
            <Testimonials/>
            <HomeLogin/>
            <Footer/>
        </div>
    );
};

export default Home;