"use client"
import React from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { CustomButton } from '.'
import { calculateCarRent } from '@/utils'
interface CarCardProps {
    car : CarProps
}

function CarCard({car}:CarCardProps) { 
    const {city , make, model, transmission, year ,city_mpg} = car
    const carRent = calculateCarRent( city_mpg , year)
  return (
    <div className='car-card group'>
        <div className="car-card__content">
            <h2 className='car-card__content-title'> {make} {model}</h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='slef-start text-[14px] font-semibold'>
                $
            </span>
                {carRent} 
            <span className='slef-end text-[14px] font-medium'>
                /day
            </span>
            
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/hero.png" alt='car' fill priority className='object-contain'/>
        </div>
    </div>
  )
}

export default CarCard