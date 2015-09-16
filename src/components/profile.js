import React from 'react'

import Intro from './intro'
import Section from './section'
import { Terminator } from './row'

export default class Profile extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-sm-10 col-md-offset-2 col-sm-offset-1 resume-container'>
            <Intro {...this.props.data.personal}  />
            <div className='timeline__wrap'>
              {this.props.data.sections.map((section, index) => <Section key={index} {...section} /> )}
              <Terminator />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
