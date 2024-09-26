import React from 'react'
import { Link } from 'react-router-dom'

const PNF = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThoa3d3c3ozYXZjaXd1NTRiM2pjMWhuYnZ0YmxueHJsZzR0M2wxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6Fnhc9T7R3JbC3a2ol/giphy.gif" alt='pnf'/>
      
    <div className="text-center">
      {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link to={'/'}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
       
      </div>
    </div>
  </main>
  )
}

export default PNF