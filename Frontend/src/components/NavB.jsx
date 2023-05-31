import React from "react";
import './NAvB.css'
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const NavB = () => {

  const {user,dispatch}=useUserContext()
 
  const navigate=useNavigate();

  const loogout=()=>{

    useEffect(()=>{
      dispatch({type:"USER",payload:false})  

      navigate("/")
  },[])
  }
  const RenderMenu=()=>{ 

    if (user) {
      return (
        <>
            <li>
              <Link to="/"><p>Home</p></Link>
            </li>
            <li>
              <Link to="/signup"><p>Contact</p></Link>
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
              <Link to="/contact"><p>Contact</p></Link>
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
