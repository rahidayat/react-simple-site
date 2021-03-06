import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    let menuActive = this.state.isToggleOn ? 'is-active' : ''

    return (
      <div className="nav has-shadow is-fixed-top">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">My Website</a>
          </div>
          <span className={`nav-toggle ${menuActive}`} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className={`nav-right nav-menu ${menuActive}`}>
            <Link to="/" className="nav-item r-item">Home</Link>
            <Link to="/fetures" className="nav-item r-item">Features</Link>
            <Link to="/about" className="nav-item r-item">About</Link>

            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon"><i className="fa fa-envelope"></i></span>
                  <span>Contact</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
