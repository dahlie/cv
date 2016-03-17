import React, { Component } from 'react'

import { Row, Separator } from './row'

class LinkList extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className='section__button-container'>
        {
          content.map((link, index) =>
            <a key={index} href={link.url} target='_blank' className='btn btn-default'>
              <i className={'fa fa-' + link.type} />
            </a>
          )
        }
      </div>
    )
  }
}

class SkillList extends Component {
  render() {
    const { content } = this.props;

    return (
      <ul className='skills__list'>
        {
          content.map((item, index) =>
            <li key={index}>{item.label}<span className='skills__desc'>{item.description}</span></li>)
        }
      </ul>
    )
  }
}

class SchoolDetails extends Component {
  render() {
    const { school, graduated, content } = this.props;

    return (
      <div>
        <h4 className='section__item-subtitle'>
          <i className='fa fa-university' />
          <span>{school}</span>
          <span className='section__item-subtitle-time'>Graduated {graduated}</span>
        </h4>
        <p className='section__item-content'>{content}</p>
      </div>
    )
  }
}

class JobDetails extends Component {
  render() {
    const { keywords, from, to, content, company, label } = this.props;

    return (
      <div>
        <h4 className='section__item-subtitle'>
          <i className='fa fa-briefcase' />
          <span>{company}</span>
          <span className='section__item-subtitle-time'>{from} - {to}</span>
        </h4>
        <p className='section__item-content'>{content}</p>
        {
          keywords && keywords.length
            ? <p className='section__item-content section__item-keywords'>Keywords: {keywords.join(', ')}</p>
            : null
        }
      </div>
    )
  }
}

export default class Item extends Component {
  render() {
    const { label } = this.props;

    return (
      <div>
        <h3 className='section__item-title'>{label}</h3>
        <div className='section__item-content'>
          { this.renderContent() }
        </div>
      </div>
    )
  }

  renderContent() {
    const { type, content } = this.props;

    switch (type) {
      case 'text':
        return content
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
