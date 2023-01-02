import React from 'react';
import notfound from '../../assets/images/dribbble_1.gif';

const PageNotFound = () => {
    return (
        <div className='text-center text-red-500 h-96 flex justify-center items-center text-4xl flex-col'>
            <img src={notfound} alt="" />
            <h1>Page not Found 404</h1>
            
        </div>
    );
};

export default PageNotFound;