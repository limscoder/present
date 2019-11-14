import React from 'react';
import Background from 'react-present/components/content/Background';
import Link from 'react-present/components/content/Link';
import Title from 'react-present/components/content/Title';

export default function () {
  return (
    <Background>
      <Title>What the hell is a blockchain?</Title>
      <div><Link href="https://twitter.com/limscoder">@limscoder</Link></div>
      <div><Link href="https://github.com/limscoder">github.com/limscoder</Link></div>
    </Background>);
}
