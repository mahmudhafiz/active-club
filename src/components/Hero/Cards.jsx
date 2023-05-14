import React, { useState } from 'react';

const Cards = ({card}) => {
    const [buttonState, setButtonState] = useState(false);
    
    const handleClick = () => {
        setButtonState(!buttonState);
    }
    
    return (
        <div className='bg-white w-[16rem] h-[20rem] rounded-md'>
            <div className='mx-3 py-3'>
                <div>
                    <img className='object-cover h-20 w-full mx-auto rounded-lg' src={card?.image} alt="" />
                </div>
                <h2 className='font-bold text-xl pt-2'>{card?.title}</h2>
                <p className='py-1 text-sm font-thin'>{card?.desc}</p>
                <h4 className='py-2'>For Age: {card?.range}</h4>
                <h4 className='pt-1 pb-3'>Time Required: {card?.time}</h4>
                <button className={buttonState ? 'bg-[#038923] text-white py-1 mx-auto w-full rounded-md':'bg-[#3731e6] text-white py-1 mx-auto w-full rounded-md'}
                        onClick={handleClick}>
                    {buttonState ? 'Added':'Add to list'}
                </button>
            </div>
        </div>
    );
};

export default Cards;