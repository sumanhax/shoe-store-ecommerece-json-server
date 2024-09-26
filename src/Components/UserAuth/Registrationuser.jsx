import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { endPoints } from '../../api/URL';
import axiosInstance from '../../api/axiosInstance';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';

const Registrationuser = () => {

  let api = endPoints.user;
  let navigate = useNavigate();
  let [dataState, setState] = useState();

  let swlAlert = (x, y) => {
    Swal.fire({
      title: y,
      text: x,
      icon: y,
    });
  };

  let getDetails = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log("response data", res.data);
        setState(res.data);
      })
      .catch((err) => {
       console.log("errors",err);
       
      });
  };

  useEffect(() => {
    getDetails();
  }, [setState, api]);

  const getBase64=file=>new Promise((resolve,reject)=>{
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>resolve(reader.result)
    reader.onerror=reject
    })

  let submitHandler = (data) => {
    let user=dataState.find((x)=>{
     return x.email==data.email
    })
    if(user){
     swlAlert("Email already registered", "error");
    }else{
      let uuid=uuidv4();
     let newData={
       uid:uuid,
       first_name: data.first_name,
       last_name: data.last_name,
       email: data.email,
       password: data.password,
       profileimg: data.profileimg,

     }
 
 axiosInstance
       .post(api, newData)
       .then((res) => {
         swlAlert("Registered sucessfully", "success");
         navigate("/loginuser");
       })
       .catch((err) => {
         swlAlert("Something wrong", "error");
       });
   
    }
    
   }; 

   let formValidator = (data) => {
    let err = {};

    // first_name
    if (data.first_name.length < 1) {
      err.first_name = "Required field";
    } else if (data.first_name.length < 3) {
      err.first_name = "minimum 2 characters";
    }
    // last_name
    if (data.last_name.length < 1) {
      err.last_name = "Required field";
    } else if (data.last_name.length < 3) {
      err.last_name = "minimum 2 characters";
    }
    // email
    if (data.email.length < 1) {
      err.email = "Required field";
    } else if (data.email.length < 10) {
      err.email = "minimum 10 characters";
    }
    // password
    if (data.password.length < 1) {
      err.password = "Required field";
    } else if (data.password.length < 8) {
      err.password = "minimum 8 characters";
    }

    return err;
  };

   let formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      profileimg:""
      
    },
    validate: formValidator,
    onSubmit: submitHandler,
  });

  return (
    <div className='mt-14'>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Sign up to get access</h1>
    
    
        <form  onSubmit={formik.handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          {/* <p className="text-center text-lg font-medium">Sign in to your account</p> */}
    
        

          <div>
            <label htmlFor="first_name" className="sr-only">First Name</label>
    
            <div className="relative">
              <input
                type="first_name"
                name='first_name'
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter first name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
     {formik.touched.first_name && formik.errors?.first_name ? (
          <p>{formik.errors.first_name}</p>
        ) : (
          ""
        )}
             
            </div>
          </div>

          <div>
            <label htmlFor="last_name" className="sr-only">Last Name</label>
    
            <div className="relative">
              <input
                type="last_name"
                name='last_name'
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter last name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
     {formik.touched.last_name && formik.errors?.last_name ? (
          <p>{formik.errors.last_name}</p>
        ) : (
          ""
        )}
             
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
    
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                values={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
    
    {formik.touched.email && formik.errors?.email ? (
          <p>{formik.errors.email}</p>
        ) : (
          ""
        )}
            </div>
          </div>
    
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
    
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                values={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
              />
    {formik.touched.password && formik.errors?.password ? (
          <p>{formik.errors.password}</p>
        ) : (
          ""
        )}
            </div>
          </div>

          <div>
            <label htmlFor="cnfpassword" className="sr-only">Confirm Password</label>
    
            <div className="relative">
              <input
                type="cnf_password"
                name="cnf_password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Confirm the password"
              />
     <div className='my-3'>
     <label
              htmlFor="prod_img"
              className="block text-sm font-semibold leading-6 text-gray-500"
            >
              Profile image*
            </label>

            <input type="file"  className="file-input file-input-bordered w-full  " onChange={(event)=>{getBase64(event.target.files[0]).then(res=>{
          // console.log(res);
          formik.setFieldValue("profileimg",res)
        }).catch(err=>console.log(err)
        )}
        }
/>
            </div>
             
            </div>
          </div>
    
          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign up
          </button>
    
          <p className="text-center text-sm text-gray-500">
            Already have account?
            <Link className="underline" to="/loginuser">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
        </div>
  )
}

export default Registrationuser