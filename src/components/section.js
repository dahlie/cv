import React, { Component } from 'react';

import { Row, Separator } from './row';
import Item from './item';

export default class Section extends Component {
  render() {
    const { id, title, items } = this.props;

    return (
      <section className={'timeline ' + id}>
        <Separator />
        <Row rowType='title'>
          <h2 className='section__title'>{title}</h2>
        </Row>
        {
          items.map((item, index) =>
            <Row key={index}>
              <Item {...item} />
            </Row>)
        }
      </section>
    )
  }
}
