import React, { useState } from 'react';
import Footer from '../Footer';
import Navbar from "../Navbar";

import {packagedpro} from "./Packagedpro";
import Sells from "./Sells.js";
import "../style.css";


const Packagedfood=()=>{
    const [item,setitem]=useState(packagedpro);
    return(
        <>
        
        <Navbar/>
         
        <div class="container-fluid card_pr">
        <div className="pdt_desc">
        <h2>Packaged Food</h2>
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

export default Packagedfood;