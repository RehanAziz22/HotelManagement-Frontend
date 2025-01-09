import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';


const RoomDetails = () => {
  const navigate = useNavigate()
  return (

    <div>
      {/* <Header/> */}

      {/* Page Banner Start */}
      <div
        className="page__banner"
        style={{ backgroundImage: "url(/assets/img/banner/page-banner-6.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Rooms</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span>-</span>Room Details
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Room Details Start */}
      <div className="room__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 lg-mb-30">
              <aside className="all__sidebar">


                {/* Category Sidebar */}
                <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <div className="all__sidebar-item-category">
                    <ul>
                      {[
                        "Luxury",
                        "Suite",
                        "Single",
                        "Family",
                        "Double",
                      ].map((category, index) => (
                        <li key={index}>
                          <a href="HotelCat" onClick={() => {navigate('/HotelCat',{state:category})}}>
                            <i className="far fa-angle-double-right"></i>
                            {category} Room
                            {/* <span>(0{index + 3})</span> */}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Price Sidebar */}
                {/* <div className="all__sidebar-item">
                  <h5>Your Price</h5>
                  <div className="all__sidebar-item-price">
                    <ul>
                      <li>
                        <i className="fal fa-bed-alt"></i>(3) bed's
                      </li>
                      <li>
                        <i className="fal fa-users"></i>(6) Guest's
                      </li>
                    </ul>
                    <h4>
                      $219<span>/Night</span>
                    </h4>

                  </div>
                </div> */}


              </aside>
            </div>
            {/* Room Content */}
            <div className="col-xl-9 col-lg-8">
              <div className="room__details-right">
                <section className="room__details-right-content">
                  <h3 className="mb-25">
                    Luxury Room is the best online room for luxury Rooms
                  </h3>
                  <p className="mb-25">
                    Praesent non ullamcorper ligula. Proin a mi vitae massa
                    lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Pellentesque consectetur
                    rhoncus lobortis.
                  </p>
                  <div className="row mt-35 mb-20">
                    {[24, 25].map((num, index) => (
                      <div
                        className={`col-sm-6 ${index % 2 === 0 ? "sm-mb-30" : ""
                          }`}
                        key={index}
                      >
                        <img
                          className="img__full"
                          src={`/assets/img/hotel/hotel-${num}.jpg`}
                          alt={`Hotel ${num}`}
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* categories */}
                <div className="row justify-content-center">
                  <h2 className="mb-25">
                    Catgoeries</h2>
                  {[
                    { price: "$229/Night", title: "Luxury", description: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus", beds: 3, guests: 6, image: "luxury-8.jpg", rating: 3.7, reviews: 2000 },
                    { price: "$188/Night", title: "Suite", description: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus", beds: 2, guests: 3, image: "luxury-7.jpg", rating: 4.4, reviews: 2000 },
                    { price: "$167/Night", title: "Single", description: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus", beds: 1, guests: 2, image: "luxury-11.jpg", rating: 4.8, reviews: 2000 },
                    { price: "$237/Night", title: "Family", description: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus", beds: 2, guests: 4, image: "luxury-14.jpg", rating: 2.9, reviews: 2000 },
                    { price: "$219/Night", title: "Double", description: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus", beds: 3, guests: 4, image: "luxury-6.jpg", rating: 4.9, reviews: 2000 },
                  ].map((room, index) => (
                    <div className="col-xl-4 col-md-6 mb-30" key={index} onClick={() => {navigate('/HotelCat',{state:room.title}) }}>
                      <div className="deluxe__two-item">
                        <div className="deluxe__two-item-image">
                          <img src={`/assets/img/luxury/${room.image}`} alt={room.title} />
                        </div>
                        <div className="deluxe__two-item-content">
                          <span>{room.price}</span>
                          <h4><a href="HotelCat">{room.title} Room</a></h4>
                          <p>{room.description}</p>
                          <div className="deluxe__two-item-content-meta">
                            <ul>
                              <li><i className="fal fa-bed-alt"></i>({room.beds}) bed's</li>
                              <li><i className="fal fa-users"></i>({room.guests}) Guest's</li>
                            </ul>
                          </div>
                          <div className="deluxe__two-item-content-bottom">
                            <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                            <p><i className="fas fa-star"></i><span>{room.rating}</span>{room.reviews}k</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Amenities Section */}
                <section className="room__details-right-list">
                  <h3>Amenities</h3>
                  <div className="row mt-35">
                    {[
                      { icon: "list-1.png", name: "Hotel Cleaning" },
                      { icon: "list-2.png", name: "Car Parking" },
                      { icon: "list-3.png", name: "Swimming Pool" },
                      { icon: "list-4.png", name: "Pick Up & Drop" },
                      { icon: "list-5.png", name: "Spa Center" },
                      { icon: "list-6.png", name: "Smart Key" },
                      { icon: "list-7.png", name: "Home Wifi" },
                      { icon: "list-8.png", name: "Breakfast" },
                      { icon: "list-9.png", name: "Fitness Gym" },
                    ].map((amenity, index) => (
                      <div className="col-md-4 col-sm-6 mb-35" key={index}>
                        <div className="room__details-right-list-item">
                          <div className="room__details-right-list-item-icon">
                            <img src={`/assets/img/icon/${amenity.icon}`} alt="" />
                          </div>
                          <div className="room__details-right-list-item-title">
                            <h6>{amenity.name}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hotel Details End */}

      {/* <Footer/> */}
    </div>
  )
}

export default RoomDetails