import React from 'react'
import { PiCodeThin } from "react-icons/pi";

const BuildTitle = () => {
    return (
        <div className='p-3 flex justify-between border border-sky-500 rounded-md'>
            <div className='flex gap-2'>
                <div className='flex gap-2 items-center'>
                    <div className='bg-sky-400 px-4 py-1 rounded-md text-white'>1</div>
                    <span className='font-bold text-[20px]'>Quiz Name: </span>
                </div>
                <input
                className='outline-none border-b-2 pt-1 w-[300px] text-[18px]'
                placeholder='Enter name of Quiz here...'
                />
            </div>
            <PiCodeThin
            height={100}
            width={100}
            className='text-white text-[40px] p-1 font-bold rounded-md bg-sky-400
            cursor-pointer'/>
        </div>
    )
}

export default BuildTitle
