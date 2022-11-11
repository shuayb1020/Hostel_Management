import useFetch from "../useFetch";
import ComplainList from "../complainList";


const Summary = () => {
    const {data,isPending,error} = useFetch('http://localhost:8000/complain')
        
    return (
        <div className="summary">
            {error && <div>{error}</div> }
            {isPending && <div className="load">Loading...</div>}
            {data && <ComplainList complain={data} title="All Complaints"/>}
        </div>
     );
}
 
export default Summary;