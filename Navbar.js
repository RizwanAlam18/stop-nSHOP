import React from 'react';
import {Link} from "react-router-dom";


const Navbar=()=>{
   
    function myfun(){
       
       var e=document.getElementById("list");
       if(e.className==="right"){
          e.className += " responsive";
          console.log("gfd");
       }
       else{
          e.className="right";
       }
    }

    return(
        <>
        <nav>
       
         <label><img className="logo" src="image/logo-1.png"></img></label>
         <div id="list" className="right">
         <ul>
            <li><Link class="active" to="/home">Home</Link></li>
            <li>
               <a href="#">Our Product
               <i class="fas fa-caret-down"></i>
               </a>
               <ul className="product">
                 
                  <li>
                     <a href="#">Organic Products
                     
                     </a>
                     <ul id="link">
                        <li><a href="Packagedfood">Packaged Food</a></li>
                         
                        <li><a href="BodyCare">Body Care</a></li>
                        <li><a href="#">item 3</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">Ayurvedic Products
                     
                     </a>
                     <ul id="link">
                        <li><a href="#">Links</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Status</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">Health Kits
                     
                     </a>
                     <ul id="link">
                        <li><a href="#">Covid Products</a></li>
                        <li><a href="#">Consumable & Disposable</a></li>
                        <li><a href="#">item3</a></li>
                     </ul>
                  </li>
               </ul>
            </li>
            <li>
            <Link to="/contact">Contact </Link>
            </li>
            <li><Link to="/sign">Sign In</Link></li>
           
         </ul>
         </div>
         <div className="otherli">
         <div class="searchBox">
        <input type="text" class="searchText"  placeholder="Type to Search.."/>
        <a href="#" class="searchBtn">
            <i class="fas fa-search"></i>

        </a>
    </div>
    </div>
    
            
            <Link to="/Cart"><i class="fas fa-shopping-cart"></i></Link>
           
             <div onClick={myfun} class="menu_bar">
			  	<img src="image/menu.png"/>
			 </div>
      </nav>

      
        </>
    )
}

export default Navbar;