import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import transactionSrc from '../images/bitcoin-transaction-detail.png';

export default function () {
  return (
    <Background>
      <Title>Transaction Details</Title>
      <img src={ transactionSrc } alt="digital transaction" />
    </Background>);
}
