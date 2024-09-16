import React from 'react'

function TopButton() {
    
    const cities = [
        {
            id: 1,
            title: 'Lagos'
        },
        {
            id: 2,
            title: 'Abuja'
        },
        {
            id:3,
            title: 'Port Hacourt'
        },
        {
            id:4,
            title: 'Kano'
        }
    ]

  return  <div className='flex items-center justify-around my-6'>
    {cities.map((city) => (
        <button className='text-white text-lg font-medium'>{city.title}</button>
    )
    )}
  </div>;
  
}

export default TopButton;