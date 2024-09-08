import Image from 'next/image'
import React from 'react'

const PlaceHolder = () => {
    return (
        <div className='flex-col gap-3 flex p-4 justify-center items-center '>
            {/* Icon container */}
            <Image
            src="/emptybox.png"
            width={130}
            height={130}
            alt='empty'/>
            {/* title */}
            <h2 className='text-2xl font-bold'>No Quizzes yet! Make one.</h2>
            {/* call to action */}
            <span>
                Click to begin your journey here
            </span>
            {/* button */}
            <button className='p-3 px-4 text-white text-[12px]
            bg-sky-400 rounded-md'>Create Your Quiz</button>
        </div>
    )
}

export default PlaceHolder
