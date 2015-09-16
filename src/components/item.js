import React from 'react'

import { Row, Separator } from './row'

class LinkList extends React.Component {
  render() {
    return (
      <div className='section__button-container'>
        {
          this.props.content.map((link, index) =>
            <a href={link.url} target='_blank' className='btn btn-default'>
              <i className={'fa fa-' + link.type} />
            </a>
          )
        }
      </div>
    )
  }
}

class SkillList extends React.Component {
  render() {
    return (
      <ul className='skills__list'>
        {
          this.props.content.map((item, index) =>
            <li key={index}>{item.label}<span className='skills__desc'>{item.description}</span></li>)
        }
      </ul>
    )
  }
}

class SchoolDetails extends React.Component {
  render() {
    return (
      <div>
        <h4 className='section__item-subtitle'>
          <i className='fa fa-university' />
          <span>{this.props.school}</span>
          <span className='section__item-subtitle-time'>Graduated {this.props.graduated}</span>
        </h4>
        <p className='section__item-content'>{this.props.content}</p>
      </div>
    )
  }
}

class JobDetails extends React.Component {
  render() {
    let keywords = this.props.keywords || []

    if (keywords.length)
      keywords = <p className='section__item-content section__item-keywords'>Keywords: {keywords.join(', ')}</p>
    else
      keywords = null

    return (
      <div>
        <h4 className='section__item-subtitle'>
          <i className='fa fa-briefcase' />
          <span>{this.props.label}</span>
          <span className='section__item-subtitle-time'>{this.props.from} - {this.props.to}</span>
        </h4>
        <p className='section__item-content'>{this.props.content}</p>
        {keywords}
      </div>
    )
  }
}

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <h3 className='section__item-title'>{this.props.label}</h3>
        <p className='section__item-content'>
          { this.renderContent() }
        </p>
      </div>
    )
  }

  renderContent() {
    switch (this.props.type) {
      case 'text':
        return this.props.content
      case 'links':
        return <LinkList {...this.props} />
      case 'list':
        return <SkillList {...this.props} />
      case 'education':
        return <SchoolDetails {...this.props} />
      case 'work':
        return <JobDetails {...this.props} />
    }
  };
}
