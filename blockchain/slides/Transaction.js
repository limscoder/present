import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import transactionSrc from '../images/bitcoin-transaction.png';

export default function () {
  return (
    <Background>
      <Title>Transactions</Title>
      <img src={ transactionSrc } alt="digital transaction" />
    </Background>);
}
