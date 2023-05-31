import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducer/userReducer"

const Usercontext=createContext()


const initialState={
    user:false,
    data:{}
}

const UserProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);


    const addDataa=(singleData)=>{
    
        dispatch({type:"ADD_DATA", payload:singleData})  
};
   
    return <Usercontext.Provider value={{...state,dispatch,addDataa}} >{children}</Usercontext.Provider>
}


const useUserContext =()=>{
    return useContext(Usercontext);
};

export {UserProvider,Usercontext,useUserContext}