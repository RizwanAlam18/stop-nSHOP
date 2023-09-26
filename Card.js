import React from 'react';
const Card=(props)=>{
  return(
      <>
      <div className="card card-covid">
    <a href="#"><img className="card-img-top" src={props.img} alt="Card image cap"/></a>
  <div className="card-body">
    <a href="#"><h2 className="card-text">{props.title}</h2></a>
  </div>
</div>
      </>
  )
}

export default Card;

