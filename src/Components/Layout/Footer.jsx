import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  let navigate=useNavigate()
  let isAdminLogged=window.sessionStorage.getItem('isAdminLogged')
  let a_id=window.sessionStorage.getItem('a_id')

 let dashBoardHandler=()=>{
  (isAdminLogged)?navigate('admindashboard/1'):navigate('adminlogin')
 }

  return (
    <div>
    <footer className="footer bg-base-200 text-base-content p-10">
    <aside>
    <img
              alt=""
              src="https://www.transparentpng.com/thumb/nike-logo/MmN5Kr-nike-logo-picture.png"
              className="h-11 w-auto"
            />
      <p>
        Nike Industries Ltd.
        <br />
        Providing reliable shoes since 1992
      </p>
    </aside>
    <nav>
      <h6 className="footer-title" >Admin</h6>
      <a className="link link-hover" onClick={dashBoardHandler}>Login</a>
      {/* <Link to='/adminlogin' className="link link-hover">Login</Link> */}
      {/* <Link to='/adminregistration' className="link link-hover">Registration</Link> */}
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  <footer className="footer footer-center bg-gray-600 text-base-content p-4  ">
  <aside>
    <p className='font-medium text-white'>Made with ❤️ by <span className='font-bold italic '>Suman</span> </p>
  </aside>
</footer>

</div>
  )
}

export default Footer