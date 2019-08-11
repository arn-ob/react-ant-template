import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './app/index'; 
import About from './app/about'; 

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
