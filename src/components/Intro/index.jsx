import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './intro.scss';

const Intro = ({
  picture, name, title, description,
}) => (
  <div className={classnames('row', styles.intro)}>
    <div className='col-md-4'>
      <div className={styles['profile-pic']}>
        <img src={picture}></img>
      </div>
    </div>
    <div className='col-md-8'>
      <h1 className={styles.header}>
        Hi, I'm
        <span className={styles['header-name']}>{name}!</span>
      </h1>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{description}</p>
    </div>
  </div>
);

export default Intro;
