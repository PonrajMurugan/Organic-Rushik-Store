import React from 'react';
import './scrollTop.css';

const ScrollTop = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };


    return (
        <div>
                <div className="scroll-to-top" onClick={handleScrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
        </div>
    );
};

export default ScrollTop;