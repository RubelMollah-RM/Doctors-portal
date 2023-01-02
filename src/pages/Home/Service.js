import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div>
            <div className="card w-96 text-black shadow-xl bg-white hover:shadow-amber-300 hover:shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-[116px] w-[115px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;