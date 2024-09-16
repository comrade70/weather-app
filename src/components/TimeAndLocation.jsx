import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex flex-row my-6 items-center justify-center'>
            <p className="text-white text-xl font-extralight">
                Monday, 16th September 2024 | Local time: 10:30 AM
            </p>
        </div>

        <div className='flex flex-row my-3 items-center justify-center'>
            <p className="text-white text-3xl font-medium">
               Lagos, NG
            </p>
        </div>
    </div>  
  )
}

export default TimeAndLocation;