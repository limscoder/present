import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/server.png';

export default function () {
  return (
    <Background>
      <Title>Before Bitcoin</Title>
      <img src={ imgSrc } alt="central server" />
    </Background>);
}
