import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';


const RoomStyle = () => {
  const [rooms,setRooms]= useState([])
const Fetchrooms =async ()=>{
  try {
    const response = await axios.get("https://hotel-management-backend-ruby.vercel.app/api/room");
    console.log(response.data.data)
    setRooms(response.data.data)
} catch (error) {
    
    console.error("Login Error:", error);
  }
}
useEffect(()=>{
  Fetchrooms()
},[])
  return (
   
    
    <div>
        {/* <Header/> */}
    {/* Page Banner Start */}
    <div className="page__banner" style={{ backgroundImage: "url('/assets/img/banner/page-banner-3.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room Style</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="Index">Home</a></li>
                    <li><span>-</span>Room Style</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Room Area Start */}
      <div className="room__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="all__sidebar">
                <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <div className="all__sidebar-item-category">
                    <ul>
                      <li><a href="#"><i className="far fa-angle-double-right"></i>Luxury Room<span>(08)</span></a></li>
                      <li><a href="#"><i className="far fa-angle-double-right"></i>Small Suite<span>(06)</span></a></li>
                      <li><a href="#"><i className="far fa-angle-double-right"></i>Single<span>(05)</span></a></li>
                      <li><a href="#"><i className="far fa-angle-double-right"></i>Family<span>(09)</span></a></li>
                      <li><a href="#"><i className="far fa-angle-double-right"></i>Double Room<span>(03)</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="all__sidebar-item">
                  <h5>Booking Now</h5>
                  <div className="all__sidebar-item-booking">
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="select">
                        <option value="1">Check In</option>
                        <option value="2">Check In</option>
                        <option value="3">Check In</option>
                        <option value="4">Check In</option>
                        <option value="5">Check In</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="select">
                        <option value="1">Check Out</option>
                        <option value="2">Check Out</option>
                        <option value="3">Check Out</option>
                        <option value="4">Check Out</option>
                        <option value="5">Check Out</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-30">
                      <select name="select">
                        <option value="1">Room</option>
                        <option value="2">1 Room</option>
                        <option value="3">2 Room</option>
                        <option value="4">3 Room</option>
                        <option value="5">4 Room</option>
                      </select>
                    </div>
                    <a className="theme-btn" href="#">Check<i className="fal fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Listings */}
            <div className="col-xl-9 col-lg-8 order-first order-lg-1 lg-mb-30">
              <div className="row justify-content-center">
                {rooms.map((room, index) => (
                  <div className="col-xl-4 col-md-6 mb-30" key={index}>
                    <div className="deluxe__two-item">
                      <div className="deluxe__two-item-image">
                        <a href="HotelDetails"><img src={room.imageUrl} alt={room.roomNumber} /></a>
                      </div>
                      <div className="deluxe__two-item-content">
                        <span>{room.pricePerNight}</span>
                        <h4><a href="HotelDetails">{room.roomNumber}</a></h4>
                        <p>{room.description}</p>
                        <div className="deluxe__two-item-content-meta">
                          <ul>
                            <li><i className="fal fa-bed-alt"></i>({room.roomType}) bed's</li>
                            {/* <li><i className="fal fa-users"></i>({room.}) Guest's</li> */}
                          </ul>
                        </div>
                        <div className="deluxe__two-item-content-bottom">
                          <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                          {/* <p><i className="fas fa-star"></i><span>{room.rating}</span>{room.reviews}k</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  


      {/* <Footer/> */}
    </div>
  )
}

export default RoomStyle