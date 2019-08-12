import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Carousel } from 'antd';

function Index() {  
  return (
    <Fragment>
      <Header />

      <Carousel autoplay>
        <div>
          <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%"/>
        </div>
        <div>
          <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%"/>
        </div>
        <div>
          <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%"/>
        </div>
        <div>
          <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%"/>
        </div>
      </Carousel>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Index;
