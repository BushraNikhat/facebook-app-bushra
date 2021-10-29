import axios from "axios"

export const  loginCall=async (userCredential,dispatch)=>{
    dispatch({type:"LOGIN_START"})
    try {
        const response=await axios.post("/auth/login",userCredential)
        console.log(response.data)
        dispatch({type:"LOGIN_SUCCESS",payload:response.data})
       
    } catch (error) {
       
        dispatch({type:"LOGIN_FAILURE",payload:error})
    }
}