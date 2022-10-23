import React, { useState } from 'react'
import {Link,useNavigate,useLocation,Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Login = () => {
    const [userForm,setUserForm] = useState({
        email:'',
        password:''
    })
    const {LoginHandler,user} = useAuth()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await LoginHandler(userForm.email,userForm.password)
    }

    // guest login
    const HandleLogin=() =>{
        setUserForm((form)=>({
          ...form,
          email: "testing@test.com",
          password: "tester09",
        }));
    }

    if (user) {
        return <Navigate to={from || "/"} replace />;
    }
  return (
    <div>
        <form className='max-w-sm px-2 py-6  bg-white  rounded-md flex flex-col
         justify-center items-center gap-4 md:w-96' onSubmit={ handleSubmit}>
            <h1 className="text-3xl text-gray-600 font-display">Log In</h1>         
            <div className="flex flex-col text-sm text-gray-500 w-10/12 ">
                <label className='font-display'>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="p-2 outline outline-1" value={userForm.email}
                onChange={(e)=>setUserForm((form)=>({...form,email:e.target.value}))} required />
            </div>
            <div className="flex flex-col text-sm text-gray-500 w-10/12 ">
                <label className='font-display'>Password</label>
                <input type="password" className="p-2 outline outline-1" value={userForm.password}
                onChange={(e)=>setUserForm((form)=>({...form,password:e.target.value}))} required />
            </div>
            <button type='submit' className="p-1.5 w-10/12  rounded border-none bg-gray-600 hover:bg-primary-dark">Login</button>
            <button className="p-1.5 w-10/12  rounded border-none bg-pista hover:bg-pista-dark" onClick={()=>HandleLogin()}>Guest Login</button>
            <p>Don't have an account ?&nbsp;
                <Link to='/signup' className="text-primary-dark hover:text-pista-dark">
                    SignUp</Link>
            </p>
        </form>
    </div>
  )
}
