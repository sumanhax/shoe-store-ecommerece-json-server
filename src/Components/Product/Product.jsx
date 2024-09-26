import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { base_url, endPoints } from "../../api/URL";

const Product = () => {
  let api = endPoints.product;
  // console.log(api);
  let [dataStatae, setState] = useState([]);

  const getProducts = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        // console.log("received data", res);
        
        setState(res.data);
      })
      .catch((err) => {
        // console.log("errors", err);
      });
  };

  // console.log("state",dataStatae);

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

  return (
    <section>
      <div>
        <div>
          <div className="mt-14">
            <SectionTitle />
          </div>
          <div className="flex justify-center flex-wrap py-5 m-10 gap-10">
           
            <div
              className="card bg-base-100 w-[18rem] shadow-2xl h-[400px] relative"
              key={dataStatae[dataStatae.length - 3]?.id}
            >
              <div className="flex justify-center items-center overflow-hidden rounded-t-2xl  ">
                <img
                  src={dataStatae[dataStatae.length - 3]?.product_img}
                  alt="Shoes"
                  className=" hover:scale-[1.1] transition duration-100 hover:duration-700 ease-in-out object-cover "
                />
              </div>
              <div className="card-body">
                <h2 className="card-title text-md">
                  {dataStatae[dataStatae.length - 3]?.product_name}
                  <div className="badge badge-secondary text-[10px]">NEW</div>
                </h2>
                <span className="font-normal text-sm">
                  {dataStatae[dataStatae.length - 3]?.category}
                </span>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end ">
                  <Link
                    to={`productdetails/${
                      dataStatae[dataStatae.length - 3]?.id
                    }`}
                  >
                    <button className="btn btn-primary bg-gray-700 hover:bg-gray-600 border-none text-white ">Buy now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="card bg-base-100 w-[18rem] shadow-2xl h-[400px] relative"
              key={dataStatae[dataStatae.length - 2]?.id}
            >
              <div className="flex justify-center items-center overflow-hidden rounded-t-2xl  ">
                <img
                  src={dataStatae[dataStatae.length - 2]?.product_img}
                  alt="Shoes"
                  className=" hover:scale-[1.1] transition duration-100 hover:duration-700 ease-in-out object-cover "
                />
              </div>
              <div className="card-body">
                <h2 className="card-title text-md">
                  {dataStatae[dataStatae.length - 2]?.product_name}
                  <div className="badge badge-secondary text-[10px]">NEW</div>
                </h2>
                <span className="font-normal text-sm">
                  {dataStatae[dataStatae.length - 2]?.category}
                </span>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end ">
                  <Link
                    to={`productdetails/${
                      dataStatae[dataStatae.length - 2]?.id
                    }`}
                  >
                    <button className="btn btn-primary bg-gray-700 hover:bg-gray-600 border-none text-white">Buy now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="card bg-base-100 w-[18rem] shadow-2xl h-[400px] relative"
              key={dataStatae[dataStatae.length - 1]?.id}
            >
              <div className="flex justify-center items-center overflow-hidden rounded-t-2xl  ">
                <img
                  src={dataStatae[dataStatae.length - 1]?.product_img}
                  alt="Shoes"
                  className=" hover:scale-[1.1] transition duration-100 hover:duration-700 ease-in-out object-cover "
                />
              </div>
              <div className="card-body">
                <h2 className="card-title text-md">
                  {dataStatae[dataStatae.length - 1]?.product_name}
                  <div className="badge badge-secondary text-[10px]">NEW</div>
                </h2>
                <span className="font-normal text-sm">
                  {dataStatae[dataStatae.length - 1]?.category}
                </span>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end ">
                  <Link
                    to={`productdetails/${
                      dataStatae[dataStatae.length - 1]?.id
                    }`}
                  >
                    <button className="btn btn-primary bg-gray-700 hover:bg-gray-600 border-none text-white">Buy now</button>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
