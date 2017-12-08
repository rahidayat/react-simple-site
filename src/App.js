import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact={true} path="/" component={Home} />
        <Footer/>
      </div>
    );
  }
}

export default App;
