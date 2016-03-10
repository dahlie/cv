import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    const { picture, name, title } = this.props;

    const description = {
      __html: this.props.description
    };

    return (
      <div className='row intro'>
        <div className='col-md-4'>
          <div className='profile-pic'>
            <img src={picture}></img>
          </div>
        </div>
        <div className='col-md-7'>
          <h1 className='intro__header'>
            Hi, I'm
            <span className='intro__header-name'>{name}!</span>
          </h1>
          <h2 className='intro__title'>{title}</h2>
          <p className='intro__content' dangerouslySetInnerHTML={description}></p>
        </div>
      </div>
    )
  }
}
