import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleInformation = (data, e) => {
        console.log(data);
        fetch("https://react-task-server.vercel.app/AddedFormData", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

                toast.success(`Your Data is added successfully`)

                e.target.reset();
            })

    }


    return (
        <div className="lg:px-96 lg:ml-28 mt-16 ">
            <div className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 '>
                <form onSubmit={handleSubmit(handleInformation)}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center mb-5">Drop your information Here!!!</h5>
                    <input type="text" {...register("data", { required: true })} placeholder="+add" className="input input-bordered w-full max-w-xs p-8" />
                    {errors.data && <span>This field is required</span>}

                    <input type="submit" value="Add" className=" mt-3 w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-indigo-800 dark:focus:ring-blue-800"></input>
                </form>
            </div>
        </div>
    );
};

export default AddTask;