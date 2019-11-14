import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import imgSrc from '../images/blockchain.png';

export default function () {
  return (
    <Background>
      <Title>Blockchain</Title>
      <img src={ imgSrc } alt="blockchain" />
    </Background>);
}
