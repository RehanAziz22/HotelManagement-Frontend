import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const HotelCat = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/room');
        setRooms(response.data.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      {/* Page Banner Start */}
      <div
        className="page__banner"
        style={{ backgroundImage: "url('/assets/img/banner/page-banner-5.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Hotel Rooms List</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><span>-</span>Hotel Rooms List</li>
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
            <div className="col-xl-12">
              {rooms.filter((room) => room.status === "available").map((room) => (

                

                <div className="room__list-item">
                  <div className="room__list-item-left">
                    <div className="room__list-item-image">
                      <img src={room.imageUrl} width={"400px"} alt={`Room ${room.roomNumber}`} />
                    </div>
                  </div>
                  <div className="room__list-item-right">
                    <div className="room__list-item-right-content">
                      <h4>Room {room.roomNumber} - {room.roomType}</h4>
                      <p>Status: {room.status}</p>
                      <ul>
                        <li><i className="fal fa-bed-alt"></i> Price per night: ${room.pricePerNight}</li>
                        <li><i className="fal fa-users"></i>(2) Guest's</li>
                      </ul>
                    </div>
                    <div className="room__list-item-right-meta">
                      <div className="room__list-item-right-meta-top">
                        <span>${room.pricePerNight}/Night</span>
                        <p><i className="fas fa-star"></i><span>4.5</span> Reviews</p>
                      </div>
                      <button onClick={()=>navigate(`/HotelCat/${room._id}`)} className="simple-btn" style={{ backgroundColor: "#B89146", color: "white", padding: 10, marginTop: 5 }} href="#">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Room List End */}
      {/* <Footer /> */}
    </div>
  );
};

export default HotelCat;
