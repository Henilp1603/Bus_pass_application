import React from 'react'
import "./paymentsuccess.css"
import { Link } from 'react-router-dom'


const PaymentSuccessPage = () => {
  return (
    <div className='container'>
      <div className="card">
      <div className='i_div'>
        <i className="checkmark">✓</i>
      </div>
      <div className='succes_cont_div'>
        <h1 classNameName='success_text'>Success</h1> 
        <p classNameName='success_des'>We received your Payment successfully ;<br/> we'll be in touch shortly!</p>
      </div>
      <Link to='/'>
        <button className='signin-button btn btn-lg bt'>Go to Home</button>
      </Link>
      </div>
    </div>
  )
}

export default PaymentSuccessPage
