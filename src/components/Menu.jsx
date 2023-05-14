import React from 'react';
import HeroSection from './Hero/HeroSection';
import SideBar from './SideBar';

const Menu = () => {
    return (
        <div className='w-full mx-auto flex'>
            <HeroSection></HeroSection>
            <SideBar></SideBar>
        </div>
    );
};

export default Menu;