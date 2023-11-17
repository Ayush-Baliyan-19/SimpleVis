import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col text-secondary pt-5 min-h-screen h-max font-sans gap-5">
      <h1 className='text-5xl font-bold'>Data Upload</h1>
      <p className='font-medium text-lg'>The system provides you to use two types of data upload methods:
      </p>
      <ul className=' flex flex-col gap-5 font-medium text-lg'>
        <li className='flex flex-col gap-2'>
          <span className='underline'>Inbuild datasets for testing:</span>
          <span className='pl-5'>
            <ul className='flex flex-col gap-3'>
              <li className='flex flex-col'>
                <span className=''>Student:</span>
                <span className='pl-5'>
                  This contains 432 row and 17 columns with 3 data attributes types (Ordinal,
                  Nominal, Numeric)
                </span>
              </li>
              <li className='flex flex-col'>
                <span className=''>Adult Census:</span>
                <span className='pl-5'>
                  This contains XX row and XX columns with 4 data attributes types (Ordinal,
                  Nominal, Numeric, Temporal)
                </span>
              </li>
              <li className='flex flex-col'>
                <span className=''>Iris:</span>
                <span className='pl-5'>
                  This contains XX row and 5 columns with 3 data attributes types (Nominal, Numeric)
                </span>
              </li>
            </ul>
          </span>
        </li>
        <li className='flex flex-col gap-2'>
          <span className='underline'>Upload your own dataset:</span>
          <span className='pl-5'>
            Simply upload preprocessed data in the .csv format.
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Page