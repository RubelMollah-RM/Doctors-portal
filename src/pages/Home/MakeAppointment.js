import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center md:mt-[200px]'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-secondary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse animi pariatur hic quod facilis cumque culpa eius rerum error, minima, beatae aut corporis dolorum dolor necessitatibus quidem deleniti soluta nemo corrupti magni porro! Amet distinctio animi iusto architecto. Repellat.</p>
                <button className='uppercase btn btn-outline btn-secondary mt-6'>get started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;