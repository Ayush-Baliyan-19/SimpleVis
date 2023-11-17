import React from 'react'

const Page = () => {
  return (
    <>
        <li className='flex flex-col gap-2'>
                    <span className='underline'>Best Dashboards:</span>
                    <span className='pl-5'>
                        <p className='font-medium text-lg'>These are 5 dashboards that are initially recommended using metadata and
                            user preference
                        </p>
                    </span>
                </li>
                <li className='flex flex-col gap-2'>
                    <span className='underline'>Best Dashboards interactive features::</span>
                    <ul className='flex flex-col gap-3 pl-5'>
                        <li className='flex flex-col'>
                            <span className=''>Save:</span>
                            <span className='pl-5'>
                                You can delete that particular Visualization from dashboard
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
                                You can delete that particular dashboard from the list of best recommended
                                dashboards
                            </span>
                        </li>
                    </ul>
                </li>
    </>
  )
}

export default Page