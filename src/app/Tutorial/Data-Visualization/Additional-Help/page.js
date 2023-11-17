import React from 'react'

const Page = () => {
    return (
        <li className='flex flex-col gap-2'>
            <span className='underline'>Additional Help:</span>
            <ul className='flex flex-col gap-3 pl-5'>
                <li className='flex flex-col'>
                    <span className=''>Tutorial:</span>
                    <span className='pl-5'>
                        You can learn from here how to use the this tool from scratch (data upload to data
                        visulization and analytics)
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Help:</span>
                    <span className='pl-5'>
                        If you need any help and have suggestion for us contact us
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Download:</span>
                    <span className='pl-5'>
                        You can download the dashboard at local machine as SVG format.
                    </span>
                </li>
                <li className='flex flex-col'>
                    <span className=''>Setting (Language):</span>
                    <span className='pl-5'>
                        You can select your preferred language here
                    </span>
                </li>
            </ul>
        </li>
    )
}

export default Page