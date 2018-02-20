import React from 'react';

import Intro from '../Intro';
import Section from '../Section';
import { Terminator } from '../Layout';

import './profile.scss';

export default class Profile extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { personal, sections } = data;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-sm-12 resume-container'>
            <Intro {...personal} />
            <div className='timeline__wrap'>
              {sections.map((section, index) => <Section key={index} {...section} /> )}
              <Terminator />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
