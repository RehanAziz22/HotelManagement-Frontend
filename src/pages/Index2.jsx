import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index2 = () => {
  return (
    <div>
  <Header/>


    

          {/* Banner Three Start */}
<div className="banner__three" data-background="/assets/img/bg/banner-bg.jpg">
    <div className="container custom__container">
        <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 order-last order-lg-first">
                <div className="banner__three-title">
                    <span className="subtitle__one">Hotel Booking Website</span>                        
                    <h1>Book hotels online<span> Get 20% Off !</span></h1>
                    <a className="theme-btn" href="About">Read More<i className="fal fa-long-arrow-right"></i></a>    
                    <div className="banner__three-title-video">
                        <div className="video__play">
                            <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a>
                        </div>
                    </div>                     
                </div>
            </div>
            <div className="col-xl-5 col-lg-5 lg-mb-60">
                <div className="banner__three-right">
                    <img className="img__full" src="/assets/img/banner-6.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
{/* Banner Three End */}

{/* Company Area Start */}
<div className="company__area section-padding">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
                <div className="company__area-left sm-t-center">
                    <h1><span className="counter">180</span>+</h1>
                    <h5>Get International</h5>
                </div>
            </div>
            <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-7 col-sm-8 lg-mb-30">
                <div className="company__area-image">
                    <img src="/assets/img/hotel/hotel-9.jpg" alt="" />
                </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="company__area-title">
                    <span className="subtitle__one">Company</span>
                    <h2>Optimize your business For online bookings.</h2>
                    <p>Morbi et tellus imperdiet, aliquam nulla sed, dapibus erat. Aenean dapibus sem non purus venenatis vulputate. Donec accumsan eleifend blandit. Nullam auctor ligula vel ante volutpat,</p>
                    <a className="theme-border-btn" href="About">Read More<i className="fal fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Company Area End */}

{/* Call Area Start */}        
<div className="call__area">
    <div className="container">
        <div className="row align-items-center call__area-bg three">
            <div className="col-xl-8">
                <div className="call__area-bg-left">
                    <h2>Need any Contact with Us</h2>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="call__area-bg-right three">
                    <div className="call__area-bg-right-icon">
                        <i className="fal fa-phone-alt"></i>
                    </div>
                    <div className="call__area-bg-right-content">
                        <span><a href="tel:+123(458)585568">+123 (458) 585 568</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Call Area End */}    

{/* Deluxe Area Start */}
<div className="deluxe__three section-padding">
    <div className="container">
        <div className="row align-items-center mb-60">
            <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="deluxe__three-title">
                    <span className="subtitle__one">Deluxe and Luxury</span>
                    <h2>Luxury Rooms</h2>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4">
                <div className="deluxe__three-right">
                    <a className="theme-btn" href="About">Read More<i className="fal fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 xl-mb-30">
                <div className="deluxe__three-item">
                    <div className="deluxe__three-item-image">
                        <img src="/assets/img/hotel/hotel-10.jpg" alt="" />
                        <div className="deluxe__three-item-image-content">
                            <h4><a href="RoomDetails">Luxury Room</a><span>$189/Night</span></h4>
                            <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                            <div className="deluxe__three-item-image-content-meta">
                                <ul>
                                    <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                                    <li><i className="fal fa-users"></i>(4) Guest's</li>
                                </ul>
                            </div>
                            <div className="deluxe__three-item-image-content-bottom">
                                <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                                <p><i className="fas fa-star"></i><span>4.9</span>2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
                <div className="deluxe__three-item center">
                    <div className="deluxe__three-item-image">
                        <img src="/assets/img/hotel/hotel-11.jpg" alt="" />
                        <div className="deluxe__three-item-image-content">                                
                            <h4><a href="RoomDetails">Small Suite</a><span>$224/Night</span></h4>
                            <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                            <div className="deluxe__three-item-image-content-meta">
                                <ul>
                                    <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                                    <li><i className="fal fa-users"></i>(4) Guest's</li>
                                </ul>
                            </div>
                            <div className="deluxe__three-item-image-content-bottom">
                                <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                                <p><i className="fas fa-star"></i><span>4.9</span>2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="deluxe__three-item">
                    <div className="deluxe__three-item-image">
                        <img src="/assets/img/hotel/hotel-12.jpg" alt="" />
                        <div className="deluxe__three-item-image-content">                                
                            <h4><a href="RoomDetails">Double Room</a><span>$203/Night</span></h4>
                            <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                            <div className="deluxe__three-item-image-content-meta">
                                <ul>
                                    <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                                    <li><i className="fal fa-users"></i>(4) Guest's</li>
                                </ul>
                            </div>
                            <div className="deluxe__three-item-image-content-bottom">
                                <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                                <p><i className="fas fa-star"></i><span>4.9</span>2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Deluxe Area End */}    

{/* Booking Two Start */}
<div className="booking__two section-padding" data-background="/assets/img/bg/booking-bg.jpg">
    <div className="container">
        <div className="row mb-60">
            <div className="col-xl-12">
                <div className="booking__two-title">
                    <span className="subtitle__one">Booking Aria</span>
                    <h2>Find the best hotels in Your area</h2>                        
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12">
                <div className="booking__two-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="booking__two-form-item">
                                    <label>Check-In</label>
                                    <input type="date" name="checkin" id="checkin" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="booking__two-form-item">
                                    <label>Check-Out</label>
                                    <input type="date" name="checkout" id="checkout" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="booking__two-form-item">
                                    <label>Rooms</label>
                                    <select>
                                        <option>1 Room</option>
                                        <option>2 Rooms</option>
                                        <option>3 Rooms</option>
                                        <option>4 Rooms</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="booking__two-form-item">
                                    <label>Guest</label>
                                    <select>
                                        <option>2 Guest</option>
                                        <option>3 Guest</option>
                                        <option>4 Guest</option>
                                        <option>5 Guest</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="booking__two-form-btn">
                            <button className="theme-btn">Search Room <i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
   
    




<Footer/>
        </div>
  );
};

export default Index2;
