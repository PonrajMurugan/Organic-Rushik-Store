import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './navBar.css';
import { useSelector } from 'react-redux';
import logo from '../images/logo Rushik.jpeg';
import logo2 from '../images/logo 2.jpeg';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleCardClick = () => {
      window.scrollTo(0, 0); 
  };

    return (



        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bk">
                <div className="container-fluid container">
                    {/* <Link className="navbar-brand" to="/">Logo</Link> */}
                    <Link to='/' onClick={handleCardClick}>
      <img className='logo' src={logo} alt='Logo' />
    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item dropdown hover-dropdown">
    <Link className="nav-link dropdown-toggle prolef" to="#" role="button">
      &nbsp;    &nbsp; Our Products <i class="bi bi-arrow-down-short"></i>
    </Link>
    <ul className="dropdown-menu">
      <li className='drop'>
        <Link className="dropdown-item" onClick={handleCardClick} to="/veterinary">Veterinary</Link>
        <div className="product-description">Animal health products and services</div>
      </li>
      <li className='drop'>
        <Link  className="dropdown-item" onClick={handleCardClick} to="/health-care">Health Care</Link>
        <div className="product-description">Products for health and well-being</div>
      </li>
      <li className='drop'>
        <Link  className="dropdown-item" onClick={handleCardClick} to="/personal-care">Personal Care</Link>
        <div className="product-description">Personal grooming and hygiene items</div>
      </li>
      {/* <li className="dropdown-item">
        <Link to="/home-care">Home Care</Link>
        <div className="product-description">Household cleaning and maintenance products</div>
      </li> */}
      <li className='drop'>
        <Link  className="dropdown-item" onClick={handleCardClick} to="/agriculture">Agriculture</Link>
        <div className="product-description">Farming supplies and equipment</div>
      </li>
      <li className='drop'>
        <Link className="dropdown-item" onClick={handleCardClick} to="/grocery">Grocery</Link>
        <div className="product-description">Everyday food and drink essentials</div>
      </li>
      {/* <li className="dropdown-item">
        <Link to="/packing-promotion">Packing & Promotion</Link>
        <div className="product-description">Packaging materials and promotional items</div>
      </li> */}
    </ul>
  </li>
</ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>

                        <div className="navbar-icons ms-3">

                        <Link className="nav-link position-relative" to="/cart">
                                Cart <i className="fa fa-shopping-cart"></i>
                                {cartCount > 0 && (
                                    <span className="cart-count badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>


                            <Link className="nav-link ms-3" to="/">
                                Profile <i className="fa fa-user-circle"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
