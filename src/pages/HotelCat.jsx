import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const HotelCat = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const roomType = location.state;

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

  // Filtering the rooms based on availability and roomType
  const filteredRooms = rooms.filter(
    (room) => room.status === "available" && room.roomType.includes(roomType)
  );

  return (
    <div>
      {/* Page Banner Start */}
      <div
        className="page__banner"
        style={{ backgroundImage: "url('/assets/img/banner/page-banner-5.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>{roomType} Rooms List</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><span>-</span>{roomType} Rooms List</li>
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
              {/* Conditional rendering based on filtered rooms */}
              {filteredRooms.length > 0 ? (
                filteredRooms.map((room) => (
                  <div className="room__list-item" key={room._id}>
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
                        <button
                          onClick={() => {
                            if (localStorage.getItem('user')) {
                              navigate(`/HotelCat/${room._id}`)
                            }else{
                              navigate('/LoginPage')
                            }
                          }}
                          className="simple-btn"
                          style={{ backgroundColor: "#B89146", color: "white", padding: 10, marginTop: 5 }}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Display message if no rooms are available
                <p style={{ textAlign: 'center', fontSize: '20px', color: 'red' }}>
                  No rooms available for "{roomType}".
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Room List End */}
    </div>
  );
};

export default HotelCat;
