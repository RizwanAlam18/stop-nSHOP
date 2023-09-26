import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sells from "./Sells";
import "../style.css";
import { Card_Product } from './Card_product.js';

const BodyCare=()=>{
    const [item,setitem]= useState(Card_Product);
    return(
       

        <>
        
        
        
       
       
    
        <Navbar/>
       <div class="container-fluid card_pr">
      
       <div className="pdt_desc">
        <h2>Body Care</h2>
        </div>

        <div className="card_fig">
        {
            item.map((element)=>{
                return <Sells
                title={element.title}
                img={element.img}
                price={element.price}
                item={element}
                key={element.id}
    />
            })
          
        }
        </div>
       </div>
        
      
         <Footer/>
       
</>
    )
}

export default BodyCare;