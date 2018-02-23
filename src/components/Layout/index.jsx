import React from 'react'

import './layout.scss';

const createRowComponent = (classNames = '', rowType = 'progress') => {
  const RowComponent = ({ classNames, rowType, children }) => (
    <div className={'row ' + classNames}>
      <div className='col-1 d-sm-none d-md-block' />
      <div className={'col-2 d-sm-none d-md-block timeline__' + rowType} />
      <div className='col-8 col-sm-12 col-md-8 timeline__item'>
        <div className='line-content'>
          {children}
        </div>
      </div>
      <div className='col-1 d-sm-none d-md-block' />
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
