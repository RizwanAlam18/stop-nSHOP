import React, { useState } from 'react';

import Card from "./Card.js";
import {Product} from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import "./style.css";

const Home=()=>{
  const [item,setitem]=useState(Product);
  
 
  return(
    
      <>
      <div className="main">
   
      <Navbar/>
     
     
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner main_car">
    <div class="carousel-item active">
      <img class="d-block w-100 slider_img" src="image/bp.jpg" alt="First slide"/>
      
    </div>
    
    <div class="carousel-item">
      <img class="d-block w-100 slider_img" src="image/org_back.jpg" alt="Second slide"/>
      
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 slider_img" src="image/covid2.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev pre" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next pre" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className="content">
  <div className="item">
  <div className="content_text">
     <i class="fas fa-truck"></i>
     <h2>Free Delivery</h2>
     <p>Free delivery on all your Orders</p>
  </div>
  <div className="content_text" id="supportss">
     <i class="fas fa-sync"></i>
     <h2>Return Policy</h2>
     <p>We offer easy return policy</p>
  </div>
  <div className="content_text" id="s">
  <i class="fas fa-headphones"></i>
     <h2>24/7 Support</h2>
     <p>Customers services available </p>
  </div>
  <div className="content_text s" id="support" id="supportss" id="s">
  <i class="fab fa-amazon-pay"></i>
     <h2>Secure Payment</h2>
     <p>Pay Securely with Debit/Credit</p>
  </div>
  </div>
  
</div>
<div className="covid">
  <div className="covid_product">
      <a><img src="image/Banner.png" alt="covid"/></a>
  </div>
</div>
<div className="card_info">
{
  item .map((element)=>{
    return <Card
      title={element.title}
      img={element.img}
    />
  })
}
<button type="button" class="btn btn-secondary">View More</button>

</div>
<button type="button" class="btn btn-secondary hidden">View More</button>

<div className='about'>

<div className="about_text">
  <div className="left">
     <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
  </div>
  <div className="right">
  <h1>About Our Product</h1> 
  <p>To be an inspiring, trustworthy and innovative global leader in providing genuine organic products and solutions for Healthy Conscious Living. To be a vehicle of consciousness in the global market by creating a holistic, sustainable business model that inspires, promotes and supports true wellness.</p>
  <button className="btn">See All Products</button>
  </div>
</div>
  
  


</div>

<section class="bodys">
    <div class="container">
        <h1 class="section-header"><b>What People Say About Us</b></h1>
       
        <div class="testimonial-view">
            <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="testimonial-block">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="testimonial-block_user">
                                        <div class="testimonial-block_user_image">
                                            <img src="https://i.imgur.com/R63flEo.jpg" alt="User"/>
                                        </div>
                                        <div class="testimonial-block_user_info">
                                            <h2 class="testimonial-block_user_info_name">Krishna</h2>
                                            <h4>Customer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="testimonial-block_content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur repellendus nemo suscipit explicabo veniam similique quaerat vitae! Alias reprehenderit aliquam temporibus porro iste corrupti laboriosam nihil eos? Nemo ratione, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial-block">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="testimonial-block_user">
                                        <div class="testimonial-block_user_image">
                                            <img src="https://i.imgur.com/G8pFZ8p.jpg" alt="User"/>
                                        </div>
                                        <div class="testimonial-block_user_info">
                                            <h2 class="testimonial-block_user_info_name">Himanshu</h2>
                                            <h4>Customer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="testimonial-block_content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur repellendus nemo suscipit explicabo veniam similique quaerat vitae! Alias reprehenderit aliquam temporibus porro iste corrupti laboriosam nihil eos? Nemo ratione, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial-block">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="testimonial-block_user">
                                        <div class="testimonial-block_user_image">
                                            <img src="https://i.imgur.com/XePzDSG.jpg" alt="User"/>
                                        </div>
                                        <div class="testimonial-block_user_info">
                                            <h2 class="testimonial-block_user_info_name">Aliya</h2>
                                            <h4>Customer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="testimonial-block_content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur repellendus nemo suscipit explicabo veniam similique quaerat vitae! Alias reprehenderit aliquam temporibus porro iste corrupti laboriosam nihil eos? Nemo ratione, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon post" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon post" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</section>
  
  <Footer/>
  </div>

      </>
  )

}

export default Home;