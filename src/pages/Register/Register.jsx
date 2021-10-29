import { useRef } from "react"
import "../login/login.css"
import axios from "axios"
import {useHistory} from "react-router-dom";
const Register = () => {
    const name=useRef()
    const password=useRef()
    const confirmPassword=useRef()
    const email=useRef()
    const history=useHistory()

    const handleSubmit=async (e)=>{
        e.preventDefault()
        if( confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Password dosen't match.")
        }else{
            const user={
                name:name.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try {
                await axios.post("auth/register",user)
                history.push("/login")
                
            } catch (error) {
                console.log(error)
            }
        }
        
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
                            <form className="loginBox" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Enter your name" required className="loginInput" ref={name}/>
                                <input type="email" placeholder="Enter your email" required className="loginInput" ref={email}/>
                                <input type="password" placeholder="Enter your password" min="6" required className="loginInput" ref={password}/>
                                <input type="password" placeholder="confirm password" min="6" required className="loginInput" ref={confirmPassword}/>
                                <button className="loginBtn">Signup</button>
                                <button className="loginRegisterBtn">Login into account</button>
                            </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;