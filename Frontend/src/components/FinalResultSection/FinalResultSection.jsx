import React from "react";
import "./finalresult.css"
import { useUserContext } from "../../contexts/UserContext";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const FinalResultSection = () => {
  const navigate=useNavigate();



  const {user,dispatch,data}=useUserContext()
    async function handelToken(token,addresses) {
      const response =await axios.post("http://localhost:4000/checkout",{token,data})
      console.log(response.status)

      if (response.status === 200) {
        toast("success Payment is completed",{type:'success'})
        navigate("/payment-success")

      }else{
        toast('Payment is not completed',{type:"error"})
      }
    }


    let bus_pass_amunt=0;
    const id_card_amm=20;

    if (data.passtype == "Student-pass" && data.gender == "male"){
          bus_pass_amunt=130
    }
    if (data.passtype == "Student-pass" && data.gender == "female") {
          bus_pass_amunt=20
    }
    if (data.passtype == "Passenger-pass" && data.gender == "male") {
         bus_pass_amunt=200
    }
    if (data.passtype == "Passenger-pass" && data.gender == "female") {
        bus_pass_amunt=50
    }


  return (
    <div>
      <section className="cartSection">
        <div className="Container">
          <div className="cart">
            <div className="top">
              <h2>Buss Pass Summary</h2>
              <h2 id="items"> {data.name}</h2>
            </div>
            <table cellPadding="0">
              <tr className="table-head">
                <th width="200">Name</th>
                <th width="200">Pass-type</th>
                <th width="300">ID Card Amount</th>
                <th width="300">Bus Pass Amount</th>
              </tr>
             
                <tr>
                  <td className="nameTD">
                    <h2>{data.name}</h2>
                  </td>
                  <td className="priceTD">
                    <div className="Quantity">
                      <h2>{data.passtype}</h2>
                    </div>
                  </td>
                  <td className="priceTD">
                    <h2>{id_card_amm}</h2>
                  </td>

                  <td className="deleteTD">
                    <h2>{bus_pass_amunt}</h2>
                  </td>
                </tr>
              
            </table>
          
          </div>
          <div className="summary">
            <div className="top">
              <h2>Final Summary</h2>
            </div>
            <div className="details">
              <h2 id="itemB"> Total</h2>
              <h2 id="totalA">{id_card_amm + bus_pass_amunt}</h2>
            </div>
            <div className="detailA">
              <h2>Payment Type</h2>
              {/* <input type="text" placeholder="Select Payment Type" /> */}
                <div className="form mb-4" >

                    <select name="category" id="form3Example4" className="select_pay" >
                      <option>Select Payment Type</option>
                      <option>Credit Card</option>
                      <option>Debit Card</option>
                    </select>
                </div>
            </div>
            <div class="hline"></div>
            <div className="top">
              <h2>Total</h2>
              <h2>{id_card_amm + bus_pass_amunt}</h2>
            </div>
            <div className="checkoutdiv">
              {/* <button className="checkout">
                Payment
              </button> */}
               <StripeCheckout
        className="checkout"
        stripeKey="pk_test_51NA8sGSEUqKGqQra0YNQi8epi0gpzM4dUXWH6DfvvcKsZVZWPAfO0DdDh3Tso23M4N3apLvRUypSrCXkydK82P2m00DScdWsBY"
        token={handelToken}
        amount={(id_card_amm+bus_pass_amunt)*100}
        name="bus pass"
        billingAddress
        shippingAddress
      />
      <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalResultSection;
