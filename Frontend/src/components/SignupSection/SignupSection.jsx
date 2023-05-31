import React, { useState } from 'react'
import "./SignupSection.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignupSection = () => {

  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const navigate=useNavigate();



  const getData=(e)=>{
    const {value,name}=e.target;
    
    setData(()=>{
      return{
        ...data,
        [name]:value
      }
    })
  }

  const addData=async(e)=>{
    e.preventDefault();

    const url="http://localhost:4000/api/user/register";
    try {
      const {data:res}=await axios.post(url,data)
      console.log(res)
      navigate("/signin");

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
       <section className=" signinsec">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 cont">
              
              <form>
                <div className="sign_in fw-bolder">SIGN UP</div>
                <hr />

                <div className="form mb-4">
                  <label className="form-label lab" for="form3Example3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg inp"
                    placeholder="Enter a valid Name"
                    name="name"
                    onChange={getData}
                  />
                </div>

                <div className="form mb-4">
                  <label className="form-label lab" for="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg inp"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={getData}
                  />
                </div>

                <div className="form mb-3">
                  <label className="form-label lab" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg inp"
                    placeholder="Enter password"
                    autoComplete="off"
                    name="password"
                    onChange={getData}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input  "
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    
                  </div>
                  
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="signin-button btn btn-lg bt"
                    onClick={addData}
                  >
                    Sign Up
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    
                    Already have an account?
                    <Link to="/signin" className="link_si fw-bolder">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
              <div className="col-md-9 col-lg-6 col-xl-5 img_con">
                <img
                  src="/img/si.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default SignupSection
