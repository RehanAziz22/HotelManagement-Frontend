import React, { useState } from 'react';

const Index3 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="header__sticky">
      <div className="header__area two">
        <div className="container custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <a href="index.html">
                  <img src="assets/img/logo.png" alt="Logo" />
                </a>
                <div className="responsive-menu"></div>
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-info">
                <span>
                  <a href="#">
                    <i className="fal fa-map-marker-alt"></i>
                    869W+P49 Yellow House, Pennsylvania
                  </a>
                </span>
              </div>
              <div className="header__area-menubar-right-sidebar">
                <div
                  className="header__area-menubar-right-sidebar-popup-icon"
                  onClick={toggleSidebar}
                >
                  <i className={`fal ${isSidebarOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`header__area-menubar-right-sidebar-popup two ${
            isSidebarOpen ? "active" : ""
          }`}
        >
          <div className="sidebar-close-btn" onClick={toggleSidebar}>
            <i className="fal fa-times"></i>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-logo">
            <a href="index.html">
              <img src="/assets/img/logo-1.png" alt="Sidebar Logo" />
            </a>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-menu">
            <ul>
              <li className="toggle-menu">
                <a href="#">
                  Home<i className="fal fa-angle-right change"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 01</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 02</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 03</a>
                  </li>
                </ul>
              </li>
              <li className="toggle-menu">
                <a href="#">
                  Page<i className="fal fa-angle-right change"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services-team.html">Team</a>
                  </li>
                  <li>
                    <a href="services-details.html">Services Details</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li className="toggle-menu">
                <a href="#">
                  Room<i className="fal fa-angle-right change"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="room-style.html">Room Style</a>
                  </li>
                  <li>
                    <a href="room-modern.html">Room Modern</a>
                  </li>
                  <li>
                    <a href="room-list.html">Room List</a>
                  </li>
                  <li>
                    <a href="room-details.html">Room Details</a>
                  </li>
                </ul>
              </li>
              <li className="toggle-menu">
                <a href="#">
                  Blog<i className="fal fa-angle-right change"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-bottom">
            <p>
              Copyright © 2022{" "}
              <a href="https://themeforest.net/user/themeori/portfolio">
                ThemeOri
              </a>{" "}
              Website by <a href="index.html">Hostily</a>
            </p>
            <div className="header__area-menubar-right-sidebar-popup-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      </div>

    

      {/*BannerTwo Component*/}

    <div className="home-two-main-banner">
      <div className="banner__two swiper banner-slider">
        <div className="swiper-wrapper">
          <div className="banner__two-area swiper-slide" data-swiper-autoplay="5500">
            <div className="banner__two-area-image" data-background="/assets/img/banner-2.jpg"></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 order-last order-lg-first">
                  <div className="banner__two-content">
                    <span data-animation="fadeInUp" data-delay=".4s">Hotel Booking Website</span>
                    <h1 data-animation="fadeInUp" data-delay=".6s">The best way to book hotels online.</h1>
                    <div className="banner__two-content-button" data-animation="fadeInUp" data-delay="1s">
                      <a className="theme-btn" href="about">Read More<i className="fal fa-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__two-area swiper-slide" data-swiper-autoplay="5500">
            <div className="banner__two-area-image" data-background="/assets/img/banner-3.jpg"></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 order-last order-lg-first">
                  <div className="banner__two-content">
                    <span data-animation="fadeInUp" data-delay=".4s">Hotel Booking Website</span>
                    <h1 data-animation="fadeInUp" data-delay=".6s">The Best Hotel Deals in the World</h1>
                    <div className="banner__two-content-button" data-animation="fadeInUp" data-delay="1s">
                      <a className="theme-btn" href="about">Read More<i className="fal fa-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__two-area swiper-slide" data-swiper-autoplay="5500">
            <div className="banner__two-area-image" data-background="/assets/img/banner-4.jpg"></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 order-last order-lg-first">
                  <div className="banner__two-content">
                    <span data-animation="fadeInUp" data-delay=".4s">Hotel Booking Website</span>
                    <h1 data-animation="fadeInUp" data-delay=".6s">The Best Hotel Deals in the World</h1>
                    <div className="banner__two-content-button" data-animation="fadeInUp" data-delay="1s">
                      <a className="theme-btn" href="about">Read More<i className="fal fa-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__two-area swiper-slide" data-swiper-autoplay="5500">
            <div className="banner__two-area-image" data-background="/assets/img/banner-5.jpg"></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 order-last order-lg-first">
                  <div className="banner__two-content">
                    <span data-animation="fadeInUp" data-delay=".4s">Hotel Booking Website</span>
                    <h1 data-animation="fadeInUp" data-delay=".6s">The Best Hotel Deals in the World</h1>
                    <div className="banner__two-content-button" data-animation="fadeInUp" data-delay="1s">
                      <a className="theme-btn" href="About">Read More<i className="fal fa-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner__two-dots">
          <div className="pagination"></div>
        </div>

        <div className="banner__two-video custom__container">
          <div className="banner__two-video-left">
            <div className="video__play">
              <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a>
            </div>
          </div>
          <div className="banner__two-video-right">
            <span><a href="#deluxe"><i className="fal fa-long-arrow-left"></i>Scroll Down</a></span>
          </div>
        </div>
      </div>
    </div>
  

{/* Deluxe Section Component */}

    <div className="deluxe__two section-padding" id="deluxe">
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-xl-6 col-md-8">
            <div className="deluxe__two-title md-mb-40">
              <span className="subtitle__one">Deluxe and Luxury</span>
              <h2>Luxury Rooms</h2>
            </div>
          </div>
          <div className="col-xl-6 col-md-4">
            <div className="deluxe__two-btn t-right md-t-left">
              <a className="theme-border-btn" href="RoomList">Al room's<i className="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
      {/* Room Items */}
      <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
        <div className="deluxe__two-item">
          <div className="deluxe__two-item-image">
            <a href="RoomDetails"><img src="/assets/img/luxury/luxury-6.jpg" alt="Luxury Room" /></a>
          </div>
          <div className="deluxe__two-item-content">
            <span>$219/Night</span>
            <h4><a href="RoomDetails">Double Room</a></h4>
            <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
            <div className="deluxe__two-item-content-meta">
              <ul>
                <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                <li><i className="fal fa-users"></i>(4) Guest's</li>
              </ul>
            </div>
            <div className="deluxe__two-item-content-bottom">
              <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
              <p><i className="fas fa-star"></i><span>4.9</span>2k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
        <div className="deluxe__two-item">
          <div className="deluxe__two-item-image">
            <a href="RoomDetails"><img src="/assets/img/luxury/luxury-7.jpg" alt="" /></a>
          </div>
          <div className="deluxe__two-item-content">
            <span>$219/Night</span>
            <h4><a href="RoomDetails">Small Suite</a></h4>
            <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
            <div className="deluxe__two-item-content-meta">
              <ul>
                <li><i className="fal fa-bed-alt"></i>(2) bed's</li>
                <li><i className="fal fa-users"></i>(3) Guest's</li>
              </ul>
            </div>
            <div className="deluxe__two-item-content-bottom">
              <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
              <p><i className="fas fa-star"></i><span>4.4</span>2k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
        <div className="deluxe__two-item">
          <div className="deluxe__two-item-image">
            <a href="RoomDetails"><img src="/assets/img/luxury/luxury-8.jpg" alt="" /></a>
          </div>
          <div className="deluxe__two-item-content">
            <span>$219/Night</span>
            <h4><a href="RoomDetails">Luxury room</a></h4>
            <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
            <div className="deluxe__two-item-content-meta">
              <ul>
                <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                <li><i className="fal fa-users"></i>(6) Guest's</li>
              </ul>
            </div>
            <div className="deluxe__two-item-content-bottom">
              <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
              <p><i className="fas fa-star"></i><span>3.7</span>2k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="deluxe__two-item">
          <div className="deluxe__two-item-image">
            <a href="RoomDetails"><img src="/assets/img/luxury/luxury-9.jpg" alt="" /></a>
          </div>
          <div className="deluxe__two-item-content">
            <span>$219/Night</span>
            <h4><a href="RoomDetails">Junior Suite</a></h4>
            <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
            <div className="deluxe__two-item-content-meta">
              <ul>
                <li><i className="fal fa-bed-alt"></i>(4) bed's</li>
                <li><i className="fal fa-users"></i>(2) Guest's</li>
              </ul>
            </div>
            <div className="deluxe__two-item-content-bottom">
              <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
              <p><i className="fas fa-star"></i><span>3.9</span>2k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        
      
  

{/*Call Section Component*/}

    <div className="call__area">
      <div className="container">
        <div className="row align-items-center call__area-bg" data-background="/assets/img/bg/call.jpg">
          <div className="col-xl-8">
            <div className="call__area-bg-left">
              <h2>Need any Contact with Us</h2>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="call__area-bg-right">
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


      
      {/* Accommodations Two Start */}
      <div className="accommodations__two section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-5 order-last order-lg-first">
              <div className="accommodations__two-left">
                <img src="/assets/img/hotel/hotel-3.jpg" alt="" />
                <div className="accommodations__two-left-roll">
                  <img className="content__roll" src="/assets/img/content.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="accommodations__two-title">
                <span className="subtitle__one">Accommodations</span>
                <h2>Traveling with your Company deal</h2>
                <p>
                  Nullam tempus vel tortor eget suscipit. Suspendisse enim dolor, placerat
                  quis elit et, feugiat consectetur mauris. Cras tempor sollicitudin eleifend.
                  Cras efficitur libero sed ante luctus, at convallis erat egestas.
                </p>
                <a className="theme-border-btn" href="About">
                  Read More<i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-7 md-mb-30">
              <div className="accommodations__two-right">
                <img src="/assets/img/hotel/hotel-4.jpg" alt="" />
                <div className="accommodations__two-right-bottom">
                  <div className="accommodations__two-right-bottom-signature">
                    <img src="/assets/img/bg/signature.png" alt="" />
                  </div>
                  <div className="accommodations__two-right-bottom-author">
                    <h5>David Beckham</h5>
                    <span>Founder CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accommodations Two End */}

      {/* Services Two Start */}
      <div className="services__two section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/cleaning-1.png" alt="" />
                </div>
                <div className="services__two-item-content">
                  <h4>Room Cleaning</h4>
                  <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/car-parking.png" alt="" />
                </div>
                <div className="services__two-item-content">
                  <h4>Car Parking</h4>
                  <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/swimming-pool.png" alt="" />
                </div>
                <div className="services__two-item-content">
                  <h4>Swimming pool</h4>
                  <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/location-1.png" alt="" />
                </div>
                <div className="services__two-item-content">
                  <h4>PickUp & Drop</h4>
                  <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Two End */}

      {/* Single Room Area Start */}
      <div className="room__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="room__area-title">
                <span className="subtitle__one">Our Features</span>
                <h2>Single Room</h2>
                <p>
                  Phasellus semper vehicula eros, non ultricies neque rhoncus sed. Morbi aliquam ex in dui aliquet
                  consectetur. Fusce pellentesque turpis ut lorem elementum commodo.
                </p>
                <div className="room__area-title-contact">
                  <div className="room__area-title-contact-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="room__area-title-contact-content">
                    <span>
                      <a href="tel:+123(458)585568">+123 (458) 585 568</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 order-last order-lg-second">
              <div className="room__area-image">
                <img src="/assets/img/hotel/hotel-5.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 xl-mb-30">
              <div className="room__area-list">
                <div className="room__area-list-item">
                  <div className="room__area-list-item-icon">
                    <img src="/assets/img/icon/key.png" alt="" />
                  </div>
                  <div className="room__area-list-item-content">
                    <h5>Smart Key</h5>
                    <p>Phasellus semper vehicula eros, non ultricies neque rhoncus sed</p>
                  </div>
                </div>
                <div className="room__area-list-item">
                  <div className="room__area-list-item-icon">
                    <img src="/assets/img/icon/breakfast.png" alt="" />
                  </div>
                  <div className="room__area-list-item-content">
                    <h5>Breakfast</h5>
                    <p>Phasellus semper vehicula eros, non ultricies neque rhoncus sed</p>
                  </div>
                </div>
                <div className="room__area-list-item">
                  <div className="room__area-list-item-icon">
                    <img src="/assets/img/icon/wifi-1.png" alt="" />
                  </div>
                  <div className="room__area-list-item-content">
                    <h5>Home Wifi</h5>
                    <p>Phasellus semper vehicula eros, non ultricies neque rhoncus sed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single Room Area End */}

      {/* Team Area Start */}
      <div className="team__area section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="team__area-title">
                <span className="subtitle__one">Our Exprt Meamber</span>
                <h2>Expert Our Services man</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img src="/assets/img/team/team-1.jpg" alt="" />
                  <div className="team__area-item-image-overlay">
                    <div className="team__area-item-image-overlay-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team__area-item-image-overlay-content">
                      <h5>Michelle yeoh</h5>
                      <span>Services man</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img src="/assets/img/team/team-2.jpg" alt="" />
                  <div className="team__area-item-image-overlay">
                    <div className="team__area-item-image-overlay-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team__area-item-image-overlay-content">
                      <h5>David Beckham</h5>
                      <span>Services man</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img src="/assets/img/team/team-3.jpg" alt="" />
                  <div className="team__area-item-image-overlay">
                    <div className="team__area-item-image-overlay-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team__area-item-image-overlay-content">
                      <h5>Steve smith</h5>
                      <span>Services man</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img src="/assets/img/team/team-4.jpg" alt="" />
                  <div className="team__area-item-image-overlay">
                    <div className="team__area-item-image-overlay-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team__area-item-image-overlay-content">
                      <h5>Tim smith</h5>
                      <span>Services man</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Area End */}
   
      
      {/* Footer Area Start */}
      <div className="footer__area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-7 lg-mb-30">
              <div className="footer__area-widget">
                <div className="footer__area-widget-about two">
                  <div className="footer__area-widget-about-logo">
                    <a href="Index">
                      <img src="/assets/img/logo.png" alt="Logo" />
                    </a>
                  </div>
                  <p>
                    Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. Nulla non pulvinar enim, vel viverra nunc. Integer condimentum vulputate justo.
                  </p>
                  <div className="footer__area-widget-about-social">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-behance"></i></a></li>
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 md-mb-30">
              <div className="footer__area-widget">
                <h5>Information</h5>
                <div className="footer__area-widget-contact">
                  <div className="footer__area-widget-contact-item">
                    <div className="footer__area-widget-contact-item-icon">
                      <i className="fal fa-map-marked-alt"></i>
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span><a href="#">GXF4+8HQ Chippenham United Kingdom</a></span>
                    </div>
                  </div>
                  <div className="footer__area-widget-contact-item">
                    <div className="footer__area-widget-contact-item-icon">
                      <i className="fal fa-envelope-open-text"></i>
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span><a href="mailto:help.info@gamil.com">help.info@gamil.com</a></span>
                    </div>
                  </div>
                  <div className="footer__area-widget-contact-item">
                    <div className="footer__area-widget-contact-item-icon">
                      <i className="fal fa-phone-alt"></i>
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span><a href="tel:+123(458)585568">+123 (458) 585 568</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-7">
              <div className="footer__area-widget">
                <h5>Subscribe</h5>
                <div className="footer__area-widget-subscribe">
                  <form action="#">
                    <input type="text" name="email" placeholder="Email Address" required />
                    <button type="submit"><i className="fal fa-hand-pointer"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
                <div className="copyright__area-left md-t-center">
                  <p>
                    Copyright © 2022 <a href="https://themeforest.net/user/themeori/portfolio">ThemeOri</a> Website by <a href="Index">Hostily</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-5">
                <div className="copyright__area-right t-right md-t-center">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Footer Area End */}
    



    </div>
  );
};

export default Index3;