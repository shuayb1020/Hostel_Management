

const ComplainList = ({complain,title}) => {
    return ( 
        <div className="complain-list">
            <h2> {title} </h2>
            {complain.map((complain) => (
                
            <div className="complain-preview" key={complain.id}>
                
                    <h2> { complain.subject } </h2>
                    <p> logged on {complain.reprtDate } </p>
                
                
            </div>


          ))}
        </div>
     );
}
 
export default ComplainList;