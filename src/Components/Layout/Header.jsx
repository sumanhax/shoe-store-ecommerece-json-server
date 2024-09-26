import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { first_name, isLogged, profileimg, uid } from "../UserAuth/UserProfile";
import { auth } from "../../auth/auth";
import { cnt } from "../Cart/Cart";
import { HashLink } from "react-router-hash-link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "#allproduct" },
  { name: "Features", href: "registrationuser" },
  { name: "Marketplace", href: "vbb" },
  { name: "Company", href: "vbvb" },
];

const Header = () => {
  const isUserLogged = window.sessionStorage.getItem('isUserLogged')
  const profileimg = window.sessionStorage.getItem('profileimg')
  const first_name = window.sessionStorage.getItem('first_name')
  const id = window.sessionStorage.getItem('id')

  let [logState, setLog] = useState({
    link: "loginuser",
    jsx: "Log in",
    hide: "hidden",
    first_name: first_name,
    profileimg: profileimg,
  });


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// console.log("islogged",auth.isLogged);

  let loginHandler = () => {
    
    if (isUserLogged) {
      setLog({
        link: `userprofile/${id}`,
        jsx: `Hi, ${first_name}`,
        hide: "block",
        first_name: `${first_name}`,
        profileimg: `${profileimg}`,
      });
    } else {
      setLog({
        link: "loginuser",
        jsx: "Log in",
        hide: "hidden",
        first_name: "",
        profileimg: ""
      });
    }
  };

  useEffect(() => {
    loginHandler();
  }, []);

  let navigate=useNavigate()

let cartNavigate=()=>{
navigate('/cart')
}

  return (
    //   <header classNameName="absolute inset-x-0 top-0 z-50">
    //   <nav aria-label="Global" classNameName="flex items-center justify-between p-6 lg:px-8">
    //     <div classNameName="flex lg:flex-1 ">
    //       <Link to="/" classNameName="-m-1.5 p-1.5 scroll-smooth">
    //         <span classNameName="sr-only">Your Company</span>
    //         <img
    //           alt="Nike"
    //           src="https://www.transparentpng.com/thumb/nike-logo/MmN5Kr-nike-logo-picture.png"
    //           classNameName="h-11 w-auto"

    //         />
    //       </Link>
    //     </div>
    //     <div classNameName="flex lg:hidden">
    //       <button
    //         type="button"
    //         onClick={() => setMobileMenuOpen(true)}
    //         classNameName="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //       >
    //         <span classNameName="sr-only">Open main menu</span>
    //         <Bars3Icon aria-hidden="true" classNameName="h-6 w-6" />
    //       </button>
    //     </div>
    //     <div classNameName="hidden lg:flex lg:gap-x-12">
    //       {navigation.map((item) => (
    //         <Link key={item.name} to={item.href} classNameName="text-sm font-semibold leading-6 text-gray-900">
    //           {item.name}
    //         </Link>
    //       ))}
    //     </div>
    //     <div classNameName="hidden lg:flex lg:flex-1 lg:justify-end">
    //       <Link to="login" classNameName="text-sm font-semibold leading-6 text-gray-900">
    //         Log in <span aria-hidden="true">&rarr;</span>
    //       </Link>
    //       <img src='https://cdn-icons-png.flaticon.com/512/9187/9187604.png'  classNameName='h-6 w-6 mx-5 rounded-full'/>

    //     </div>

    //   </nav>
    //   <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} classNameName="lg:hidden">
    //     <div classNameName="fixed inset-0 z-50" />
    //     <DialogPanel classNameName="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //       <div classNameName="flex items-center justify-between">
    //         <a href="#" classNameName="-m-1.5 p-1.5">
    //           <span classNameName="sr-only">Your Company</span>
    //           <img
    //             alt=""
    //             src="https://www.transparentpng.com/thumb/nike-logo/MmN5Kr-nike-logo-picture.png"
    //             classNameName="h-8 w-auto"
    //           />
    //         </a>
    //         <button
    //           type="button"
    //           onClick={() => setMobileMenuOpen(false)}
    //           classNameName="-m-2.5 rounded-md p-2.5 text-gray-700"
    //         >
    //           <span classNameName="sr-only">Close menu</span>
    //           <XMarkIcon aria-hidden="true" classNameName="h-6 w-6" />
    //         </button>
    //       </div>
    //       <div classNameName="mt-6 flow-root">
    //         <div classNameName="-my-6 divide-y divide-gray-500/10">
    //           <div classNameName="space-y-2 py-6">
    //             {navigation.map((item) => (
    //               <Link
    //                 key={item.name}
    //                 to={item.href}
    //                 classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //               >
    //                 {item.name}
    //               </Link>
    //             ))}
    //           </div>
    //           <div classNameName="py-6">
    //             <Link
    //               to="#"
    //               classNameName="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //             >
    //               Log in
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </DialogPanel>
    //   </Dialog>
    // </header>
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Nike</span>
            <img
              alt=""
              src="https://www.transparentpng.com/thumb/nike-logo/MmN5Kr-nike-logo-picture.png"
              className="h-11 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <HashLink
            to="/#allproduct"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Sneakers
          </HashLink>
          <Link
            to="/productlist"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            All Collection
          </Link>

        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       
       <div className="px-2">
      <Link to={`/cart/${id}`}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item bg-orange-400">{cnt}</span>
        </div>
        </div>
      </Link>
       </div>
        
          
          <img
            src={logState.profileimg}
            alt="log in"
            className={`${logState.hide} h-7 w-7 mx-3 rounded-full object-cover`}
          />
          <Link
            to={logState.link}
            className="text-sm font-semibold leading-6 text-gray-900 mt-1.5"
          >
            {logState.jsx} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Nike</span>
              <img
                alt=""
                src="https://www.transparentpng.com/thumb/nike-logo/MmN5Kr-nike-logo-picture.png"
                className="h-11 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
              <div className="">
       <div tabindex="0" role="button" class="btn btn-ghost btn-circle" >
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="badge badge-sm indicator-item bg-orange-300">0</span>
        </div>
      </div>
       </div>
                <Link
                  to={logState.link}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {logState.jsx}
                </Link>
                {/* <img src="./Assets/user.png" alt="log in" /> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
