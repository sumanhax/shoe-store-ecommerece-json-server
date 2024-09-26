import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { base_url, endPoints } from "../../api/URL";

const ProductList = () => {
    let api = endPoints.product
    // console.log(api);
    let [dataStatae,setState]=useState([])
  
    const getProducts = () => {
      axiosInstance
        .get(api)
        .then((res) => {
          // console.log("received data", res);
        //   alertMsg()
          setState(res.data)
        })
        .catch((err) => {
          // console.log("errors", err);
        });
    };
   
    // console.log("state",dataStatae);
    
    useEffect(() => {
      getProducts();
    }, [setState,api]);
  return (
   <div>
     
    <div>
       <div className="mt-28">
       <div className="bg-white py-4 sm:py-8 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">The Trend Bluster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight from-blue-500 via-pink-500 to-red-500 bg-gradient-to-r bg-clip-text text-transparent sm:text-6xl">
           The Best Shoes You Have Ever Seen
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Our recent lunch products from our exclusive collections.
          </p>
        </div>
       
      </div>
    </div>
          </div>
         <div className="py-5 m-10 gap-10 flex justify-center flex-wrap items-center px-16 ">

         {
            dataStatae.map((x)=>(
              <div className="card bg-base-100 w-[18rem] shadow-2xl h-[400px] relative" key={x.id} >
              <div className="flex justify-center items-center overflow-hidden rounded-t-2xl  ">
                <img
                  src={x?.product_img}
                  alt="Shoes"
                  className=" hover:scale-[1.1] transition duration-100 hover:duration-700 ease-in-out object-cover "
                />
              </div>
              <div className="card-body">
                <h2 className="card-title text-md">
                  {x?.product_name}
                  {/* <div className="badge badge-secondary ">NEW</div> */}
                </h2>
                <span className='font-normal text-sm'>{x?.category}</span>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end ">
                  
                    <Link to={`/productdetails/${x.id}`}><button className="btn btn-primary bg-gray-700 hover:bg-gray-600 border-none text-white">Buy Now</button></Link>
                  
                </div>
              </div>
            </div>
            ))
           }
          
          
         
        </div>
    </div>
   </div>
  )
}

export default ProductList