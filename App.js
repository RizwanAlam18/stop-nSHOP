import React from 'react';
import "./index.css";
import {Switch,Route} from "react-router-dom";
import Home from './Home.js';
import Sign from './Sign.js';
import Packagedfood from "./product/Packagedfood.js";
import BodyCare from "./product/BodyCare.js";
import Cart from "./Cart.js";
import Signup from "./Signup.js";
import Order from './Order.js';
import Placed from './Placed.js';
import { CartProvider,useCart } from 'react-use-cart';

import Contact from './Contact.js';

const App=()=>{
return(
  <>
 <CartProvider>
   <Switch>
   <Route exact path="/" component={Home}></Route>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/sign" component={Sign}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/Packagedfood" component={Packagedfood}></Route>
    <Route exact path="/BodyCare" component={BodyCare}></Route>
    <Route exact path="/Cart" component={Cart}></Route>
    <Route exact path="/Signup" component={Signup}></Route>
    <Route exact path="/Order" component={Order}></Route>
    <Route exact path="/Placed" component={Placed}></Route>
    </Switch>
    </CartProvider>
  </>
)
}

export default App;


