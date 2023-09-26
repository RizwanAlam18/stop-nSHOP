import React from 'react';
import "./index.css";
import {Switch,Route} from "react-router-dom";

import Contact from './Contact.js';

const Content=()=>{
return(
  <>
  <div classname='container'>
   <Switch>
   <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  </div>
  </>
)
}

export default Content;