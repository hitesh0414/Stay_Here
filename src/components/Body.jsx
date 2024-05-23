import React from 'react';
import CustomSlider from './CustomSlider';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';

const Body = ({ items }) => {
  return (
    <div className='father'>
      {/* Header section */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Stay ~Here</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to="/" class="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/About" class="nav-link active">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" class="nav-link active">Services</Link>
                            </li>
                            {/* class="nav-link active" */}
                            <div className='nav-button'>
                                <li>
                                  <Link to="/login">
                                  <button className="login_btn">Log in</button>
                                  </Link>
                                    
                                </li>
                                <li>
                                  <Link to="/register">
                                  <button className="register0">Register</button>
                                  </Link>
                                    
                                </li>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>

      {/* Main content section */}
      <div className="image-container">
        <img className="image" src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706745600&semt=ais" alt="Hotel" />
        <div className="text">
          <h1>Search Hotels around India</h1>
          <p>Enter your check-in and check-out dates and choose from several hotels and other places to stay!</p>
        </div>
        <section className="searchBar">
          {/* ... your existing searchBar code */}
          <div className="container_flex_space">
            <div className="text2">
              <h1 className="head2"><span>Book </span>Your Rooms</h1>
            </div>
            <div className="form">
              <form className="grid">
                <input type="date" placeholder="Check In" name="check-in" />
                <input type="date" placeholder="Check Out" name="check-out" />
                <input type="number" placeholder="Adults" />
                <input type="number" placeholder="Children" />
                <input type="submit" value="Check Availability" />
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Slider section */}
      <section className="rooms">
        <div className="container_top">
          <div className="heading">
            <h1>EXPLORE</h1>
            <h2>Our Rooms</h2>
            <p>Here are some of the high rating Hotel rooms...</p>
          </div>
        </div>
      </section>
      <CustomSlider items={items} />

      {/* Section 4 content */}
      <section className="section4">
        <h1>Seamless Stays Await: </h1>
        <section className="section4_1">
          <div className="div1">
            <p>"Discover convenience and choice with our room booking platform. Whether you're planning a business trip or a weekend getaway, our site offers a wide range of accommodations to suit every preference and budget. Browse through a diverse selection of hotels, guesthouses, and apartments in various destinations. With user-friendly features, secure booking options, and real-time availability updates, finding the perfect place for your stay has never been easier. Book with confidence and embark on your next adventure with our seamless room booking experience.</p>
          </div>
          <div className="div2">
            <img src="india-2-ss.jpg" alt="India" />
          </div>
        </section>
      </section>

      {/* ... any other content you want to add */}
      <Footer />
    </div>
  );
};

export default Body;
