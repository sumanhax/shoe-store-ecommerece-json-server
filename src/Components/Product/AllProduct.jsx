import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { base_url, endPoints } from "../../api/URL";


const AllProduct = () => {
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
    <section id='allproduct'>
    <div>
      <div>
        <div >
        <div className="bg-gray-50 py-4 sm:py-8 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">The Trend Bluster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          New Styles On Sale
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Shop All Our New Markdowns
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
                  
                    <Link to={`/productdetails/${x.id}`}><button className="btn btn-primary bg-gray-700 hover:bg-gray-600 border-none text-white">Buy now</button></Link>
                 
                </div>
              </div>
            </div>
            )).slice(0,8)
            }
        </div>
        <div className="m-10 flex items-center justify-center sm:justify-center gap-x-6">
              <Link
                to="productlist"
                className="rounded-md border-solid border-2 border-gray-700 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Load More
              </Link>
             
            </div>
      </div>
    </div>
  </section>
  )
}

export default AllProduct