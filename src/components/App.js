import React, { Component } from 'react';
import Container from './Container';
import FeedbackButton from './FeedbackButton';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const types = Object.keys(this.state);
    console.log(types);

    return (
      <section className="section">
        <Container>
          <h1 className="title">Please leave feedback</h1>
          <ul className="btnList">
            {types.map(type => (
              <FeedbackButton key={type} type={type} />
            ))}
          </ul>
        </Container>
      </section>
    );
  }
}
