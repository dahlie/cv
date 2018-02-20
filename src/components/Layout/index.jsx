import React from 'react'

import './layout.scss';

const createRowComponent = (classNames = '', rowType = 'progress') => {
  const RowComponent = ({ classNames, rowType, children }) => (
    <div className={'row line ' + classNames}>
      <div className='col-md-1 d-sm-none d-xs-none' />
      <div className={'col-md-2 d-sm-none d-xs-none timeline__' + rowType} />
      <div className='col-md-8 timeline__item'>
        <div className='line-content'>
          {children}
        </div>
      </div>
      <div className='col-md-1 hidden-sm hidden-xs' />
    </div>
  );

  RowComponent.defaultProps = {
    classNames,
    rowType,
  };

  return RowComponent;
}

export const Row = createRowComponent();

export const Separator = createRowComponent('timeline__margin');

export const Terminator = createRowComponent('timeline__margin', 'end')
