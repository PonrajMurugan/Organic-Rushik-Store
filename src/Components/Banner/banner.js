import React from 'react';
import './banner.css';
// import carousel1 from '../images/Banner 1.jpg';
// import carousel2 from '../images/Banner 2.jpg';
// import carousel3 from '../images/Banner 3.jpg';

import carousel1 from '../images/Agriculture banner.jpg';
import carousel2 from '../images/Grocery Banner.jpg';
import carousel3 from '../images/Health care banner.jpg';

import carousel4 from '../images/Frame 3 (1).jpg';
// import carousel5 from '';
// import carousel6 from '';

const Banner = () => {
    return (
        <div className='ban-sec'>

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ban-images">
                   
                    <div class="carousel-item active">
                    <img src={carousel4} class="d-block w-100" alt="..."/>
                    </div>

                    {/* <div class="carousel-item">
                    <img src={carousel5} class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                    <img src={carousel6} class="d-block w-100" alt="..."/>
                    </div> */}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            
        </div>
    );
};

export default Banner;