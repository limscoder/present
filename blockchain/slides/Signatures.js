import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import signatureSrc from '../images/digital-signature-keys.png';

export default function () {
  return (
    <Background>
      <Title>Digital Signatures</Title>
      <img src={ signatureSrc } alt="digital signature" />
    </Background>);
}
