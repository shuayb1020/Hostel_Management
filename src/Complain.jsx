import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Complain = () => {
    const [strtDate,setStrtDate] = useState('');
    const [reprtDate,setReprtDate] = useState('');
    const [category,setCategory] = useState('');
    const [subject,setSubject] = useState('');
    const [description,setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const complain = { strtDate, reprtDate, category,subject,description };
        setIsPending(true);
  
       fetch('http://localhost:8000/complain', {
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(complain)
       }).then(()=>{
        setIsPending(false);
        navigate('/Summary');
       })
      }
    return ( 
        <div className="complain">
            <h2>Log a New Complain</h2>
            <form onSubmit={handleSubmit}>
                <label>sart date:</label>
                <input
                  type="date"
                  required
                  value={strtDate}
                  onChange={(e)=>setStrtDate(e.target.value)}
                />
                <label>report date:</label>
                <input
                  type="date"
                  required
                  value={reprtDate}
                  onChange={(e)=>setReprtDate(e.target.value)}
                />
                <label>Category:</label>
                <select  
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                >
                    <option value="Electrical Appliances" >Electrical Appliances</option>
                    <option value="Plumbing" >Plumbing</option>
                    <option value="Furnitures" >Furnitures</option>
                </select>
                <label>Subject:</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                />
                 <label>Description:</label>
                <textarea
                required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                ></textarea>
                
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Processing...</button>}

            </form>
        </div>
     );
}
 
export default Complain;