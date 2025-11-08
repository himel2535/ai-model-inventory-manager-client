import React from 'react';
import bannerLogo from "../assets/AI_model.webp"

const Banner = () => {
    return (
        <div className=''>
            <img className='w-full mx-auto ' src={bannerLogo} alt="" />
        </div>
    );
};

export default Banner;