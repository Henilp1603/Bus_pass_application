import bodyParser from "body-parser";
import express from "express"
import dbconnect from "./config/dbconnect.js";
import userRoute from "./routes/userRoute.js"
import dataRoute from "./routes/dataRoute.js"
import transRoute from "./routes/transRoute.js"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import Stripe from "stripe";
import { v4 as uuidv4 } from 'uuid';




dotenv.config();

const port=process.env.PORT ||4000;

const app=express();

dbconnect()
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
        })




app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/api/user",userRoute);
app.use("/api",dataRoute);
app.use("/api",transRoute);


const stripe = new Stripe('sk_test_51NA8sGSEUqKGqQrageYED1A3dS9qMLtknUo6bz98co6qH61xRYkdzIBjNgxMWDPf9PfCWlwwLUuVSrvZ15H6F5n700CzSnLMNC');


app.post("/checkout",async(req,res)=>{

    let error, status;
    //   try {
    //     const {token,data}=req.body

    //     const customer=await stripe.customers.create({
    //         email:token.email,
    //         source:token.id
    //     })

    //     const idempotencyKey =uuidv4()

    //     const charge = await stripe.charges.create({
    //         amount:120,
    //         currency:"usd",
    //         customer:customer.id,
    //         receipt_email:token.email,
    //         description:"desct",
    //         shipping:{
    //             name:token.card.name,
    //             address:{
    //                 line1:token.card.address_line1,
    //                 line2:token.card.address_line2,
    //                 city:token.card.address_city,
    //                 country:token.card.address_country,
    //                 postal_code:token.card.address_zip,
    //             },
    //         },
    //     },
    //     {
    //         idempotencyKey: idempotencyKey
    //     }
    //     );
    //     console.log("charge:",{charge});
    //     status="success";
        
    //   } catch (error) {
    //     console.log(error)
    //     status="failure"
    //   }
    //   res.json({error,status});

    try {
        const session =await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items:req.body.items.map(item => {
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:item.name
                        },
                        unit_amount:(item.price)*100,

                    },
                    quantity:1
                }

            }),
            success_url:"http://127.0.0.1:5173/payment-success",
            cancel_url:"http://127.0.0.1:5173/"
        })

        res.json({url:session.url})
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>{
    console.log(`server listening on ${port}`)
});