import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/ethereum.png';

export default function () {
  return (
    <Background>
      <Title>Ethereum - Turing Complete</Title>
      <img src={ imgSrc } alt="Ethereum" />
    </Background>);
}
