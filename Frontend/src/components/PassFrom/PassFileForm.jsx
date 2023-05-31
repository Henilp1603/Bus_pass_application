import React from 'react'
import "./passfrom.css"
import { useNavigate } from 'react-router-dom';

const PassFileForm = () => {
  const navigate=useNavigate();

  const handleSubmit=()=>{
    navigate("/application-result")
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
                    Aadhar Card
                  </label>
                  <input
                    type="file"
                    id="form3Example3"
                    className="form-control form-control-lg inp"
                    placeholder="Enter a valid Name"
                    name="name"
                  />
                </div>

                <div className="form mb-4">
                  <label className="form-label lab" for="form3Example3">
                     Ration Card
                  </label>
                  <input
                    type="file"
                    id="form3Example3"
                    className="form-control form-control-lg inp"
                    placeholder="Enter a Age"
                    name="age"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2 d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="signin-button btn btn-lg bt w-100 "
                    onClick={handleSubmit}
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
  )
}

export default PassFileForm
