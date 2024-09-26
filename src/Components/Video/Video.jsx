import React from 'react'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <section id='video'>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 lg:m-12">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="border border-solid p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold  md:text-7xl  text-gray-700">
          Built for the Chase
          </h2>

          <p className="hidden text-gray-900 sm:mt-4 sm:block">
          Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              to='/productlist'
              className="inline-block rounded border from-blue-500 via-pink-500 to-red-500 bg-gradient-to-r hover:bg-gradient-to-t transition-all ease-linear  hover:duration-[5000ms] text-white  px-12 py-3 text-sm font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt=""
          src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_654,c_limit/edc9ae96-9cb2-4e42-b3ff-75968608a501/image.png"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt=""
          src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/cd5068fc-6e6f-4aa0-982f-3498a400875c/men-s-shoes-clothing-accessories.png"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Video