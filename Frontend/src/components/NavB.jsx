import React, { useEffect } from "react";
import './NAvB.css'
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import axios from "axios";

const NavB = () => {

  const {user,dispatch}=useUserContext()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("_user");
    if (loggedInUser) {
      
      dispatch({type:"USER",payload:true})
      
    }
  }, []);
 
  const navigate=useNavigate();

  
  const loogout=async()=>{
    localStorage.removeItem("_user")

    try {
      
      await axios.delete("http://localhost:4000/api/deleteAll")
    } catch (error) {
      console.log(error)
    }
   

      dispatch({type:"USER",payload:false})  

      navigate("/")

  }
  const RenderMenu=()=>{ 

    if (user) {
      return (
        <>
            <li>
              <Link to="/"><p>Home</p></Link>
            </li>
            <li>
              <Link to="/history"><p>History</p></Link>
            </li>
            <li>
              <Link to="/application"><p>From</p></Link>
            </li>
            
            <li>
              <Link to="" onClick={loogout} ><p>Logout</p></Link>
            </li>

        </>
      )
    }
    else{
      return(
        <>
           <li>
              <Link to="/"><p>Home</p></Link>
            </li>
            <li>
              <Link to="/signin"><p>Login</p></Link>
            </li>
            
            <li>
              <Link to="/signup"><p>Sign Up</p></Link>
            </li>    
        </>
      )
    }
  }
  return (
    <header>
      <div class=" container ">
        <Link to="/" class="logo">
          <span>B</span>us<span>P</span>ass
        </Link>

        <nav class="nav">
          <ul>
            <RenderMenu/>
          </ul>
        </nav>

        <div class="fas fa-bars"></div>
      </div>
    </header>
  );
};

export default NavB;
