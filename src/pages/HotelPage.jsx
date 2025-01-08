import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';




const HotelPage = () => {
  return (

    <div>
      {/* <Header/>  */}

      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: "url(/assets/img/banner/page-banner-5.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Luxurays Hotels</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="Index">Home</a></li>
                    <li><span>-</span>Hotels List</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Room List Start */}
      <div className="room__list section-padding">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            {/* <div className="col-xl-3">
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
                      <select name="checkIn">
                        <option value="1">Check In</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="checkOut">
                        <option value="1">Check Out</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-30">
                      <select name="room">
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
            </div> */}

            {/* Room Items */}
            <div className="col-xl-12 order-first order-xl-1 xl-mb-30">
              {[{
                title: 'Superior Room',
                image: '/assets/img/hotel/hotel-19.jpg',
                description: 'Savvy travelers are looking for more than just the next destination on the map. They are looking for a memorable experience.',
                beds: 3,
                guests: 7,
                price: 249,
                rating: 2.9
              }, {
                title: 'Junior Suite',
                image: '/assets/img/hotel/hotel-20.jpg',
                description: 'Savvy travelers are looking for more than just the next destination on the map. They are looking for a memorable experience.',
                beds: 4,
                guests: 2,
                price: 205,
                rating: 3.9
              }].map((room, index) => (
                <a className="room__list-item" href='/HotelDetails' key={index}>
                  <div className="room__list-item-left">
                    <div className="room__list-item-image">
                      <img src={room.image} alt="Room" />
                    </div>
                  </div>
                  <div className="room__list-item-right">
                    <div className="room__list-item-right-content">
                      <h4>{room.title}</h4>
                      <p>{room.description}</p>
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>({room.beds}) bed's</li>
                        <li><i className="fal fa-users"></i>({room.guests}) Guest's</li>
                      </ul>
                    </div>
                    <div className="room__list-item-right-meta">
                      <div className="room__list-item-right-meta-top">
                        <span>${room.price}/Night</span>
                        <p><i className="fas fa-star"></i><span>{room.rating}</span></p>
                      </div>
                      <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Room List End */}



      {/* <Footer /> */}
    </div>

  )
}

export default HotelPage