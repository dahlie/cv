import React, { Fragment } from 'react';

import Intro from '../Intro';
import Section from '../Section';
import { Terminator } from '../Layout';

import './profile.scss';

export default class Profile extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { personal, sections } = data;

    return (
      <div className="container">
        <Intro {...personal} />
        {sections.map((section, index) => <Section key={index} {...section} /> )}
        <Terminator />
      </div>
    )
  }
}
