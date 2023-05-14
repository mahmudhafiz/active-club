import React from 'react';
import { GrLocation } from 'react-icons/gr';
import Photo from '../assests/Omee8.png';

const SideBar = () => {
    const time = 200;
    let breakTime = 20;

    return (
        <div className='text-black h-screen w-[28%] bg-white ml-auto'>
            {/* user section */}
            <div className='flex bg-white mx-5 py-4 px-4 rounded-md'> 
                <img className='w-[90px] h-auto ml-2 mr-10' src={Photo} alt="/" />
                <div>
                    <h1 className='text-[20px] font-bold py-4'>Syed Omee</h1>
                    <div className='flex'>
                        <GrLocation size={20}></GrLocation>
                        <p className='ml-2 text-[gray]'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            {/* health section */}
            <div className='bg-[#E6E5E5] mx-5 rounded-xl py-5 my-6 flex justify-around items-center'>
                <div className='flex flex-col text-center font-bold text-xl'>
                    74kg
                    <span className='font-thin text-sm'>Weight</span>
                </div>
                <div className='flex flex-col text-center font-bold text-xl'>
                    1.78m
                    <span className='font-thin text-sm'>Height</span>
                </div>
                <div className='flex flex-col text-center font-bold text-xl'>
                    27yrs
                    <span className='font-thin text-sm'>Age</span>
                </div>
            </div>
            {/* break section */}
            <div className='text-black mx-5 text-[1.5rem]'>
                Add A Break
            </div>
            {/* time section */}
            <div className='bg-[#E6E5E5] mx-5 rounded-xl py-8 my-6 flex justify-around items-center'>
                <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                    <span>
                        <button>10s</button>
                    </span>
                </div>
                <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                    <span>
                        <button>15s</button>
                    </span>
                </div>  
                <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                    <span>
                        <button>20s</button>
                    </span>
                </div>
                <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                    <span>
                        <button>25s</button>
                    </span>
                </div>
                <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                    <span>
                        <button>30s</button>
                    </span>
                </div>
            </div>
            {/* details section */}
            <div className='text-black mx-5 text-[1.5rem] mt-8'>
                Exercise Details
            </div>
            {/* time section */}
            <div className='mx-5'>
                <div className='bg-[#E6E5E5] px-5 rounded-xl py-5 my-6 flex justify-between'>
                    <span className='text-xl'>Exercise Time</span>
                    <span className='text-xl text-[#3731e6]'>{time} seconds</span>
                </div>
                <div className='bg-[#E6E5E5] px-5 rounded-xl py-5 my-6 flex justify-between'>
                    <span className='text-xl'>Break Time</span>
                    <span className='text-xl text-[#3731e6]'>{breakTime} seconds</span>
                </div>
            </div>
            <div className='mx-5'>
                <button className='bg-[#3731e6] w-full rounded-md font-medium my-6 py-3 text-white'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideBar;