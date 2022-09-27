import React,{useState} from "react";
import lamp from '../images/lamp1.png'
import crackers from '../images/crack1.gif'
import { Link } from 'react-router-dom';



const Home=()=>{
    const [input,setInput]=useState()
    return(
        <div className="back">
            <div className="row mr">
            <div className="col-md-12 flex">
        <img className="flex" src={lamp} width="150px" height="80px" />
            <h2 className="white">Share Your Greetings</h2>
        <img className="flex" src={lamp} width="150px" height="80px" />

</div>
<div className="col-md-12 flex mt">
    <h4 className="white mt1">Enter your name:</h4>
    <input type="text" value={input} name="name" onChange={(e)=> setInput(e.target.value)} placHolder="Enter your name"></input>    
</div>
<div className="col-md-12 mt1" >
<Link to={`/cele/${input}`}>
<button className="btn_color">Submit</button>
</Link>

</div>
<div className="col-md-12 flex mt">

    <img className="flex mt3" src={crackers} width="120%" height="100%" />
    </div>
       
            </div>
        </div>
    )

}
export default Home;
