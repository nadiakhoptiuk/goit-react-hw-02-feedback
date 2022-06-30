import React, { Component } from 'react';
import s from './FeedbackButtons.module.css';

export default class FeedbackButtons extends Component {
  render() {
    const { btnTypes, onIncrease } = this.props;
    return (
      <ul className="btnList">
        {btnTypes.map((btnType, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={s[btnType]}
                onClick={() => onIncrease(btnType)}
              >
                {btnType}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
