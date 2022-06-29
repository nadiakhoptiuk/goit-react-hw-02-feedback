import React, { Component } from 'react';
import s from './FeedbackButton.module.css';

export default class FeedbackButton extends Component {
  render() {
    const { type } = this.props;
    return (
      <li>
        <button className={s[type]} type="button">
          {type}
        </button>
      </li>
    );
  }
}
