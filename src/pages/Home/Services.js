import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';

const Services = () => {
    const services = [
        { _id: 1, name: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, asperiores!', img: fluoride },
        { _id: 2, name: 'Cavity Filling', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, asperiores!', img: cavity },
        { _id: 3, name: 'Teeth Whitening', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, asperiores!', img: whitening },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-accent text-xl font-bold uppercase'>Our Services</h1>
                <h2 className='text-4xl text-white'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-[80px]'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl md:ml-[217px] mt-[154px]">
                <figure><img src={treatment} alt="Album" className='h-[576px] w-[1000px]' /></figure>
                <div className="card-body text-center align-middle justify-center ml-[30px] mr-[89px]">
                    <div>
                        <h2 className="card-title text-4xl text-white text-left">Exceptional Dental Care, On Your Terms</h2>
                        <p className='md:text-left text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quaerat dolor omnis quam fuga ducimus recusandae facilis id accusamus aliquid..</p>
                        <div className="card-actions justify-left mt-4">
                            <button className="btn btn-primary uppercase">get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;