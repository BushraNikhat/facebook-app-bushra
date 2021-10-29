import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";





const Initial_State = {
  user: {
    _id:"60c9f9c152bf9c19106f48d0",
    profilePicture:"/person/2.jpg",
    coverPicture:"",
    followers:[],
  following:[],
    isAdmin:false,
    name:"Bushra Nikhat",
    desc:"Love you till my last breathe",
    email:"bushranik6@gmail.com",
    password:"$2b$10$CQw6HVnUUhIu1KUHA5DA3.2Y1Z5DjPsuaKFqYq/DDeXwYH/6ep5h2",
    city:"Ranchi",
    from:"Jharkhand",
    relationship:2,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(Initial_State);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, Initial_State);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
       
    >
         {children}
    </AuthContext.Provider>
  );
};
