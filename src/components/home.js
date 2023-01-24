import { useContext } from "react";
import { UsernameContext } from "../App";
import {Route , Routes , Link} from "react-router-dom";
function Home(props){
    const { username } = useContext(UsernameContext);
    
    return(
        <div className="" style={{color: "white"}}>
           <h1 style={{color: "white" , textShadow: "2px 2px 5px #39FF14 , -2px -2px 5px #FF3131"}}>WELCOME TO {props.platformName}</h1>
           <p>Website under construction...</p>
           <p>But here's some quiz: </p>
           <Link to="/learning/content" className="nav-item quiz-button">Go to Quiz</Link>
        </div>
    )
}

export default Home;