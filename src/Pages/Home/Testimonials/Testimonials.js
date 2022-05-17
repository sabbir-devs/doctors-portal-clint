import React from 'react';
import './Testimonials';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import HomeReviews from '../HomeReviews/HomeReviews';
const reviews = [
    {
        _id:1,
        img: people1,
        name:'Winson Herry',
        city:'California',
        discription:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        _id:2,
        img: people2,
        name:'Winson Herry',
        city:'California',
        discription:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        _id:3,
        img: people3,
        name:'Winson Herry',
        city:'California',
        discription:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
]

const Testimonials = () => {
    return (
        <div className='testimonials grid px-12 my-12'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-success text-lg font-bold'>Testimonial</h2>
                    <h1 className='text-4xl mt-2'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4'>
                {
                    reviews.map(review => <HomeReviews key={review._id} review = {review}></HomeReviews>)
                }
            </div>
        </div>
    );
};

export default Testimonials;