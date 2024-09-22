import React from 'react'
import BuildNav from '../components/BuilderPage/BuildNav'
import BuildTitle from '../components/BuilderPage/BuildTitle'
import BuildQuestion from '../components/BuilderPage/BuildQuestion'

const page = () => {
    return (
        <div className='mx-16'>
            <BuildNav/>
            <BuildTitle/>
            <BuildQuestion/>
        </div>
    )
}

export default page
