import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTaskDetails from './AllTaskDetails';

const AllTask = () => {
    const allInput = useLoaderData();
    const all_data = allInput.data;
    console.log(all_data)
    return (
        <div>
            <div className="overflow-x-hidden mt-5  flex justify-center items-center">
                <table className="table w-3/4 border-solid border-2 border-gray-300 shadow-lg">

                    <thead>
                        <tr>
                            <th className='text-center'>S.I</th>
                            <th className='text-center'>Information</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            all_data?.map((data, i) => <AllTaskDetails alldata={data} i={i} key={data._id} ></AllTaskDetails>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTask;