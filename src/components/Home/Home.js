import React, { Component } from 'react';
import './Home.css'


class Home extends Component {
  render() {
    let heading = "Knowledge is the light"
    let subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{ heading }</h1>
              <div className="is-two-thirds column is-padingless">
                <h2 className="subtitle is-4">{ subtitle }</h2>
              </div>
              <a className="button is-large is-primary" id="learn">Learn More</a>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
