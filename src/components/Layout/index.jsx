import React from 'react'
import classnames from 'classnames';

import styles from './layout.scss';

const createRowComponent = (classes = '', rowType = 'progress') => {
  const RowComponent = ({ classes, rowType, children }) => (
    <div className={classnames('row', classes)}>
      <div className='col-1 d-sm-none d-md-block' />
      <div className={classnames('col-2 d-sm-none d-md-block', styles[rowType])}/>
      <div className={classnames('col-8 col-sm-12 col-md-8', styles.item)}>
        <div>
          {children}
        </div>
      </div>
      <div className='col-1 d-sm-none d-md-block' />
    </div>
  );

  RowComponent.defaultProps = {
    classes,
    rowType,
  };

  return RowComponent;
}

export const Row = createRowComponent();

export const Separator = createRowComponent('separator');

export const Terminator = createRowComponent('separator', 'end')
