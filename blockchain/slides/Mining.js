import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

export default function () {
  return (
    <Background>
      <Title>Mining</Title>
      <ul>
        <li>block hash -> '000000bde84...'</li>
        <li>miners find a hash with the right number of zeros (proof of work)</li>
        <li>pow = hashFunc(nonce, previous block hash, transactions)</li>
        <li>nonce is an incrementing number</li>
      </ul>
    </Background>);
}
