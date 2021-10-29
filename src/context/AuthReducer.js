const AuthReducer=(state,action)=>{
        switch (action.type) {
            case "LOGIN_START":
                return {
                    user:null,
                    isFetching:true,
                    error:false
                }
            case "LOGIN_SUCCESS":
                console.log(action.payload)
                return {
                    user:action.payload,
                    isFetching:false,
                    error:false
                }
            case "LOGIN_FAILURE":
                return {
                    user:null,
                    isFetching:false,
                    error:action.payload
                }
            case "Follow":
                console.log(action.payload)
                return {
                   ...state,
                   user:{
                       ...state.user,
                       following:[...state.user.following,action.payload]
                   }
                }
            case "Unfollow":
                console.log(action.payload)
                return {
                   ...state,
                   user:{
                       ...state.user,
                       following:state.user.following.filter((following)=>following !== action.payload)
                   }
                }
                
            default:return state
                
        }
}
export default AuthReducer;