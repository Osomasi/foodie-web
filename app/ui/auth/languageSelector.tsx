import React from 'react'
import { FaFontAwesome } from 'react-icons/fa';
import Image from 'next/image';
import unitedStates from '@/public/icons/United States.png'

export default function LanguageSelector() {
  return (
    <div className='rounded-3xl p-2 border-2 w-20 h-10 flex flex-row gap-1 bg-white transition-opacity duration-200 hover:opacity-80 active:opacity-60 items-center justify-center'>
        <Image src={unitedStates} className='block object-cover w-10' alt='american flag for now'/>
        <h1 className='font-medium text-lg'>EN</h1>
        
    </div>
  )
}
