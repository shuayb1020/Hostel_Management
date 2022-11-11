import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from './logo.png';
import { useState } from "react";

const Login = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate()
   

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        
        const userPassword = localStorage.getItem('password') 
        ? localStorage.getItem('password') : null
        console.log(userPassword)

        fetch('http://localhost:8000/info', {
            method:"GET",
            headers:{ "Content-Type":"application/json"},
           }).then(response => response.json(),
           localStorage.setItem('email', data.email_adddress))
           // 4. Setting *dogImage* to the image url that we received from the response above
       .then(data => {
        data.map(data=>(
            <>
        {console.log(data)}

            {data.password === userPassword ? setUserInfo(data) 
            : (alert('wrong'))}
            </>
            
        ))
        navigate('/Home',data);
       })
    }

    return ( 
        <div className="login">
            <center>  <img src ={logo} alt="logo" height={100} width={200} /></center>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label>Login ID:</label>
                <input
                type="text"
                required
                {...register("matric")}
                />
                <label>Password:</label>
                <input
                type="password"
                required
                {...register("password")}
                />
                <button>Login</button>
            </form>
        </div>
     );
}
 
export default Login;