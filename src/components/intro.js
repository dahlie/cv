import React from 'react'

export default class Intro extends React.Component {
  render() {
    let description = {
      __html: this.props.description
    }

    return (
      <div className='row intro'>
        <div className='col-md-4'>
          <div className='profile-pic'>
            <img src={this.props.picture}></img>
          </div>
        </div>
        <div className='col-md-7'>
          <h1 className='intro__header'>
            Hi, I'm
            <span className='intro__header-name'>{this.props.name}!</span>
          </h1>
          <h2 className='intro__title'>{this.props.title}</h2>
          <p className='intro__content' dangerouslySetInnerHTML={description}></p>
        </div>
      </div>
    )
  }
}
