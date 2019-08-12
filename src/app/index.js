import React, { Fragment } from 'react';
import '../css/App.css';

// import Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import IndexSlider from './Components/IndexSlider'
import News from './Components/News'
import Events from './Components/Events'
import AboutUs from './Components/AboutUs'



function Index() {  
  return (
    <Fragment>
      <img alt="heading" src="http://clagnut.com/sandbox/imagetests/wideimg.png" height="100px" width="100%" />
      <Header />
      <IndexSlider />
      <Events />
      <News />
      <AboutUs />
     
      <Footer />
    </Fragment>
  );
}

export default Index;
