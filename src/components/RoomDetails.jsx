import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './roomdetails.css'; // Ensure you have the necessary CSS for styling

const RoomDetails = ({ items }) => {
    const { id } = useParams();
    const room = items.find(item => item.id.toString() === id);

    if (!room) {
        return <div>Room not found</div>;
    }

    return (
        <div className="father">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Stay ~Here</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link active">Services</Link>
                            </li>
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
            <div className="containerX">
                <div className="first-cont">
                    <div className="imageCont">
                        <img className="image-in" src={room.image} alt={room.title} />
                    </div>
                    <div className="Discrp">
                        <div className="uppCorn">
                            <h1>{room.title}</h1>
                            <p><b>Price: ₹</b>{room.price}</p>
                            <p><b>Room Type:</b> {room.roomType}</p>
                            <p><b>Size:</b> {room.size}</p>
                            <p><b>Bed:</b> {room.bed}</p>
                            <p><b>Bathroom:</b> {room.bathroom}</p>
                            <p><b>View:</b> {room.view}</p>
                            <p><b>Connectivity:</b> {room.connectivity}</p>
                        </div>
                    </div>
                </div>

                <div className="lowCorn">
                    <div className="additional-details">
                        <h2>More Features :-</h2>
                        <p><b>Entertainment: </b> {room.entertainment}</p>
                        <p><b>Amenities:</b> {room.amenities}</p>
                        <p><b>Services:</b> {room.services}</p>
                    </div>
                    <Link to="/">
                        <button className="back-home">Back to Home</button>
                    </Link>
                </div>

                {/* <button className="book-now-btn">BOOK NOW</button> */}

            </div>
        </div>
    );
};

export default RoomDetails;
