import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [userInfo, setUserInfo] = useState(null);
    


    useEffect(()=>{
        const userEmail = localStorage.getItem('email') 
        ? localStorage.getItem('email') : null
        

        fetch('http://localhost:8000/info', {
            method:"GET",
            headers:{ "Content-Type":"application/json"},
           }).then(response => response.json())
           // 4. Setting *dogImage* to the image url that we received from the response above
       .then(data => {
        data.map(data=>(
            <>
        {console.log(data)}

            {data.email_adddress === userEmail ?
            setUserInfo(data): setUserInfo(null)}
            </>
        ))
       })
    },[])
    

    console.log(userInfo);
    

        
      
    return ( 
    
        <div className="home">
           <nav className="navbar">
              <h1>Hostel System</h1>
              <div className="links">
                    <Link to ="/Home">Home</Link>
                    <Link  to ="/Complain">New complaint</Link>
                    <Link  to ="/Summary">Overview</Link>
                    <Link  to ="/Login">Logout</Link>
              </div>
           </nav>
           <div className="students-detail">
                <div className="dashboard">
                    <h3>Account Dashboard</h3>
                    <h2>{userInfo && userInfo.matricNo} </h2>
                    <h2>{userInfo && `${userInfo.lastName} ${userInfo.firstName}`}</h2>
                </div>
            <div className="container">
                <div className="inf">
                    <span> {userInfo && userInfo.level}</span><br/>
                    <span className="title"> Level </span>
                </div>
                <div className="inf">
                    <span> {userInfo && userInfo.program}</span><br/>
                    <span className="title"> Program </span>
                </div>
                <div className="inf">
                    <span> 2021/2022</span><br/>
                    <span className="title"> Current Session </span>
                </div>
                <div className="inf">
                    <span> {userInfo && userInfo.block} </span><br/>
                    <span className="title"> Block </span>
                </div>
                <div className="inf">
                    <span> {userInfo && userInfo.room}</span><br/>
                    <span className="title"> Current Room </span>
                </div>
                <div className="inf">
                    <span> {userInfo && userInfo.bed}</span><br/>
                    <span className="title"> Bed Space </span>
                </div>
            </div>
        </div>
           
    </div>
   
    );
}
 
export default Home;