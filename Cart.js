import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style.css";
import { useCart } from 'react-use-cart';
import Order from "./Order";
const Cart=()=>{
    const{
         isEmpty,
         totalUniqueItems,
         items,
         totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart,
    }=useCart();
    if(isEmpty) return <h1>empty</h1>
    return(
        <>
        <Navbar/>
        <div class="container cardc">

        
        <div className="name">
           <h2>Shopping Cart</h2>
        </div>
        <div className="item_cart">
            
             <table class="table">
  <thead>
    <tr id="cart_head">
      
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
     
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody id="body">
  {
      items.map((element,index)=>{
          return(
            <tr key={index}>
     
      <td>
      <img src={element.img} style={{height:'6rem'}} />
      </td>
      <td>
      {element.title}
      </td>
      <td>
      <button id="dec" onClick={()=> updateItemQuantity(element.id,element.quantity-1)}>-</button>
      {element.quantity}
     
      <button id="inc"  onClick={()=> updateItemQuantity(element.id,element.quantity+1)}>+</button>
      </td>
     
      <td>{element.price}</td>
     
      <td>
          <button id="remove" onClick={()=> removeItem(element.id)}><i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
          )
       
      })}
   
    
  </tbody>
</table>

           
        </div>
        
        <div class="total">
            <div class="total_head">
              <h1>CART TOTAL</h1><hr></hr>
            </div>
            <div class="total_text">
              <h2>Total Amount:</h2><h3>{cartTotal}</h3>
              <h2>Shipping Charges:</h2><h3>Free</h3>
              <hr></hr>
              <h1>Grand Total Amount:</h1><h3>{cartTotal}</h3>
              <a href="/Order"><button>Process To Checkout</button></a>
            </div>
        </div>
        
         <div class="discount">
            <div class="discount_head">
              <h1>DISCOUNT CODE</h1><hr></hr>
            </div>
            <div class="discount_text">
            <h4>Enter The Coupon Code If You Have Any</h4>
              <input type="text" placeholder="ENTER COUPON CODE"></input><br></br>
              <button>Apply</button>
            </div>
         </div>
         
        </div>
       
        </>
    )
}

export default Cart;