import React, { Component } from 'react';
import Container from './Container';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const countsArr = Object.values(this.state);

    return countsArr.reduce((prevVal, currVal) => {
      return prevVal + currVal;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const types = Object.keys(this.state);
    const {
      state,
      increase,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const totalCount = countTotalFeedback();

    return (
      <>
        <section className="feedbackSection section">
          <Container>
            <p className="title">Please leave feedback</p>

            <FeedbackButtons btnTypes={types} onIncrease={increase} />
          </Container>
        </section>

        <section className="reportSection section">
          <Container>
            <p className="title">Statistics</p>
            {!totalCount ? (
              <p>No feedback given</p>
            ) : (
              <Statistics
                reportTypes={types}
                state={state}
                onTotalCount={totalCount}
                onPositivePercentage={countPositiveFeedbackPercentage}
              />
            )}
          </Container>
        </section>
      </>
    );
  }
}
