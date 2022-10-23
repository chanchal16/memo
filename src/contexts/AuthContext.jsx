import React,{useState,createContext,useContext} from 'react'
import { LoginUser } from '../services/auth';

const AuthContext = createContext();
// const initialState = {
//     user: null || JSON.parse(localStorage.getItem('user')),
//     error: "",
// }

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null || JSON.parse(localStorage.getItem('memousers')))
    const [error,setError] = useState('')

    const LoginHandler = async (email, password) => {
        if (email && password !== '' ) {
          try {
            const { data} = await LoginUser(email, password);
            const user = {
                token:data.encodedToken,
                user:data.foundUser
            }
              localStorage.setItem('memousers',JSON.stringify(user))
              setUser(user);
            }
           catch (error) {
            console.error("Error in while logging in", error);
            setError(error)
          }
        }
    };

    const SignUpHandler = async (name,email,password)=>{
        try{
          const {data} = await SignUpUser(name,email, password);
            const user = {
                token:data.encodedToken,
                user:data.createdUser
            }
            localStorage.setItem('memousers',JSON.stringify(user))
            setUser(user);
        }
        catch (err){
          console.error('error while creating user',err);
        }
    }

  return (
    <>
        <AuthContext.Provider value={{user,setUser,SignUpHandler,LoginHandler}}>
            {children}
        </AuthContext.Provider>
    </>
  )
}
const useAuth = ()=>useContext(AuthContext)
export {AuthContextProvider,useAuth}