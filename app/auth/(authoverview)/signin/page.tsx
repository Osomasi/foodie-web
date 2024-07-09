"use client"
import FoodieLogo from '@/app/ui/foodie-logo';
import React from 'react';
import LanguageSelector from '@/app/ui/auth/languageSelector';
import logo from '@/public/icons/Foodie Logo 1 1.png';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
// icons
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// icons ended

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className=' bg-black py-5 px-4 md:px-10 rounded-l-2xl'>
      <div className='flex w-full flex-row justify-between items-center'>
        <div>
          <Image src={logo} className='w-20' alt='foodie icon' />
        </div>
        <div className='hover:cursor-pointer'>
          <LanguageSelector />
        </div>
      </div>
      <form className='flex flex-col items-center mt-10 md:mt-[30%]' onSubmit={handleSubmit(data => console.log(data))}>
        <div className='flex flex-col items-center w-full max-w-md bg-[#181818] text-white space-y-6 rounded-2xl p-6 md:p-10'>
          <div className='flex flex-col w-full'>
            <label htmlFor="email" className='mb-2'>Enter your email to get started!</label>
            <input type='email' id='email' {...register('email', { required: true })} className='text-white p-2 rounded bg-black transition duration-200 hover:bg-green-800' placeholder='email' required />
            {errors.email && <p className='text-red-500'>Email is required.</p>}
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="password" className='mb-2'>Just a password, 8 is the limit please</label>
            <input type='password' id='password' {...register('password', { required: true, minLength: 8 })} className='text-white p-2 rounded bg-black transition duration-200 hover:bg-green-800' placeholder='password' required />
            {errors.password && <p className='text-red-500'>Password must be at least 8 characters.</p>}
          </div>
          {/* Submit button */}
          <div className='flex flex-col w-full'>
            <button type='submit' className='p-4 bg-green-900 rounded transition duration-200 hover:bg-green-600'>Sign Up</button>
          </div>
          <div className='flex flex-col w-full items-center space-y-4'>
            <h3>Or continue with</h3>
            <div className='flex w-full items-center justify-around'>
            <FaGoogle className='w-10 h-10' />
            <FaApple className='w-10 h-10' />
            <FaFacebook className='w-10 h-10' />
            </div>
            <h3>Dont have an account? <Link href="/auth" className='text-green-600 font-semibold transition duration-200 hover:text-green-300'>Sign in</Link></h3>
          </div>
        </div>
      </form>
    </div>
  );
}
