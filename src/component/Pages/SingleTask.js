import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleTask = () => {
    const loadedData = useLoaderData();
    const singleData = loadedData.data;
    console.log(singleData)
    return (
        <div className='flex justify-center items-center'>
            <h2 className='text-center font-semibold mt-5 p-20 max-w-md bg-cyan-50 shadow-lg'>{singleData.data}</h2>
        </div>
    );
};

export default SingleTask;