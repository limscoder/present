import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import transactionSrc from '../images/bitcoin-double-spend.png';

export default function () {
  return (
    <Background>
      <Title>Double Spend</Title>
      <img src={ transactionSrc } alt="double spend" />
    </Background>);
}
