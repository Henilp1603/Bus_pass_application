import React, { useEffect, useState } from "react";
import "./finalresult.css"
import { useUserContext } from "../../contexts/UserContext";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useTransactionContext } from "../../contexts/Transactioncontext";

const FinalResultSection = () => {
  const navigate=useNavigate();

  const unique_id = uuidv4();
  const t_id = unique_id.slice(0,15)



  const {user,data}=useUserContext()
  const {Transaction_id,Transaction_time,Transsaction_status,dispatch}=useTransactionContext()
  const [transactionId, setTransactionId] = useState('');
  const [time,setTime]=useState('');
    // async function handelToken(token,addresses) {
    //   const response =await axios.post("http://localhost:4000/checkout",{token,data})
    //   console.log(response.status)

    //   if (response.status === 200) {
    //     toast("success Payment is completed",{type:'success'})
    //     navigate("/payment-success")

    //   }else{
    //     toast('Payment is not completed',{type:"error"})
    //   }
    // }

    let bus_pass_amunt=0;
    const id_card_amm=20;
    let total_price;

    if (data.passtype == "Student-pass" && data.gender == "male"){
          bus_pass_amunt=130
          total_price=bus_pass_amunt + id_card_amm
    }
    if (data.passtype == "Student-pass" && data.gender == "female") {
          bus_pass_amunt=20
          total_price=bus_pass_amunt + id_card_amm
    }
    if (data.passtype == "Passenger-pass" && data.gender == "male") {
         bus_pass_amunt=200
         total_price=bus_pass_amunt + id_card_amm
    }
    if (data.passtype == "Passenger-pass" && data.gender == "female") {
        bus_pass_amunt=50
        total_price=bus_pass_amunt + id_card_amm
    }



    const checkout = async() => {
      const url="http://localhost:4000/api/addTransData";

      const trans_data={
         name:data.name,
         total:total_price,
         status:"success"
       }
       
       
       try {
       const {res}=await axios.post(url,trans_data)
       console.log(res)
     } catch (error) {
       console.log(error)
     }

      fetch("http://localhost:4000/checkout", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        mode:"cors",
        body: JSON.stringify({
          items: [
            {id:1, price:total_price, name: "Basspass"}
          ]
        })
      })
      .then(res => {
        if (res.ok){
          
    
              
              setTransactionId(t_id)
              localStorage.setItem("_trans_id",t_id)
              dispatch({type:"SET_ID", payload:t_id})
              setTime( Date().toLocaleString())
              localStorage.setItem("_trans_time",Date().toLocaleString())
              dispatch({type:"SET_TIME", payload:time})
              localStorage.setItem("_status","SUCCESS")
              dispatch({type:"SET_STATUS", payload:"SUCCESS"})
              

          return res.json()
        } 
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url,e})=>{
        // e.preventDefault();
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })

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
              <button onClick={checkout} className="checkout">
                Payment
              </button>
               {/* <StripeCheckout
        className="checkout"
        stripeKey="pk_test_51NA8sGSEUqKGqQra0YNQi8epi0gpzM4dUXWH6DfvvcKsZVZWPAfO0DdDh3Tso23M4N3apLvRUypSrCXkydK82P2m00DScdWsBY"
        token={handelToken}
        amount={(id_card_amm+bus_pass_amunt)*100}
        name="bus pass"
        billingAddress
        shippingAddress
      />
      <ToastContainer /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalResultSection;
