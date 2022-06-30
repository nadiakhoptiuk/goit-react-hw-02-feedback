import React, { Component } from 'react';
import Container from './Container';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = type => {
    console.log(type);

    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const types = Object.keys(this.state);

    return (
      <>
        <section className="feedbackSection section">
          <Container>
            <h1 className="title">Please leave feedback</h1>

            <FeedbackButtons btnTypes={types} onIncrease={this.increase} />
          </Container>
        </section>

        <section className="reportSection section">
          <Container>
            <h1 className="title">Statistic</h1>
            <Statistics reportTypes={types} state={this.state} />
          </Container>
        </section>
      </>
    );
  }
}
