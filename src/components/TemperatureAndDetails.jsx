import React from 'react'
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons';

function TemperatureAndDetails() {
  return (
    <div>
            <div className="flex item-center justify-center py-6 text-xl text-cyan-300" >
                <p>Cloudy or Sunny</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src="" alt="image here" className='w-20' />

                <p className="text-5xl">34°</p>

                <div className="flex flex-col space-y-2 ">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Temperature:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className='font-medium ml-1'>65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind Speed:
                        <span className='font-medium ml-1'>10km/h</span>
                    </div>
                </div>
            </div>  
            <div className="flex flex-row item-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light">
                    Rise: <span className='font-medium text-ml-1 '>6: 45 AM</span>
                </p>   
                <p className="font-light">|</p> 

                <UilSunset/>
                <p className="font-light">
                    Set: <span className='font-medium text-ml-1 '>7: 35 PM</span>
                </p>   
                <p className="font-light">|</p> 

                <UilSun/>
                <p className="font-light">
                    High: <span className='font-medium text-ml-1 '>45°</span>
                </p>   
                <p className="font-light">|</p> 

                <UilSun/>
                <p className="font-light">
                    Low: <span className='font-medium text-ml-1 '>40°</span>
                </p>   
                <p className="font-light">|</p> 
            </div> 
    </div>
  );
}

export default TemperatureAndDetails;