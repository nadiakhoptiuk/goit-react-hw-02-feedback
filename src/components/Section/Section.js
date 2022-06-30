import React, { Component } from 'react';
import s from './Section.module.css';

export default class Section extends Component {
  render() {
    return <section className={s.section}>{this.props.children}</section>;
  }
}
