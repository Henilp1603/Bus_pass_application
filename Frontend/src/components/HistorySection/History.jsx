import React, { useEffect, useState } from 'react'
import "./history.css"
import { useUserContext } from "../../contexts/UserContext";
import { useTransactionContext } from '../../contexts/Transactioncontext';
import axios from 'axios';


const History = () => {
    const {user,dispatch,data}=useUserContext()

    const [transData,setTransData]=useState([])

    const fun = async()=>{
       const res= await axios.get("http://localhost:4000/api/getAllData")
       const t_data=await res.data
        setTransData(t_data)
       console.log("t",t_data)
     }
    useEffect(()=>{

      fun()
      
    },[])
    

    


    

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

  if (transData.length ===0) {

    return(
      <div className='Container empty-cart'>No Transaction History Available.</div>
    )
    
  }

  return (
    <div>
      
      <section className="cartSection">
        <div className="Container">
          <div className="cart">
            <div className="top">
              <div className='hi_text_div'>

              <h2 className='hi_text'>Buss Pass History</h2>
              </div>
              <h2 id="items"> </h2>
            </div>
            <table className='final_table'>
              <tr className="table-head">
                <th width="300">Name</th>
                <th width="300">Transaction ID</th>
                <th width="300">Total Amount</th>
                <th width="300">Time and Date</th>
                <th width="300">Payment Status</th>

              </tr>
             {
              transData.map((item)=>(
                <tr>
                  <td className="nameTD">
                    <h2>{item.name}</h2>
                  </td>

                  <td className="nameTD">
                    <h2>{item._id}</h2>
                  </td>
                  <td className="priceTD">
                    <div className="Quantity">
                      <h2>{item.total}</h2>
                    </div>
                  </td>
                  <td className="priceTD">
                    <h2>{item.createdAt}</h2>
                  </td>

                  <td className="deleteTD">
                    <h2>{item.status}</h2>
                  </td>
                </tr>
              ))
             }
                
              
            </table>
          
          </div>
         
        </div>
      </section>
    </div>
  )
}

export default History
