import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'; 
// import vetImage from '../images/cat7.jpg';
// import healthCare from '../images/cat6.jpg';
// import personalCare from '../images/cat5.jpg';
// import agriculture from '../images/cat4.jpg';
// import masala from '../images/cat2.jpg';

const CardComponent = () => {
    const cards = [
        { title: 'Veterinary', image: "https://img.freepik.com/premium-vector/milk-drops-grass-cow-vector-frame-fresh-milk-product-logo-design-100-percent-natural-milk_567423-936.jpg", link: '/veterinary' },
        { title: 'Health Care', image: "https://img.freepik.com/premium-vector/health-care-brand-company-logo-design-template_477493-139.jpg", link: '/health-care' },
        { title: 'Personal Care', image: "https://i.pinimg.com/originals/6d/3f/6a/6d3f6af49e0f4584585fff39a8d80cff.jpg", link: '/personal-care' },
        { title: 'Agriculture', image: "https://thumbs.dreamstime.com/b/agriculture-logo-farm-land-design-template-vector-great-business-organic-food-production-company-319647879.jpg", link: '/agriculture' },
        { title: 'Grocery', image: "https://marketplace.canva.com/EAFzje8Pffo/1/0/1600w/canva-colorful-illustrative-organic-grocery-online-shop-logo-Alka_dqR_gQ.jpg", link: '/grocery' },
    ];

    const handleCardClick = () => {
        window.scrollTo(0, 0); 
    };

    return (
        <div  data-aos="fade-down" className="card-container">
            <h1 className='cat-title'>Category</h1>
            <div className="card-grids container">
                {cards.map((card, index) => (
                    <Link to={card.link} key={index} className="cardds" onClick={handleCardClick}>
                        <img src={card.image} alt={card.title} className="card-images" />
                        <h2 className="card-titles">{card.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
