import React from 'react';
import banner from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='p-4'>
                    <h1 className="text-5xl font-bold text-white">Your New Smile Starts Here</h1>
                    <p className="py-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minus iusto eligendi. Aut similique consequatur cum, accusamus cupiditate nulla iste!</p>
                    <button className="btn btn-primary uppercase text-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;