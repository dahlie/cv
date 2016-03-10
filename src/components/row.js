import React, { Component } from 'react'
import polyfill from 'object.assign/polyfill'
const assign = polyfill()

function createRow(classNames = '', rowType = 'progress') {
  return class Row extends Component {
    static defaultProps = {
      classNames,
      rowType
    }

    render() {
      const { classNames, rowType, children } = this.props;

      return (
        <div className={'row line ' + classNames}>
          <div className='col-md-1 hidden-sm hidden-xs' />
          <div className={'col-md-2 hidden-sm hidden-xs timeline__' + rowType} />
          <div className='col-md-8 timeline__item'>
            <div className='line-content'>
              {children}
            </div>
          </div>
          <div className='col-md-1 hidden-sm hidden-xs' />
        </div>
      )
    }
  };
}

export const Row = createRow();

export const Separator = createRow('timeline__margin');

export const Terminator = createRow('timeline__margin', 'end')
