import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
     {/* <Header/> */}


      {/* Banner Area Start */}
      <div className="banner__area" style={{ backgroundImage: 'url(/assets/img/banner-1.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner__area-title">
                <h1>The Best Hotel<span>Deals in the World</span></h1>
                <div className="banner__area-title-video">
                  <div className="video__play">
                    <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <form action="#">
              <div className="check__area">
                <div className="check__area-item">
                  <p>Check In<input id="date" type="date" /></p>
                </div>
                <div className="check__area-item">
                  <p>Check Out<input id="date2" type="date" /></p>
                </div>
                <div className="check__area-item">
                  <div className="check__area-item-Room">
                    <p>Room</p>
                    <select name="select">
                      <option value="1">1 Room</option>
                      <option value="2">2 Room</option>
                      <option value="3">3 Room</option>
                      <option value="4">4 Room</option>
                      <option value="5">5 Room</option>
                    </select>
                  </div>
                </div>
                <div className="check__area-item button">
                  <button className="theme-btn" type="submit">Check Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Banner Area End */}


    

      {/* Accommodations Area Start */}
      <div className="accommodations__area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 lg-mb-30">
              <div className="accommodations__area-title">
                <span className="subtitle__one">Accommodations</span>
                <h2>Welcome Our Hotels And Resorts</h2>
                <p>Savvy travelers are looking for more than just the next destination on the map. They are looking for a memorable experience and to make new friends along the way.</p>
                <a className="theme-btn" href="about.jsx">Read More<i className="fal fa-long-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="accommodations__area-right">
                <div className="accommodations__area-right-image">
                  <img src="/assets/img/hotel/hotel-1.jpg" alt="" />
                  <div className="accommodations__area-right-image-two">
                    <img src="/assets/img/hotel/hotel-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accommodations Area End */}

  <div className="deluxe__area section-padding">
    <div className="container">
        <div className="row align-items-end mb-60">
            <div className="col-xl-5">
                <div className="deluxe__area-title">
                    <span className="subtitle__one">Deluxe and Luxury</span>
                    <h2>Our Luxury Rooms</h2>
                </div>                    
            </div>
            <div className="col-xl-7">
                <div className="deluxe__area-btn">
                    <ul>
                        <li className="active" data-filter="*">All Rooms</li>
                        <li data-filter=".luxury">Luxury</li>
                        <li data-filter=".single">Single</li>
                        <li data-filter=".suite">Small Suite</li>
                        <li data-filter=".family">Family</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row deluxe__area-active">
            <div className="col-xl-3 col-lg-4 mb-30 suite">
                <div className="deluxe__area-item deluxe__area-hover"> 
                    <div className="deluxe__area-item-image">
                        <img className="img__full" src="/assets/img/luxury/luxury-1.jpg" alt="Small Suite" />
                    </div>
                    <div className="deluxe__area-item-content"> 
                        <h6><a href="#"><span>$134</span> / Night</a></h6>
                        <h4><a href="RoomDetails">Small Suite</a></h4>
                        <a className="simple-btn" href="Contact.jsx"><i className="far fa-chevron-right"></i>Booking Now</a> 
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-8 mb-30 suite">
                <div className="deluxe__area-item deluxe__area-hover"> 
                    <div className="deluxe__area-item-image">
                        <img className="img__full" src="/assets/img/luxury/luxury-2.jpg" alt="Deluxe Room" />
                    </div>
                    <div className="deluxe__area-item-content"> 
                        <h6><a href="#"><span>$199</span> / Night</a></h6>
                        <h4><a href="RoomDetails">Deluxe Room</a></h4>
                        <a className="simple-btn" href="Contact.jsx"><i className="far fa-chevron-right"></i>Booking Now</a> 
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 mb-30 family">
                <div className="deluxe__area-item deluxe__area-hover"> 
                    <div className="deluxe__area-item-image">
                        <img className="img__full" src="/assets/img/luxury/luxury-3.jpg" alt="Family Room" />
                    </div>
                    <div className="deluxe__area-item-content"> 
                        <h6><a href="#"><span>$319</span> / Night</a></h6>
                        <h4><a href="RoomDetails">Family Room</a></h4>
                        <a className="simple-btn" href="Contact.jsx"><i className="far fa-chevron-right"></i>Booking Now</a> 
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-8 lg-mb-30 single">
                <div className="deluxe__area-item deluxe__area-hover"> 
                    <div className="deluxe__area-item-image">
                        <img className="img__full" src="/assets/img/luxury/luxury-4.jpg" alt="Single Room" />
                    </div>
                    <div className="deluxe__area-item-content"> 
                        <h6><a href="#"><span>$169</span> / Night</a></h6>
                        <h4><a href="RoomDetails">Single Room</a></h4>
                        <a className="simple-btn" href="Contact.jsx"><i className="far fa-chevron-right"></i>Booking Now</a> 
                    </div>
                </div>
            </div>
            <div className="col-xl-6 luxury">
                <div className="deluxe__area-item deluxe__area-hover"> 
                    <div className="deluxe__area-item-image">
                        <img className="img__full" src="/assets/img/luxury/luxury-5.jpg" alt="Luxury Room" />
                    </div>
                    <div className="deluxe__area-item-content"> 
                        <h6><a href="#"><span>$249</span> / Night</a></h6>
                        <h4><a href="RoomDetails">Luxury Room</a></h4>
                        <a className="simple-btn" href="Contact.jsx"><i className="far fa-chevron-right"></i>Booking Now</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


      {/* Video Area Start */}
      <div className="video__area" style={{ backgroundImage: 'url(/assets/img/video.jpg)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="video__area-title">
                <h2>Book hotel Rooms, get deals & book flights online.</h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-4">
              <div className="video__area-right">
                <div className="video__play">
                  <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area End */}
      
      
      {/* Services Area Start */}
      <div className="services__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src="/assets/img/icon/cleaning.png" alt="" />
                </div>
                <div className="services__area-item-content">
                  <h5><a href="#">Room Cleaning</a></h5>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src="/assets/img/icon/wifi.png" alt="" />
                </div>
                <div className="services__area-item-content">
                  <h5><a href="#">Room Wifi</a></h5>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src="/assets/img/icon/location.png" alt="" />
                </div>
                <div className="services__area-item-content">
                  <h5><a href="#">Pickup & Drop</a></h5>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Area End */}

      {/* Feature Area Start */}
      <div className="feature__area">
        <div className="container">
          <div className="row align-items-center bg-left mb-60">
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src="/assets/img/features/feature-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Our Food</span>
                  <h2>Restaurant Silo</h2>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                  <a className="theme-border-btn" href="services-details.jsx">Read More<i className="fal fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-right mb-60">
            <div className="col-xl-6 col-lg-6 order-last order-lg-first">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Read Our Books</span>
                  <h2>The Library</h2>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                  <a className="theme-border-btn" href="services-details.jsx">Read More<i className="fal fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src="/assets/img/features/feature-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-left mb-60">
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src="/assets/img/features/feature-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Fitness Equipment</span>
                  <h2>Exercise equipment</h2>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                  <a className="theme-border-btn" href="services-details.jsx">Read More<i className="fal fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-right">
            <div className="col-xl-6 col-lg-6 order-last order-lg-first">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Experiences</span>
                  <h2>Swimming Pool</h2>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                  <a className="theme-border-btn" href="services-details.jsx">Read More<i className="fal fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src="/assets/img/features/feature-4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Area End */}

      {/* Testimonial Area Start */}
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <div className="swiper testimonial__slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img className="img__full" src="/assets/img/avatar/testimonial-1.jpg" alt="" />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>David Beckham</h4>
                          <span>UX Designer</span>
                          <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img className="img__full" src="/assets/img/avatar/testimonial-2.jpg" alt="" />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>David Fincher</h4>
                          <span>UX Designer</span>
                          <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img className="img__full" src="/assets/img/avatar/testimonial-3.jpg" alt="" />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>Ridley Scott</h4>
                          <span>UX Designer</span>
                          <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial__area-item-dots">
                  <div className="pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Area End */}

      {/* Blog Area Start */}
      <div className="blog__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog__area-title text-center">
                <h2>From Our Blog</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <img className="img__full" src="/assets/img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="blog__area-item-content">
                  <h4><a href="#">Vacation Comforts</a></h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <img className="img__full" src="/assets/img/blog/blog-2.jpg" alt="" />
                </div>
                <div className="blog__area-item-content">
                  <h4><a href="#">The Silo Experience</a></h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <img className="img__full" src="/assets/img/blog/blog-3.jpg" alt="" />
                </div>
                <div className="blog__area-item-content">
                  <h4><a href="#">Hotel Stay Updates</a></h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End */}

      {/* <Footer/> */}
    </div>);};

export default Home;
