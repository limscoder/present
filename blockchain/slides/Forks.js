import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/bitcoin-fork.png';

export default function () {
  return (
    <Background>
      <Title>Forks</Title>
      <img src={ imgSrc } alt="forks" />
    </Background>);
}
