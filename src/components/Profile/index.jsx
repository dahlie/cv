import React, { Fragment } from 'react';

import Intro from '../Intro';
import Section from '../Section';
import { Terminator } from '../Layout';

const Profile = ({ data }) => (
  <div className="container">
    <Intro {...data.personal} />
    {data.sections.map((section, index) => <Section key={index} {...section} /> )}
    <Terminator />
  </div>
);

export default Profile;
