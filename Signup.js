import {React,useState} from "react";

import "./style.css";


const Signup=()=>{
   const [user,setuser]=useState({
     name:"",
     email:"",
     password:""
   });


   let name,value;
   const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setuser({...user,[name]:value});
   } 

   const postData=async (e)=>{
      e.preventDefault();
      
      const{name,email,password}=user;

      const res=await fetch("/register",{
         method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         body:JSON.stringify({
            name,email,password
         })
      });

      const data=await res.json();
      if(data.status==422 || !data){
         window.alert("registration failed");
         console.log("registration failed");

      }
      else{
         window.alert("registration successfull");
         console.log("registration failed");
         // history.push("/")
      }

   }
    return(
        <>
       

        

        <div class="container-form-signup">
        <div class="right_img">
        <div class="left_stop">
               <h1>Welcome to stopNshop !</h1>
               
               <p>To keep connected with us please login with your personal info</p>
               <div class="left_form_details">
                       <a href="/sign"><input id="login" type="submit" value="LOG IN"></input></a>
                    </div>
            </div>
           
            </div>
        <div class="right_form">
              <div class="right_form_head">
              <h1>Sign up</h1>
              <p>Enter your personal details and start journey with us</p>
              <div class="social_form">
              <a><i class="fab fa-twitter"></i></a>
               <a><i class="fab fa-facebook-f"></i></a>
               <a><i class="fab fa-google"></i></a>
              </div>
              <p class="sign_p">or use your account</p>
             </div> 
             <div class="right_form_text">
                <form method="POST">
                    <div class="right_form_details">
                       <input type="text" placeholder="Enter Name" name="name" value={user.name}
                       onChange={handleInputs}
                       ></input>
                    </div>
                    <div class="right_form_details">
                       <input type="email" placeholder="Enter Email" name="email" value={user.email}
                       onChange={handleInputs}
                       ></input>
                    </div>
                    <div class="right_form_details">
                       <input type="password" placeholder="Enter Password" name="password" value={user.password}
                       onChange={handleInputs}
                       ></input>
                    </div>
                    
                    <div class="right_form_details">
                       <input type="submit" value="register" onClick={postData}></input>
                    </div>
                </form>
                <p id="sign_hidden">Already Have an account?<a href="/sign">SignIn</a></p>
             </div>
            
              </div>
              
             
        </div>
       
        </>
    )
}
export default Signup;