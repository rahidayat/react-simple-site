import React, { Component } from 'react';
import './Home.css'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(status => {
      return status.json();
    }).then(data => {
      // console.log(data.splice(0,6));
      let apiComments = data.splice(0,6)
      this.setState({comments: apiComments})
    })
    .catch(err => console.log(err))
  }
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

        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title"><strong>We provide superior logistics so that your business can succeed in a crazy world.</strong></p>
              </div>
              <div className="column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>


            <div className="columns pd">
              {this.state.comments.map(comment => {
                return(
                  <div className="column is-one-third">
                    <div className="card">
                      <div className="card-content">
                        <p className="title">"{comment.body}"</p>
                        <p className="subtitle">- {comment.email.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
