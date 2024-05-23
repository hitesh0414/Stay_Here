import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
function About() {


    return (
        <div className="father">
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


            <section className="section1">
                <div id="container">
                    <div className="creator-card">
                        <img src="me1.jpg" alt="Creator 1" className="creator-image" />
                        <div className="creator-name">Harsh Guleri</div>
                        <div className="creator-role">Founder & Lead Developer</div>
                        <p>
                            Harsh is our coding maestro. He turns concepts into reality, crafting seamless and robust solutions. With a knack for
                            problem-solving, he elevates our projects to new heights.
                        </p>
                    </div>

                    <div className="creator-card">
                        <img src="gurpreet.jpg" alt="Creator 2" className="creator-image" />
                        <div className="creator-name">Gurpreet Singh</div>
                        <div className="creator-role">Lead Designer</div>
                        <p>
                            Gurpreet is the visionary mind behind our designs. With a keen eye for aesthetics and a love for clean, functional designs,
                            he ensures that every project reflects our commitment to excellence.
                        </p>
                    </div>

                    <div className="creator-card">
                        <img src="Hitesh.jpg" alt="Creator 3" className="creator-image" />
                        <div className="creator-name">Hitesh Sharma</div>
                        <div className="creator-role">Content Strategist</div>
                        <p>
                            Chips is the wordsmith of our team. With a passion for storytelling and a deep understanding of audience engagement,
                            he crafts compelling narratives that resonate with our users.
                        </p>
                    </div>


                    <div className="creator-card">
                        <img src="harshit.jpg" alt="Creator 4" className="creator-image" />
                        <div className="creator-name">Harshit Mani Tripathi</div>
                        <div className="creator-role">Marketing Guru</div>
                        <p>
                            Harshit takes our projects to the world. With a strategic approach and a flair for digital marketing, she ensures our
                            creations reach the right audience and leave a lasting impression.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;