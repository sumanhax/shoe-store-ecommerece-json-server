import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { endPoints } from "../../api/URL";
import axiosInstance from "../../api/axiosInstance";
import { auth } from "../../auth/auth";

const UserProfile = () => {
  let [dataState, setState] = useState();
  let [orderState, setOrder] = useState();
  let [norderState, nsetOrder] = useState();

  let { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();

  let api = `${endPoints.user}/${id}`;
  let api2 = endPoints.order;

  let getDetails = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        // console.log("response data profile", res);
        setState(res.data);
        window.sessionStorage.setItem("first_name", res.data.first_name);
        window.sessionStorage.setItem("profileimg", res.data.profileimg);
        window.sessionStorage.setItem("id", res.data.id);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  let getOrderDetails = () => {
    axiosInstance
      .get(api2)
      .then((res) => {
        console.log("success", res);
        setOrder(res.data.filter(x=>(x.uid==id)))
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getDetails();
    getOrderDetails();
  }, [setState, api]);

  let logOutHandler = () => {
    window.sessionStorage.removeItem("isUserLogged");
    window.sessionStorage.removeItem("first_name");
    window.sessionStorage.removeItem("profileimg");
    window.sessionStorage.removeItem("id");

    navigate("/loginuser");
  };
// let noProduct=1
  return (
    //     <div className='mx-auto flex items-center justify-center mb-14 mt-32'>
    //         <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
    //   <img
    //     alt=""
    //     src={dataState?.profileimg}
    //     className="h-56 w-full rounded-md object-cover"
    //   />

    //   <div className="mt-2">
    //     <dl>

    //       <div>
    //         <dd className="font-bold text-2xl">{dataState?.first_name} {dataState?.last_name}</dd>
    //       </div>
    //       <div>
    //         <dd className="text-sm text-gray-500">{dataState?.email}</dd>
    //       </div>
    //     </dl>

    //     {/* <div className="mt-6 flex items-center gap-8 text-xs">
    //       <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    //         <svg
    //           className="size-4 text-indigo-700"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
    //           />
    //         </svg>

    //         <div className="mt-1.5 sm:mt-0">
    //           <p className="text-gray-500">Parking</p>

    //           <p className="font-medium">2 spaces</p>
    //         </div>
    //       </div>

    //       <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    //         <svg
    //           className="size-4 text-indigo-700"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    //           />
    //         </svg>

    //         <div className="mt-1.5 sm:mt-0">
    //           <p className="text-gray-500">Bathroom</p>

    //           <p className="font-medium">2 rooms</p>
    //         </div>
    //       </div>

    //       <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    //         <svg
    //           className="size-4 text-indigo-700"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    //           />
    //         </svg>

    //         <div className="mt-1.5 sm:mt-0">
    //           <p className="text-gray-500">Bedroom</p>

    //           <p className="font-medium">4 rooms</p>

    //         </div>

    //       </div>

    //     </div> */}
    //     <div className='py-3 flex justify-center items-center gap-5'>
    //     <button className="btn btn-warning" >Edit  </button>
    //         <button className="btn btn-error" onClick={logoutHandle}>Log out</button>

    //         </div>
    //   </div>
    // </a>

    //     </div>
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

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img
              alt=""
              src={dataState?.profileimg}
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium text-gray-900">
                  {`${dataState?.first_name}  ${dataState?.last_name}`.toLocaleUpperCase()}
                </strong>

                <span> {dataState?.email} </span>
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="mx-auto w-full mt-10 ">
        <div className="mx-auto flex items-center justify-center mb-14 mt-32 gap-44">
          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={dataState?.profileimg}
              className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dd className="font-bold text-2xl">
                    {dataState?.first_name} {dataState?.last_name}
                  </dd>
                </div>
                <div>
                  <dd className="text-sm text-gray-500">{dataState?.email}</dd>
                </div>
              </dl>

              <div className="py-3 flex justify-center items-center gap-5">
                {/* <button className="btn btn-warning">Edit </button> */}
                <button className="btn btn-error" onClick={logOutHandler}>
                  Log out
                </button>
              </div>
            </div>
          </a>
          {/* <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold pb-5">Order History</h2>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    order #id
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    No. of product
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Details
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
              
               
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
