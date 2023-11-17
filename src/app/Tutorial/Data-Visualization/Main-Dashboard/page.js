import React from 'react'

const Page = () => {
    return (
        <>
            <li className='flex flex-col gap-2'>
                <span className='underline'>Main Dashboard:</span>
                <span className='pl-5'>
                    <p className='font-medium text-lg'>This is the best dashboard recommended by system based on user
                        preference and algorithm.
                    </p>
                </span>
            </li>
            <li className='flex flex-col gap-2'>
                    <span className='underline'>Main Dashboard interactive features:</span>
                    <span className='pl-5'>
                        The preprocessed data uploaded by user. It represent total number of row and columns of
                        uploaded data.
                    </span>
                    <ul className='flex flex-col gap-3 pl-5'>
                        <li className='flex flex-col'>
                            <span className=''>Information:</span>
                            <span className='pl-5'>
                                You can see other detailed information about fitness function used for
                                dashboard evaluation and covered data attributes insights and analytics for that particular
                                dashboard
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Rating:</span>
                            <span className='pl-5'>
                                This user rating will be used to optimize the dashboard given in the centre
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Notes:</span>
                            <span className='pl-5'>
                                You can take notes here for the dashboard present in centre
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Number of Visualizations:</span>
                            <span className='pl-5'>
                                Users can set the range of visualization to be present in a
                                recommended dashboard.
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Download:</span>
                            <span className='pl-5'>
                                You can download the dashboard at local machine as SVG format.
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Full Screen:</span>
                            <span className='pl-5'>
                                You see all the visulaization only in dashboard in full screen for better analysis
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Re-run GA:</span>
                            <span className='pl-5'>
                                You can re-run genetic algorithm after making necessary and desired
                                modification on &apos;parameters setting&apos;.
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Show/Hide icons:</span>
                            <span className='pl-5'>
                                You can click on show icon to see all the icons present on each
                                visulization for user interaction as a toggle button.
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Complexity:</span>
                            <span className='pl-5'>
                                You arrange a the visulizations of dashboard in two ways: ‘High to Low’ and
                                ‘Low to High’ as a toggle button.
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className=''>Layout:</span>
                            <span className='pl-5'>
                                It will suggest best and optimized dashboard layout for screen
                            </span>
                        </li>
                    </ul>
                </li>
        </>
    )
}

export default Page