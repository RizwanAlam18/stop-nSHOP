import React,{useEffect, useState,useRef} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./style.css";

const Sign=()=>{
     
    
        return(
            <>
            
           
          <section>
            <div class="container-form">
            <div class="left_img">
            <div class="left_stop">
               <h1>Hello, Friend !</h1>
               
               <p>Enter your personal details and start journey with us</p>
               <div class="right_form_details">
                       <a href="/signup"><input type="submit" value="SIGN UP"></input></a>
                    </div>
            </div>
            </div>
              <div class="left_form">
              <div class="left_form_head">
              <h1>Log in</h1>
              <p>To keep connected with us please login with your personal info</p>
              <div class="social_form">
              <a><i class="fab fa-twitter"></i></a>
               <a><i class="fab fa-facebook-f"></i></a>
               <a><i class="fab fa-google"></i></a>
              </div>
            
              <p class="sign_p">or use your account</p>
             </div> 
             <div class="left_form_text">
                <form>
                    <div class="left_form_details">
                       <input type="email" placeholder="Enter Email"></input>
                    </div>
                    <div class="left_form_details">
                       <input type="password" placeholder="Enter Password"></input>
                    </div>
                    <a ><p class="left_forget">Forgot Your Password ?</p></a>
                    <div class="left_form_details">
                       <input type="submit" value="LOG IN"></input>
                    </div>
                </form>
              <p id="sign_hidden">Don't Have an account?<a href="/signup">SignUp</a></p>
             </div>
           
              </div>
             
            </div>
            </section>
            </>
        )
        
        
       
    
}

export default Sign;