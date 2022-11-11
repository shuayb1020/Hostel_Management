import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
   
  const { register, handleSubmit} = useForm();
  const onSubmit = data => {
    data.email_adddress = data.email
    delete data.email
    console.log(data)

    setIsPending(true);

   fetch('http://localhost:8000/info', {
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body: JSON.stringify(data)
   }).then(()=>{
    localStorage.setItem('email', data.email_adddress)
    setIsPending(false);
    navigate('/Home',data);
   })

  
  }

  
    return ( 
        <div className="registration">
        <h2>Registration Page</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:</label>
            <input
              type="text"
              required
              // value={surName}
              // onChange={(e)=>setSurName(e.target.value)}
              {...register("firstName")}
             
            />
             <label>Last Name:</label>
             <input
              type="text"
              required
              // value={otherNames}
              // onChange={(e)=>setOtherNames(e.target.value)}
              {...register("lastName")}

             
            />
            <label>Email:</label>
            <input
              type="email"
              required
              // value={email}
              // onChange={(e)=>setEmail(e.target.value)}
              {...register("email")}

             
            />
            <label>Matric No:</label>
            <input
              type="text"
              required
              // value={matric}
              // onChange={(e)=>setMatric(e.target.value)}
              {...register("matricNo")}

              
             
            />
            <label>Password:</label>
            <input
              type="password"
              required
              // value={password}
              // onChange={(e)=>setPassword(e.target.value)}
              {...register("password")}

            />
            <label>Program:</label>
            <input
              type="text"
              required
              // value={password}
              // onChange={(e)=>setPassword(e.target.value)}
              {...register("program")}

            />

            <label>Level:</label>
            <select 
              required
              {...register("level")}
              >
                    <option value="Part 1" >Part 1</option>
                    <option value="Part 2" >Part 2</option>
                    <option value="Part 3" >Part 3</option>
                    <option value="Part 4" >Part 4</option>
                    <option value="Part 5" >Part 5</option>
                </select>

              <label>Block:</label>
              <input
              type="text"
              required
              // value={password}
              // onChange={(e)=>setPassword(e.target.value)}
              {...register("block")}

            />
            <label>Room:</label>
            <input
              type="text"
              required
              // value={password}
              // onChange={(e)=>setPassword(e.target.value)}
              {...register("room")}

            />
            <label>Bed Space:</label>
            <input
              type="text"
              required
              // value={password}
              // onChange={(e)=>setPassword(e.target.value)}
              {...register("bed")}

            />
           {!isPending && <button type="submit" >Submit</button>}
           {isPending && <button disabled>Processing...</button>}
            
        </form>
    </div>
     );
}
 
export default Registration;