import React from "react";
import "./HomeSection.css";
import {Link} from "react-router-dom";
import {useUserContext} from "../../contexts/UserContext";

const HomeSection = () => {
  const RenderButton = () => {
    const {user} = useUserContext();

    if (!user) {
      return (
        <>
          <button className="button">learn more</button>
          <Link to="/signin">
            <button className="si_button  fw-bold p-2 ml-5">Sign-in</button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/application">
            <button className="button">Application From</button>
          </Link>
        </>
      );
    }
  };

  return (
    <div>
      <section className="home">
        <div className="container">
          <div className="row con">
            <div className="col-md-6">
              <img
                src="./img/Bus.jpg"
                className="homeImg"
                width="100%"
                alt="dgsdg"
              />
            </div>
            <div className="col-md-6 content">
              <h1 className="mainH">Now you can apply for Bus Pass</h1>
              <h3 className="secondH">Online Application From</h3>
              <RenderButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
