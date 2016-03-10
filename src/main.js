import React from 'react';
import ReactDOM from 'react-dom';
import cv from './cv';

import Profile from './components/profile';

ReactDOM.render(<Profile data={cv} />, document.getElementById('app'));
