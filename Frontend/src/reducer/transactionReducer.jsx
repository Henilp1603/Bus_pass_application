const userReducer=(state,action)=>{

    if (action.type === "SET_ID") {
        
        return {
            ...state,
            Transaction_id:action.payload
        }
        
    }

    if (action.type === "SET_TIME") {
        
        return {
            ...state,
            Transaction_time:action.payload
        }
        
    }

    if (action.type === "SET_STATUS") {
        
        return {
            ...state,
            Transsaction_status:action.payload
        }
        
    }
  
      return state;
  
}

export default userReducer;
