import React, { useState } from "react";
import "./passfrom.css";
import axios from "axios";
import FinalResultSection from "../FinalResultSection/FinalResultSection";
import { renderMatches, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const PassFrom = () => {

  const navigate=useNavigate();
  const {user,dispatch,addDataa}=useUserContext()



  const [data,setData]=useState({
    name:"",
    age:"",
    occupation:"",
    category:"",
    education:"",
    address:"",
    gender:"",
    passtype:"",
    fromplace:"",
    toplace:"",
    nod:"",
    fromdate:"",
    todate:"",
  })

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

    const url="http://localhost:4000/api/addData";
    try {
      const {data:res}=await axios.post(url,data)
      console.log(res)

      addDataa(data)

    } catch (error) {
      console.log(error)
    }

    navigate("/pass-from")

  }


  return (
    <div>
      <section className="signinsec">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-9 col-lg-8 col-xl-4 offset-xl-1">
              <form>
                <div className="sign_in fw-bolder text-center">
                  Bus Pass Application
                </div>
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
                    required
                  />
                </div>

                <div className="form mb-4">
                  <label className="form-label lab" for="form3Example3">
                    Age
                  </label>
                  <input
                    type="number"
                    id="form3Example3"
                    className="form-control form-control-lg inp"
                    placeholder="Enter a Age"
                    name="age"
                    onChange={getData}
                    required
                  />
                </div>

                <div className="form mb-4">
                  <label className="form-label lab" for="form3Example4">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg inp"
                    placeholder="Enter your occupation"
                    autoComplete="off"
                    name="occupation"
                    onChange={getData}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      Category
                    </label>

                    <select name="category" id="form3Example4" className="select_cate"  onChange={getData} >
                      <option>Category</option>
                      <option value="General">General</option>
                      <option value="ST">ST</option>
                      <option value="SCBC">SCBC</option>
                      <option value="SC">SC</option>
                    </select>
                  </div>

                  <div className="form mb-4 edu_div">
                    <label className="form-label lab" for="form3Example4">
                      Education
                    </label>

                    <select name="education" id="form3Example4" className="select_cate"  onChange={getData} >
                      <option>Education</option>
                      <option value="SSLC">SSLC</option>
                      <option value="Inter">Inter</option>
                      <option value="Degree">Degree</option>
                      <option value="Post-Grad">Post Grad</option>
                      <option value="PHD">PHD</option>
                    </select>
                  </div>
                </div>

                <div className="addres">
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      Address
                    </label>
                    <textarea
                      name="address"
                      id="form3Example4"
                      rows="3"
                      cols="50"
                      className="adds_text"
                      onChange={getData}
                      required
                    ></textarea>
                  </div>
                </div>

      

                 <div className="place_sec d-flex justify-content-between w-100">
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      Gender
                    </label>

                    <select name="gender" id="form3Example4" className="select_cate type-sec w-100"  onChange={getData} required >
                    <option>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="form mb-4">
                   <label className="form-label lab" for="form3Example4">
                      Pass Type
                    </label>

                    <select name="passtype" id="form3Example4" className="select_cate type-sec w-100"  onChange={getData} required >
                    <option>Select Pass Type</option>
                      <option value="Student-pass">Student Pass</option>
                      <option value="Passenger-pass">Passenger Pass </option>
                    </select>
                  </div>
                </div>

                <div className="place_sec d-flex justify-content-between w-100">
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      From Place
                    </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control form-control-lg inp w-100 "
                      autoComplete="off"
                      name="fromplace"
                      onChange={getData}
                    />
                  </div>
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      To Place
                    </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control form-control-lg inp w-100  "
                      autoComplete="off"
                      name="toplace"
                      onChange={getData}
                    />
                  </div>
                </div>

                <div className="dur_sec mb-4">
                  <label className="form-label lab" for="form3Example4">
                    No. of Days
                  </label>
                  <input
                    type="number"
                    id="form3Example4"
                    className="form-control form-control-lg inp"
                    autoComplete="off"
                    name="nod"
                    onChange={getData}
                  />
                </div>

                <div className="date_sec d-flex justify-content-between">
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      From Date
                    </label>
                    <input
                      type="date"
                      id="form3Example4"
                      className="form-control form-control-lg inp"
                      autoComplete="off"
                      name="fromdate"
                      onChange={getData}
                    />
                  </div>
                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example4">
                      To Date
                    </label>
                    <input
                      type="date"
                      id="form3Example4"
                      className="form-control form-control-lg inp "
                      autoComplete="off"
                      name="todate"
                      onChange={getData}
                    />
                  </div>
                </div>
                

                <div className="text-center text-lg-start mt-4 pt-2 d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="signin-button btn btn-lg bt w-100 "
                    onClick={addData}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PassFrom;
