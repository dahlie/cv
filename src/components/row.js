import React from 'react'
import polyfill from 'object.assign/polyfill'
const assign = polyfill()

export class Row extends React.Component {
  render() {
    return (
      <div className={'row line ' + this.props.classNames}>
        <div className='col-md-1 hidden-sm hidden-xs' />
        <div className={'col-md-2 hidden-sm hidden-xs timeline__' + this.props.rowType} />
        <div className='col-md-8 timeline__item'>
          <div className='line-content'>
            {this.props.children}
          </div>
        </div>
        <div className='col-md-1 hidden-sm hidden-xs' />
      </div>
    )
  }
}

Row.defaultProps = {
  classNames: '',
  rowType: 'progress'
}

export class Separator extends Row { }

Separator.defaultProps = assign({}, Row.defaultProps, {
  classNames: 'timeline__margin',
})

export class Terminator extends Row { }

Terminator.defaultProps = assign({}, Row.defaultProps, {
  classNames: 'timeline__margin',
  rowType: 'end'
})
