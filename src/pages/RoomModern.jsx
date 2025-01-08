import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';


const RoomModern = () => {
  return (
   
     <div> 
   
   <Header/>
      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: 'url(/assets/img/banner/page-banner-4.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room Modern</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><Link to="Index">Home</Link></li>
                    <li><span>-</span>Room Modern</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Modern Room Area Start */}
      <div className="modern__room section-padding">
        <div className="container">
          <div className="row">
            {[
              { title: 'Double Room', price: '$219/Night', imgSrc: '/assets/img/hotel/hotel-10.jpg', beds: '(3) bed\'s', guests: '(4) Guest\'s', rating: 4.8, link: 'RoomDetails' },
              { title: 'Small Suite', price: '$188/Night', imgSrc: '/assets/img/hotel/hotel-11.jpg', beds: '(2) bed\'s', guests: '(3) Guest\'s', rating: 4.4, link: 'RoomDetails' },
              { title: 'Luxury room', price: '$229/Night', imgSrc: '/assets/img/hotel/hotel-12.jpg', beds: '(3) bed\'s', guests: '(6) Guest\'s', rating: 3.7, link: 'RoomDetails' },
              { title: 'Junior Suite', price: '$205/Night', imgSrc: '/assets/img/hotel/hotel-13.jpg', beds: '(2) bed\'s', guests: '(4) Guest\'s', rating: 3.9, link: 'RoomDetails' },
              { title: 'Superior Room', price: '$249/Night', imgSrc: '/assets/img/hotel/hotel-14.jpg', beds: '(3) bed\'s', guests: '(7) Guest\'s', rating: 2.9, link: 'RoomDetails' },
              { title: 'Single Room', price: '$167/Night', imgSrc: '/assets/img/hotel/hotel-15.jpg', beds: '(1) bed\'s', guests: '(2) Guest\'s', rating: 4.8, link: 'RoomDetails' },
              { title: 'Deluxe Room', price: '$211/Night', imgSrc: '/assets/img/hotel/hotel-16.jpg', beds: '(2) bed\'s', guests: '(5) Guest\'s', rating: 3.5, link: 'RoomDetails' },
              { title: 'Standard Room', price: '$189/Night', imgSrc: '/assets/img/hotel/hotel-17.jpg', beds: '(3) bed\'s', guests: '(6) Guest\'s', rating: 4.9, link: 'RoomDetails' },
              { title: 'Family Room', price: '$237/Night', imgSrc: '/assets/img/hotel/hotel-18.jpg', beds: '(2) bed\'s', guests: '(4) Guest\'s', rating: 2.9, link: 'RoomDetails' }
            ].map((room, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={index}>
                <div className="deluxe__three-item">
                  <div className="deluxe__three-item-image">
                    <img src={room.imgSrc} alt={room.title} />
                    <div className="deluxe__three-item-image-content">
                      <h4><Link to={room.link}>{room.title}</Link><span>{room.price}</span></h4>
                      <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                      <div className="deluxe__three-item-image-content-meta">
                        <ul>
                          <li><i className="fal fa-bed-alt"></i>{room.beds}</li>
                          <li><i className="fal fa-users"></i>{room.guests}</li>
                        </ul>
                      </div>
                      <div className="deluxe__three-item-image-content-bottom">
                        <a className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</a>
                        <p><i className="fas fa-star"></i><span>{room.rating}</span>2k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modern Room Area End */}
  



      <Footer/>
    </div>
  )
}

export default RoomModern