import React from 'react'
import classnames from 'classnames';

import { Row, Separator } from '../Layout'

import styles from './item.scss';

const Text = ({ content }) => content;

const LinkList = ({ content }) => (
  <div className={styles['button-container']}>
    {
      content.map((link, index) =>
        <a key={index} href={link.url} target='_blank' className={classnames('btn btn-default', styles['link-button'])}>
          <i className={'fa fa-' + link.type} />
        </a>
      )
    }
  </div>
);

const SkillList = ({ content }) => (
  <ul className={styles['skills-list']}>
    {
      content.map((item, index) =>
        <li key={index} className={styles.skill}>
          {item.label}
          <span className={styles.description}>{item.description}</span>
        </li>
      )
    }
  </ul>
);

const SchoolDetails = ({
  school, graduated, content
}) => (
  <div>
    <h4 className={styles.subtitle}>
      <i className='fa fa-university' />
      <span>{school}</span>
      <span className={styles.time}>Graduated {graduated}</span>
    </h4>
    <p className={styles.content}>{content}</p>
  </div>
);

const JobDetails = ({
  keywords, from, to, content, company, label
}) => (
  <div>
    <h4 className={styles.subtitle}>
      <i className='fa fa-briefcase' />
      <span>{company}</span>
      <span className={styles.time}>{from} - {to}</span>
    </h4>
    <p className={styles.content}>{content}</p>
    {
      keywords && keywords.length
        ? <p className={classnames(styles.content, styles.keywords)}>Keywords: {keywords.join(', ')}</p>
        : null
    }
  </div>
);

const createContentElement = (type) => {
  switch (type) {
    case 'text':
      return <Text />;

    case 'links':
      return <LinkList />

    case 'list':
      return <SkillList />

    case 'education':
      return <SchoolDetails />

    case 'work':
      return <JobDetails />

    default:
      return null;
  }
};

const Item = ({ label, type, ...rest }) => (
  <div>
    <h3 className={styles.title}>{label}</h3>
    <div className={styles.content}>
      {React.cloneElement(createContentElement(type), rest)}
    </div>
  </div>
);

export default Item;

