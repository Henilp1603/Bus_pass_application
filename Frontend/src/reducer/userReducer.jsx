const userReducer=(state,action)=>{

    if (action.type === "USER") {
        
        return {
            ...state,
            user:action.payload
        }
        
    }

    if (action.type === "ADD_DATA") {
        
        return {
            ...state,
            data:action.payload
        }
        
    }
  
      return state;
  
}

export default userReducer;
