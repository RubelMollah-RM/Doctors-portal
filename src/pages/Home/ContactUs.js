import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='mt-[114px]'>
            <div className='flex justify-center align-middle p-10'>
                <div>
                    <div className='mb-5'>
                        <h1 className='text-secondary text-center'>Contact Us</h1>
                        <h1 className='text-3xl text-white'>Sty Connected With</h1>
                    </div>
                    <form className='flex flex-col gap-5'>
                        <input className='p-2 rounded-lg bg-white' type="email" name="email" placeholder='Email Address' id="" />
                        <input className='p-2 rounded-lg bg-white' type="text" name="text" placeholder='Subject' id="" />
                        <textarea className='bg-white' type="text" name="text" placeholder='Your message' id="" />
                        <div className=' flex justify-center items-center'>
                        <button type="submit" className='btn btn-secondary w-[100px]'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;