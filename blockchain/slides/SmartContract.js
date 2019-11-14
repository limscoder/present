import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/smart-contract.png';

export default function () {
  return (
    <Background>
      <Title>Ethereum Smart Contracts</Title>
      <img src={ imgSrc } alt="smart contract" />
    </Background>);
}
