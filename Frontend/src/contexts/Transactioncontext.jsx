import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducer/transactionReducer"

const Transactioncontext=createContext()


const initialState={
    
    Transaction_id:"",
    Transaction_time:"",
    Transsaction_status:""
}

const TransactionProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);


    
   
    return <Transactioncontext.Provider value={{...state,dispatch}} >{children}</Transactioncontext.Provider>
}


const useTransactionContext =()=>{
    return useContext(Transactioncontext);
};

export {TransactionProvider,Transactioncontext,useTransactionContext}