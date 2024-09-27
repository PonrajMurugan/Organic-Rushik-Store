import React from 'react';
import './acheivers.css';
// import carousel1 from '../images/Banner 1.jpg';
// import carousel2 from '../images/Banner 2.jpg';
// import carousel3 from '../images/Banner 3.jpg';

import carousel1 from '../images/Personal care 2.jpg';
import carousel2 from '../images/Veterinary Banner.jpg';
import carousel3 from '../images/Grocery Banner.jpg';

const Acheivers = () => {
    return (
        <div data-aos="fade-down" className='ach-sec'>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <i className="fas fa-trophy" style={{ fontSize: '2rem', color: '#007bff' }}></i>
            </div>
            <h1 style={{ textAlign: 'center' }} className='ach-title'>Our Achievers</h1>

            <div className='ban3 container'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner ach-img">
                    <div className="carousel-item">
                            <img src={carousel3} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                            <img src={carousel1} className="d-block w-100" alt="..."/>
                        </div>
                       
                        <div className="carousel-item">
                            <img src={carousel2} className="d-block w-100" alt="..."/>
                        </div>
                     
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Acheivers;
