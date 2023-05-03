import React from 'react';

const Spinner = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center bg-purple-400 rounded w-52 py-2 px-4 text-white'>
                <h5 className='text-3xl mr-2'>Loading...</h5>
                <div className='animate-spin h-8 w-8 border-4 border-dashed border-white rounded-full'></div>
            </div>
        </div>
    );
};

export default Spinner;