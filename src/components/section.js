import React from 'react'

import { Row, Separator } from './row'
import Item from './item'

export default class Section extends React.Component {
  render() {
    return (
      <section className={'timeline ' + this.props.id}>
        <Separator />
        <Row rowType='title'>
          <h2 className='section__title'>{this.props.title}</h2>
        </Row>
        {
          this.props.items.map((item, index) =>
            <Row><Item key={index} {...item} /></Row>)
        }
      </section>
    )
  }
}
