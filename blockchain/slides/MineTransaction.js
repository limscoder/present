import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/bitcoin-mine-transaction.png';

export default function () {
  return (
    <Background>
      <Title>Miners Get Rewards</Title>
      <img src={ imgSrc } alt="$$$" />
    </Background>);
}
