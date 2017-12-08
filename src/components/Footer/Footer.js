import React from 'react';
import './Footer.css'

// stateless component
const Footer = () => {
  return (
    <div>
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>Footer is right here Footer is right hereFooter is right hereFooter is right hereFooter is right hereFooter is right hereFooter is right here</p>
            </div>
            <div className="column has-text-right">
              <a className="icon"><i className="fa fa-facebook"></i></a>
              <a className="icon"><i className="fa fa-twitter"></i></a>

            </div>
          </div>

        </div>

      </footer>
    </div>
  );
}

export default Footer;
