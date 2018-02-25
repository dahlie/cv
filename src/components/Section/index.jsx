import React, { Fragment } from 'react';

import { Row, Separator } from '../Layout';
import Item from '../Item';

import styles from './section.scss';

export default class Section extends React.PureComponent {
  render() {
    const { id, title, items } = this.props;

    return (
      <Fragment>
        <Separator />
        <Row rowType='title'>
          <h2 className={styles.title}>{title}</h2>
        </Row>
        {
          items.map((item, index) =>
            <Row key={index}>
              <Item {...item} />
            </Row>)
        }
      </Fragment>
    )
  }
}
