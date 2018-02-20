import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './components/Profile';

import cv from './cv';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './index.scss';

ReactDOM.render(<Profile data={cv} />, document.getElementById('app'));
