import React from 'react';

const Review = ({ reviews }) => {
    const { name, review, img } = reviews;
    return (
        <div className="card w-96 bg-accent text-primary-content p-4 mb-5 hover:shadow-lg hover:shadow-orange-100">
            <div className="card-body">
                <p>{review}</p>
            </div>
            <div className='flex items-center ml-4'>
                <div>
                    <div className="avatar">
                        <div className="h-[75px] w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                </div>
                <div className='ml-4'>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Review;