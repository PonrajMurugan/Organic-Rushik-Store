import React from 'react';
import './promitional.css';
import carousel1 from '../images/Personal Care.jpg';
import carousel2 from '../images/Personal Care-1.jpg';
import carousel3 from '../images/Personal Care-2.jpg';
import carousel4 from '../images/Agriculture banner.jpg';
import carousel5 from '../images/Grocery Banner.jpg';
import carousel6 from '../images/Health care banner.jpg';
import Slider from "react-slick"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTag } from '@fortawesome/free-solid-svg-icons'; 



const Banners = () => {
    const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6]; 

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
    return (
        <div  data-aos="fade-up" className="carousel-container">
            <div className="promotion-header">
                <FontAwesomeIcon icon={faTag} className="promotion-icon" /> 
                <h1 className="promotion-title">Promotional</h1>
                <div className="underline"></div>
            </div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banners;
