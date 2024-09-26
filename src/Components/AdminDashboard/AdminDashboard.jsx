import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { endPoints } from "../../api/URL";
import axiosInstance from "../../api/axiosInstance";
import ProductDetails from "../Product/ProductDetails";
import AddProduct from "../Product/AddProduct";
import EditProduct from "../Product/EditProduct";

const AdminDashboard = () => {
  let [dataState, setState] = useState();
  let [productState, setProduct] = useState();
  let [nProduct, nSetState] = useState();
  let [searchTxt,setSerachTerm]=useState("")
  let { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();

  let api = `${endPoints.admin}/${id}`;
  let api2 = endPoints.product;

  let getDetails = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log("response data profile", res);
        setState(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  let getProducts = () => {
    axiosInstance
      .get(api2)
      .then((res) => {
        console.log("response data product", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  let deleteProduct = (id) => {
    // console.log("id",id);
    
    axiosInstance
      .delete(`${api2}/${id}`)
      .then((res) => {
        console.log("success delete", res);
        getProducts()
      })
      .catch((err) => {
        console.log("error delete", err);
      });
  };


  useEffect(() => {
    getDetails();
    getProducts();
  }, [setState, api]);

  let logOutHandler = () => {
    window.sessionStorage.removeItem("isAdminLogged");
    navigate("/adminlogin");
  };

  let showModal = (id) => {
    document.getElementById("my_modal_3").showModal();
    let found = productState.find((x) => x.id == id);
    // console.log("found",found);
    nSetState(found);
  };
// console.log("search",searchTxt);

  let showModalEdit = () => {
    document.getElementById("my_modal_5").showModal();
    
  };

  return (
    <div className="flex justify-start mt-10">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
         

          <ul className="mt-6 space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                General
              </a>
            </li>

            {/* <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Billing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Invoices
              </a>
            </li> */}

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <form>
                      <button
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                        onClick={logOutHandler}
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100" key={dataState?.id}>
          <a className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img
              alt=""
              src={dataState?.profileimg}
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium text-gray-900">
                  {dataState?.username}
                </strong>

                <span> {dataState?.email} </span>
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="mx-auto w-full mt-10 ">
       
        <div className="overflow-x-auto">
          <div className="m-10 flex justify-between mr-52">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              onChange={(event)=>{setSerachTerm(event.target.value)}}/>
            </div>
            
            <button
              className="btn btn-active btn-primary"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Add New Product
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <AddProduct />
                <div className="modal-action"></div>
              </div>
            </dialog>
          </div>

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Origin</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {productState?.filter((x)=>{
                if(searchTxt==""){
                return x;
              }else if((x?.product_name.toLowerCase().includes(searchTxt.toLowerCase()))||(x?.category.toLowerCase().includes(searchTxt.toLowerCase()))){
                return x;
              }
                }
              ).map((x) => (
                <tr key={x?.id}>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={x?.product_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{x?.product_name}</div>
                        <div className="text-sm opacity-50">{x?.style}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">
                    {x?.category}
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">
                      {x?.style}
                    </span> */}
                  </td>
                  <td className="font-semibold">{x?.price}</td>
                  <td className="font-semibold">{x?.origin}</td>
                  <th>
                   
                    <button
                      className="btn btn-info mx-2 my-2"
                      onClick={() => {
                        showModal(x.id);
                      }}
                    >
                      View
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box w-11/12 max-w-7xl">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto p-3 rounded-md gap-10  border border-gray-200 bg-white  shadow-md sm:w-[70rem] w-auto ">
                          <div className="left w-1/2 overflow-hidden  ">
                            <img src={nProduct?.product_img} />
                          </div>
                          <div className="right w-1/2 flex flex-col justify-around  sm:items-start items-center  sm:text-start text-center gap-10">
                            <div className="flex flex-col gap-2">
                              <span className="card-title font-extrabold text-3xl">
                                {nProduct?.product_name}
                              </span>
                              <span className="font-semibold text-xl text-red-500">
                                {nProduct?.category}
                              </span>
                              <span className="font-bold text-2xl">
                                MRP : ₹{nProduct?.price}
                              </span>
                            </div>
                            <span>
                              <span className="font-medium">Details:</span>{" "}
                              {nProduct?.details}
                            </span>
                            <ul className="list-disc">
                              <li>
                                <span className="font-medium">colour:</span>{" "}
                                {nProduct?.colour}
                              </li>
                              <li>
                                <span className="font-medium">style:</span>{" "}
                                {nProduct?.style}
                              </li>
                              <li>
                                <span className="font-medium">
                                  Country/Region of Origin:{" "}
                                </span>
                                {nProduct?.origin}
                              </li>
                            </ul>
                            <div className="flex justify-end items-end">
                              {/* <button className="btn btn-neutral" onClick={AddtoCart}>Add to cart</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </dialog>

                    <Link to={`/editproduct/${x.id}`}>
                      <button className="btn btn-warning mx-2 my-2" >
                        Edit
                      </button>
                      
                    </Link>
                    {/* <dialog id="my_modal_5" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <EditProduct id={x.id}/>
                <div className="modal-action"></div>
              </div>
            </dialog> */}

                    <button
                      className="btn btn-error mx-2 my-2"
                      onClick={() => {
                        deleteProduct(x.id);
                      }}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
