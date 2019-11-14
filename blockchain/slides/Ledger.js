import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/bitcoin-ledger.png';

export default function () {
  return (
    <Background>
      <Title>Complete Transaction History</Title>
      <img src={ imgSrc } alt="transaction history" />
    </Background>);
}
