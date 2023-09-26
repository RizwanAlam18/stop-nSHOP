import React from "react";

const Footer=()=>{
    return(
        <>
        <div className="footer">
     <div className="footer_data">
     <div className="corporate_office">
           <img src="image/logo-2.png"></img>
           <p>Boston Ivy Healthcare Solutions Pvt Ltd.
Technopolis Knowledge Park, C Wing, Ground Floor,Boston Ivy Healthcare Solutions Pvt Ltd.
Technopolis Knowledge Park, C Wing, Ground Floo Unit No. 17/18/19/21, Mahakali Caves Road, Opp. Ho</p>
        </div>
        <div className="links">
             <h2>Quick Links</h2>
             <ul class="foo-links">
             <i class="fas fa-chevron-right"></i> <li><a href="">Sitemap</a></li>
                      <i class="fas fa-chevron-right"></i>    <li><a  href="">About Us</a></li>
                      <i class="fas fa-chevron-right"></i>    <li><a href="">Privacy Policy</a></li>
                      <i class="fas fa-chevron-right"></i>    <li><a href="">CSR Policy</a></li>
                       <i class="fas fa-chevron-right"></i>   <li><a href="">Terms and Conditons</a></li>
                      <i class="fas fa-chevron-right"></i>    <li><a href="">Contact Us</a></li>
                      <i class="fas fa-chevron-right"></i>    <li><a href=""> Quality Certification</a></li>
                      
 
                       
                    </ul>
        </div>
       
        <div className="newsletter">
        <div className="level5">
           
           <h3>Follow Us On Social Media</h3>
           <a><i class="fab fa-instagram"></i></a>
           <a><i class="fab fa-twitter"></i></a>
           <a><i class="fab fa-facebook-f"></i></a>
           <a><i class="fab fa-google"></i></a>
          
          
        
        </div>
          <h3 class="subs">Subscribe to Our Newsletter</h3>
        
          <form>
                        <div className="formcontainernewsletter">
                            <input name="newsletter" id="newsletterfooter" placeholder="Enter Your Email" class="newsletter" type="text"/>
                            <a><i class="fas fa-paper-plane"></i></a>
                        </div>
                    </form>
        </div>
       
     </div>
     <div class="copyright">
          	<h3>©️ 2021  All Rights Reserved | Design By StartupAce</h3>
          </div>
  </div>
        </>
    )
}

export default Footer;