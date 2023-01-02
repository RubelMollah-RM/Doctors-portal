import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 m-5'>
            <InfoCard bgClass = "bg-primary" cardTitle = "Opening Hours" img={clock}></InfoCard>
            <InfoCard bgClass = "bg-secondary" cardTitle = "Ours Location" img={marker}></InfoCard>
            <InfoCard bgClass = "bg-accent" cardTitle = "Contact Us" img={phone}></InfoCard>
        </div>
    );
};

export default Info;