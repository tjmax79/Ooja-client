import{Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa";
import axios from "axios"
import { AppContext } from "../../contexts/AppContext";
import {toast} from "react-toastify";




const Login = ()=>{
    const [see, setSee] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const {dispatch} = useContext(AppContext)
    const history = useNavigate()

    const handleSubmit = async (e)=>{

        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {email,password});
            console.log(res.data)

            toast.success("Login successful👌")
            dispatch({type:"LOGIN", payload:res.data})
            history("/")
        }catch (error) {
            console.log(error)
            toast.error(error.response.data.message||error.response.data.error || "An error ocurred")
        }finally{
            setLoading(false)
        }
    };

    return ( 
        <>
        <div className="w-20 flex relative"  >
        <img src="/svgs/buy.svg" />
        <p className="font-serif text-5xl z-50 ">Ooja</p>
        </div>
        
       
        <div className="flex flex-col justify-center items-center py-10 min-h-fit">
            <form 
            onSubmit={handleSubmit}
            className="border rounded-xl border-pink-300 p-5 bg-pink-100 shadow-2xl"  >
                <div className="font-serif"><h2>LOGIN</h2></div>
                <p>Welcome to <span className="text-red-700 font-iceberg font-extrabold">Ooja,</span>where you will get your market experience.<br></br>Please enter your login details and enjoy the experience of your own choice.</p>
                <div className="flex flex-col justify-center items-center p-10">
                <div className="flex flex-col justify-center items-center">
                <label htmlFor="email" className="font-iceberg m-5">Email:</label>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                type="email" id="email" name="email" placeholder="enter mail" className="border text-center font-iceberg"/>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                <label htmlFor="password" className=" font-iceberg ">Password:</label>
                <input 
                  onChange={(e) => setPassword(e.target.value)} type ={see? "text":"password"}
                id="password" name="password" placeholder="enter password" className="text-center font-iceberg border"/>
                
                <button
                type= "button"
                onClick={()=>setSee(!see)}
                className="text-secondary text-xl"
                >
                     {see? <FaRegEye/>: <FaRegEyeSlash/>} 
                </button>
                <button disabled={loading} type="submit" className={`${loading && "cursor"}`}>{loading? "loading..." : "login"}</button>
                </div>
                <button className="bg-pink-400 rounded-md w-20 p-2 border m-5 shadow border-neutral-950 hover:font-extrabold hover:transition-all hover: ">LOG IN</button>
                <p>Dont have an account? <Link to='/register'>Register</Link></p>
                
                </div>
                
            </form>
        </div>
        </> 
    );

    }

export default  Login;