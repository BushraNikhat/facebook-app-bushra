import {useContext, useRef} from "react"
import "./login.css"
import { loginCall } from "../../loginCall"
import { AuthContext } from "../../context/AuthContext"
import {CircularProgress} from "@material-ui/core"

const Login = () => {
    const email=useRef()
    const password=useRef()
    const {isFetching,dispatch} =useContext(AuthContext)

const handleClick=(e)=>{
    e.preventDefault()
     loginCall({email:email.current.value,password:password.current.value},dispatch)
}

    return (
        <>
            <div className="loginConatiner">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Fakebook</h3>
                        <span className="logindesc">Connect with friends and world around you on Fakebook</span>
                    </div>
                    <div className="loginRight">
                            <form className="loginBox" onSubmit={handleClick}>
                                <input type="email" placeholder="Enter your email" required className="loginInput" ref={email}/>
                                <input type="password" placeholder="Enter your password" required minLength="6" className="loginInput" ref={password}/>
                                <button className="loginBtn" disabled={isFetching}>{isFetching ? <CircularProgress size="20px" style={{
                                color:"white"}}/> : "Login"}</button>
                                <span className="loginForgot">Forgot password?</span>
                                <button className="loginRegisterBtn"  disabled={isFetching}>{isFetching ? <CircularProgress size="20px" style={{
                                color:"white"}}/> : "Create a new account"}</button>
                            </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
