import React from "react";
import { useCart } from "react-use-cart";

const Sells=(props)=>{
    const { addItem }=useCart();
    return(
        <>
      <div class="pr">
      <div class="card card-sell">
  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.price}</p>
    <button  onClick={()=>addItem(props.item)} class="btn btn-primary btn1"  ><i class="fas fa-cart-plus"></i> ADD TO CART</button>
  </div>
</div>
</div>
           
     
        </>
    )
}

export default Sells;