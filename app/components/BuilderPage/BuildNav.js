import Image from 'next/image'
import React from 'react'

const BuildNav = () => {
    return (
        <div className='my-12 flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Image
                src="/build-logo.png"
                alt=''
                height={80}
                width={80}/>
                <span className='text-2xl'>
                    Quiz<span className='text-sky-500 font-bold'>Builder</span>
                </span>
            </div>
            <button className='p-2 px-4 bg-sky-400 rounded-md text-white'>
                Save
            </button>
        </div>
    );
}

export default BuildNav
