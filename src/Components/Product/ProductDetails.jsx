import React, { useEffect, useState } from "react";
import { base_url, endPoints } from "../../api/URL";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  let api = endPoints.product;
  let api2 = endPoints.cart;

  console.log("api2",api2);

  let navigate=useNavigate()
  // console.log(api);
  let [dataState, setState] = useState([]);

  const getProducts = () => {
    axiosInstance
      .get(`${api}/${id}`)
      .then((res) => {
        // console.log("received data", res);
        setState(res.data);
      })
      .catch((err) => {
        // console.log("errors", err);
      });
  };

  // console.log("state",dataState);

  useEffect(() => {
    getProducts();
  }, [setState, api]);

  let alertMsg = () => {
    <div role="alert" className="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Your purchase has been confirmed!</span>
    </div>;
  };

  let uid=window.sessionStorage.getItem('id')
  let Data = {
    prod_id: id,
    uid:uid,
    product_name: dataState?.product_name,
    price: dataState?.price,
    colour: dataState?.colour,
    product_img: dataState?.product_img
  };
  

  let AddtoCart = () => {
    if(uid){
      axiosInstance
      .post(api2, Data)
      .then((res) => {
        console.log("success", res);
        alertMsg();
        navigate(`/cart/${uid}`)
      })
      .catch((err) => {
        console.log("error", err);
      });
    }else{
      navigate('/error')
      console.log("login first");
      
    }
  };

  return (
    //    <section>
    //     <div className='mx-auto w-1/2 mt-[150px] mb-16'>
    //     <div className="card lg:card-side bg-base-100 shadow-xl">
    //   <figure>
    //     <img
    //       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    //       alt="Album" />
    //   </figure>
    //   <div className="card-body sm:w-[500px] lg:w-[700px] md:w-[500px]">
    //     <h2 className="card-title">Giannis Freak 6 EP 'Vibrancy'</h2>
    //     <span className=''>Basketball Shoes</span>
    //     <h2 className='font-semibold ' >MRP : ₹ 11 895.00</h2>
    //     <ul>
    //       <li>Colour Shown: White/Photon Dust/Stadium Green/Photo Blue</li>
    //       <li>Style: FB7910-100</li>
    //       <li>Country/Region of Origin: Indonesia</li>
    //     </ul>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    //     </div>

    //    </section>
    <section className="">
      <div className="flex flex-col sm:flex-row items-center justify-center mx-auto p-3 rounded-md gap-10 mt-[150px] border border-gray-200 bg-white mb-20 shadow-md sm:w-[70rem] w-auto ">
        <div className="left w-1/2 overflow-hidden  ">
          <img src={dataState?.product_img} />
        </div>
        <div className="right w-1/2 flex flex-col justify-around  sm:items-start items-center  sm:text-start text-center gap-16">
          <div className="flex flex-col gap-1">
            <span className="card-title font-extrabold text-3xl">
              {dataState?.product_name}
            </span>
            <span className="font-semibold text-lg text-red-500">
              {dataState?.category}
            </span>
            <span className="font-bold text-2xl">
              MRP : ₹{dataState?.price}
            </span>
          </div>
          <span>
            <span className="font-medium">Details:</span> {dataState?.details}
          </span>
          <ul className="list-disc ml-4">
            <li>
              <span className="font-medium">colour:</span> {dataState?.colour}
            </li>
            <li>
              <span className="font-medium">style:</span> {dataState?.style}
            </li>
            <li>
              <span className="font-medium">Country/Region of Origin: </span>
              {dataState?.origin}
            </li>
          </ul>
          <div className="flex justify-end items-end">
           <button className="btn btn-neutral" onClick={AddtoCart}>Add to cart</button>
             
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
