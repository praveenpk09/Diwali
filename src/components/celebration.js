import React, { useEffect } from "react";
import lam from "../images/lam.gif"
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



const Celebration=()=>{
    const {id} =useParams()
    const pageUrl = window.location.href
    const message = `Hi Iam ${id} this is my diwali greetings`
    const whatsapp =`https://wa.me/?text=${pageUrl} . ${message}`
    const handleSubmit=()=>{
        window.open(whatsapp)
    }
    return(
    <div className="row gif" >
        <div className="col-md-12">
            <img src={lam} width='200px' height='200px'></img>
        </div>
        <div className="col-md-12">
            <h1 className="white"><i>HAPPY DIWALI MY FRIENDS AND FAMILY<br/>BY <br/><u>{id}</u></i></h1>
           <h4 className="black flex1 width1 mr mt">Share it on <i class="fa-brands fa-square-whatsapp  black fa-2xl width" onClick={handleSubmit} ></i></h4>
           <Link to={'/'}>
           <h4 className=" black flex1 width2">For New Greetings <i class="fa-solid fa-house black width11 fa-xl"></i></h4>
</Link>
           
        </div>
    </div>
)
}
export default Celebration 