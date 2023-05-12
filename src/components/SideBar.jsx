import React from 'react';
import { GrLocation } from 'react-icons/gr';
import Photo from '../assests/Omee8.png';

const SideBar = () => {
    return (
        <div className='text-black h-screen w-[28%] bg-black ml-auto'>
            {/* user section */}
            <div className='flex bg-white w-[90%] mx-auto py-4 px-4'> 
                <img className='w-[90px] h-auto ml-2 mr-10' src={Photo} alt="/" />
                <div>
                    <h1 className='text-[20px] font-bold py-4'>Syed Omee</h1>
                    <div className='flex'>
                        <GrLocation size={20}></GrLocation>
                        <p className='ml-2 text-[gray]'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;