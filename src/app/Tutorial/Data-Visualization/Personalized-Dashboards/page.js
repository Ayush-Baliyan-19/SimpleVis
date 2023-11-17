import React from 'react'

const Page = () => {
    return (
        <>
            <li className='flex flex-col gap-2'>
                <span className='underline'>Personalized Dashboards:</span>
                <span className='pl-5'>
                    <p className='font-medium text-lg'>You can create these dashboards as per your need. You can create
                        maximum 5 personalized dashboards.
                    </p>
                </span>
            </li>
            <li className='flex flex-col gap-2'>
                <span className='underline'>Personalized Dashboards interactive features:</span>
                <ul className='flex flex-col gap-3 pl-5'>
                    <li className='flex flex-col'>
                        <span className=''>Lock/Unlock:</span>
                        <span className='pl-5'>
                            You can ‘lock’ dashboard one you decided to not add anymore visulization to
                            that particular personalized dashboards and ‘unlock’ it if you want to add on again to it.
                        </span>
                    </li>
                    <li className='flex flex-col'>
                        <span className=''>Information:</span>
                        <span className='pl-5'>
                            You can see other detailed information about fitness function used for
                            dashboard evaluation for that particular dashboard.
                        </span>
                    </li>
                    <li className='flex flex-col'>
                        <span className=''>Download:</span>
                        <span className='pl-5'>
                            You can download the dashboard at local machine as SVG format.
                        </span>
                    </li>
                    <li className='flex flex-col'>
                        <span className=''>Delete:</span>
                        <span className='pl-5'>
                            You can delete that particular dashboard from the list of personalized
                            dashboards
                        </span>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default Page