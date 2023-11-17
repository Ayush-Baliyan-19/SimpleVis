import React from 'react'

const Page = () => {
    return (
        <li className='flex flex-col gap-2'>
            <span className='underline'>Parameters Setting:</span>
            <ul className='flex flex-col gap-3 pl-5'>
                <li className='flex flex-col'>
                    <span className=''>Data Attributes importance:</span>
                    <span className='pl-5'>
                        The user importance value represents the importance of
                        particular data attributes during dashboard recommendations
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Selected Visualizations:</span>
                    <span className='pl-5'>
                        Users can select the desired visualizations to be present in the
                        recommended dashboard.
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>No of Visualizations:</span>
                    <span className='pl-5'>
                        Users can set the range of visualization to be present in a
                        recommended dashboard.
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>User Type:</span>
                    <span className='pl-5'>
                        Based on previous knowledge and experience in data analysis an user can
                        select it&apos;s type. The user types are three types Novices, beginner and experts.
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Genetic Algorithm Parameters:</span>
                    <span className='pl-5'>
                        It represent the operations that are performed to optimize
                        dashboard recommendation
                    </span>
                </li>
            </ul>
        </li>
    )
}

export default Page