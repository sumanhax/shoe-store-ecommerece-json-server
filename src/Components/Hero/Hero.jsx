import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'



const Hero = () => {
    
  return (
    <div className="bg-white group">
     
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#89a2fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 flex justify-between ">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center sm:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl animate-fade-up animate-delay-[5ms] animate-duration-500		">
              Find Your<br/> <span className='from-teal-500 via-indigo-500 to-sky-500 bg-gradient-to-r bg-clip-text  text-transparent '>Dream</span> <span className='from-blue-500 via-pink-500 to-red-500 bg-gradient-to-r bg-clip-text text-transparent'>Sneakers...</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-up animate-delay-200 animate-once animate-ease">
            Find shoes from our various collections, here shoes are endless and style too.
            </p>
            <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
              <Link
                to='/productlist'
                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-fade-right animate-delay-[350ms] animate-once animate-ease"
              >
                Shop Now
              </Link>
              <HashLink to="/#video" className="text-sm font-semibold leading-6 text-gray-900 animate-fade-left animate-delay-[350ms] animate-once animate-ease">
                Know more <span aria-hidden="true">→</span>
              </HashLink>
            </div>
          </div >
         
            <div className='sm:absolute sm:top-40 sm:right-40 hidden  lg:block animate-fade-left animate-delay-[100ms] animate-once animate-ease'>
            <img src='./Assests/nike_hero.png' className=' '/>
            </div>
          
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero