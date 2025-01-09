import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div> {/* Header Area Start */}
      <div className="header__sticky one">
        <div className="header__area page">
          <div className="container custom__container">
            <div className="header__area-menubar">
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                  <a href="index.html"><img src="/assets/img/logo.png" alt="Logo" /></a>
                  <div className="responsive-menu"></div>
                </div>
              </div>
              <div className="header__area-menubar-right">
                <div className="header__area-menubar-right-menu menu-responsive">
                  <ul id="mobilemenu">
                    <li><Link to="/">Home</Link>

                    </li>
                    <li className="menu-item-has-children"><Link to="About">Pages</Link>
                      <ul className="sub-menu">
                        <li><Link to="About">About</Link></li>
                        <li><Link to="ServicesTeam">Team</Link></li>
                        {/* <li><a href="ServicesDetails">Services Details</a></li> */}
                        {/* <li><a href="ComingSoon">Coming Soon</a></li> */}
                      </ul>
                    </li>
                    {/* <li ><Link to="RoomStyle">Room</Link>

                    </li> */}
                    <li><Link to="RoomDetails">Rooms</Link>

                    </li>
                    <li><Link to="Contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              {!user && <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-btn">
                  <a className="theme-btn" href="LoginPage">Login<i className="fal fa-long-arrow-right"></i></a>
                </div>
              </div>
              }

              {user && <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-btn">
                  <Link to="profile"><i style={{ color: "white", fontSize: "30px" }} className="far fa-user-circle"></i></Link>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
      {/* Header Area End */}</div>
  )
}

export default Header