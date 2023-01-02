import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        { _id: 1, name: 'Willieam Harry', review: 'There are service is awsme, Thanks for your services.', img: people1 },
        { _id: 2, name: 'mera', review: 'There are service is awsme, Thanks for your services.', img: people2 },
        { _id: 3, name: 'leja', review: 'There are service is awsme, Thanks for your services.', img: people3 },
    ];
    return (
        <section className='mt-[100px]'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>Whats Our Patient Say</h2>
                </div>
                <div>
                    <img className='w-[98px] h-[79px] md:w-[192px] md:h-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 mt-[100px]'>
                {
                    reviews.map(review => <Review
                         key={review._id}
                         reviews = {review}
                         ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;