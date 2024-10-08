import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 
import { Provider } from 'react-redux';
import store from './Components/Redux/store';

import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init({
  duration: 1500, 
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
); 
