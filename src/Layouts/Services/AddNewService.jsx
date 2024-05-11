import { Select } from 'antd';
import React from 'react';

const selectOptions = [
    {
        value: 1,
        label: 'Corporate Event Management',
    },
    {
        value: 2,
        label: 'Wedding Planning Services',
    },
    {
        value: 3,
        label: 'Social Event Planning',
    },
    {
        value: 4,
        label: 'Experiential Marketing Events',
    },
    {
        value: 5,
        label: 'Trade Shows and Exhibitions',
    },
    {
        value: 6,
        label: 'Concert and Entertainment Events',
    },
    {
        value: 7,
        label: 'Nonprofit and Fundraising Events',
    },
    {
        value: 8,
        label: 'Sports Events Management',
    },
    {
        value: 9,
        label: 'Destination Management Services',
    },
    {
        value: 10,
        label: 'Virtual and Hybrid Event Planning',
    },
]

const AddNewService = () => {
    return (
        <div>
            <div className='h-96 bg-teal-500'></div>

            <h1 className='text-5xl font-semibold text-center mt-10'>Add New Service</h1>
            <p className='text-center'>Adding new product has never been this easy</p>

            <form className='w-[600px]  mx-auto space-y-3 my-10'>
                <div>
                    <label htmlFor="">Service Title</label>
                    <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service Title' />
                </div>

                <div>
                    <label htmlFor="">Price</label>
                    <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service Price' />
                </div>

                <div>
                    <label htmlFor="">Service Area</label>
                    <Select
                        className='w-full'
                        placeholder='Service Area'
                        // onChange={handleChange}
                        options={selectOptions}
                    />
                </div>

                <div>
                    <label htmlFor="">ImageURL</label>
                    <input type="text" name="" id="" className='border w-full py-2 pl-2' placeholder='Service ImageURL' />
                </div>

                <div>
                    <label htmlFor="">Description</label>
                    <textarea type="text" name="" id="" rows="5" className='border w-full py-2 pl-2' placeholder='Service Description' />
                </div>

                <button className='border border-teal-500 px-5 py-3 text-teal-500 hover:text-white hover:bg-teal-500 w-full'>Add Service</button>
            </form>
        </div>
    );
};

export default AddNewService;