import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import City from './pages/City';
import Footer from './Footer/Footer';
import RestaurantDetails from './pages/RestaurantDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/city/:cityId" component={City} />
        <Route path="/restaurant/:restauranId" component={RestaurantDetails} />
        <Footer />
      </Router>
    );
  }
}

export default App;
