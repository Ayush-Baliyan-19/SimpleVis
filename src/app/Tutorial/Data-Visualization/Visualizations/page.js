import React from 'react'

const Page = () => {
    return (
        <li className='flex flex-col gap-2'>
            <span className='underline'>Each visualization interactive features:</span>
            <span className='pl-5'>
                The preprocessed data uploaded by user. It represent total number of row and columns of
                uploaded data.
            </span>
            <ul className='flex flex-col gap-3 pl-5'>
                <li className='flex flex-col'>
                    <span className=''>Add to personalized dashboard:</span>
                    <span className='pl-5'>
                        You can add the given visualization to the current
                        unlocked (or create new) personalized dashboard.
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Download:</span>
                    <span className='pl-5'>
                        You can download the visualization at local machine as SVG format
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Zoom:</span>
                    <span className='pl-5'>
                        You take a closer look for that particular Visualization
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Delete:</span>
                    <span className='pl-5'>
                        You can delete that particular Visualization from dashboard
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Hover:</span>
                    <span className='pl-5'>
                        You can hope on a visulization to see interactive options
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Single click:</span>
                    <span className='pl-5'>
                        You can make a single click to visulization to modify/look into its covered data
                        attributes importance present of left side of screen.
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Information:</span>
                    <span className='pl-5'>
                        You can see other detailed information and learning about that particular
                        visulization (link will be given in pop up to learn more details)
                    </span>
                </li>
            </ul>
        </li>
    )
}

export default Page