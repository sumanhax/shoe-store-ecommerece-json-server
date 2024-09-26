import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { endPoints } from "../../api/URL";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";


const EditProduct = (props) => {

  // let {id}=props
  let api =endPoints.product
  // console.log("props",id);
  
  let {id}=useParams()
  let navigate=useNavigate()
  let [dataState, setData] = useState();

  const getBase64=file=>new Promise((resolve,reject)=>{
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>resolve(reader.result)
    reader.onerror=reject
    })

  let submithandler=(data)=> {
    axiosInstance
      .put(`${api}/${id}`, data)
      .then((res) => {
        //  swlAlert("Registered sucessfully", "success");
        let a_id = window.sessionStorage.getItem('a_id');
        navigate(`/admindashboard/${a_id}`);
        console.log("succes",res);
       
        
      })
      .catch((err) => {
        //  swlAlert("Something wrong", "error");
      });

  } 

  let getDetails=()=> {
    axiosInstance
      .get(`${api}/${id}`)
      .then((res) => {
        //  swlAlert("Registered sucessfully", "success");
        console.log("recieved data",res.data);
        setData(res.data)
      })
      .catch((err) => {
        //  swlAlert("Something wrong", "error");
      });

  } 

  useEffect(()=>{
    getDetails()
  },[])
  
  // let formValidator = (data) => {
  //   let err = {};
  //   if (data.category.length < 1) err.category = "required field*";
  //   if (data.product_name.length < 1) err.product_name = "required field*";
  //   if (data.details.length < 1) err.details = "required field*";
  //   if (data.color.length < 1) err.color = "required field*";

  //   if (data.price.length < 1) err.price = "required field*";
  //   else if (data.price < 0){
  //     err.price = "(-) value is not allowed";
  //   }
 

  //   if (data.style.length < 1) err.style = "required field*";
  //   if (data.details.length < 1) err.details = "required field*";


  //   return err;
  // };

  let formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      product_name: dataState?.product_name,
      category: dataState?.category,
      origin: dataState?.origin,
      colour: dataState?.colour,
      price: dataState?.price,
      details: dataState?.details,
      style: dataState?.style,
      product_img: dataState?.product_img,
    },
    onSubmit: submithandler,
    // validate: formValidator,
  });

  return (
    
    <div className="text-start mt-36 mb-10">
      <h2 className="text-center font-bold text-4xl from-blue-500 via-pink-500 to-red-500 bg-gradient-to-r bg-clip-text text-transparent">Update Product</h2>
      <form
         onSubmit={formik.handleSubmit}
        className="mx-auto p-10 max-w-xl sm:mt-00 shadow-lg rounded-2xl bg-white drop-shadow-sm "
      >
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6  text-indigo-500"
            >
              Category*
            </label>
            <div className="mt-2.5">
              <input
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                value={formik.values?.category}
                onBlur={formik.handleBlur}
                // placeholder="Enter category"
                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
             {formik.touched.category&&formik?.errors?.category?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.category}</p>:""}
             </div>
          </div>
          <div>
            <label
              htmlFor="product_name"
              className="block text-sm font-semibold leading-6 text-indigo-500"
            >
              product_name*
            </label>
            <div className="mt-2.5">
              <input
                id="product_name"
                name="product_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values?.product_name}
                onBlur={formik.handleBlur}
                placeholder="Enter product_name"
                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
             {formik.touched.product_name&&formik?.errors?.product_name?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.product_name}</p>:""}
            </div>
          </div>
          <div>
            <label
              htmlFor="style"
              className="block text-sm font-semibold leading-6  text-indigo-500"
            >
              Style.*
            </label>
            <div className="mt-2.5">
              <input
                id="style"
                name="style"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.style}
                onBlur={formik.handleBlur}
                placeholder="Enter article no"
                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
             {formik.touched.style&&formik?.errors?.style?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.style}</p>:""}
            </div>
          </div>
          <div>
            <label
              htmlFor="colour"
              className="block text-sm font-semibold leading-6 text-indigo-500"
            >
              Colour*
            </label>
            <div className="mt-2.5">
              <input
                id="colour"
                name="colour"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.colour}
                onBlur={formik.handleBlur}
                placeholder="Enter color"
                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
             {formik.touched.colour&&formik?.errors?.colour?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.colour}</p>:""}
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold leading-6  text-indigo-500"
            >
              Price*
            </label>
            <div className="mt-2.5">
              <input
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.price}
                onBlur={formik.handleBlur}
                placeholder="Enter price"
                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
             {formik.touched.price&&formik?.errors?.price?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.price}</p>:""}
            </div>
          </div>
          <div>
            <label
              htmlFor="origin"
              className="block text-sm font-semibold leading-6 text-indigo-500"
            >
              Origin*
            </label>
            <div className="mt-2.5">
              <input
                id="origin"
                name="origin"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.origin}
                onBlur={formik.handleBlur}
                placeholder="Enter origin country"
                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
             {formik.touched.origin&&formik?.errors?.origin?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.origin}</p>:""}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="details"
              className="block text-sm font-semibold leading-6 text-indigo-500"
            >
              Discription*
            </label>
            <div className="mt-2.5">
              <textarea
                id="details"
                name="details"
                onChange={formik.handleChange}
                value={formik.values.details}
                onBlur={formik.handleBlur}
                placeholder="Product details"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            {formik.touched.details&&formik?.errors?.details?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.details}</p>:""}
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label
              htmlFor="product_img"
              className="block text-sm font-semibold leading-6 text-indigo-500"
            >
              Upload product image*
            </label>
            <div className="mt-2.5">
              <input
                id="product_img"
                name="product_img"
                type="file"
                // onChange={formik.handleChange}
                // value={formik.values.product_img}
                // onBlur={formik.handleBlur}
                 className="file-input file-input-bordered block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-end focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                 onChange={(event)=>{getBase64(event.target.files[0]).then(res=>{
                  // console.log(res);
                  formik.setFieldValue("product_img",res)
                }).catch(err=>console.log(err)
                )}
                }/>
            {/* {formik.touched.product_img&&formik?.errors?.product_img?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.product_img}</p>:""} */}
            </div>
          </div>

         
        </div>
        <div className="mt-10">
          <button
            type="submit"
             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
          
        </div>
       </form>
    </div>
  );
};

export default EditProduct;
