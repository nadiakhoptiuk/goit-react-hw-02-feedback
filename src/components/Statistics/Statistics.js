import React, { Component } from 'react';
import s from './Statistic.module.css';

export default class Statistic extends Component {
  render() {
    const { reportTypes, state } = this.props;
    return (
      <ul className="reportList">
        {reportTypes.map((reportType, index) => (
          <li key={reportType} className={s.statItem}>
            <p className={s.reportType}>{reportType}:</p>
            <span>{state[reportType]}</span>
          </li>
        ))}
      </ul>
    );
  }
}
