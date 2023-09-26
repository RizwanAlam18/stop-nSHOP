import React,{useEffect, useState,useRef} from 'react';
import emailjs from 'emailjs-com';

import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./style.css";

const Order=()=>{
     let history=useHistory();
     const click=(event)=>{
        // event.preventDefault();
         history.push("/Placed");
     }
    


     const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_xveb7p3', 'template_4chh9ub', e.target, 'XMSJBlQxeycOfPjDM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error);
          });
     }
        return(
            <>
            <Navbar/>
            <h1 class="order">CHECKING OUT PRODUCTS</h1>
            <form onSubmit={sendEmail}>
            <div class="form">
                <div class="order2">
                <input type="text" required placeholder="First Name" name="name"></input>
                <input type="text" required placeholder="Last Name"></input>
                <input type="email" required placeholder="Email" name="useremail"></input>
                <input type="text" required placeholder="Address"></input>
                <input type="text" placeholder="Address 2 (OPTIONAL)"></input>
                <input type="number" required placeholder="Phone Number"></input>
                <input type="text" required placeholder="State"></input>
                <input type="text" required placeholder="Zip(Postal Code)"></input>
                <input type="text" required placeholder="City"></input>

                {/* <button type="button" class="cod">CASH ON DELIVERY</button> */}
                <a onClick={click}><button type="submit" class="pod" value="PLACE ORDER "></button></a>
                </div>
                </div>
            </form>
           </> 
          )
       
    
}

export default Order;