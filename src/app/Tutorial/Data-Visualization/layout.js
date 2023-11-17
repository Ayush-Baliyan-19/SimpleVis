import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="flex flex-col text-secondary pt-5 min-h-screen h-max font-sans gap-5">
            <h1 className='text-5xl font-bold'>Data Visualization and Analysis</h1>
            <p className='font-medium text-lg'>At this step user can visualize the uploaded data and analyze it for better understanding of data.
                <br />
                It provides following features:
            </p>
            <ul className=' flex flex-col gap-5 font-medium text-lg'>
                {children}
            </ul>
        </div>
    )
}

export default Layout