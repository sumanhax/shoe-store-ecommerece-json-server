import React from 'react'
import SectionTitle from "../Product/SectionTitle";

const Features = () => {
  return (
   <section>
     <div>
     <div >
        <div className="bg-gray-50 py-4 sm:py-8 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">They're soft, they're bouncy</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nike Joyride
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          form the core of an innovative new cushioning system designed
          </p>
        </div>
       
      </div>
    </div>
        </div>
    </div>
    <div className="overflow-hidden bg-white pb-10 sm:pb-10 ">
        
    <div className="mx-auto max-w-7xl px-6 sm:py-5 sm:mt-10 lg:px-8 ">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <img
          alt="Product screenshot"
          src="https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg"
          
          className="w-[10rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[25rem] md:-ml-4 lg:-ml-0"
        />
        <div className="lg:pr-8 lg:pt-4 flex items-center">
          <div className="lg:max-w-lg ">
            
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Absorbs the Impact</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            That soft ride doesn't just go easy on your feet—it helps your whole body to feel good. The Nike Joyride cushioning system offers 14% better impact absorption when compared to some of our most trusted running shoes (tested with Nike Air Zoom Pegasus 36 and Nike Epic React FK2).
            </p>
           
          </div>
        </div>
        
      </div>
    </div>
  </div>
   </section>
  )
}

export default Features