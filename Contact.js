import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact=()=>{
    return(
        <>
        <Navbar/>
        
        
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234447.11326020386!2d85.18123822131422!3d23.343457743750953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1624263542519!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div className="contact">
         <div class="contact_head">
           <h1>Contact Us</h1>
           
         </div>
         <div class="contact_text">
         <div className="left">
            <div className="details">
                <h1>CONTACT INFO</h1>
            </div>
            <div className="level1">
               <h2>Email</h2>
               <p>abc@gmail.com</p>
            </div>
            <div className="level2">
            
               <h2>Mobile Number</h2>
               <p>+91-123456789</p>
               </div>
            
            <div className="level3">
           
               <h2>Social Media</h2>
               <a><i class="fab fa-instagram"></i></a>
               <a><i class="fab fa-twitter"></i></a>
               <a><i class="fab fa-facebook-f"></i></a>
               <a><i class="fab fa-google"></i></a>
            
            </div>
           
           
            <div className="level4">
            <h2>Corporate Office</h2>
            <p>Boston Ivy Healthcare Solutions Pvt Ltd.
Technopolis Knowledge Park Unit No. 17/18/19/21, C wing, Ground floor, Mahakali Caves Rd, Opp Holy Family High School, Andheri East, Mumbai, Maharashtra 400093</p>

            </div>
         </div>
           <div className="right">
           <div className="details">
               <h1>Send us a Message</h1>
               
               </div>
           <form>
               <div className="details">
               <h3>Full Name:</h3>
                 <input type="text" placeholder="Enter Name" name="name"></input>
               </div>
               <div className="details">
               
               
               <h3>Contact No.:</h3>
                 <input type="Number" placeholder="Enter Mobile No." name="phone"></input>
               </div>
               <div className="details">
               <h3>Email:</h3>
                 <input type="email" placeholder="Enter email" name="email"></input>
               </div>
               <div className="details">
               <h3>Message:</h3>
               <textarea  name="message" rows="6" cols="90"/>
               </div>
               <div className="details">
                  <button className="btn" type="submit">Send Message</button>
               </div>
           </form>
         </div>
           </div>
           
        </div>


        <Footer/>
        
        </>
    )
}

export default Contact;