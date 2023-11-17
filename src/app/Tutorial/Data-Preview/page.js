import React from 'react'

const Page = () => {
    return (
        <div className="flex flex-col text-secondary pt-5 min-h-screen h-max font-sans gap-5">
            <h1 className='text-5xl font-bold'>Data preview and system preferences</h1>
            <p className='font-medium text-lg'>The system provides you to check your data and modify it accordingly as well as set your preferences for the system to recommend you the best dashboard:
            </p>
            <ul className=' flex flex-col gap-5 font-medium text-lg'>
                <li className='flex flex-col gap-2'>
                    <span className='underline'>Meta Data:</span>
                    <span className='pl-5'>
                        <p className='font-medium text-lg'>The statistical information extracted from the data uploaded for dashboard recommendations.
                            <br />
                            The metadata contains following statistical propertics and attributes:
                        </p>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex flex-col'>
                                <span className=''>Data Attributes Name:</span>
                                <span className='pl-5'>
                                    These are data attributes present in the uploaded dataset
                                </span>
                            </li>
                            <li className='flex flex-col'>
                                <span className=''>Unique value:</span>
                                <span className='pl-5'>
                                    It represents the total number of unique values present in the particular column
                                    of each data attribute
                                </span>
                            </li>
                            <li className='flex flex-col'>
                                <span className=''>Data attributes type:</span>
                                <span className='pl-5'>
                                    It represents the type of each data attribute
                                </span>
                            </li>
                            <li className='flex flex-col'>
                                <span className=''>User importance:</span>
                                <span className='pl-5'>
                                    The user importance value represents the importance of particular data
                                    attributes during dashboard recommendations
                                </span>
                            </li>
                        </ul>
                    </span>
                </li>
                <li className='flex flex-col gap-2'>
                    <span className='underline'>Raw Data:</span>
                    <span className='pl-5'>
                        The preprocessed data uploaded by user. It represent total number of row and columns of
                        uploaded data.
                    </span>
                </li>
                <li className='flex flex-col gap-2'>
                    <span className='underline'>User Preference:</span>
                    <span className='pl-5'>
                        <p className='font-medium text-lg'>User can set there preference and customized the different parameters for better
                            recommendation of dashboard.
                        </p>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex flex-col'>
                                <span className=''>Dashboard Generation Type:</span>
                                <span className='pl-5'>
                                    It represents the level of user engagement while generating
                                    dashboard. There are two types of dashboard generation type:
                                </span>
                                <ul className='flex flex-col gap-3 pl-5'>
                                    <li className='flex flex-col'>
                                        <span className=''>Automatic:</span>
                                        <span className='pl-5'>
                                            The dashboard recommended based on user preference and genetic algorithm
                                        </span>
                                    </li>
                                    <li className='flex flex-col'>
                                        <span className=''>Predefined Templates:</span>
                                        <span className='pl-5'>
                                            No user preference taken into account to recommend dashboard. User
                                            will able to choose one of the template based on uploaded data.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className='flex flex-col'>
                                <span className=''>Unique value:</span>
                                <span className='pl-5'>
                                    It represents the total number of unique values present in the particular column
                                    of each data attribute
                                </span>
                            </li>
                            <li className='flex flex-col'>
                                <span className=''>User type:</span>
                                <span className='pl-5'>
                                    Based on previous knowledge and experience in data analysis an user can select
                                    it&apos;s type. The user types are three types Novices, beginner and experts
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
                                <span className=''>Selected Visualizations:</span>
                                <span className='pl-5'>
                                    Users can select the desired visualizations to be present in the
                                    recommended dashboard.
                                </span>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Page