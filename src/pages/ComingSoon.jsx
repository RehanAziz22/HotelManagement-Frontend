import React from 'react';

const ComingSoon = () => {
  return (
    // Coming Soon Start
    <div className="coming__soon" style={{ backgroundImage: "url('/assets/img/features/coming-soon.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="coming__soon-title">
              <h1>Coming Soon</h1>
              <div className="countdown">
                <div className="countdown-item">
                  <h3 className="days">00</h3>
                  <span>Days</span>
                </div>
                <div className="countdown-item">
                  <h3 className="hours">00</h3>
                  <span>Hours</span>
                </div>
                <div className="countdown-item">
                  <h3 className="minutes">00</h3>
                  <span>Minutes</span>
                </div>
                <div className="countdown-item">
                  <h3 className="seconds">00</h3>
                  <span>Seconds</span>
                </div>
              </div>
              <div className="subscribe">
                <h6>Subscribe to Our newsletter stay with us</h6>
                <form action="#">
                  <input type="email" name="email" placeholder="Email Address" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Coming Soon End
  );
};

export default ComingSoon;
